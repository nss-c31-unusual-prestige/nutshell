import apiManager from "../apiManager.js"
import HtmlBuilder from "../HtmlBuilder.js"

let articleContainer = document.getElementById("articles-section")

export default {
    listAllNews(){
        apiManager.getAll("articles")
        .then(articles => articles.forEach(article => {
            articleContainer.appendChild(HtmlBuilder.elementBuilder("article", `newsTitle--${article.id}`, `${article.newsTitle}`))
            articleContainer.appendChild(HtmlBuilder.elementBuilder("article", `newsSummary--${article.id}`, `${article.summary}`))
            articleContainer.appendChild(HtmlBuilder.elementBuilder("article", `newsUrl--${article.id}`, `${article.url}`))
        
        }))}}