require_relative 'boot'

require 'rails/all'
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
# require "sprockets/railtie"
require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module EightBitDiscourse
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true
  end
end



#### PREVIOUS ####
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
# Bundler.require(*Rails.groups)

# module EightBitDiscourse
#   class Application < Rails::Application
#     config.api_only = true
#     # Initialize configuration defaults for originally generated Rails version.
#     config.load_defaults 5.2

#     # Settings in config/environments/* take precedence over those specified here.
#     # Application configuration can go into files in config/initializers
#     # -- all .rb files in that directory are automatically loaded after loading
#     # the framework and any gems in your application.
#     config.middleware.insert_before 0, Rack::Cors do
#       allow do
#         origins '*'
#         resource '*', 
#           headers: :any, 
#           expose: ['access-token', 'expiry', 'token-type', 'uid', 'client'],
#           methods: [:get, :post, :put, :patch, :delete, :options, :head]
#       end
#     end

#     config.action_dispatch.default_headers = {
#       'Access-Control-Allow-Origin' => 'http://localhost:3000',
#       'Access-Control-Request-Method' => %w{GET POST PUT PATCH DELETE OPTIONS HEAD}.join(",")
#     }
    
#   end
# end
