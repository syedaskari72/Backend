const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export {asyncHandler};




// async error handler middleware ka snippet hai
// // utils/asyncHandler.js
// const asyncHandler = (fn) => (req, res, next) => {
//   Promise.resolve(fn(req, res, next)).catch((err) => {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   });
// };

// module.exports = asyncHandler;


