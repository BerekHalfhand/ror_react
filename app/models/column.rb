class Column
  include Mongoid::Document
  field :title, type: String
  field :type, type: String
  field :isRequired, type: Mongoid::Boolean
  field :options, type: Array#, default: []
end
