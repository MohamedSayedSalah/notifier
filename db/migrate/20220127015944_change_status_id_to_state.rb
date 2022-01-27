class ChangeStatusIdToState < ActiveRecord::Migration[6.1]
  def change
    remove_column :tickets, :status_id
    add_column :tickets, :state, :string
  end
end
