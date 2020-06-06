class Api::UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
        if @user
            render :show
        else
            render json: {user: nil, errors: ['user not found']}, status: 402
        end
    end
    def create
        @user = User.new(params.require(:user).permit(:password, :username, :email,
         :first_name, :last_name, :gender))
        if @user.save
            sign_in(@user)
            render :show
        else
            render json: {user: nil, errors: @user.errors.full_messages}, status: 422
        end
    end
    def update
        @user = User.find_by(id: params[:id])
        if !(is_user?(params[:id].to_i))
            render json: {errors: ['you do not have access to this user'] }, status: 400
        elsif @user.update(user_params)
            render :show
        else
            render json: {errors: @post.errors.full_messages}, status: 422
        end
    end

    def search
        # debugger
        @users = User.where("lower(first_name) LIKE '#{params[:user]}%' OR
                             lower(last_name) LIKE '#{params[:user]}%'")
                             .limit(8)
        render :index
    end
    private
    def user_params
            params.require(:user).permit(:username, :email, :current_city,
            :work_place,:relationship_status, :first_name, :last_name, :gender)
        end
end
