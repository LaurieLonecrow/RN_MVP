

export async function login(email, password) {
  const loginCredentials = await fetch('https://my-json-server.typicode.com/LaurieLonecrow/RN_MVP/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: email,
    password: password,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
  })
})
.then(res => res.json())
.catch(error => console.log('error', error))
.then(data => {
  return data});

return loginCredentials
}