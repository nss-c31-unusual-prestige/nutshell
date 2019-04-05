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
        //create a placeholder for nameInput
        nameInput.placeholder = "Enter an event"
        //create a label and input field for event date
        eventArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Event Date: ", "eventDate"))
        let dateInput = eventArticle.appendChild(HtmlBuilder.elementBuilder("input", "eventDate"))
        //set an attribute for date input that creates a calendar dropdown
        dateInput.setAttribute("type", "date")
        //create a label and input field for event location
        eventArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Event Location: ", "eventLocation"))
        let locationInput = eventArticle.appendChild(HtmlBuilder.elementBuilder("input", "eventLocation"))
        //create a placeholder for locationInput
        locationInput.placeholder = "Enter a location"
        //create a button for saving data to API.
        let saveFormButton = HtmlBuilder.elementBuilder("button", undefined, "Save Event", "Save")

        //add an event listener to button to actually save data to the API.
        saveFormButton.addEventListener("click", formEvent.handleSave)

        //create a button to allow the user to edit an event
        let editFormButton = HtmlBuilder.elementBuilder("button", undefined, "Edit Event", "Edit")

        //add an event listener to button to bring up the edit form
        editFormButton.addEventListener("click", formEvent.handleEdit)

        //add a button for deleting an event
        let deleteFormButton = HtmlBuilder.elementBuilder("button", undefined, "Delete Event", "Delete")

        //add an event listener to button to delete the selected event
        deleteFormButton.addEventListener("click", formEvent.handleDelete)
        //append the button, article, and fragments to DOM
        eventArticle.appendChild(saveFormButton)
        eventArticle.appendChild(editFormButton)
        eventArticle.appendChild(deleteFormButton)
        eventDocFragment.appendChild(eventArticle)
        eventContainer.appendChild(eventDocFragment)
    }
}