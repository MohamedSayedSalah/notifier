require 'rails_helper'
describe User, "basic methods and attributes" do

  # let(:owner) { create :user, email: "owner@mail.com" }
  let(:user) { create :user}
  before(:each) do
    Delayed::Worker.delay_jobs = true
  end

  describe "notifications" do

    it "should create message object adter creating ticket" do
      # user = User.create(username: '1', email: 'user1@email.com' , time_zone: 'Africa/Cairo', password: '*******')
      # puts user.valid?
      ticket = create(:ticket, user: user, owner: user)
      expect(Message.last.messageable.id).to eq ticket.id
    end

    it "should create message of type new ticket after creating ticket" do
      create(:ticket, user: user)
      expect(Message.last.message_type).to eq "new_ticket"
    end

    it "should create a delayed job after message creation" do
      user.update due_date_reminder_time: 5.minutes.from_now, due_date_reminder: true, due_date_reminder_interval: 2
      create(:ticket, due_date: Date.today,  user: user)
      expect(Message.last.delayed_job_id).not_to be_nil
    end

    it "should calculate the run_at based on user settings" do
      time = 5.minutes.from_now.change(:usec => 0)
      user.update due_date_reminder_time: time , due_date_reminder: true, due_date_reminder_interval: 0
      create(:ticket, due_date: Date.today,  user: user)
      expect(Delayed::Job.last.run_at).to eq 5.minutes.from_now.change(:usec => 0)
    end

    it "should receive notification 5 days earlier" do
      time = 5.minutes.from_now.change(:usec => 0)
      user.update due_date_reminder_time: time , due_date_reminder: true, due_date_reminder_interval: 5
      create(:ticket, due_date: 6.days.from_now,  user: user)
      expect(Delayed::Job.last.run_at).to eq 1.days.from_now.change(:usec => 0) + 5 * 60
    end

    it "should not get the mail if i dont want to " do
      user.update due_date_reminder_time: 5.minutes.from_now, due_date_reminder: false, due_date_reminder_interval: 2
      create(:ticket, due_date: Date.today,  user: user)
      expect(ActionMailer::Base.deliveries.size).to be_zero
    end

    it "should receive the mail if i wanted to " do
      user.update due_date_reminder_time: 5.minutes.from_now, due_date_reminder: true, due_date_reminder_interval: 2
      create(:ticket, due_date: Date.today,  user: user)
      Delayed::Job.last.invoke_job
      expect(ActionMailer::Base.deliveries.size).to eq 1
    end

    it "should update running time for delayed_job if user changed the due date reminder time after job creation" do
      user.update due_date_reminder_time: 5.minutes.from_now, due_date_reminder: true, due_date_reminder_interval: 2
      create(:ticket, due_date: Date.today,  user: user)
      run_at = Delayed::Job.last.run_at
      user.update due_date_reminder_time: 10.minutes.from_now
      expect(Delayed::Job.last.run_at).not_to eq run_at
    end

  end
end