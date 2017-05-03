require 'rails_helper'

RSpec.describe Api::V1::InvoicesController, type: :controller do

  let(:uploaded_invoice) {
    fixture_file_upload("#{Rails.root}/spec/fixtures/invoice.pdf", 'application/pdf')
  }
  let(:uploaded_additional_file) {
    fixture_file_upload("#{Rails.root}/spec/fixtures/additional_file.png", 'image/png')
  }
  let(:valid_attributes) {
    {
      date: 'Wed May 03 2017 11:47:53 GMT+0200',
      amount: '777',
      attachment: uploaded_invoice,
      recipient_attributes: {
        name: 'John',
        surname: 'Doe',
        address: 'New York',
        phone: Faker::PhoneNumber.phone_number
      },
      additional_files_attributes: [{
        description: 'Additional file',
        body: uploaded_additional_file
      }]
    }
  }
  let(:invalid_attributes) {
    {
      date: nil,
      amount: '',
      attachment: nil,
      recipient_attributes: {
        name: '',
        surname: '',
        address: '',
        phone: ''
      },
      additional_files_attributes: [{
        description: nil,
        body: nil
      }]
    }
  }
  let(:error_messages) {
    "{\"additional_files.body\":[\"can't be blank\"],\"recipient.name\":[\"can't be blank\"],"\
    "\"recipient.surname\":[\"can't be blank\"],\"recipient.address\":[\"can't be blank\"],"\
    "\"recipient.phone\":[\"can't be blank\"],\"attachment\":[\"can't be blank\"],"\
    "\"date\":[\"can't be blank\"],\"amount\":[\"is not a number\"]}"
  }

  describe "POST #create" do
    context "with valid params" do
      it 'responds with 200 OK' do
        expect(response.status).to eq(200)
      end

      it "creates a new Invoice" do
        expect {
          post :create, params: {invoice: valid_attributes}
        }.to change(Invoice, :count).by(1)
      end

      it "creates a new Recipient" do
        expect {
          post :create, params: {invoice: valid_attributes}
        }.to change(Recipient, :count).by(1)
      end

      it "creates a new AdditionalFile" do
        expect {
          post :create, params: {invoice: valid_attributes}
        }.to change(AdditionalFile, :count).by(1)
      end
    end

    context "with invalid params" do
      before do
        post :create, params: {invoice: invalid_attributes}
      end

      it 'responds with Unprocessable Entity' do
        expect(response.status).to eq(422)
      end

      it 'responds with validation errors' do
        expect(response.body).to eq(error_messages)
      end
    end
  end

end
