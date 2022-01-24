class User < ApplicationRecord
  include ApplicationHelper
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :tickets
  has_many :messages
  after_update :update_delayed_job, if: -> { self.due_date_reminder &&
    (saved_change_to_attribute?(:due_date_reminder_time) ||
      saved_change_to_attribute?(:due_date_reminder_interval)) }

  def notifications_count
    messages.processed.count
  end

  def want_mail?
    due_date_reminder
  end

  def update_delayed_job
    begin
      messages.not_processed.each do |message|
        Delayed::Job.find(message.delayed_job_id).update run_at: get_datetime(message.messageable.due_date, due_date_reminder_interval, due_date_reminder_time)
      end
    end
  rescue => e
    raise e
  end

end
