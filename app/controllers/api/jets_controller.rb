class Api::JetsController < ApplicationController
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

  def create
    jet = Jet.new(jet_params)
    if(jet.save)
      render json: jet
    else
      render json: {errors: fact.errors.full_messages}, status: 422
    end
  end

  def update
    if(@jet.update(jet_params))
      render json: @jet
    else
      render json: {errors: @fact.errors.full_messages}, status: 422
    end
  end

  private

  def jet_params
    params.require(:jet).permit(:name, :age, :topspeed  )
  end

  def set_jet
    @jet = Jet.find(params[:id])
  end

end
