class Api::FriendsController < ApplicationController

    def index
        
        friendsAndFriendReq = User.find(params[:user_id]).friends.load_target
        @users = []
        # debugger
        friendsAndFriendReq.each do |friend|
            if friend.friends.include?(User.find(params[:user_id]))
                @users.push(friend)
            end
        end
        # debugger
        render 'api/users/index'
    end
    def show
        @friend = Friend.find_by(user_id: params[:id], friend_id:params[:user_id])
        if @friend
            render :show
        else
            render json: {friend: false}
        end
    end

    def create
        @friend = Friend.new(friend_params)
        if @friend.save!
            render :show
        else
            render json: {errors: @friend.errors.full_messages}, status: 422
        end
    end

    def destroy
        @friend = Friend.find_by(user_id: params[:user_id], friend_id:params[:id])
        if @friend.destroy
            render json: {}
        else
            render json: {errors: @friend.errors.full_messages}, status: 422
        end
    end
    private
    def friend_params
        params.require(:friend).permit(:user_id, :friend_id)
    end
end
