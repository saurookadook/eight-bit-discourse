class User < ApplicationRecord
  has_secure_password

  has_many :posts
  has_many :comments, through: :posts

  validates :username, :email, uniqueness: true, presence: true
  # validates :username, presence: true
end
