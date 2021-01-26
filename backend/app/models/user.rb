class User < ApplicationRecord
    has_many :activities
    has_many :favorites, through: :activities
end