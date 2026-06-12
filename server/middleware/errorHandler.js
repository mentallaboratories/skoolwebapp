// server/middleware/errorHandler.js
// Central error handler — add as the last app.use() if needed.

export function errorHandler(err, _req, res, _next) {
  console.error(err.stack);
  res.status(err.status ?? 500).json({
    error: err.message ?? 'Internal Server Error',
  });
}
