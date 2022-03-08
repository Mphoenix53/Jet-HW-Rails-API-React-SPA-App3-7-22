class AddTopSpeedToJets < ActiveRecord::Migration[7.0]
  def change
    add_column :jets, :topspeed, :integer
  end
end
