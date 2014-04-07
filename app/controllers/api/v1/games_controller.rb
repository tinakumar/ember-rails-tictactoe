class Api::V1::GamesController < ApplicationController
	respond_to :json

	def index
		@game = Game.all
		respond_with @game, status: 200
	end

	private

	def game_params
		params.require(:game).permit(:game_id, :userWins)
	end


end
