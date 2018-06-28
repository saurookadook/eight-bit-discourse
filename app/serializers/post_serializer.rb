class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :game, :author, :discussion, :rating
end
