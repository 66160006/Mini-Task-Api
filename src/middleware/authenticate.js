const jwt = require('jsonwebtoken');
const db = require('../config/db'); 

const authenticate = async (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'No token provided' } });
    }

    const token = authHeader.split(' ')[1];


    const [blacklist] = await db.query(
      'SELECT token FROM TokenBlacklist WHERE token = ?',
      [token]
    );

    if (blacklist.length > 0) {
      return res.status(401).json({ 
        error: { code: 'TOKEN_REVOKED', message: 'Token has been logged out' } 
      });
    }


    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

        req.user = decoded; 
        next(); 
    } catch (err) {

        return res.status(401).json({ error: { code: 'INVALID_TOKEN', message: 'Token is invalid or expired' } });
    }

  } catch (error) {

    console.error('Authentication Error:', error);
    return res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: 'Authentication failed' } });
  }
};

module.exports = { authenticate };