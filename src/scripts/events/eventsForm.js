import HtmlBuilder from "../HtmlBuilder.js"
// import apiManager from "../apiManager.js"
import formEvent from "../events/eventsEventHandler"

//targets the events-section and assigns to a variable.
let eventContainer = document.getElementById("events-section");

export default {
    //create a form for creating new events
    eventForm() {

        //elementBuilder: (elementType, elementId, elementTextContent, elementValue)
        let eventDocFragment = document.createDocumentFragment()
        let eventArticle = HtmlBuilder.elementBuilder("article", "eventFormArticle")
        //create a label and input field for event name
        eventArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Event Name: ", "eventName"))
        let nameInput = eventArticle.appendChild(HtmlBuilder.elementBuilder("input", "eventName"))
        nameInput.placeholder = "Enter an event"
        //create a label and input field for event date
        eventArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Event Date: ", "eventDate"))
        let dateInput = eventArticle.appendChild(HtmlBuilder.elementBuilder("input", "eventDate"))
        dateInput.setAttribute("type", "date")
        //create a label and input field for event location
        eventArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Event Location: ", "eventLocation"))
        let locationInput = eventArticle.appendChild(HtmlBuilder.elementBuilder("input", "eventLocation"))
        locationInput.placeholder = "Enter a location"
        //create a button for saving data to API.
        let saveFormButton = HtmlBuilder.elementBuilder("button", undefined, "Save Event", "Save")

        //add an event handler to button to actually save data to the API.
        saveFormButton.addEventListener("click", formEvent.handleSave)

        //append the button, article, and fragments to DOM
        eventArticle.appendChild(saveFormButton)
        eventDocFragment.appendChild(eventArticle)
        eventContainer.appendChild(eventDocFragment)
    }
}