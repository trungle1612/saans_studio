require "administrate/base_dashboard"

class SliderDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id: Field::Number,
    caption: Field::String,
    visible: Field::Boolean,
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    image_file_name: Field::String,
    image_content_type: Field::String,
    image_file_size: Field::Number,
    image_updated_at: Field::DateTime,
    photo_file_name: Field::String,
    photo_content_type: Field::String,
    photo_file_size: Field::Number,
    photo_updated_at: Field::DateTime,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    id
    caption
    visible
    created_at
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    caption
    visible
    created_at
    updated_at
    image_file_name
    image_content_type
    image_file_size
    image_updated_at
    photo_file_name
    photo_content_type
    photo_file_size
    photo_updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    caption
    visible
    image_file_name
    image_content_type
    image_file_size
    image_updated_at
    photo_file_name
    photo_content_type
    photo_file_size
    photo_updated_at
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

  # Overwrite this method to customize how sliders are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(slider)
  #   "Slider ##{slider.id}"
  # end
end
