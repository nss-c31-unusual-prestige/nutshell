import HtmlBuilder from "../HtmlBuilder.js"
import apiManager from "../apiManager.js"

let articleContainer = document.getElementById("articles-section")

export default {
    newsForm(){
        let newsDocFragment = document.createDocumentFragment()

        newsDocFragment.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Title: ", "newsTitle"))
        newsDocFragment.appendChild(HtmlBuilder.elementBuilder("input", "newsTitle", "Title", "newsTitle"))

articleContainer.appendChild(newsDocFragment)
    }
}