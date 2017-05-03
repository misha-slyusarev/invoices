class Recipient < ApplicationRecord
  belongs_to :invoice, optional: true
  validates_presence_of :name, :surname, :address

  phony_normalize :phone, default_country_code: 'DE'
  validates_plausible_phone :phone, presence: true
end
