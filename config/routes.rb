Rails.application.routes.draw do

  scope module: :api do
    namespace :v1 do
      resources :invoices
      resources :recipients
      resources :additional_files
    end
  end
end
