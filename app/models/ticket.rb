class Ticket < ApplicationRecord

  include Ticket::HasState

  belongs_to :user, :class_name => "User"
  belongs_to :owner, :class_name => "User"

  has_many :messages
  after_commit ->(obj) {  obj.handle_notification(["updated_ticket"], receiver: self.user) },
               on: :update, unless: -> { saved_change_to_attribute?(:state)}


  def handle_notification(messages_type, receiver: )
    messages_type.each do |message_type|
      begin
        Message.create!(
          :messageable => self,
          :message_type => message_type,
          :user => receiver,
          :processed => nil
        )
      rescue ActiveRecord::RecordNotUnique => e
        Rails.logger.info("skip message creation: equivalent message already exists", e.inspect)
      end
    end
  end
end