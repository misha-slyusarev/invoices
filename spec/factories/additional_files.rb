FactoryGirl.define do
  factory :additional_file do
    trait :description do
      description Faker::Lorem.sentence
    end
    trait :body do
      body {
        fixture_file_upload("#{Rails.root}/spec/fixtures/additional_file.png", 'image/png')
      }
    end

    factory :valid_additional_file, traits: [:body]
    factory :additional_file_with_description, traits: [:body, :description]
  end
end
