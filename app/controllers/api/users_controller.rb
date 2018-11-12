module Api
  class UsersController < ApplicationController

    before_action :set_user, only: [:show, :update, :delete]

      def index
        @users = User.all
        render json: @users
      end

      def show
        render json: @user
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

      private

      def set_user
        @user = User.find_by(id: params[:id])
      end

      def user_params
        params.require(:user).permit(:username: :email, :password)
        # TODO: add nested params for posts/comments?
      end

  end
end