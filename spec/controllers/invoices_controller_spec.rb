require 'rails_helper'

RSpec.describe Api::V1::InvoicesController, type: :controller do

  # This should return the minimal set of attributes required to create a valid
  # Invoice. As you add validations to Invoice, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # InvoicesController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Invoice" do
        expect {
          post :create, params: {invoice: valid_attributes}, session: valid_session
        }.to change(Invoice, :count).by(1)
      end

      it "assigns a newly created invoice as @invoice" do
        post :create, params: {invoice: valid_attributes}, session: valid_session
        expect(assigns(:invoice)).to be_a(Invoice)
        expect(assigns(:invoice)).to be_persisted
      end

      it "redirects to the created invoice" do
        post :create, params: {invoice: valid_attributes}, session: valid_session
        expect(response).to redirect_to(Invoice.last)
      end
    end

    context "with invalid params" do
      it "assigns a newly created but unsaved invoice as @invoice" do
        post :create, params: {invoice: invalid_attributes}, session: valid_session
        expect(assigns(:invoice)).to be_a_new(Invoice)
      end

      it "re-renders the 'new' template" do
        post :create, params: {invoice: invalid_attributes}, session: valid_session
        expect(response).to render_template("new")
      end
    end
  end

end
