class GameSerializer < ActiveModel::IndexSerializer
	embed :ids
	attributes :id
end