class MessagesController < ApplicationController
  respond_to :html, :js

  def new
    @message = Message.new
  end

  def create

    @message = Message.new(message_params)
    respond_to do |format|  
      format.html
      format.js
    end  

  end

  private

  def message_params
    params.require(:message).permit(:text, :file, :error)
  end

end
