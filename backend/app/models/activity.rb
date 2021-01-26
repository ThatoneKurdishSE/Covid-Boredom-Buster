class Activity < ApplicationRecord
    has_many :users
    has_many :favorites, through: :users
end
