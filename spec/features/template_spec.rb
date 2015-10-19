require 'rails_helper'

RSpec.describe "Templates", type: :feature do
  
  before :each do
    visit "/"
  end  

  it "loads the templates page" do
    expect(page).to have_selector(".heading", :text => "Welcome")
  end
 
  it "shows 8 templates at first", js: true do
    expect(page).to have_selector('.template', count: 8)
  end

  it "has the see more link", js: true do
  	expect(page).to have_css(".more")
  end

  it "shows 2 more templates after clicking see more", js: true do
  	click_on 'more'
    expect(page).to have_selector('.template', count: 10)
  end

  it 'submits a message', js: true do
  	fill_in('message_text', :with => 'my data needs love')
    click_on 'Send'
  	expect(Message.all.first.text).to eq('my data needs love')
  end

end