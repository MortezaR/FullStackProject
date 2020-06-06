Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to:'static_pages#root'

  namespace :api, defaults: {format: :json} do
    get '/users/search', to: 'users#search'
    resources :users, only: [:create, :show, :update] do
      resources :posts, except: [:edit, :new]
      get '/posts/:id/comments', to: 'posts#comments'
      resources :friends, only: [:index, :show, :create, :destroy]
    end
    resource :session, only: [:create, :destroy]
  end
end
