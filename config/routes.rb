Rails.application.routes.draw do
  namespace :admin do
      resources :portfolios
      resources :portfolio_details
      resources :abouts
      resources :about_photos

      root to: "portfolios#index"
    end
  root to: 'home#index'
  resources :projects, only: %i[index show]
  resources :about, only: :index
  resources :contacts, only: :index
end
