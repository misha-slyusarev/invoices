require 'rails_helper'

RSpec.describe Invoice, :type => :model do
  it { should have_attached_file(:attachment) }
  it { should validate_attachment_presence(:attachment) }
  it { should validate_attachment_content_type(:attachment).allowing('application/pdf') }
end
