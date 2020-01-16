class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :sender_id, null:false
      t.integer :receiver_id, null:false
      t.integer :reply_to_id
      t.text :body, null:false
      t.timestamps
    end
    add_index :posts, :sender_id, unique: true
    add_index :posts, :receiver_id, unique: true
  end
end
