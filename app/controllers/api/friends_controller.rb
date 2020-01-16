class Api::FriendsController < ApplicationController

    def create
        @fob = Friend.new(params.require(:friend).permit(:user_id, :friend_id))
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
end
