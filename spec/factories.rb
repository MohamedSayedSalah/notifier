FactoryBot.define do
  factory :ticket do
    title { 'title1' }
    description { 'description1' }
  end

  factory :user do
    username  'user1'
    email 'user1@email.com'
    time_zone 'Africa/Cairo'
    password "*********"
  end

end