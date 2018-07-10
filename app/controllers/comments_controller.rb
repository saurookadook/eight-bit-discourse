class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

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

  def new
  end

  def create
    # fake user authentication
    @user = User.find_by(username: params[:user])
    if !@user
      @user = User.create(username: params[:user], password: SecureRandom.hex(10))
    end

    @post = Post.find(params[:post_id])

    # @comment = @post.comments.build(comment_params)
    @comment = @post.comments.build(user_id: @user.id, post_id: params[:postId], content: params[:content])
    if @comment.valid?
      @comment.save
      render json: @comment
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
