class RenameSendDueDateReminder < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :send_due_date_reminder, :boolean, default: true
    rename_column :users, :send_due_date_reminder, :due_date_reminder
  end
end
