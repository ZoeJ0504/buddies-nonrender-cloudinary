class User < ApplicationRecord
    has_secure_password
    has_one_attached :featured_image

    validates :username, uniqueness: true

    has_many :pets

end
