class Invoice < ApplicationRecord
  has_one :recipient
  has_many :additional_files

  accepts_nested_attributes_for :recipient
  accepts_nested_attributes_for :additional_files

  has_attached_file :attachment
  validates_attachment_presence :attachment
  validates_attachment_content_type :attachment, content_type: 'application/pdf'
  
  validates_presence_of :date

  monetize :amount_cents, numericality: { greater_than: 0 }
end
