import HtmlBuilder from "../HtmlBuilder"
import apiManager from "../apiManager.js"

let mainArticle = document.getElementById("home-section")
const homeEventListener = {

    homeSave() {
        let user = document.getElementById("newUsername")
        let email = document.getElementById("newEmail")
        let name = document.getElementById("newName")
        alert("Registered new user!");
        console.log(user)
        console.log(email)
        let newUser = {
            user: user.value,
            email: email.value,
            name: name.value
        }
        user.value = "";
        email.value = "";
        name.value = "";
        console.log(newUser)
        apiManager.postAll("users", newUser)
    },
    registerForm() {
        let registerFormArticle = HtmlBuilder.elementBuilder("article", "homeRegisterArticle")
        registerFormArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Username"))
        registerFormArticle.appendChild(HtmlBuilder.elementBuilder("input", "newUsername", "Username"))
        registerFormArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Email"))
        registerFormArticle.appendChild(HtmlBuilder.elementBuilder("input", "newEmail", "Email"))
        registerFormArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Name"))
        registerFormArticle.appendChild(HtmlBuilder.elementBuilder("input", "newName", "Name"))

        
        console.log(homeEventListener)
        let saveUserbutton = HtmlBuilder.elementBuilder("button", "saveUser", "Register")
        saveUserbutton.addEventListener("click", homeEventListener.homeSave)


        registerFormArticle.appendChild(saveUserbutton)
        mainArticle.appendChild(registerFormArticle)
    }
}

export default homeEventListener