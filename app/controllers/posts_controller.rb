class PostsController < ApplicationController

    def index
      @posts = Post.order(created_at: :desc)
      render json: @posts, include: ['author']
    end

    def show
      @post = Post.find(params[:id])

      render json: @post, include: ['author', 'comments', 'comments.user']
    end

    def create
      puts params
      puts post_params
      @post = Post.new(post_params)
      if @post.valid?
        @post.save
        render json: @post
      else
        render json: { message: "There was an issue submitting your post, please try again."}
      end
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
        user_attributes: [:id, :username, :email, :password]
        )
    end

end
