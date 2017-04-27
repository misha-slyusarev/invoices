class Invoice < ApplicationRecord
  has_one :recipient
  has_many :additional_files
end
