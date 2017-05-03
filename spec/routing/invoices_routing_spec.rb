require "rails_helper"

RSpec.describe Api::V1::InvoicesController, type: :routing do
  describe "routing" do

    it "routes to #create" do
      expect(:post => "/v1/invoices").to route_to("api/v1/invoices#create")
    end

  end
end
