module Ticket::HasState

  extend ActiveSupport::Concern

  included do

    include AASM

    aasm column: "state" do
      state :opened, initial: true, after_enter: -> { handle_notification(["new_ticket"])}
      state :in_progress, :done, :canceled

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