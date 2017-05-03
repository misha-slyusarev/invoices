class AddAttachmentAttachmentToInvoices < ActiveRecord::Migration[5.0]
  def change
    add_attachment :invoices, :attachment
  end
end
