class PetSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :animal_type, :breed, :birthday, :user_id, :pet_image

belongs_to :user

  def pet_image
    if object.pet_image.attached?
      {
        url: rails_blob_url(object.pet_image)
      }
    end
  end



end
