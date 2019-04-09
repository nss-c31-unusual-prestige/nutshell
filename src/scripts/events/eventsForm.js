import HtmlBuilder from "../HtmlBuilder.js"
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
        //add an event listener to button to delete the selected event
        // deleteFormButton.addEventListener("click", formEvent.handleDelete)
        //append the button, article, and fragments to DOM
        eventArticle.appendChild(saveFormButton)
        // eventArticle.appendChild(editFormButton)
        // eventArticle.appendChild(deleteFormButton)
        eventDocFragment.appendChild(eventArticle)
        eventContainer.appendChild(eventDocFragment)
    },
    editEventForm(eventsObject) {
        let eventsEditDiv = HtmlBuilder.elementBuilder("div", "eventsEditDiv");
        eventsEditDiv.className = ("eventsEditDiv");
        let eventId = eventsObject.target.id.split("--")[1]
        console.log(eventId)
        console.log(eventsObject)

        //create label and input elements for data to be passed in by user
        //name input was using edit-event-name-- to target input field
        eventsEditDiv.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Event Name: "));
        eventsEditDiv.appendChild(HtmlBuilder.elementBuilder("input", `edit-event-name--${eventId}`, undefined, eventId.eventName))
        //date input
        eventsEditDiv.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Event Date: "));
        eventsEditDiv.appendChild(HtmlBuilder.elementBuilder("input", `edit-event-date--${eventId}`, undefined, eventId.eventDate))
        //location input
        eventsEditDiv.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Event Location: "));
        eventsEditDiv.appendChild(HtmlBuilder.elementBuilder("input", `edit-event-location--${eventId}`,undefined, eventId.eventLocation))
    }
}