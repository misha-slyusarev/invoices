class AddDateToInvoice < ActiveRecord::Migration[5.0]
  def change
    add_column :invoices, :date, :datetime
  end
end
