import React from 'react'
import { useParams } from 'react-router-dom'

const ResetPasswordPage: React.FC = () => {
  const { uid, token } = useParams()
  return (
    <>
      <div>
        Reset password: uid={uid} token={token}
      </div>
    </>
  )
}

export default ResetPasswordPage
