import jwt from 'jsonwebtoken';

export const generateToken = user => jwt.sign(
  {
    id: user._id,
    // role: user.role,
  },
  process.env.JWT_SECRET,
  { expiresIn: '24h' },
);

export const successResponse = (res, statusCode, message, data) => (
  res.status(statusCode).json({ message, data })
);

export const errorResponse = (res, statusCode, success, message) => (
  res.status(statusCode).json({ success, message })
);

export const hostUrl = process.env.NODE_ENV === 'production'
  ? 'https://git-cheat-hint-sheet.herokuapp.com'
  : 'http://localhost:7777';
