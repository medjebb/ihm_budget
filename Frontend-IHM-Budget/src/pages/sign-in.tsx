  import { Helmet } from 'react-helmet-async';
  import { SignInView } from 'src/sections/auth';

  // ----------------------------------------------------------------------

  export default function SignInPage() {
    return (
      <>
        <Helmet>
          <title>Sign in</title>
        </Helmet>
        <SignInView />
      </>
    );
  }
