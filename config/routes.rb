Rails.application.routes.draw do
  namespace :api do
  # resources :jets would fill out all the crud actions

  get    'jets',         to:'jets#index'
  get    'jets/:id',     to:'jets#show'
  post   'jets',         to:'jets#create'
  put    'jets/:id',     to:'jets#update'
  delete 'jets/:id',     to:'jets#destroy'

  end
end
