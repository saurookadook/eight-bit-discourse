class Api::PostsController < ApplicationController
    # temp fix for auth_token issues
    skip_before_action :verify_authenticity_token, raise: false
    # skip_before_action :verify_authenticity_token, except: [:destroy], raise: false
    # skip_before_action :verify_authenticity_token, only: [:create], raise: false

    def index
      @posts = Post.order(created_at: :desc)
      render json: @posts, include: ['author']
    end

    def show
      @post = Post.find(params[:id])

      render json: @post, include: ['author', 'comments', 'comments.user']
    end

    def create
      # TODO: implement user validation
      # fake user authentication
      @user = User.find_by(username: params[:post][:authorName])
      if !@user
        @user = User.create(username: params[:post][:authorName], password: SecureRandom.hex(10))
      end

      @post = @user.posts.build(title: params[:post][:title], game: params[:post][:game], discussion: params[:post][:discussion], rating: params[:post][:rating], user_id: @user.id)
      # binding.pry
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

    def destroy
    end

    private

    def post_params
      params.require(:post).permit(:title, :game, :discussion, :rating, :user_id,
        user_attributes: [:id, :username, :email, :password]
        )
    end

end
