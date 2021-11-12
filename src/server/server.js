
//Checks credentials of user 
export async function logInUser(username, password ) {

    let newUser = { userName: username, password: password };

    const response = await fetch('http://localhost:3000/login/auth/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
    })

    const users = await response.json();

    return users
}