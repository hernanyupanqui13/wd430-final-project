module.exports = async function validateEmptyBody(req, res, next) {  
  if(!req.body || Object.keys(req.body).length === 0) {
    res.status(422).json({
      msg: "Body not sent"
    });
  } else {
    next();
  }
  
}

