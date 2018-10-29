class Api::UsersController < ApplicationController

    def index
    end

    def show
    end

    def new
    end

    def create
      # binding.pry
    end

    def edit
    end

    def update
    end

    def delete
    end

    def find
      @user = User.find_by(email: params[:user][:email])
      if @user
        render json: @user
      else
        @errors = @user.errors.full_messages
        render json: @errors
      end
    end

end
