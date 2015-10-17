class TemplatesController < ApplicationController

  respond_to :html, :json

  def index

    @templates = Template.all

    respond_to do |format|
      format.html
      format.json {
        send_data @templates.to_json
      }
    end

  end

end
