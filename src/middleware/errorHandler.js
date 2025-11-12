function errorHandler(err, req, res, next) {
  console.error(err);

  const status = err.status || 500;
  const codeMap = {
    400: 'VALIDATION_ERROR',
    401: 'UNAUTHORIZED',
    403: 'ACCESS_DENIED',
    404: 'NOT_FOUND',
    409: 'CONFLICT',
    429: 'RATE_LIMIT_EXCEEDED',
    500: 'INTERNAL_SERVER_ERROR'
  };

  const code = codeMap[status] || 'UNKNOWN_ERROR';

  res.status(status).json({
    error: {
      code,
      message: err.message || 'An unexpected error occurred',
      timestamp: new Date().toISOString(),
      path: req.originalUrl
    }
  });
}

module.exports = errorHandler;
