Rails.application.routes.draw do

  root 'templates#index'
  resources :messages
end
