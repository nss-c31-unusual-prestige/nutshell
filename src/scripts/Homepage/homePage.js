import htmlBuilder from "../HtmlBuilder.js"
import homeEvent from "./homeEventListener.js"
import login from "../sessionStorage/login.js";

let mainArticle = document.getElementById("home-section")

export default {
    homePage(){
        let homePageArticle = htmlBuilder.elementBuilder("article", "homePageArticle")
        homePageArticle.appendChild(htmlBuilder.elementBuilder("h1", "homeTitle", "Unusual Homepage"))
        homePageArticle.appendChild(htmlBuilder.elementBuilder("label", undefined, "Username"))
        homePageArticle.appendChild(htmlBuilder.elementBuilder("input", "Username", "User"))
        homePageArticle.appendChild(htmlBuilder.elementBuilder("label", undefined, "Email"))
        homePageArticle.appendChild(htmlBuilder.elementBuilder("input", "Email", "Email"))

        let userLoginButton = htmlBuilder.elementBuilder("button", "userLogin", "Login")
        //login session storage handler.
        userLoginButton.addEventListener("click", event => {
            event.preventDefault();
            login.storeLogin();
        })
        homePageArticle.appendChild(userLoginButton)
        let registerButton = htmlBuilder.elementBuilder("button", "registerUser", "Register")
        registerButton.addEventListener("click", homeEvent.registerForm)
        homePageArticle.appendChild(registerButton)

        mainArticle.appendChild(homePageArticle)
    }
}