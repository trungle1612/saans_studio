class ProjectsController < ApplicationController
  def index
    @portfolios = Portfolio.where(visible: true).order(created_at: :desc)
  end

  def show
    @portfolio = Portfolio.friendly.find(params[:id])
    @p_details = @portfolio.portfolio_details
  end
end
