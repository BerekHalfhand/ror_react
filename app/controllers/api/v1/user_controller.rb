class Api::V1::UserController < Api::V1::BaseController
  def index
    respond_with User.all
  end

  def create
    respond_with :api, :v1, User.create(user_params)
  end

  def destroy
    user = User.find(params["id"])
    respond_with user.destroy()
  end

  def update
    user = User.find(params["id"])
    user.update_attributes(user_params)
    respond_with user, json: user
  end

  private

  def user_params
    params.require(:user).permit(:id, :username, :fullname, :password, :email)
  end
end
