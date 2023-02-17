class EventSerializer < ActiveModel::Serializer
  attributes :id, :start, :end, :details, :owner_id, :petsitter_id
end
