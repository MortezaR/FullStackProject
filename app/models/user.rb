class User < ApplicationRecord

    validates :username, :session_token, :email, presence: true, uniqueness: true
    validates :session_token, presence:true
    validates :password, length: { minimum: 2, allow_nil: true }

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.valid_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end


end
