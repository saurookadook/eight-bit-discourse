class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :game, :discussion, :rating
  belongs_to :user
  has_many :comments
  has_many :users, through: :comments
end
