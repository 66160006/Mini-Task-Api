function getErrorCode(status) {
  switch (status) {
    case 400:
      return "VALIDATION_ERROR";
    case 401:
      return "UNAUTHORIZED";
    case 403:
      return "ACCESS_DENIED";
    case 404:
      return "NOT_FOUND";
    case 409:
      return "CONFLICT";
    case 429:
      return "RATE_LIMIT_EXCEEDED";
    case 500:
    default:
      return "INTERNAL_SERVER_ERROR";
  }
}


function getDefaultMessage(status) {
  switch (status) {
    case 400:
      return "Invalid input data";
    case 401:
      return "Authentication required";
    case 403:
      return "You don't have permission to access this resource";
    case 404:
      return "Resource not found";
    case 409:
      return "Conflict occurred";
    case 429:
      return "Too many requests. Please try again later";
    case 500:
    default:
      return "Internal server error";
  }
}

const errorHandler = (err, req, res, next) => {
  console.error(' Error:', err); 


  const statusCode = err.statusCode || err.status || 500;


  const errorResponse = {
    error: {
      code: err.code || getErrorCode(statusCode),
      message: err.message || getDefaultMessage(statusCode),

      details: err.details || {},
      timestamp: new Date().toISOString(),
      path: req.originalUrl,
    },
  };


  res.status(statusCode).json(errorResponse);
};

module.exports = errorHandler;