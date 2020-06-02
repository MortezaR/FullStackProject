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
        return true if is_user?(user_id) || is_friend?(user_id)
        return false
    end
    def is_friend?(user_id)
        user = User.find(user_id)
        if current_user.friends.include?(user) && user.friends.include?(current_user)
            return true
        end
        return false
    end
end
