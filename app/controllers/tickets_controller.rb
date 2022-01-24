class TicketsController < ApplicationController

  def create
    ticket  = Ticket.new(ticket_params)
    if ticket.valid?
      ticket.save
      render json: { ticket: TicketBlueprint.render_as_hash(ticket.reload, view: :ticket) }
    else
      render json: { errors: ticket.errors }
    end
  end


  def pending
    @jobs  = Delayed::Job.find_each.map do |d|
      { run_at: d.run_at, failed_at: d.failed_at }.as_json
    end
  end

  private
  def ticket_params
    params.require(:ticket).permit(:title, :description, :user_id, :due_date)
  end

end