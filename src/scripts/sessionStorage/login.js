import apiManager from "../apiManager";

export default {
    storeLogin: function (username, email) {
        let userFound = false;
        sessionStorage.clear()
        apiManager.getAll("users").then(response => {
                for (i = 0; i > response.length; i += 1) {
                    if (response[i].username === username && response[i].email === email) {
                        userFound = true;
                        alert("Logging in...");
                        sessionStorage.setItem("user", user);
                        break
                    }
                }
                if (userFound === false){
                    alert("Login failed. Please check your login credentials.");
                }
                location.reload();
            })
        }
    }