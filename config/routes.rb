Rails.application.routes.draw do
  namespace :api do
  # resources :jets would fill out all the crud actions

  get    'jet',         to:'jet#index'
  get    'jet/:id',     to:'jet#show'
  post   'jet',         to:'jet#create'
  put    'jet/:id',     to:'jet#update'
  delete 'jet/:id',     to:'jet#destroy'

  end
end
