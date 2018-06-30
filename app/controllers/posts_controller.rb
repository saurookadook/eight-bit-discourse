class PostsController < ApplicationController

    def index
      @posts = Post.order(created_at: :desc)
      render json: @posts, include: ['author', 'comments', 'comments.user']
    end

    def show

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
      params.require(:post).permit(:title, :game, :discussion, :rating, :user_id,
        user_attributes: [:id, :username, :email, :password],
        comments_attributes: [:user_id, :post_id, :content]
        )
    end

end
