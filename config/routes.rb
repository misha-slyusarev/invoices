Rails.application.routes.draw do
  resources :invoices
  resources :recipients
  resources :additional_files
end
