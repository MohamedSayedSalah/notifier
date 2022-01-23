class TicketMailer::Updated < TicketMailer

  private

  def prepare_email_subject(message)
    'A new Ticket has been updated!'
  end

  def template_variables_for(message, recipient)
    {
      intro: prepare_email_subject(message),
      username: user.username || 'there',
      # issue_date: DateVal[Date.today].to_s(format: :long),
      main_title: ticket.title,
      paragraph: ticket.description,
      link_text: 'Find out about the new update',
      # url: user.url,
      # notifications_edit_url: profile_edit_panel_url(user.profile, 'notification-settings'),
      email_recipient: recipient.email
    }
  end

end