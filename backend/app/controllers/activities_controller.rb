class ActivitiesController < ApplicationController
    
    def index
        @activities = Activity.all
        render json: @activities
    end

    def show
        @activity = Activity.find(params[:id])
        render json: @activity
    end

    def create
        @newActivity = Activity.create(
            name: params[:name],
            accessibility: params[:accessibility],
            participants: params[:participants],
            price: params[:price],
            key: params[:key]
        )
        render json: @newActivity
    end

    def update
        @activity = Activity.find(params[:id])
        @activity.update(
            name: params[:name],
            accessibility: params[:accessibility],
            participants: params[:participants],
            price: params[:price],
            key: params[:key]
        )
        render json: @activity
    end
    
    def destroy
        @activity = Activity.find(params[:id])
        @activity.destroy
    end
end