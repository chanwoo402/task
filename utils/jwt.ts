import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key';

export const signToken = (
  payload: object,
  options?: jwt.SignOptions
): string => {
  return jwt.sign(payload, SECRET_KEY, options);
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
};
