const express = require("express");
const { users, ROLE } = require("./data");

const { authUser, authRole } = require("./basicAuth");

const projectRouter = require("./routes/projects");

const app = express();
app.use(express.json());
app.use(setUser);

app.use("/projects", projectRouter);

app.get("/", (req, res, next) => {
  res.send("Home Page");
});

app.get("/dashboard", authUser, (req, res, next) => {
  res.send("Dashboard Page");
});

app.get("/admin", authUser, authRole(ROLE.ADMIN), (req, res, next) => {
  res.send("Admin Page");
});

function setUser(req, res, next) {
  const userId = req.body.userId;

  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }

  next();
}

app.listen(3000);
