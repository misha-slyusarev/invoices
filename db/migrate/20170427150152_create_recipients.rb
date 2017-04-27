class CreateRecipients < ActiveRecord::Migration[5.0]
  def change
    create_table :recipients do |t|
      t.string :name
      t.string :surname
      t.string :address
      t.string :phone
      t.references :invoice, foreign_key: true

      t.timestamps
    end
  end
end
