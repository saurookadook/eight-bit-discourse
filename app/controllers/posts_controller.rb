class PostsController < ApplicationController

    def index
      @posts = Post.order(created_at: :desc)
      render json: @posts
    end

    def show
      @post = Post.find
    end

    def new
    end

    def create
    end

    def edit
    end

    def update
    end

    def delete
    end

    private

    def post_params
      params.require(:post).permit(:title, :game, :discussion, :rating, :user_id)
    end

end
