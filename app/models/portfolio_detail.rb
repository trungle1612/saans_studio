class PortfolioDetail < ApplicationRecord
  belongs_to :portfolio
  validates_presence_of :introduce
  validates_presence_of :portfolio

  # ImgBB photo fields
  validates :photo_origin_url, presence: true, if: -> { photo_medium_url.present? }
  validates :photo_medium_url, presence: true, if: -> { photo_origin_url.present? }
  has_attached_file :photo

  def photo_medium
    photo_medium_url || photo_origin_url
  end

  def photo_origin
    photo_origin_url
  end
end
