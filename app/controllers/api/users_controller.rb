class Api::UsersController < ApplicationController
    def create
        @user = User.new(params.require(:user).permit(:password, :username, :email,
         :first_name, :last_name, :gender))
        p @user
        p params
        if @user.save
            sign_in(@user)
            render :show
        else
            render json: {user: nil, errors: @user.errors.full_messages}, status: 422
        end
    end
end
