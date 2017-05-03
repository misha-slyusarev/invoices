require 'rails_helper'

RSpec.describe AdditionalFile, :type => :model do
  it { should have_attached_file(:body) }
  it { should validate_attachment_presence(:body) }
  it { should validate_attachment_content_type(:body).allowing('application/pdf', 'image/jpeg', 'image/png') }

  context 'with valid attributes' do
    subject { build(:valid_additional_file) }
    it { is_expected.to be_valid }
  end

  context 'with description' do
    subject { build(:additional_file_with_description) }
    it { is_expected.to be_valid }
  end
end
