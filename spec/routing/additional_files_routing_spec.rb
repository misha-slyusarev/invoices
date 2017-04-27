require "rails_helper"

RSpec.describe AdditionalFilesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/additional_files").to route_to("additional_files#index")
    end

    it "routes to #new" do
      expect(:get => "/additional_files/new").to route_to("additional_files#new")
    end

    it "routes to #show" do
      expect(:get => "/additional_files/1").to route_to("additional_files#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/additional_files/1/edit").to route_to("additional_files#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/additional_files").to route_to("additional_files#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/additional_files/1").to route_to("additional_files#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/additional_files/1").to route_to("additional_files#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/additional_files/1").to route_to("additional_files#destroy", :id => "1")
    end

  end
end
