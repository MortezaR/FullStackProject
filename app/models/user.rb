class User < ApplicationRecord

    validates :username, :session_token, :email, presence: true, uniqueness: true
    validates :session_token, :first_name, :last_name, :gender, presence:true
    validates :password, length: { minimum: 2, allow_nil: true }

    attr_reader :password

    has_many :posts_made,
    foreign_key: :sender_id,
    class_name: :Post

    has_many :posts_received,
    foreign_key: :receiver_id,
    class_name: :Post

    has_many :friend_objects,
    foreign_key: :user_id,
    class_name: :Friend

    has_many :friends,
    through: :friend_objects,
    source: :friend

    after_initialize :ensure_session_token
    # after_create :make_post

    # def make_post
    #     first_post = Post.new()
    #     first_post.sender_id = self.id
    #     first_post.receiver_id = User.first.id
    #     first_post.body = 'this is my first post'
    #     if (User.find(first_post.receiver_id))
    #         first_post.save
    #     end
    # end
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
