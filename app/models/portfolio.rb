class Portfolio < ApplicationRecord
  has_many :portfolio_details, -> { where(visible: true) }, class_name: 'PortfolioDetail', dependent: :destroy
  validates_presence_of :name
  validates_presence_of :introduce

  has_attached_file :photo, styles: { quality: :normal }, storage: :imgur
  validates_attachment_content_type :photo, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  has_attached_file :pdf
  validates_attachment_content_type :pdf, :content_type => ["application/pdf"]

  def photo_medium
    url = photo.url
    url.gsub('.jpg', 'h.jpg')
  end

  def type
    %w[houses industrial interior].sample
  end
end
