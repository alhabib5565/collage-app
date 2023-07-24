export const saveUser = user => {
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    photo: user?.photoURL
  }

  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
    .then(res => res.json())
    .then(data => console.log(data))
}

export const collageDetails = async (id) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/collage/${id}`)
    const data = await res.json()
    return data
}
