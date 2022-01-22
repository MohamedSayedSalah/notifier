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
end
