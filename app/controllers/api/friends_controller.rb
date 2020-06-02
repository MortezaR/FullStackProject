class Api::FriendsController < ApplicationController

    def show
        @fob = Friend.find(friend_params)
        if @fob
            render :show
        else
            render json: {errors: @fob.errors.full_messages}, status: 422
        end
    end

    def create
        @fob = Friend.new(friend_params)
        if @fob.save
            render :show
        else
            render json: {errors: @fob.errors.full_messages}, status: 422
        end
    end

    def destroy
        @fob = Friend.find(params[:id])
        if destroy(@fob)
            render json: {}
        else
            render json: {errors: @fob.errors.full_messages}, status: 422
        end
    end
    private
    def friend_params
        params.require(:friend).permit(:user_id, :friend_id)
    end
end
