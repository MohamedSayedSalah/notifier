# frozen_string_literal: true

class UserBlueprint < Blueprinter::Base

  view :avatar do
    field :avatar_path do |user, options|
      'avatar' # using double the size needed for hi-res displays
    end
  end

  view :profile do
    fields  :username, :id, :email
  end


end
