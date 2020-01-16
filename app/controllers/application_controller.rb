class ApplicationController < ActionController::Base

    helper_method :signed_in?, :current_user
    def current_user
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def signed_in?
        !!current_user
    end

    def sign_in(user)
        @current_user = user
        session[:session_token] = user.reset_token!
    end

    def sign_out
        current_user.try(:reset_token!)
        session[:session_token] = nil
    end

    def require_signed_in!
        redirect_to new_session_url unless signed_in?
    end

    def is_user?(user_id)
        return false unless user_id == current_user.id
        return true
    end

    def is_user_or_friend?(user_id)
        if current_user.id == user_id
            return true;
        end
        current_user.friends.pluck('friend_id').each do |friendId|
            if friendId == user_id
                return true
            end
        end
        return false;
    end
end
