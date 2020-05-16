class Api::PostsController < ApplicationController
    def index
        inId = params[:user_id]
        @posts = User.find_by(id: inId).posts_made
        @posts.push(User.find_by(id: inId).posts_received)

        # if !(is_user_or_friend?(inId.to_i))
        #     render json: {errors: ['you do not have access to this user'] }
        # els
        if (@posts)
            render :index
        else
            render json: {errors: ['no posts for user']}
        end
    end
    def create
        @post = Post.new(post_params)
        if !(is_user?(params[:user_id].to_i))
            render json: {errors: ['you do not have access to this user'] }, status: 422
        elsif (@post.save)
            render :show
        else
            render json: {errors: @post.errors.full_messages}, status: 422
        end
    end


    def show
        @post = Post.find_by(id: params[:id])
        if !(is_user_or_friend?(params[:user_id].to_i))
            render json: {errors: ['you do not have access to this user'] }, status: 422
        elsif (@post)
            render :show
        else
            render json: {errors: ['post not found']}, status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        if !(is_user(params[:user_id].to_i))
            render json: {errors: ['you do not have access to this user'] }, status: 422
        elsif update(@post)
            render :show
        else
            render json: {errors: @post.errors.full_messages}, status: 422
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if !(is_user?(params[:user_id].to_i))
            render json: {errors: ['you do not have access to this user'] }, status: 422
        elsif @post.destroy
            render json: {}
        else
            render json: {errors: @post.errors.full_messages}, status: 422
        end
    end

  private
  def post_params
    params.require(:post).permit(:sender_id, :receiver_id, :body, :reply_to_id)
  end

end
