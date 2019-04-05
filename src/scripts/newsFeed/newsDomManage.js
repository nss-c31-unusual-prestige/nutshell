import apiManager from "../apiManager.js"
import HtmlBuilder from "../HtmlBuilder.js"
import newsForm from "./newsForm"
// container for appending articles to DOM.


export default {
    // Function to list all News articles to DOM
    listAllNews(){
        
        let childArticle = document.querySelector("#childNewsArticle")
        HtmlBuilder.clearElement(childArticle)
        apiManager.getAll("articles")
        .then(articles => articles.forEach(article => {
            let newsDiv = HtmlBuilder.elementBuilder("div", `newsDiv-${article.id}`)
            newsDiv.appendChild(HtmlBuilder.elementBuilder("article", `newsTitle--${article.id}`, `${article.newsTitle}`))
            newsDiv.appendChild(HtmlBuilder.elementBuilder("article", `newsSummary--${article.id}`, `${article.summary}`))
            newsDiv.appendChild(HtmlBuilder.elementBuilder("article", `newsUrl--${article.id}`, `${article.url}`))
            newsDiv.appendChild(HtmlBuilder.elementBuilder("article", `newsTimeStamp--${article.id}`, `${article.timeStamp}`))

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