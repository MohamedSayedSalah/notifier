module ApplicationHelper
  def main_navigation_props
    if current_user
      { currentUser: UserBlueprint.render_as_hash(current_user, view: :profile),
        # usersPath: users_path,
        # bikesPath: bikes_path,
        # loginPath: login_path
      }
    else
      { currentUser: nil, profilePath: nil, loginPath: login_path}
    end
  end

  def user_props
    {
      loginUrl: session_path(resource),
      # passwordResetUrl: password_path(resource_name),
      # passwordUrl: password_path(resource_name),
      # profileUrl: bikes_path,
      registrationUrl: registration_path(resource),
      rememberable: devise_mapping.rememberable?,
      # role: sessions[:signup_role],
      # rootUrl: "/",
    }
  end

  def convert_to_timezone time, zone
    time.in_time_zone(zone)
  end


  def get_datetime(due_date, interval, time)
    d = due_date - interval
    DateTime.new(d.year, d.month, d.day, time.hour, time.min, time.sec)
  end

end
