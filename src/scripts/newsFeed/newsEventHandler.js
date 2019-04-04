export default {
    handleSave() {
        let newsTitle = document.getElementById("newsTitle")
        let newsUrl = document.getElementById("newsUrl")
        let newsSummary = document.getElementById("newsSummary")


        let newArticle = {
            newsTitle: newsTitle.value,
            url: newsUrl.value,
            summary: newsSummary.value
        }
        console.log(newArticle)
    }
}