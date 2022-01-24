module ApplicationHelper
  def main_navigation_props
    if current_user.present?
      { currentUser: UserBlueprint.render_as_hash(current_user, view: :profile),
        profile_path: profile_path(current_user.id)
      }
    else
      { currentUser: nil, profilePath: nil, loginPath: login_path }
    end
  end

  def user_props
    {
      loginUrl: session_path(resource),
      registrationUrl: registration_path(resource),
      rememberable: devise_mapping.rememberable?,

    }
  end


  def get_datetime(due_date, interval, time)
    if due_date.present?
      d = due_date - interval
      DateTime.new(d.year, d.month, d.day, time.hour, time.min, time.sec)
    else
      DateTime.new
    end
  end

end
