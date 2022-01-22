class Users::SessionsController < Devise::SessionsController
  respond_to :json, :html
  # Override so flash not set
  def destroy
    Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
    yield if block_given?
    respond_to_on_destroy
  end
end
