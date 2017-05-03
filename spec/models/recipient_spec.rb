require 'rails_helper'

RSpec.describe Recipient, :type => :model do

  it 'is valid with valid attributes' do
    valid_recipient = build(:valid_recipient)
    expect(valid_recipient).to be_valid
  end

  it 'is not valid without attributes' do
    invalid_recipient = build(:invalid_recipient)
    expect(invalid_recipient).not_to be_valid
  end

  it 'is not valid with wrong phone number' do
    recipient = build(:recipient_with_bad_phone_number)
    expect(recipient).not_to be_valid
  end
end
