class AddAttachmentAttachmentToInvoices < ActiveRecord::Migration
  def self.up
    change_table :invoices do |t|
      t.attachment :attachment
    end
  end

  def self.down
    remove_attachment :invoices, :attachment
  end
end
