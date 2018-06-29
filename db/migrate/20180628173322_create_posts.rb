class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :game
      t.text :discussion
      t.string :rating
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
