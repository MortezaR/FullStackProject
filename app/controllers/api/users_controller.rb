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
end
