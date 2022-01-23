// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import "@stylesheets/application.css"
import mount from '@src/mount'
import "channels"

import { Footer } from '@components/navigation/footer'
import { Home } from "@apps/home.js"
import { Pending } from "@apps/pending.js"
import { MainNavigation } from '@components/navigation/main_navigation'
import SignUpLogin from '@apps/signup_login'
import ProfileSettings from "@apps/profile_settings";


require('@rails/ujs').start()
require('@rails/activestorage').start()

document.addEventListener('DOMContentLoaded', () => {
    mount({
        SignUpLogin,
        ProfileSettings,
        MainNavigation,
        // BikesParent,
        Pending,
        Home,
        Footer
    })
})// Support component names relative to this directory: