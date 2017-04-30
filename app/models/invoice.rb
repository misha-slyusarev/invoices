class Invoice < ApplicationRecord
  has_one :recipient
  has_many :additional_files

  accepts_nested_attributes_for :recipient
end
