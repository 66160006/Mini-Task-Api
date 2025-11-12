const rateLimit = require('express-rate-limit');

const getLimiter = (limit) =>
  rateLimit({
    windowMs: 15 * 60 * 1000, 
    limit,
    standardHeaders: true,
    legacyHeaders: false,
    message: (req, res) => ({
      error: {
        code: 'RATE_LIMIT_EXCEEDED',
        message: 'Too many requests. Try again later.',
        retryAfter: 900, 
      },
    }),
  });

// ใช้ตาม role
const anonymousLimiter = getLimiter(20);
const userLimiter = getLimiter(100);
const premiumLimiter = getLimiter(500);

function rateLimiterByRole(req, res, next) {
  if (!req.user) return anonymousLimiter(req, res, next);
  if (req.user.role === 'premium') return premiumLimiter(req, res, next);
  return userLimiter(req, res, next);
}

module.exports = rateLimiterByRole;
