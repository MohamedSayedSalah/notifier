class Ticket < ApplicationRecord
  belongs_to :user
  has_many :messages

  after_save :created_ticket
  after_commit ->(obj) { obj.updated_ticket }, on: :update


  def created_ticket
    handle_notification ["new_ticket"]
  end

  def updated_ticket
    handle_notification ["updated_ticket"]
  end

  def handle_notification messages_type
    messages_type.each do |message_type|
      begin
        Message.create!(
          :messageable => self,
          :message_type => message_type,
          user: user,
          :processed => nil
        )
      rescue ActiveRecord::RecordNotUnique => e
        Rails.logger.info("skip message creation: equivalent message already exists", e.inspect)
      end
    end
  end

end