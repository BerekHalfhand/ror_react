class User
  include Mongoid::Document
  field :username, type: String
  field :fullname, type: String
  field :password, type: String
  field :email, type: String
end
