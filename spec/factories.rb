require 'factory_girl_rails'
FactoryGirl.define do

  factory :user do
    username { 'user1' }
    email { 'user1@email.com' }
    time_zone { 'Africa/Cairo' }
    password {"*********"}
  end

  factory :ticket do
    title { 'title1' }
    description { 'description1' }
  end

end