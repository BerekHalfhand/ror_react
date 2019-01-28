require 'faker'

FactoryBot.define do
  factory :column do |f|
    f.title { Faker::Name.first_name }
    f.type {"select"}
    f.isRequired {true}
    f.options {['male','female']}
  end
end
