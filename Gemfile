source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.2'
gem 'sqlite3', '~> 1.3.13'
gem 'puma', '~> 3.0'
gem 'paperclip', '~> 5.0.0'
gem 'money-rails', '~> 1.8'
gem 'phony_rails', '~> 0.14.5'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rspec-rails', '~> 3.5'
  gem 'factory_girl_rails', '~> 4.8'
  gem 'faker', '~> 1.7.3'
  gem 'simplecov', require: false
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
