# frozen_string_literal: true

class UserBlueprint < Blueprinter::Base



  view :profile do
    fields :username, :id, :email, :due_date_reminder, :due_date_reminder_interval, :due_date_reminder_time, :time_zone

    field :notifications_count  do |user, options|
      user.notifications_count
    end
    association :messages, blueprint: MessageBlueprint
  end


end
