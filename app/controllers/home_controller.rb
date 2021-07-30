class HomeController < ApplicationController
  def index
    @portfolios = Portfolio.where(visible: true).limit(5).order(created_at: :desc)
  end
end
