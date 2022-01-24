class TicketMailer < ApplicationMailer

  attr_reader :ticket, :user, :username, :title

  def announce message, recipient: message.user
    set_ticket_from(message)
    set_user_from(message)
    setup_email recipient.email, email_options_for(message)
  end

  private

  def set_ticket_from(message)
    @ticket = message.messageable
  end

  def set_user_from(message)
    @user = message.user
  end

  def email_options_for(message)
    {
      subject: prepare_email_subject(message)
    }
  end

  def prepare_email_subject(message)
    raise 'Must be implemented by subclass'
  end

  ## evey email template has it is own template attributes
  def prepare_email_data(message)
    raise 'Must be implemented by subclass'
  end

end
