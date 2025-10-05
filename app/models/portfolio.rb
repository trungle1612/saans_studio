class Portfolio < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :history

  TYPES = ['housing', 'interior']

  has_many :portfolio_details, -> { where(visible: true) }, class_name: 'PortfolioDetail', dependent: :destroy
  validates_presence_of :name
  validates_presence_of :introduce
  validates :p_type, :inclusion => { in: TYPES }

  # ImgBB photo fields
  validates :photo_origin_url, presence: true, if: -> { photo_medium_url.present? }
  validates :photo_medium_url, presence: true, if: -> { photo_origin_url.present? }
  has_attached_file :photo

  has_attached_file :pdf
  validates_attachment_content_type :pdf, :content_type => ["application/pdf"]

  def photo_medium
    photo_medium_url || photo_origin_url
  end

  def photo_origin
    photo_origin_url
  end

  def types
    ['housing', 'interiol'].sample
  end
end
