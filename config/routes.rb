Rails.application.routes.draw do
  resources :events
  resources :pets
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/user/:id", to: "users#show_id"


  post "/newpet", to: "pets#create"
  patch "/pets/:id", to: "pets#update"
  patch "pets_image/:id", to: "pets#update_image"
  delete "/pet_removal/:id", to: "pets#destroy"
  get "/allpets", to: "pets#index"

  post "/newevent", to: "events#create"
  get "/events", to: "events#index"
  patch "/events/:id", to: "events#update"
end
