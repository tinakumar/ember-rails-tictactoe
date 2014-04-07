class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
    	t.integer 	"game_id"
    	t.boolean		"userWins"
      t.timestamps
    end
  end
end
