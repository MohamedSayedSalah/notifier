class TicketMailer::Updated < TicketMailer

  private

  def prepare_email_subject(message)
    'A new Ticket has been updated!'
  end

  def prepare_email_data(message)
    @username = @user.username
    @ticket_title = @ticket.title
  end
end