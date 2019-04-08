import HtmlBuilder from "../HtmlBuilder.js"

let eventContainer = document.querySelector("#events-section")

export default {
    eventEditForm () {
        //elementBuilder: (elementType, elementId, elementTextContent, elementValue)
        let eventDocFragment = document.createDocumentFragment()
        let eventArticle = HtmlBuilder.elementBuilder("article", "eventFormArticle")
        //create a label and input field for the
    }
}