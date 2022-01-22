import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from '@components/signup_login/login'
import React from 'react'
import { SignUp } from '@components/signup_login/signup'
import { UserPagesContainer } from '@containers/user_pages_container'


const SignUpLogin = (props) => {
    return (
        <div className="w-full App" style={{ minHeight: 'calc(100vh)' }}>
            <UserPagesContainer>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" render={() => <Login {...props} />} />
                        <Route path="/signup" render={() => <SignUp {...props} />} />
                    </Switch>
                </BrowserRouter>
            </UserPagesContainer>
        </div>
    )
}

export default SignUpLogin
