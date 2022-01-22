import { Button, Divider, Input } from '@components/rhf'
import { Heading, Link } from './common'
import React, { useState } from 'react'
import { axios } from '@helpers/axios'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

export const SignUp = ({ registrationUrl}) => {
    const [submitting, setSubmitting] = useState(false)
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm()
    const history = useHistory()
    const onSubmit = (data) => {
        setSubmitting(true)

        axios
            .post(registrationUrl + '.json', {
                ...data,
            })
            .then(() => {
                setSubmitting(false)
                history.push('/login')
                PubSub.publish('SHOW_FLASH', {
                    show: true,
                    heading: 'Email verification sent',
                    message: 'Please check your email to activate your account.',
                })
            })
            .catch((err) => {
                setSubmitting(false)
                if (err.response.data.flash)
                    PubSub.publish('SHOW_FLASH', {
                        show: true,
                        heading: 'Signup Error',
                        message: err.response.data.flash,
                    })

                for (const [key, value] of Object.entries(err.response.data.errors)) {
                    setError(
                        key,
                        { type: 'manual', message: value[value.length - 1] },
                        { shouldFocus: true }
                    )
                }
            })
    }

    return (
        <>
            <Heading>Sign Up</Heading>
            <form className="mx-2" onSubmit={handleSubmit(onSubmit)}>

                <Input
                    clearErrors={clearErrors}
                    errorName="username"
                    errors={errors}
                    label="Username"
                    name="user[username]"
                    placeholder="Username"
                    register={register}
                />
                <Input
                    clearErrors={clearErrors}
                    errorName="email"
                    errors={errors}
                    label="Email"
                    name="user[email]"
                    placeholder="Email"
                    register={register}
                />
                <Input
                    clearErrors={clearErrors}
                    errorName="password"
                    errors={errors}
                    label="Password"
                    name="user[password]"
                    placeholder="Password"
                    register={register}
                    type="password"
                />
                <Input
                    clearErrors={clearErrors}
                    errorName="password_confirmation"
                    errors={errors}
                    label="Password Confirmation"
                    name="user[password_confirmation]"
                    placeholder="Password Confirmation"
                    register={register}
                    type="password"
                />
                <Button
                    className="w-full"
                    loading={submitting}
                    text="Sign up"
                    type="submit"
                />
            </form>

            <Divider text="OR" />
            <div className="block mx-2 mb-4">
                <div className="mt-4 text-center">
                    <Link to="/reset">Forgot password?</Link>
                    <br />
                    Already a member? <Link to="/login">Go to login</Link>
                </div>
            </div>
        </>
    )
}
