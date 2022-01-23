class Message < ApplicationRecord

  belongs_to :messageable, :polymorphic => true
  belongs_to :user

  scope :processed, -> { where(processed: true) }
  after_commit ->(obj) { obj.handle_message }, on: :create

  MessageTypes = [{ :mail => [:new_ticket, :updated_ticket] }]

  def handle_message
    update processed: true
    begin
      case message_type
      when 'new_ticket' then
        TicketMailer::Created.announce(self).deliver_now
      when 'updated_ticket' then
        TicketMailer::Updated.announce(self).deliver_now
      end
    rescue StandardError => e
      save!(processed: false)
      Rails.logger.info("cant deliver message  #{e.inspect}")
    end

  end

end