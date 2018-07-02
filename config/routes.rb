Rails.application.routes.draw do

  resources :users, only: [:show] do
    resources :posts
    resources :comments
  end

  # resources :comments
  resources :posts do
    resources :comments
  end
  resources :users

  root to: 'application#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
