const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};

const users = [
  { id: 1, name: "ismail", role: ROLE.ADMIN },
  { id: 2, name: "morad", role: ROLE.BASIC },
  { id: 3, name: "badr", role: ROLE.BASIC },
];

const projects = [
  { id: 1, name: "ismail's projects", userId: 1 },
  { id: 2, name: "morad's projects", userId: 2 },
  { id: 3, name: "badr's projects", userId: 3 },
];

module.exports = {
  ROLE: ROLE,
  users: users,
  projects: projects,
};
