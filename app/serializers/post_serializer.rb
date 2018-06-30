class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :game, :discussion, :rating, :user_id
  belongs_to :author, class_name: "User", foreign_key: "user_id"
  has_many :comments
  has_many :users, through: :comments
end
