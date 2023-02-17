class CreatePets < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :animal_type
      t.string :breed
      t.integer :user_id
      t.datetime :birthday

      t.timestamps
    end
  end
end
