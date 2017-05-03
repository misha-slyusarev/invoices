FactoryGirl.define do
  factory :invoice do
    trait :amount do
      amount 1000
    end
    trait :zero_amount do
      amount 0
    end
    trait :date do
      date Faker::Date.forward(1)
    end
    trait :attachment do
      attachment {
        fixture_file_upload("#{Rails.root}/spec/fixtures/invoice.pdf", 'application/pdf')
      }
    end

    factory :valid_invoice, traits: [:amount, :date, :attachment]
    factory :invalid_invoice, traits: []
    factory :invoice_with_zero_amount, traits: [:zero_amount, :date, :attachment]
  end
end
