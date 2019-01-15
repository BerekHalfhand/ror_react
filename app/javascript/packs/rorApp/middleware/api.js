// Private API
let post = (payload) => {
  console.log("Payload: " + payload);
}

// Public API
const helloWorld = () => {
  let payload = "Hello World! I'm an API!"

  post(payload)
}

const createUser = (username, fullname) => {
  $.ajax({
    url: "/api/v1/user",
    type: "POST",
    data: { user: { username: username, fullname: fullname, password: '', email: '' } },
    success: response => {
      console.log("createUser response: ", response);
      post(response);
    }
  });
}

const getUsers = (callback) => {
  $.getJSON('/api/v1/user.json', (response) => {
    callback(response);
    post(response);
  });
}

// Export Api
export const Api = {
  helloWorld,
  createUser,
  getUsers,
}
