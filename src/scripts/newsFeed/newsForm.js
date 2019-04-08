import HtmlBuilder from "../HtmlBuilder.js"
import apiManager from "../apiManager.js"
import formEvent from "./newsEventHandler.js"


let articleContainer = document.getElementById("articles-section")

export default {
    
    newsForm() {
        let newsDocFragment = document.createDocumentFragment()
        let newsArticle = HtmlBuilder.elementBuilder("article", "newsFormArticle")

        newsArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Title: ", "newsTitle"))
        newsArticle.appendChild(HtmlBuilder.elementBuilder("input", "newsTitle", "Title"))

        newsArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "URL: ", "newsUrl"))
        newsArticle.appendChild(HtmlBuilder.elementBuilder("input", "newsUrl", "URL"))

        newsArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Summary: ", "newsSummary"))
        newsArticle.appendChild(HtmlBuilder.elementBuilder("input", "newsSummary", "newsSummary"))

        let saveFormButton = HtmlBuilder.elementBuilder("button", undefined, "Save Article", "Save")

        saveFormButton.addEventListener("click", formEvent.handleSave)

        newsArticle.appendChild(saveFormButton)
        newsDocFragment.appendChild(newsArticle)
        articleContainer.appendChild(newsDocFragment)
    },
    
        editNewsForm(newsObject) {
            // let currentNewsDivid = event.target.parentNode.id.split("-")[1]
            // let currentNewsDiv = document.getElementById(`newsDiv-${newsObject.id}`)
            let newsEditDiv = HtmlBuilder.elementBuilder("div", "newsEditDiv")
            newsEditDiv.className = ("newsEditDiv")
            // let newsEditFrag = document.createDocumentFragment()

//         apiManager.getOne("articles", event.target)
//         .then(article =>{
// console.log(article)
            // console.log("click", currentNewsForm.target.parentNode.id.split("-")[1])
            newsEditDiv.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Title: "))
            newsEditDiv.appendChild(HtmlBuilder.elementBuilder("input", `edit-news-title-${newsObject.id}`, undefined, newsObject.newsTitle))
            newsEditDiv.appendChild(HtmlBuilder.elementBuilder("label", undefined, "URL: "))
            newsEditDiv.appendChild(HtmlBuilder.elementBuilder("input", `edit-news-url-${newsObject.id}`, undefined, newsObject.url))
            newsEditDiv.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Summary: "))
            newsEditDiv.appendChild(HtmlBuilder.elementBuilder("input", `edit-news-summary-${newsObject.id}`, undefined, newsObject.summary))
            
            let editSaveButton = HtmlBuilder.elementBuilder("button", `save-${newsObject.id}`, "Save Article", "Save")
             editSaveButton.addEventListener("click", formEvent.handleEdit)
             newsEditDiv.appendChild(editSaveButton)
             return newsEditDiv
            //  newsEditFrag.appendChild(newsEditDiv)
            //  articleContainer.appendChild(newsEditDiv)
            //  currentNewsDiv.appendChild(newsEditFrag)
        }
        
}