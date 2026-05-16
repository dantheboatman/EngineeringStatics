#!/usr/bin/env ruby

# this script loops through all numbas items in source/resources/_Numbas directory 
# and downloads the latest versions from the Numbas Script Editor.

require 'fileutils'
require 'open-uri'
require 'zip'

# Path to _Numbas relative to this script's directory (scripts/)
NUMBAS_DIR = File.expand_path('../source/resources/_Numbas', __dir__)

class NumbasUpdater
  def initialize(base_directory)
    @base_directory = base_directory
  end

  def run
    puts "Scanning: #{@base_directory}"

    entries = Dir.children(@base_directory).select do |entry|
      item_path = File.join(@base_directory, entry)
      File.directory?(item_path) && File.exist?(File.join(item_path, 'downloaded-from.txt'))
    end

    total = entries.length
    puts "Found #{total} item(s) to update."

    entries.each_with_index do |entry, idx|
      item_path = File.join(@base_directory, entry)
      downloaded_from_file = File.join(item_path, 'downloaded-from.txt')
      puts "\nUpdating: #{entry} (item #{idx + 1} of #{total})"
      process_numbas_item(entry, item_path, downloaded_from_file)
    end

    puts "\nDone."
  end

  private

  def process_numbas_item(name, item_path, downloaded_from_file)
    url = File.read(downloaded_from_file).strip
    zip_path = download_zip(url, name)
    return unless zip_path

    FileUtils.rm_rf(item_path)
    FileUtils.mkdir_p(item_path)

    unzip_file(zip_path, item_path)

    FileUtils.rm_f(zip_path)
    puts "✓ #{name}"
  rescue => e
    puts "✗ Error processing #{name}: #{e.message}"
  end

  def download_zip(url, name)
    zip_path = File.join(@base_directory, "#{name}_temp_#{Time.now.to_i}.zip")
    URI.open(url) do |remote_file|
      File.open(zip_path, 'wb') { |f| f.write(remote_file.read) }
    end
    zip_path
  rescue => e
    puts "✗ Failed to download: #{e.message}"
    nil
  end

  # Simplified extractor: stream each entry to the destination path
  def unzip_file(zip_path, destination)
    Zip::File.open(zip_path) do |zip_file|
      zip_file.each do |entry|
        next if entry.name.end_with?('/') # skip directories

        dest_path = File.join(destination, entry.name)
        FileUtils.mkdir_p(File.dirname(dest_path))

        entry.get_input_stream do |is|
          File.open(dest_path, 'wb') { |f| IO.copy_stream(is, f) }
        end
      end
    end
  end
end

NumbasUpdater.new(NUMBAS_DIR).run
