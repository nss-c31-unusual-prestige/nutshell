import apiManager from "../apiManager.js"
import HtmlBuilder from "../HtmlBuilder.js"
// container for appending articles to DOM.


export default {
    // Function to list all News articles to DOM
    listAllNews(){
        let childArticle = document.querySelector("#childNewsArticle")
        HtmlBuilder.clearElement(childArticle)
        apiManager.getAll("articles")
        .then(articles => articles.forEach(article => {
<<<<<<< HEAD
            articleContainer.appendChild(HtmlBuilder.elementBuilder("article", `newsTitle--${article.id}`, `${article.newsTitle}`))
            articleContainer.appendChild(HtmlBuilder.elementBuilder("article", `newsSummary--${article.id}`, `${article.summary}`))
            articleContainer.appendChild(HtmlBuilder.elementBuilder("article", `newsUrl--${article.id}`, `${article.url}`))
        
        }))}}
=======
            childArticle.appendChild(HtmlBuilder.elementBuilder("article", `newsTitle--${article.id}`, `${article.newsTitle}`))
            childArticle.appendChild(HtmlBuilder.elementBuilder("article", `newsSummary--${article.id}`, `${article.summary}`))
            childArticle.appendChild(HtmlBuilder.elementBuilder("article", `newsUrl--${article.id}`, `${article.url}`))

        }))},
        childArticleContainer() {
            let articleContainer = document.getElementById("articles-section");
            let childArticle = HtmlBuilder.elementBuilder("article", "childNewsArticle");
            articleContainer.appendChild(childArticle);
        }
    }
<<<<<<< HEAD
>>>>>>> ff08f2431c5466c191d877275353564e4af804a3
=======
>>>>>>> 85b6ce5db5dbdb996c09365d157935f4e27d2d64
