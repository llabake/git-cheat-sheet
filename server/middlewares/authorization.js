import jwt from 'jsonwebtoken';

export const requiresLogin = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!(token)) {
    return res.status(401).json({
      message: 'Missing token. Expects token in header'
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if(err) {
      if (err.message === 'jwt expired') {
        return res.status(401).json({
          message: 'Access token has expired. You are required to login again'
        });
      }
      return res.status(401).json({
        message: 'Authentication failed. Invalid access token'
      });
    }
    req.decoded = decoded;
    next();
  });
};
