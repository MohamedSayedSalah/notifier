class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :message_type, limit: 255
      t.references :user, null: false, foreign_key: true
      t.boolean :processed
      t.timestamps
    end
    add_reference :messages, :messageable, polymorphic: true, index: true
  end
end
