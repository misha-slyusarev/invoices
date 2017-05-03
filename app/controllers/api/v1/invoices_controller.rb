class Api::V1::InvoicesController < ApplicationController

  def create
    @invoice = Invoice.new(invoice_params)

    if @invoice.save
      render json: @invoice, status: :created
    else
      render json: @invoice.errors, status: :unprocessable_entity
    end
  end

  private

    def invoice_params
      params.fetch(:invoice, {}).permit(:date, :amount, :attachment,
        recipient_attributes: [:name, :surname, :phone, :address],
        additional_files_attributes: [:description, :body] )
    end
end
