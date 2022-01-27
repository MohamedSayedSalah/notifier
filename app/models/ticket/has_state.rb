module Ticket::HasState

  extend ActiveSupport::Concern

  included do

    include AASM

    aasm column: "state" do
      state :opened, initial: true, after_enter: -> { handle_notification(["new_ticket"], receiver: self.user)} #assignee
      state :in_progress, after_enter: -> { handle_notification(["ticket_in_progress"], receiver: self.owner)}
      state  :done, after_enter: -> { handle_notification(["ticket_done"], receiver: self.owner)}
      state  :canceled

      event :next_state do
        transitions from: :opened, to: :in_progress
        transitions from: :in_progress, to: :done
      end

      event :cancel do
        transitions  to: :canceled
      end

    end
  end

end