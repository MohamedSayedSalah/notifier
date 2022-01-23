class Users::ProfilesController < ApplicationController

  def show

  end

  def update
    params[:page] ||= "profile"
    current_user.attributes = profile_params
    puts current_user.as_json
    if current_user.valid?
      current_user.save
      render json: { ok: "ok", profileURL: profile_path(current_user), user: UserBlueprint.render_as_hash(current_user, view: :profile) }
    else
      render json: { errors: current_user.errors }
    end

  end

  private

  def profile_params
    params.require(:user).permit(:username, :due_date_reminder, :due_date_reminder_interval, :due_date_reminder_time, :time_zone)
  end

end
