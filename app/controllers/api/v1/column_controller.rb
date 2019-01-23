class Api::V1::ColumnController < Api::V1::BaseController
  def index
    respond_with Column.all
  end

  def create
    puts column_params
    respond_with :api, :v1, Column.create(column_params)
  end

  # def destroy
  #   column = Column.find(params["id"])
  #   respond_with column.destroy()
  # end

  def update
    puts column_params
    column = Column.find(params["id"])
    column.update_attributes(column_params)
    respond_with column, json: column
  end

  private

  def column_params
    params.require(:column).permit(:title, :type, :isRequired, options: [])
  end
end
