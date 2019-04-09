import apiManager from "../apiManager.js";
import HtmlBuilder from "../HtmlBuilder.js"
import formEvent from "../events/eventsEventHandler.js"
import formEdit from "../events/eventsForm.js"

export default {
    //runs throuh a forEach loop and appends data to the DOM.
    listAllEvents() {
        //targets the events-section and assigns to a variable.
        let childEvent = document.getElementById("childEventsArticle")
        HtmlBuilder.clearElement(childEvent);
        apiManager.getAll("events")
        // console.log("eventsArray", events)
            .then(events => events.forEach(event => {
                //targets event by id and returns the name of the event and then appends to the DOM.
                childEvent.appendChild(HtmlBuilder.elementBuilder("article", `eventName--${event.id}`, `${event.eventName}`))
                //targets event by id and returns the date of the event and then appends to the DOM.
                childEvent.appendChild(HtmlBuilder.elementBuilder("article", `eventDate--${event.id}`, `${event.eventDate}`))
                //targets event by id and returns the location of the event and then appends to the DOM.
                childEvent.appendChild(HtmlBuilder.elementBuilder("article", `eventLocation--${event.id}`, `${event.eventLocation}`))

                //create a button to allow the user to delete an event
                let deleteFormButton = HtmlBuilder.elementBuilder("button", `eventToDelete--${event.id}`, "Delete Event", "Delete")
                //add an event listener to delete button to delete an event
                deleteFormButton.addEventListener("click", formEvent.handleDelete)

                //create a button to allow the user to edit an event
                let editFormButton = HtmlBuilder.elementBuilder("button", `eventToEdit--${event.id}`, "Edit Event", "Edit")
                //add an event listener to edit button to bring up the edit form
                editFormButton.addEventListener("click", formEdit.editEventForm);


                //append the edit button to each event
                childEvent.appendChild(editFormButton);
                //append the edit button to each event
                childEvent.appendChild(deleteFormButton);
            }))},
            childEventContainer() {
                //target events-section
                let eventContainer = document.getElementById("events-section");
                //create and target childEventsArticle and set it to a variable
                let childEvent = HtmlBuilder.elementBuilder("article", "childEventsArticle");
                //append childEvent to eventContainer
                eventContainer.appendChild(childEvent);
            }
    }