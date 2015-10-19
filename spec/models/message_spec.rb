require 'rails_helper'

RSpec.describe Message, type: :model do
  it 'can create an object and has the right attributes' do
    message = Message.new(text: 'text', file: 'file')
    expect(message.text).to eq('text') 
    expect(message.file).to eq('file') 
  end	

   it 'validates properly' do
    message = Message.new(text: 'text', file: nil, error: true)
    expect(message.save).to eq(false)
    message.error = nil
    expect(message.save).to eq(true)
  end	
end
