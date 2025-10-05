require "administrate/base_dashboard"

class PortfolioDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    portfolio_details: Field::HasMany,
    id: Field::Number,
    name: Field::String,
    introduce: Field::Text,
    visible: Field::Boolean,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    photo: ImgbbUploadField,
    photo_origin_url: Field::String,
    photo_medium_url: Field::String,
    delete_url: Field::String,
    architect: Field::String,
    location: Field::String,
    project_year: Field::Number,
    p_type: Field::Select.with_options(collection: ['housing', 'interior'])
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    id
    name
    introduce
    photo
    portfolio_details
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    portfolio_details
    id
    name
    introduce
    visible
    photo
    architect
    location
    project_year
    p_type
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    name
    introduce
    visible
    photo
    architect
    location
    project_year
    p_type
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

  # Overwrite this method to customize how portfolios are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(portfolio)
  #   "Portfolio ##{portfolio.id}"
  # end
end
