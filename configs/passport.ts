import passport from 'passport'
import OAuth2Strategy, {type VerifyCallback} from 'passport-oauth2';

interface ProfileProvider {
  id: number;
  name: string;
  username: string;
}

passport.use("provider",new OAuth2Strategy({
  authorizationURL: process.env.OAUTH_AUTHORIZATION_URL as string,
  tokenURL: process.env.OAUTH_TOKEN_URL as string,
  clientID: process.env.OAUTH_CLIENT_ID as string,
  clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
  callbackURL: process.env.OAUTH_CALLBACK_URL,
  state: true,
}, async (accessToken: string, refreshToken: string, profile: ProfileProvider, cb: VerifyCallback) => {
  if (accessToken || profile) {
  cb(null, profile, {accessToken})
  } else {
    cb({error: "Auth Failed Passport error"}, false)
  }
}))


passport.serializeUser((user: object, done) => {
  done(null, user);
})

passport.deserializeUser((user: object, done) => {
  done(null, user);
})

export default passport
