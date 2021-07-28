class HomeController < ApplicationController
  def index
    @portfolios = Portfolio.limit(5).order(created_at: :desc)
  end
end
