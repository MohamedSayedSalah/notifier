class Message < ApplicationRecord
  include ApplicationHelper
  require 'delayed_job'

  belongs_to :messageable, :polymorphic => true
  belongs_to :user

  scope :processed, -> { where(processed: true) }
  scope :not_processed, -> { where(processed: false) }
  after_create :process, unless: -> { self.processed }

  MessageTypes = [{ :mail => [:new_ticket,
                              :updated_ticket,
                              :ticket_in_progress,
                              :ticket_done
  ] }]

  def handle_message
    if send_mail?
      mark_as_processed!
      begin
        case message_type
        when 'new_ticket' then
          TicketMailer::Created.announce(self).deliver_now
        when 'updated_ticket' then
          TicketMailer::Updated.announce(self).deliver_now
        when 'ticket_in_progress' then
          TicketMailer::Updated.announce(self).deliver_now
        when 'ticket_done' then
          TicketMailer::Updated.announce(self).deliver_now
        end
      rescue StandardError => e
        save!(processed: false)
        Rails.logger.info("cant deliver message  #{e.inspect}")
      end
    end
  end

  def send_mail?
    user.want_mail?
  end

  def mark_as_processed!
    self.update_attribute(:processed, true)
  end

  def mark_as_not_processed!
    self.update_attribute(:processed, false)
  end

  def process
    mark_as_not_processed!
    self.delay(run_at: get_datetime(messageable.due_date, user.due_date_reminder_interval, user.due_date_reminder_time)).handle_message
  end

end