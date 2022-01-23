# frozen_string_literal: true

class MessageBlueprint < Blueprinter::Base

    field :type do |message, options|
        message.messageable_type
    end

    field :trigger do |message, options|
      message.message_type
    end

    field :description do |message, options|
      message.messageable&.description
    end

    field :trigger_time do |message, options|
      message.created_at
    end

    fields :processed
end
