const authUser = (req, res, next) => {
  if (req.user == null) {
    res.status(403);
    return res.send("You're not authenticated");
  }
  next();
};

function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401);
      return res.send("not allowed");
    }
    next();
  };
}

module.exports = {
  authUser,
  authRole,
};
