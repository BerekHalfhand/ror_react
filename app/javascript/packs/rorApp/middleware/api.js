// Private API
let post = (payload) => {
  console.log("Payload: " + payload);
}

// Public API
const getUsers = (callback) => {
  console.log("API::getUsers");
  return $.getJSON('/api/v1/user.json');
}

const createUser = (user) => {
  console.log("API::createUser");
  return $.ajax({
    url: "/api/v1/user",
    type: "POST",
    data: { user: user },
  });
}

const editUser = (id, user) => {
  console.log("API::editUser");
  return $.ajax({
    url: "/api/v1/user/"+id,
    type: "PATCH",
    data: { user: user },
  });
}

const deleteUser = (id) => {
  console.log("API::deleteUser ", id);
  return $.ajax({
    url: `/api/v1/user/${id}`,
    type: "DELETE",
  });
}

// Export Api
export const Api = {
  getUsers,
  createUser,
  editUser,
  deleteUser,
}
