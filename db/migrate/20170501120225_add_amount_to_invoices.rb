class AddAmountToInvoices < ActiveRecord::Migration[5.0]
  def change
    add_monetize :invoices, :amount
  end
end
