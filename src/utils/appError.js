class AppError extends Error {
  constructor(statusCode, code, message, details = {}) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    this.isOperational = true; // บอกว่าเป็น Error ที่เรารู้จัก (ไม่ใช่ Bug ของโปรแกรม)

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;