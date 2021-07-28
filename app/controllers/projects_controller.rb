class ProjectsController < ApplicationController
  def index
    @portfolios = Portfolio.all.order(created_at: :desc)
  end

  def show
    @portfolio = Portfolio.find(params[:id])
    @p_details = @portfolio.portfolio_details
  end
end
