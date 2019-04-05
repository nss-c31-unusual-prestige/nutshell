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
            summary: newsSummary.value
        }
        console.log(newArticle)
        // Posting new article into database and displaying all articles
        apiManager.postAll("articles", newArticle)
        .then(() => newsDom.listAllNews())
    }
}