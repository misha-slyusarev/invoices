require 'rails_helper'

RSpec.describe Invoice, :type => :model do
  it { should have_attached_file(:attachment) }
  it { should validate_attachment_presence(:attachment) }
  it { should validate_attachment_content_type(:attachment).allowing('application/pdf') }

  context 'with valid attributes' do
    subject { build(:valid_invoice) }
    it { is_expected.to be_valid }
  end

  context 'with invalid attributes' do
    subject { build(:invalid_invoice) }
    it { is_expected.not_to be_valid }
  end

  context 'with zero amount' do
    subject { build(:invoice_with_zero_amount) }
    it { is_expected.not_to be_valid }
  end
end
