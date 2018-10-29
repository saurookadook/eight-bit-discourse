class ApplicationController < ActionController::Base # might need `::API` instead
  include Knock::Authenticable

  def home
  end

  # private 

  # def logged_in?
  #   !!current_user
  # end
end
