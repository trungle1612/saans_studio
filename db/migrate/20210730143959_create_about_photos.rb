class CreateAboutPhotos < ActiveRecord::Migration[6.1]
  def change
    create_table :about_photos do |t|
      t.references :about, null: false, foreign_key: true

      t.timestamps
    end
  end
end
