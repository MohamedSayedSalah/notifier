class HomeController < ApplicationController
  before_action :authenticate_user!
  def index
    @users = User.find_each.map do |u|
      UserBlueprint.render_as_hash(u, view: :profile)
    end
  end
end