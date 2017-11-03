interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'SXK51TGKSgQdJUckqk7PqPuXsFMST0jI',
  domain: 'zames.eu.auth0.com',
  callbackURL: 'http://localhost:3000/'
};
