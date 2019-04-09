import apiManager from "../apiManager.js"
import HtmlBuilder from "../HtmlBuilder.js"
import newsForm from "./newsForm"
import newsEvent from "./newsEventHandler.js"

// container for appending articles to DOM.


export default {
    // Function to list all News articles to DOM
    listAllNews(){

        let childArticle = document.querySelector("#childNewsArticle")
        HtmlBuilder.clearElement(childArticle)
        apiManager.getAll("articles")
        .then(articles => articles.forEach(article => {
            let newsDiv = HtmlBuilder.elementBuilder("div", `newsDiv-${article.id}`)
            newsDiv.className = ("newsDiv")
            newsDiv.appendChild(HtmlBuilder.elementBuilder("article", `newsTitle--${article.id}`, `Title: ${article.newsTitle}`))
            newsDiv.appendChild(HtmlBuilder.elementBuilder("article", `newsSummary--${article.id}`, `Summary: ${article.summary}`))
            newsDiv.appendChild(HtmlBuilder.elementBuilder("article", `newsUrl--${article.id}`, `URL: ${article.url}`))
            newsDiv.appendChild(HtmlBuilder.elementBuilder("article", `newsTimeStamp--${article.id}`, `Uploaded:${article.timeStamp}`))

            let deleteFormButton = HtmlBuilder.elementBuilder("button", `delete--${article.id}`, "Delete Article", "Delete")
            deleteFormButton.addEventListener("click", newsEvent.handleDelete)
            newsDiv.appendChild(deleteFormButton)

            let editFormButton = HtmlBuilder.elementBuilder("button", `${article.id}`, "Edit Article", "Edit")
            newsDiv.appendChild(editFormButton)
            editFormButton.addEventListener("click", function(){
                newsDiv.appendChild(newsForm.editNewsForm(article))

            })

            childArticle.appendChild(newsDiv)

        }))},
        childArticleContainer() {
            let articleContainer = document.getElementById("articles-section");
            let childArticle = HtmlBuilder.elementBuilder("article", "childNewsArticle");
            articleContainer.appendChild(childArticle);
        }
    }