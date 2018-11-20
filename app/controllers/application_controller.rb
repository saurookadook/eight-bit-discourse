class ApplicationController < ActionController::API # might need `::API` instead
  include Knock::Authenticable

  # protect_from_forgery witH: :exception, raise: false

  # private 

  # def logged_in?
  #   !!current_user
  # end
end
