require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module TicTacToe
  class Application < Rails::Application

    config.assets.paths << Rails.root.join('vendor', 'assets', 'components')

    # Bower asset paths
    root.join('vendor', 'assets', 'components').to_s.tap do |bower_path|
      config.sass.load_paths << bower_path
      config.assets.paths << bower_path
    end

    # Precompile Bootstrap fonts
    config.assets.precompile << %r(font-awesome/fonts/[\w-]+\.(?:eot|svg|ttf|woff2?)$)
  end
end
