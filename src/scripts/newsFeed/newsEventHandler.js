import apiManager from "../apiManager.js"
import newsDom from "./newsDomManage"

export default {
    // Save New Article being created
    handleSave() {
        let newsTitle = document.getElementById("newsTitle")
        let newsUrl = document.getElementById("newsUrl")
        let newsSummary = document.getElementById("newsSummary")

// Syntax of the new article object being pushed into the Database
        let newArticle = {
            newsTitle: newsTitle.value,
            url: newsUrl.value,
            summary: newsSummary.value,
            timeStamp: new Date()
        }
        console.log(newArticle)
        // Posting new article into database and displaying all articles
        apiManager.postAll("articles", newArticle)
        .then(() => newsDom.listAllNews())
    },
    handleEdit(currentNews) {
        apiManager.getOne("articles", `${currentNews.id}`)
        .then(article => {
        // let newsTitle = document.getElementById("newsTitle")
        // let newsUrl = document.getElementById("newsUrl")
        // let newsSummary = document.getElementById("newsSummary")

        let editedArticle = {
            newsTitle: article.newsTitle.value,
            url: article.newsUrl.value,
            summary: article.newsSummary.value,
            timeStamp: new Date()
        }
        console.log(editedArticle)

        })
        
    }
}