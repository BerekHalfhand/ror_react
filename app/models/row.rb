class Row
  include Mongoid::Document
  field :values, :type => Hash
end
