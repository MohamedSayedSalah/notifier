class AddOwnerToTicket < ActiveRecord::Migration[6.1]
  def change
    change_table(:tickets) do |t|
      t.references :owner, foreign_key: { to_table: :users }
    end
  end
end
