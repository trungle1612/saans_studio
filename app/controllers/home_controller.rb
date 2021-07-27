class HomeController < ApplicationController
  def index
    @portfolios = Portfolio.limit(5)
  end
end
