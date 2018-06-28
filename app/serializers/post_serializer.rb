class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :game, :author, :discussion, :rating
  belogns_to :user
  has_many :comments
  has_many :users, through: :comments
end
