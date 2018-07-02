class CommentsController < ApplicationController

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
  end

  def edit
  end

  def update
  end

  def delete
  end

end
