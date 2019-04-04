import HtmlBuilder from "../HtmlBuilder.js"
import apiManager from "../apiManager.js"

let articleContainer = document.getElementById("articles-section")

export default {
    newsForm(){
        let newsDocFragment = document.createDocumentFragment()
        let newsArticle = document.createElement("article")
        newsArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Title: ", "newsTitle"))
        newsArticle.appendChild(HtmlBuilder.elementBuilder("input", "newsTitle", "Title", "newsTitle"))
        newsArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "URL: ", "newsUrl"))
        newsArticle.appendChild(HtmlBuilder.elementBuilder("input", "newsUrl", "URL", "URL"))
        newsArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Summary: ", "newsSummary"))
        newsArticle.appendChild(HtmlBuilder.elementBuilder("input", "newsSummary", "newsSummary", "Summary"))
newsDocFragment.appendChild(newsArticle)
articleContainer.appendChild(newsDocFragment)
    }
}