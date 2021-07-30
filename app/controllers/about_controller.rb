class AboutController < ApplicationController
  def index
    @about = About.last
    @photos = @about.about_photos
  end
end
