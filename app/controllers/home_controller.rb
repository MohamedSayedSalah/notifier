class HomeController < ApplicationController
  before_action :authenticate_user!
  def index
    @users = User.find_each.map do |u|
      UserBlueprint.render_as_hash(u, view: :profile)
    end
    @tickets = Ticket.find_each.map do |t|
      TicketBlueprint.render_as_hash(t, view: :ticket)
    end
  end
end