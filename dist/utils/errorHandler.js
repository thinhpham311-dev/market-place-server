"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleError = void 0;
var handleError = exports.handleError = function handleError(error) {
  // Check for specific types of errors and format accordingly
  if (error.name === 'ValidationError') {
    return {
      statusCode: 400,
      message: 'There was a validation error. Please check the input fields.',
      details: error.errors
    };
  }
  if (error.name === 'MongoError' && error.code === 11000) {
    return {
      statusCode: 409,
      message: 'Duplicate entry detected. This data already exists in the database.'
    };
  }

  // Catch all other errors
  return {
    statusCode: 500,
    message: 'An unexpected error occurred. Please try again later.',
    details: error.message
  };
};