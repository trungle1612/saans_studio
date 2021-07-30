class AddPhotoToAboutPhoto < ActiveRecord::Migration[6.1]
  def change
    add_attachment :about_photos, :photo
  end
end
