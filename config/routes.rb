Rails.application.routes.draw do

  devise_for :users, controllers: {
    registrations: "users/registrations", as: :registrations,
    sessions: "users/sessions"
  }
  devise_scope :user do
    get "signup", to: "users/registrations#new", as: :signup
    post "admin_new", to: "users/registrations#admin_new", as: :new_user
    get "login", to: "users/sessions#new"
    delete "logout", to: "users/sessions#destroy"
    get "logout", to: "users/sessions#destroy"
    get "reset", to: "devise/passwords#new"
    get "unlock", to: "devise/unlocks#new"
  end

  get "/settings", to: "users/profiles#show", as: :profile
  patch "profiles/:id", to: "users/profiles#update", as: :update_profile
  get "/notifications", to: "users/profiles#notifications", as: :notifications

  post "/ticket", to: "tickets#create", as: :new_ticket
  patch "/ticket/:id", to: "tickets#update", as: :update_ticket
  patch "/ticket/:id/handle_state", to: "tickets#handle_state"
  get "/pending", to: "tickets#pending", as: :pending

  root "home#index"
  match "*path", to: "home#index", via: :get

end
