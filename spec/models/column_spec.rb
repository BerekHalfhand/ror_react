require 'rails_helper'
# require "column"

describe Column do
  it { is_expected.to be_mongoid_document }
  it "has a valid factory" do
    FactoryBot.create(:column).should be_valid
  end
  it "is invalid without a firstname"
  it "is invalid without a lastname"
  it "returns a contact's full name as a string"
  # describe ".verify" do
  #   context "type" do
  #     context "given 'select'" do
  #       it "returns 'select'" do
  #         col = Column.new('Title', 'select')
  #         expect(col.verify()).to_not eql('select')
  #       end
  #     end
  #   end
  # end
end
