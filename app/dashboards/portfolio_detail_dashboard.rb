require "administrate/base_dashboard"

class PortfolioDetailDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    portfolio: Field::BelongsTo.with_options(
      searchable: true,
      searchable_fields: ['id', 'name'],
    ),
    id: Field::Number,
    introduce: Field::Text.with_options(
      searchable: true
    ),
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    visible: Field::Boolean,
    photo: ImgbbUploadField,
    photo_origin_url: Field::String,
    photo_medium_url: Field::String,
    delete_url: Field::String,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    portfolio
    id
    introduce
    photo
    created_at
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    portfolio
    id
    introduce
    created_at
    updated_at
    visible
    photo
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    portfolio
    introduce
    visible
    photo
  ].freeze

  # COLLECTION_FILTERS
  # a hash that defines filters that can be used while searching via the search
  # field of the dashboard.
  #
  # For example to add an option to search for open resources by typing "open:"
  # in the search field:
  #
  #   COLLECTION_FILTERS = {
  #     open: ->(resources) { resources.where(open: true) }
  #   }.freeze
  COLLECTION_FILTERS = {}.freeze

  # Overwrite this method to customize how portfolio details are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(portfolio_detail)
  #   "PortfolioDetail ##{portfolio_detail.id}"
  # end
end
