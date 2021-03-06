
//Checks credentials of user 
export async function logInUser(username, password ) {

    let newUser = { userName: username, password: password };
    
    // const response = await fetch('http://localhost:3000/login/auth/', {
    const response = await fetch('https://sparis-backend.herokuapp.com/login/auth/', {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
    })

    const users = await response.json();

    return users
}

export async function changeSavingGoalInDB(newGoal ) {

    console.log('newGoal from server',newGoal);
    //   const response = await fetch('http://localhost:3000/change/addSavingGoal/', {
      const response = await fetch('https://sparis-backend.herokuapp.com/change/addSavingGoal/', {

        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(newGoal)
    })
 const changes = await response.json();

    return changes
}

export async function changeBalanceInDB(changeNewBalance) {
    
    // const response = await fetch('http://localhost:3000/change/changeBalance/', {
    const response = await fetch('https://sparis-backend.herokuapp.com/change/changeBalance/', {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(changeNewBalance)
    })
    const changes = await response.json();
    return changes

}