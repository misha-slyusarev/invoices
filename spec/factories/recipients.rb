FactoryGirl.define do
  factory :recipient do
    trait :name do
      name Faker::Name.first_name
    end
    trait :surname do
      surname  Faker::Name.last_name
    end
    trait :address do
      address Faker::Address.street_name
    end
    trait :phone do
      phone Faker::PhoneNumber.phone_number
    end
    trait :bad_phone_number do
      phone 'ABC'
    end

    factory :valid_recipient, traits: [:name, :surname, :address, :phone]
    factory :invalid_recipient, traits: []
    factory :recipient_with_bad_phone_number, traits: [:name, :surname, :address, :bad_phone_number]
  end
end
