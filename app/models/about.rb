class About < ApplicationRecord
  has_attached_file :photo, storage: :imgur
  validates_attachment_content_type :photo, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  def photo_medium
    url = photo.url
    url.gsub('.jpg', 'h.jpg')
  end
end
