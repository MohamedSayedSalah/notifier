class AddDelayedJobIdToMessages < ActiveRecord::Migration[6.1]
  def change
    add_column :messages, :delayed_job_id, :integer
  end
end
