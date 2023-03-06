class User < ApplicationRecord
    has_secure_password
    has_one_attached :avatar

    validates :username, uniqueness: true

    has_many :pets

end
