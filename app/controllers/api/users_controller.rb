class Api::UsersController < ApplicationController
    # temp fix for auth_token issues
    skip_before_action :verify_authenticity_token, raise: false
    before_action :set_user, only: [:show, :edit, :update, :delete]

    def index
      @users = User.all
      render json: @users
    end

    def show
      render json: @user
    end

    def create
      @user = User.new(user_params)
      if @user.valid?
        @user.save
        render json: @user
      else
        render json: @user.errors, status: 400
      end
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

    private

    def set_user
      @user = User.find_by(id: params[:id])
    end

    def user_params
      params.require(:user).permit(:id, :username, :email, :password, :errors)
    end

end