import passport from "passport";
import {
  Strategy as JwtStrategy,
  ExtractJwt,
  type StrategyOptions,
} from "passport-jwt";

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.CLIENT_SECRET as string,
};

passport.use(
  new JwtStrategy(options, async function (jwt_payload: Express.User, done) {
    try {
      //find user
      const user = {};
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (err) {
      done(err);
    }
  }),
);
export default passport;
