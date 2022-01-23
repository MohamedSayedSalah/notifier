class TicketsController < ApplicationController

  def create
    ticket  = Ticket.new(ticket_params)
    if ticket.valid?
      ticket.save
    else
      render json: { errors: ticket.errors }
    end
  end


  def pending
    @jobs  = Delayed::Job.find_each.map do |d|
      d.run_at
    end
  end

  private
  def ticket_params
    params.require(:ticket).permit(:title, :description, :user_id, :due_date)
  end

end