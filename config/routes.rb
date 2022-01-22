Rails.application.routes.draw do

  devise_for :users
  root "home#index"

  get '/app', to: 'home#app', as: 'app'
end
