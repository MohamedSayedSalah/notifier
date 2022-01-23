class TicketMailer::Created < TicketMailer

  private

  def prepare_email_subject(message)
    'A new Ticket has been created!'
  end

  def prepare_email_data
    @username = @user.username
    @ticket_title = @ticket.title
  end

end