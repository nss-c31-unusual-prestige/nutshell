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
    
        editNewsForm(currentNewsForm) {
            let currentNewsDivid = currentNewsForm.target.parentNode.id.split("-")[1]
            let currentNewsDiv = document.getElementById(`newsDiv-${currentNewsDivid}`)
            let newsEditDiv = HtmlBuilder.elementBuilder("div", "newsEditDiv")
            let newsEditFrag = document.createDocumentFragment()
            console.log("click", currentNewsForm.target.parentNode.id.split("-")[1])
            newsEditDiv.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Title: "))
            newsEditDiv.appendChild(HtmlBuilder.elementBuilder("input", `edit-news-title-${currentNewsDivid}`, currentNewsForm.newsTitle))
            newsEditDiv.appendChild(HtmlBuilder.elementBuilder("label", undefined, "URL: "))
            newsEditDiv.appendChild(HtmlBuilder.elementBuilder("input", `edit-news-url-${currentNewsDivid}`, currentNewsForm.url))
            newsEditDiv.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Summary: "))
            newsEditDiv.appendChild(HtmlBuilder.elementBuilder("input", `edit-news-summary-${currentNewsDivid}`, currentNewsForm.summary))
            
            let editSaveButton = HtmlBuilder.elementBuilder("button", undefined, "Save Article", "Save")
             editSaveButton.addEventListener("click", formEvent.handleEdit(currentNewsForm))
             newsEditDiv.appendChild(editSaveButton)
             newsEditFrag.appendChild(newsEditDiv)
             currentNewsDiv.appendChild(newsEditFrag)
        }
        
}