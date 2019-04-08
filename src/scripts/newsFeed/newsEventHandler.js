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
        let userId = currentNews.target.id.split("-")[1]
        let newsTitle = document.getElementById(`edit-news-title-${userId}`).value
        let newsUrl = document.getElementById(`edit-news-url-${userId}`).value
        let newsSummary = document.getElementById(`edit-news-summary-${userId}`).value
        console.log(newsTitle)
        let editedArticle = {
            newsTitle: newsTitle,
            url: newsUrl,
            summary: newsSummary,
            timeStamp: new Date()
        }
        apiManager.patchAll("articles", `${userId}`, editedArticle )
        .then(() => {
            newsDom.listAllNews()
        })
            


        
        
    }
}