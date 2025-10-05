require "administrate/field/base"

class ImgbbUploadField < Administrate::Field::Base
  def to_s
    data
  end

  def photo_origin_url
    resource.photo_origin_url
  end

  def photo_medium_url
    resource.photo_medium_url
  end

  def delete_url
    resource.delete_url
  end

  def has_photo?
    photo_origin_url.present?
  end

  def photo_display_url
    photo_medium_url.presence || photo_origin_url
  end
end
