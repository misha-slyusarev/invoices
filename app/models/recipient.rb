class Recipient < ApplicationRecord
  belongs_to :invoice, optional: true
  validates_presence_of :name, :surname, :address

  validates :phone, presence: true,
                    numericality: true,
                    length: { maximum: 15 }
end
