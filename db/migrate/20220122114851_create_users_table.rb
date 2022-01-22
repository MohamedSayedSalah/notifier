class CreateUsersTable < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, limit: 255
      t.string :username, limit: 255
      t.boolean :send_due_date_reminder
      t.integer :due_date_reminder_interval
      t.timestamp :due_date_reminder_time
      t.string :time_zone, limit: 60
      t.timestamps
    end
  end
end
