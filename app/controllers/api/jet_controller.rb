class Api::JetController < ApplicationController
  before_action :set_jet, only: [:show, :update, :destroy]

  # this is the code for get 'api/jet'
  def index
    render json: Jet.all
  end

  # this is the code for get 'api/jet/:id'
  def show
    render json: @jet
  end

  # this is the code for delete  'api/jet/:id'
  def destroy
   render json: @jet.destroy
  end

  private

  def set_jet
    @fact = Jet.find([:id])
  end

end
