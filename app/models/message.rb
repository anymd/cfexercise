class Message < ActiveRecord::Base

  attr_accessor :error
  validates :error, acceptance: { accept: '0' }

end
