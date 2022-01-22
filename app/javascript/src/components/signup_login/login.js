import {Button, CheckboxGroup, Input} from '@components/rhf'
import {Heading, Link} from './common'
import React, {useState} from 'react'
import {HiOutlineEyeOff, HiOutlineEye} from 'react-icons/hi'
import {axios} from '@helpers/axios'
import {useForm} from 'react-hook-form'

export const Login = ({loginUrl, profileUrl, rememberable}) => {

    const [submitting, setSubmitting] = useState(false)
    const [passwordType, setPasswordType] = useState('password')
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: {errors},
    } = useForm()
    const onSubmit = (data) => {
        setSubmitting(true)
        axios
            .post(loginUrl + '.json', {...data})
            .then((res) => {
                setSubmitting(false)
                window.location.href = profileUrl

            })
            .catch((err) => {
                setSubmitting(false)
                setError(
                    'password',
                    {
                        type: 'manual',
                        message: err.response.data.error,
                    },
                    {shouldFocus: true}
                )
                setError('email', {type: 'manual', message: ''})
            })
    }
    return (
        <div className={"mt-10"}>
            <Heading>Login</Heading>
            <form className="mx-2" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    clearErrors={clearErrors}
                    errorName="email"
                    errors={errors}
                    label="Email"
                    name="user[email]"
                    onChange={() => clearErrors()}
                    placeholder="example@email.com"
                    register={register}
                />
                <div className="flex">
                    <Input
                        clearErrors={clearErrors}
                        errorName="password"
                        errors={errors}
                        label="Password"
                        name="user[password]"
                        onChange={() => clearErrors()}
                        placeholder="Password"
                        register={register}
                        type={passwordType}
                    />
                    {passwordType === 'password' ? (
                        <HiOutlineEyeOff
                            className="absolute mt-10 opacity-60 cursor-pointer"
                            onClick={() => setPasswordType('text')}
                            size="18"
                            style={{'marginLeft': '16rem'}}
                        />
                    ) : (
                        <HiOutlineEye
                            className="absolute mt-10 opacity-60 cursor-pointer"
                            onClick={() => setPasswordType('password')}
                            size="18"
                            style={{'marginLeft': '16rem'}}
                        />
                    )}
                </div>
                {rememberable && (
                    <CheckboxGroup
                        clearErrors={clearErrors}
                        errorName="checkError"
                        errors={errors}
                        options={[
                            {
                                name: 'user[remember_me]',
                                text: 'Remember me',
                                value: '1',
                            },
                        ]}
                        register={register}
                    />
                )}
                <Button
                    className="w-full"
                    loading={submitting}
                    text="Log in"
                    type="submit"
                />
            </form>

            <div className="block mx-2 mb-4">

                <div className="mt-4 text-center">
                    <Link to="/reset">Forgot your password?</Link>
                    <br/>
                    Not a member? <Link to="/signup">Go to signup</Link>
                </div>
            </div>
        </div>
    )
}
