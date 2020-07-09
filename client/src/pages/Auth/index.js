import React from 'react'
import SignUp from './SignUp'

import { AuthWrapper, FormWrapper } from './styles'

const Auth = () => (
  <AuthWrapper>
    <FormWrapper>
      <SignUp />
    </FormWrapper>
  </AuthWrapper>
)

export default Auth
