class AddBodyToAdditionalFiles < ActiveRecord::Migration[5.0]
  def change
    add_attachment :additional_files, :body
  end
end
