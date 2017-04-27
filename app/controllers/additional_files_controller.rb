class AdditionalFilesController < ApplicationController
  before_action :set_additional_file, only: [:show, :update, :destroy]

  # GET /additional_files
  def index
    @additional_files = AdditionalFile.all

    render json: @additional_files
  end

  # GET /additional_files/1
  def show
    render json: @additional_file
  end

  # POST /additional_files
  def create
    @additional_file = AdditionalFile.new(additional_file_params)

    if @additional_file.save
      render json: @additional_file, status: :created, location: @additional_file
    else
      render json: @additional_file.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /additional_files/1
  def update
    if @additional_file.update(additional_file_params)
      render json: @additional_file
    else
      render json: @additional_file.errors, status: :unprocessable_entity
    end
  end

  # DELETE /additional_files/1
  def destroy
    @additional_file.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_additional_file
      @additional_file = AdditionalFile.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def additional_file_params
      params.require(:additional_file).permit(:description, :invoice_id)
    end
end
