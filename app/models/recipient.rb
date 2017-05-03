class Recipient < ApplicationRecord
  belongs_to :invoice, optional: true
  validates_presence_of :name, :surname, :address, :phone
end
