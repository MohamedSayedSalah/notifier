import { Button } from '@components/rhf'
import React from 'react'
export const SubmitButtons = ({
                                  back,
                                  handleSubmit,
                                  next,
                                  nextText = 'Next',
                                  onSubmit,
                                  submitting,
                                  urlAttrs,
                                  className
                              }) => {
    return (
        <div className="flex justify-between mt-16 w-full submit-buttons">
            <div className="flex" />
            <div className="flex">
                {back && (
                    <Button
                        disabled={submitting}
                        kind="alternate"
                        onClick={handleSubmit((data) => {
                            data.urlAttrs = { action: back, ...urlAttrs }
                            onSubmit(data)
                        })}
                        text="Back"
                        type="submit"
                    />
                )}
                <Button
                    disabled={submitting}
                    loading={submitting}
                    onClick={handleSubmit((data) => {
                        data.urlAttrs = { action: next, ...urlAttrs }
                        onSubmit(data)
                    })}
                    text={nextText}
                    type="submit"
                />
            </div>
        </div>
    )
}
