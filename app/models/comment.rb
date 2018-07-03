class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post

  # accept_nested_attributes_for :user
end
