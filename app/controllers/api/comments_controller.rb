class Api::CommentsController < ApplicationController
    # temp fix for auth_token issues
    skip_before_action :verify_authenticity_token, raise: false

    # might only need create, update, destroy...?

    def index
      @post = Post.find(params[:post_id])
      @comments = @post.comments

      render json: @comments, include: ['user']
    end

    def show
      @post = Post.find(params[:post_id])
      @comment = @post.comments.find(params[:comment_id])

      render json: @comment, include: ['user']
    end

    def create
      # TODO: implement user validation
      # fake user authentication
      @user = User.find_by(username: params[:comment][:user])
      # binding.pry
      if !@user
        @user = User.create(username: params[:comment][:user], password: SecureRandom.hex(10))
      end

      @post = Post.find(params[:post_id])

      # @comment = @post.comments.build(comment_params)
      @comment = @post.comments.build(user_id: @user.id, post_id: params[:comment][:postId], content: params[:comment][:content])
      # binding.pry
      if @comment.valid?
        @post.save
        render json: @post, include: ['author', 'comments', 'comments.user']
      else
        render json: { message: "There was an issue submitting your comment, please try again."}
      end
    end

    def edit
    end

    def update
    end

    def destroy
    end

    private

    def comment_params
      # params.require(:comment).permit(:id, :content,
      #   user_attributes: [:id, :username]
      # )
      params.require(:comment).permit(:user, :content, :postId)
    end

end