class AdditionalFile < ApplicationRecord
  belongs_to :invoice, optional: true

  has_attached_file :body
  validates_attachment_presence :body
  validates_attachment_content_type :body, content_type: %w(image/jpeg image/png application/pdf)
end
