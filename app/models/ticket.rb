class Ticket < ApplicationRecord

  include Ticket::HasState

  belongs_to :user
  has_many :messages
  after_commit ->(obj) { obj.handle_notification(["updated_ticket"]) }, on: :update


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