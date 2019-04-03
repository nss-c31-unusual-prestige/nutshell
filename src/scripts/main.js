import apiManager from "./apiManager.js";

let testObject = {
    email: "user@example.com",
      user: "username",
      name: "First Last"
}

// apiManager.getAll("users").then(usersArray => {
//             console.log(usersArray)
//         })

// apiManager.getOne("users", 2).then(user =>{
//     console.log(user)
// });


apiManager.postAll("users", testObject)