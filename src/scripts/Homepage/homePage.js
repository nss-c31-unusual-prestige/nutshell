import htmlBuilder from "../HtmlBuilder.js"
import homeEvent from "./homeEventListener.js"
import login from "../sessionStorage/login.js";

let mainArticle = document.getElementById("home-section")
let currentUser = sessionStorage.getItem("user");
let currentId = sessionStorage.getItem("id");
let currentEmail = sessionStorage.getItem("email");
let currentName = sessionStorage.getItem("name");

export default {
    homePage() {
        let homePageArticle = htmlBuilder.elementBuilder("article", "homePageArticle")
        homePageArticle.appendChild(htmlBuilder.elementBuilder("h1", "homeTitle", "Unusual Homepage"))
        if (currentUser) {
            console.log(currentUser);
            homePageArticle.appendChild(htmlBuilder.elementBuilder("h2", "welcome", `Welcome, ${currentName}.`));
            const logOutButton = htmlBuilder.elementBuilder("button", "logout", "Log Out");
            logOutButton.addEventListener("click", event => {
                event.preventDefault();
                login.logOut();
            })
            homePageArticle.appendChild(logOutButton);
        } else {
            homePageArticle.appendChild(htmlBuilder.elementBuilder("label", undefined, "Username"))
            homePageArticle.appendChild(htmlBuilder.elementBuilder("input", "Username", "User"))
            homePageArticle.appendChild(htmlBuilder.elementBuilder("label", undefined, "Email"))
            homePageArticle.appendChild(htmlBuilder.elementBuilder("input", "Email", "Email"))

            let userLoginButton = htmlBuilder.elementBuilder("button", "userLogin", "Login")
            //login session storage handler.
            userLoginButton.addEventListener("click", event => {
                event.preventDefault();
                const username = document.getElementById("Username").value;
                const email = document.getElementById("Email").value
                login.storeLogin(username, email);
            })
            homePageArticle.appendChild(userLoginButton)
            let registerButton = htmlBuilder.elementBuilder("button", "registerUser", "Register")
            registerButton.addEventListener("click", homeEvent.registerForm)
            homePageArticle.appendChild(registerButton)
        }
        mainArticle.appendChild(homePageArticle)
    }
}