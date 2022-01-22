class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:new]
  skip_before_action :require_no_authentication
  respond_to :json, :html

  def new
    super
    redirect_to root_path
  end


  protected
  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  end

end