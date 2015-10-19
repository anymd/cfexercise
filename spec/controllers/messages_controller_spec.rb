require 'rails_helper'

RSpec.describe MessagesController, type: :controller do

  describe "POST #create" do
    it "responds successfully with an HTTP 200 status code" do
      post :create, format: :js, message: { text: 'text' }
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end
  end

end
