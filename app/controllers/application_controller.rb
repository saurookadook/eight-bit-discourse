class ApplicationController < ActionController::API # might need `::API` instead
  include Knock::Authenticable

  # skip_before_action :verify_authenticity_token, raise: false
  # protect_from_forgery with: :exception, raise: false
  protect_from_forgery with: :exception

  after_action :set_csrf

  private 

  def logged_in?
    !!current_user
  end

  protected

  def set_csrf
    cookies['X-CSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end
end
