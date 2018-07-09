class Post < ApplicationRecord
  belongs_to :author, class_name: "User", foreign_key: "user_id"
  has_many :comments
  has_many :users, through: :comments

  # validates_associated :author
  # validates_associated :comments

  # accept_nested_attributes_for :comments
end
