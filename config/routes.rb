Rails.application.routes.draw do

  scope module: 'api' do 
    # post 'user_token' => 'user_token#create'
    # post 'find_user' => 'users#find'
    get 'signup' => 'users#new'
    post 'signup' => 'users#create'

    resources :users, only: [:show] do
      resources :posts
      resources :comments
    end

    # resources :comments
    resources :posts do
      resources :comments
    end

    resources :users, :posts, :comments do 
      post 'user_token' => 'user_token#create'
      post 'find_user' => 'users#find'
    end

    # resources :posts
    # resources :comments

    resources :users
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
