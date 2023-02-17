class AddNeedToEvent < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :need, :string
  end
end
