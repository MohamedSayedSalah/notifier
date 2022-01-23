# frozen_string_literal: true

class TicketBlueprint < Blueprinter::Base

  # view :avatar do
  #   field :avatar_path do |user, options|
  #     'avatar' # using double the size needed for hi-res displays
  #   end
  # end

  view :ticket do
    fields  :id, :title ,  :description, :due_date, :progress, :created_at
    field :username do |ticket, options|
         ticket.user.username
    end
  end


end
