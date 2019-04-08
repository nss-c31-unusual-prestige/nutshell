import htmlBuilder from "./HtmlBuilder.js"

export default {
    homePage(){
        let homePageArticle = htmlBuilder.elementBuilder("article", "homePageArticle")
        homePageArticle.appendChild(htmlBuilder.elementBuilder("h1", "homeTitle", "Unusual Homepage"))
        homePageArticle.appendChild(htmlBuilder.elementBuilder("label", undefined, "Username"))
        homePageArticle.appendChild(htmlBuilder.elementBuilder("input", "Username", "User"))
        homePageArticle.appendChild(htmlBuilder.elementBuilder("label", undefined, "Email"))
        homePageArticle.appendChild(htmlBuilder.elementBuilder("input", "Email", "Email"))
    }
}