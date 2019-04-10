import apiManager from "../apiManager.js"
import newsDom from "./newsDomManage"

let currentId = sessionStorage.getItem("id");
currentId = parseInt(currentId);


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
            timeStamp: new Date(),
            user_id: currentId
        }
        console.log(newArticle)
        // Posting new article into database and displaying all articles
        apiManager.postAll("articles", newArticle)
        .then(() => newsDom.listAllNews())
    },
    handleEdit(currentNews) {
        let newsId = currentNews.target.id.split("-")[1]
        let newsTitle = document.getElementById(`edit-news-title-${newsId}`).value
        let newsUrl = document.getElementById(`edit-news-url-${newsId}`).value
        let newsSummary = document.getElementById(`edit-news-summary-${newsId}`).value
        console.log(newsTitle)
        let editedArticle = {
            newsTitle: newsTitle,
            url: newsUrl,
            summary: newsSummary,
            timeStamp: new Date()
        }
        apiManager.patchAll("articles", `${newsId}`, editedArticle )
        .then(() => {
            newsDom.listAllNews()
        })
    },
        handleDelete() {
            console.log("delete button clicked")
    event.target.id.split("--")[1]
  
  let articleId = event.target.id.split("--")[1];

  apiManager.delFetch("articles", articleId).then(() => newsDom.listAllNews());
}
 
}