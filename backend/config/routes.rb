Rails.application.routes.draw do
  resources :favorite
  resources :activity
  resources :user
  get "/getActivity", to: "activities#get_activity"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end