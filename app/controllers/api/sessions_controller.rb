class Api::SessionsController < ApplicationController
    def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      render json: {};
      #render something useful
    else
      # deals with errors appropriately
      render json: {};
      #render something useful
    end
  end

  def destroy
    if(currentuser)
        sign_out
        render {};
    else
        render {404};
    end
  end
end
