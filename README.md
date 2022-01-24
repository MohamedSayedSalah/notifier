# README

# pre requisites
* application -> react(frontend), rails(backend)
* Ruby version -> ruby 3.1.0
* System dependencies ->  ruby, node, postresql
* Configuration  -> create database notifier_development, notifier_test
* How to run the test suite -> rspec spec/scenarios/notifications_spec.rb
* Services -> user this command for delayed_job "rake jobs.work" 


#Description

* user can add a new tickets with title, description, due_date, assignee 
* use can edit any ticket with any attributes 
* after adding a new ticket a trigger will create a new message 
* a message is a polymorphic type notification its belong to a user and any polymorphic object 'ticket'
* each message has different message_type and each type has a specific type of notification attached to it
* each message will call handle_mail asynchronous  after specific calculated time based on the ticket due date and user settings 
* a call back from delayed_job is used to set the delayed_job_id in the message for later use 
* incase of any exception would happen to the message "mailing service is down" it will retry
* a user can change his due_date_reminder_time at any given point and the job run_at time will be recalculated
* if the user edit any ticket a new notification of type 'ticket_updated' will be generated with different mail template
* time zone conversion is done though front end backend will only handle utc 
* there is a pending notification tab for all of the delayed job still in the queue
* user can see all of his notification in a notification tab in his profile 

