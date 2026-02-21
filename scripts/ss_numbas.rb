#! /usr/bin/ruby/ 
require 'selenium-webdriver'
require 'pathname'
require 'base64'
require 'fileutils'

FILES = ARGV[0] || '*Exercises*-if.html'
# call script with quoted argument like 'Ch_3*-if.html' to limit scope

DIR = Pathname.new('/Users/whaynes/ptx/statics/output/web/')
BASE_URL = 'http://localhost:8888/statics/web'
OUTPUT_DIR = Pathname.new('/Users/whaynes/source/resources/screenshots')

RENDER_DELAY = (ENV['RENDER_DELAY'] || 2.5).to_f
SCALE        = (ENV['SCALE_FACTOR'] || 2).to_f

FileUtils.mkdir_p(OUTPUT_DIR)

options = Selenium::WebDriver::Chrome::Options.new
options.add_argument('--headless=new')       # run without visible browser
options.add_argument('--disable-gpu')        # stability in headless
options.add_argument('--hide-scrollbars')    # prevent scrollbars affecting layout
options.add_argument('--window-size=1920,1080')  # deterministic viewport size

driver = Selenium::WebDriver.for(:chrome, options: options)

# Override device metrics so Chrome renders at higher pixel density.
# This affects compositor output used by Page.captureScreenshot.
driver.execute_cdp(
  'Emulation.setDeviceMetricsOverride',
  width: 1920,
  height: 1080,
  deviceScaleFactor: SCALE,
  mobile: false
)

puts(Dir.glob(DIR.join(FILES)))

begin
  Dir.glob(DIR.join(FILES)).sort.each do |html|
    path = Pathname.new(html)

    # Construct HTTP URL corresponding to static build output.
    # We intentionally use HTTP instead of file:// to avoid
    # font, CORS, and JS security restrictions.
    url  = "#{BASE_URL}/#{path.basename}"

    # ------------------------------------------------------------------
    # 1. Load page in headless Chrome
    # ------------------------------------------------------------------
    driver.navigate.to(url)

    # Fixed delay allows JS frameworks (Numbas, GeoGebra, MathJax, etc.)
    # to perform initial DOM mutations and layout.
    sleep RENDER_DELAY

    # ------------------------------------------------------------------
    # 2. Wait for web fonts to finish loading
    # ------------------------------------------------------------------
    # document.fonts.ready resolves when all fonts currently in use
    # are loaded and ready for layout. Without this, fallback fonts
    # (often sans-serif) may be captured.
    driver.manage.timeouts.script_timeout = 30
    driver.execute_async_script <<~JS
      const done = arguments[arguments.length - 1];
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => done()).catch(() => done());
      } else {
        done();
      }
    JS

    # Force layout flush. Ensures final font metrics are applied
    # before bounding box measurement.
    driver.execute_script("document.body.offsetHeight")

    # Small compositor settle buffer (canvas/WebGL stability).
    sleep 0.2

    # ------------------------------------------------------------------
    # 3. Determine output filename from <head>
    # ------------------------------------------------------------------
    # The HTML defines the canonical screenshot name using:
    #   <link rel="screenshot" href="...">
    # We extract it dynamically so filenames remain author-controlled.
    screenshot_name = driver.execute_script <<~JS
      const link = document.querySelector('link[rel="screenshot"]');
      return link ? link.getAttribute('href') : null;
    JS

    unless screenshot_name
      puts "No <link rel=\"screenshot\"> found for #{path.basename}"
      next
    end

    output_path = OUTPUT_DIR.join(screenshot_name)

    # ------------------------------------------------------------------
    # 4. Enforce serif font inside shadow DOM
    # ------------------------------------------------------------------
    # CSS in the main document does not cross shadow DOM boundaries.
    # Numbas content lives inside <numbas-exam>'s shadow root.
    # We inject a style element directly into that shadow root
    # to ensure consistent font rendering in headless.
    driver.execute_script <<~JS
      const host = document.querySelector('numbas-exam');
      const root = host.shadowRoot;
      const style = document.createElement('style');
      style.textContent = `
        * { font-family: serif !important; }
      `;
      root.appendChild(style);
    JS

    # ------------------------------------------------------------------
    # 5. Measure target element (.statement) in CSS pixels
    # ------------------------------------------------------------------
    # We query inside the shadow root and obtain the bounding client rect.
    # Coordinates are relative to the viewport in CSS pixels.
    rect = driver.execute_script <<~JS
      const host = document.querySelector('numbas-exam');
      const root = host.shadowRoot;
      const el = root.querySelector('.statement');
      const r = el.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    JS

    # ------------------------------------------------------------------
    # 6. Capture high-DPI clipped screenshot using CDP
    # ------------------------------------------------------------------
    # Page.captureScreenshot operates at compositor level.
    # The clip rectangle is defined in CSS pixels.
    # The scale parameter multiplies pixel density.
    shot = driver.execute_cdp(
      'Page.captureScreenshot',
      format: 'png',
      clip: {
        x: rect['x'],
        y: rect['y'],
        width: rect['width'],
        height: rect['height'],
        scale: SCALE
      }
    )

    # CDP returns base64-encoded PNG data.
    # Decode and write directly to output path.
    File.binwrite(output_path, Base64.decode64(shot['data']))

    puts "Saved statement from #{path.basename} to #{output_path}"
  end
ensure
  driver.quit
end