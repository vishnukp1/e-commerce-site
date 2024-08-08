import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  let authHeader = req.headers.authorization;

  if (authHeader === undefined) {
    res.status(401).json({ error: "token is not provided for user" });
  }
  let token = authHeader.split(" ").pop();
  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err) {
      res.status(500).json({ error: "authentication failed" });
    }
    const userId = decoded.userId;

    req.userId = userId;
    next();
  });
};
