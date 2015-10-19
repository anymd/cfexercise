require 'rails_helper'

RSpec.describe "Templates", type: :feature do
  
  before :each do
    visit "/"
  end  

  it "loads the page" do
    expect(page).to have_selector(".heading", :text => "Welcome")
  end
 
  it "has the see more link" do
  	expect(page).to have_css(".more")
  	expect(page).to have_css(".template")
  end

  it 'submits a message' do
  	fill_in('message_text', :with => 'my data needs love')
    click_on 'Send', disabled: true
  	expect(Message.all.first.text).to eq('my data needs love')
  end

end