class Api::V1::RowController < Api::V1::BaseController
  def index
    respond_with Row.all
  end

  def create
    quantity = row_params['quantity']
    new_rows = []

    if !quantity.is_a? Integer || quantity > 0
      quantity = 10
    end

    quantity.times do
      row = Row.create({"values": {}})
      new_rows.push(row)
    end

    respond_with :api, :v1, json: new_rows
  end

  def destroy
    row = Row.find(params["id"])
    respond_with row.destroy()
  end

  def update
    row = Row.find(params["id"])
    values = row.values

    column = row_params[:column]
    value = row_params[:value]

    values[column] = value
    # puts "values: #{values}"
    updatedRow = {:values => values}
    row.update_attributes(updatedRow)
    respond_with row, json: row
  end

  private

  def row_params
    params.permit(:id, :column, :value, :quantity)
  end
end
