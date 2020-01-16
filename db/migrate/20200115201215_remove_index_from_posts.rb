class RemoveIndexFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_index :posts, :sender_id
    remove_index :posts, :receiver_id
    add_index :posts, :sender_id
    add_index :posts, :receiver_id
  end
end
