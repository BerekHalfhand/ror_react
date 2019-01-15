// Private API
let post = (payload) => {
  console.log(payload);
}

// Public API
const helloWorld = () => {
  let payload = "Hello World! I'm an API!"

  post(payload)
}

// Export Api
export const Api = {
  helloWorld
}
