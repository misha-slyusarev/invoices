class Invoice < ApplicationRecord
  has_one :recipient
  has_many :additional_files

  accepts_nested_attributes_for :recipient

  has_attached_file :attachment
  validates_attachment_content_type :attachment, content_type: 'application/pdf'

  monetize :amount_cents
end
