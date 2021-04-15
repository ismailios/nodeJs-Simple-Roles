const { ROLE } = require("../data");

function canViewProject(user, project) {
  return user.role === ROLE.ADMIN || project.userId === user.id;
}

function scopedProject(user, projects) {
  if (user.role === ROLE.ADMIN) return projects;
  return projects.filter((project) => project.userId === user.id);
}

module.exports = {
  canViewProject,
  scopedProject,
};
