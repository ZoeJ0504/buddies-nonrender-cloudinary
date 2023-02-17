class EventsController < ApplicationController

    def index 
         render json: Event.all
    end 

    def create 
        event = Event.create!(event_params)
        render json: event
    end 

    def update
        event = Event.find(params[:id])
        event.update(:petsitter_id => params[:petsitter_id] )
    end

    private 
    def event_params
        params.permit(:start, :end, :owner_id, :petsitter_id, :details, :need)
    end 

end
