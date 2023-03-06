class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :username, :password_digest, :email, :first_name, :last_name, :city, :state, :attribution, :avatar
 
  has_many :pets



end
