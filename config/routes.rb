Rails.application.routes.draw do
  root to: 'home#index'
  resources :projects, only: %i[index show]
  resources :about, only: :index
  resources :contacts, only: :index
end
