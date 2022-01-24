class DefaultValueForMessageProcessed < ActiveRecord::Migration[6.1]
  def up
    change_column :messages, :processed, :boolean, default: false
  end

  def down
    change_column :messages, :processed, :boolean, default: nil
  end
end
