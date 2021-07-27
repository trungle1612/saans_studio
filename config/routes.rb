Rails.application.routes.draw do
  get 'projects/index'
  root to: 'home#index'
  resources :projects, only: %i[index]
end
