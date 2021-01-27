class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user, include: :activities
    end

    def create
        @newUser = User.create(
            name: params[:name]
        )
        render json: @newUser
    end

    def update
        @user = User.find(params[:id])
        user.update(name: params[:name])
        render json: @user
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
    end
end
