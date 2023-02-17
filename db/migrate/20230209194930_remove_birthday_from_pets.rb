class RemoveBirthdayFromPets < ActiveRecord::Migration[7.0]
  def change
    remove_column :pets, :birthday, :datetime
  end
end
