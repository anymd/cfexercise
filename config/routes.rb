Rails.application.routes.draw do

  root 'templates#index'
  resources :templates, only: :index
  resources :messages
end
