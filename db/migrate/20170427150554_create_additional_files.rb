class CreateAdditionalFiles < ActiveRecord::Migration[5.0]
  def change
    create_table :additional_files do |t|
      t.string :description
      t.references :invoice, foreign_key: true

      t.timestamps
    end
  end
end
