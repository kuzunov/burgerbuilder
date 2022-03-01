/*import React from 'react'
import Cookies from 'js-cookie'

export const getAccessToken = () => Cookies.get('access_token')
export const getRefreshToken = () => Cookies.get('refresh_token')
export const isAuthenticated = () => !!getAccessToken()

export const authenticate = async () => {
     if (getRefreshToken()) {
      try {
        const tokens = await refreshTokens() // call an API, returns tokens
  
        const expires = (tokens.expires_in || 60 * 60) * 1000
        const inOneHour = new Date(new Date().getTime() + expires)
  
        // you will have the exact same setters in your Login page/app too
        Cookies.set('access_token', tokens.access_token, { expires: inOneHour })
        Cookies.set('refresh_token', tokens.refresh_token)
  
        return true
      } catch (error) {
        <Redirect to="/login" state={{ from: location }} />
        return false
      }
    }
  
    <Redirect to="/login" state={{ from: location }} />
    return false
  }
  export const AuthenticatedRoute = ({
    component: Component,
    exact,
    path,
  }) => (
    <Route
      exact={exact}
      path={path}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <AuthenticateBeforeRender render={() => <Component {...props} />} />
        )
      }
    />
  )
  export const renderMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

/*const Authenticator = ({ children }) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    
    

    let auth = {user: false};
    if (!auth.user) {
        return <Redirect to="/login" state={{ from: location }} />;
      }
    
      return children;
}

export default Authenticator */