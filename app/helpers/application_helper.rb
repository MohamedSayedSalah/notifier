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
end
