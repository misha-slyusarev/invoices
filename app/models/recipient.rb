class Recipient < ApplicationRecord
  belongs_to :invoice, optional: true
end
