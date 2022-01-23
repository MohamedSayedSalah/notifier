class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'

  def setup_email(to, opts={})
    mail(to: to, subject: opts[:subject])
  end

end
