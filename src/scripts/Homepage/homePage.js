import htmlBuilder from "../HtmlBuilder.js"
import homeEvent from "./homeEventListener.js"
import login from "../sessionStorage/login.js";
import messageEventHandler from "../chat/messageEventHandler.js";
import apiManager from "../apiManager.js";
import newsFeedDOM from "../newsFeed/newsDomManage.js"
import newsForm from "../newsFeed/newsForm.js"
import eventsDom from "../events/eventsDomManager.js"
import eventsForm from "../events/eventsForm.js"
import taskForm from "../task/taskForm.js"
import tasksDomBuilder from "../task/tasksDomBuilder.js";




let mainArticle = document.getElementById("home-section")
let currentUser = sessionStorage.getItem("user");
let currentId = sessionStorage.getItem("id");
let currentEmail = sessionStorage.getItem("email");
let currentName = sessionStorage.getItem("name");

export default {
    homePage() {
        let homePageArticle = htmlBuilder.elementBuilder("article", "homePageArticle")
        homePageArticle.appendChild(htmlBuilder.elementBuilder("h1", "homeTitle", "Unusual Homepage"))
        //when logged in.
        if (currentUser) {
            console.log(currentUser);
            homePageArticle.appendChild(htmlBuilder.elementBuilder("h2", "welcome", `Welcome, ${currentName}.`));
            const logOutButton = htmlBuilder.elementBuilder("button", "logout", "Log Out");
            logOutButton.addEventListener("click", event => {
                event.preventDefault();
                login.logOut();
            })
            homePageArticle.appendChild(logOutButton);
            //calls the page functions when the user is active.
            newsForm.newsForm()
            newsFeedDOM.childArticleContainer()
            newsFeedDOM.listAllNews()
            eventsForm.eventForm()
            eventsDom.childEventContainer()
            eventsDom.listAllEvents()
            taskForm.taskFormSection()
            tasksDomBuilder.listAllTask()
            messageEventHandler.createMessages()
            //when unregistered
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