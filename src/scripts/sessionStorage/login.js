import apiManager from "../apiManager";

export default {
    storeLogin: function (username, email) {
        let userFound = false;
        sessionStorage.clear()
        apiManager.getAll("users").then(response => {
            for (let i = 0; i < response.length; i += 1) {
                console.log(response[i]);
                if (response[i].user === username && response[i].email === email) {
                    userFound = true;
                    alert("Logging in...");
                    sessionStorage.setItem("user", response[i].user);
                    sessionStorage.setItem("name", response[i].name);
                    sessionStorage.setItem("email", response[i].email)
                    sessionStorage.setItem("id", response[i].id);;
                    break
                }
            }
            if (userFound === false) {
                alert("Login failed. Please check your login credentials.");
            }
            location.reload();
        })
    },
    logOut: function () {
        sessionStorage.clear();
        alert("Logging out...")
        location.reload();
    }
}