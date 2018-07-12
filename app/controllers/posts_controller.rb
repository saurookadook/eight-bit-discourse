class PostsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create]

    def index
      @posts = Post.order(created_at: :desc)
      render json: @posts, include: ['author']
    end

    def show
      @post = Post.find(params[:id])

      render json: @post, include: ['author', 'comments', 'comments.user']
    end

    def create
      # fake user authentication
      @user = User.find_by(username: params[:authorName])
      if !@user
        @user = User.create(username: params[:authorName], password: SecureRandom.hex(10))
      end

      binding.pry
      @post = @user.posts.build(title: params[:post][], game: params[:post][], discussion: params[:post][], rating: params[:post][], user_id: @user.id)

      if @post.valid?
        @post.save
        @posts = Post.order(created_at: :desc)
        # find way to do this with just rendering @post
        render json: @posts, include: ['author']
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
