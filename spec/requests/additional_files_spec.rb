require 'rails_helper'

RSpec.describe "AdditionalFiles", type: :request do
  describe "GET /additional_files" do
    it "works! (now write some real specs)" do
      get additional_files_path
      expect(response).to have_http_status(200)
    end
  end
end
