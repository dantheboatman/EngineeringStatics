#!/usr/bin/env ruby

require 'fileutils'
require 'open-uri'
require 'zip'

class NumbasUpdater
  def initialize(base_directory)
    @base_directory = File.expand_path(base_directory)
  end

  def run
    puts "Scanning directory: #{@base_directory}"
    
    Dir.entries(@base_directory).each do |entry|
      next if entry == '.' || entry == '..'
      
      item_path = File.join(@base_directory, entry)
      next unless File.directory?(item_path)
      
      downloaded_from_file = File.join(item_path, 'downloaded-from.txt')
      
      if File.exist?(downloaded_from_file)
        process_numbas_item(entry, item_path, downloaded_from_file)
      else
        puts "Skipping '#{entry}' - no downloaded-from.txt found"
      end
    end
    
    puts "\nUpdate complete!"
  end

  private

  def process_numbas_item(name, item_path, downloaded_from_file)
    puts "\n" + "="*60
    puts "Processing: #{name}"
    
    # Read the URL from downloaded-from.txt
    url = File.read(downloaded_from_file).strip
    puts "URL: #{url}"
    
    # Download the zip file
    zip_path = download_zip(url, name)
    return unless zip_path
    
    # Remove old content
    FileUtils.rm_rf(item_path)
    FileUtils.mkdir_p(item_path)
    
    # Unzip the new content
    unzip_file(zip_path, item_path)
    
    # Clean up zip file
    FileUtils.rm(zip_path)
    
    puts "✓ Successfully updated: #{name}"
    
  rescue => e
    puts "✗ Error processing #{name}: #{e.message}"
    puts e.backtrace.first(3)
  end

  def download_zip(url, name)
    zip_filename = "#{name}_temp_#{Time.now.to_i}.zip"
    zip_path = File.join(@base_directory, zip_filename)
    
    puts "Downloading..."
    
    URI.open(url) do |remote_file|
      File.open(zip_path, 'wb') do |local_file|
        local_file.write(remote_file.read)
      end
    end
    
    puts "Downloaded to: #{zip_path}"
    zip_path
    
  rescue => e
    puts "✗ Failed to download: #{e.message}"
    nil
  end

  def unzip_file(zip_path, destination)
    puts "Extracting..."
    
    Zip::File.open(zip_path) do |zip_file|
      zip_file.each do |entry|
        dest_path = File.join(destination, entry.name)
        FileUtils.mkdir_p(File.dirname(dest_path))
        
        # Skip if it's a directory
        next if entry.name.end_with?('/')
        
        entry.extract(dest_path) { true } # Overwrite if exists
      end
    end
    
    puts "Extracted to: #{destination}"
  end
end

# Main execution
if __FILE__ == $0
  if ARGV.empty?
    puts "Usage: ruby update_numbas_items.rb <directory_path>"
    puts "\nExample: ruby update_numbas_items.rb ./numbas_exams"
    exit 1
  end

  directory = ARGV[0]

  unless File.directory?(directory)
    puts "Error: '#{directory}' is not a valid directory"
    exit 1
  end

  updater = NumbasUpdater.new(directory)
  updater.run
end
