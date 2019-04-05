import apiManager from "../apiManager.js"
import eventsDom from "../events/eventsDomManager.js"
import HtmlBuilder from "../HtmlBuilder.js"


export default {
    handleSave: () => {
        console.log("Save button clicked!!")
        //target each field by Id
        let eventsSection = document.getElementById("childEventsArticle")
        let eventName = document.getElementById("eventName")
        let eventDate = document.getElementById("eventDate")
        let eventLocation = document.getElementById("eventLocation")

        //create a new event object
        let newEvent = {
            eventName: eventName.value,
            eventDate: eventDate.value,
            eventLocation: eventLocation.value
        }
        //push newly created event to API
        console.log(newEvent)
        apiManager.postAll("events", newEvent)
        .then(() => {
            //clears eventsSection
            HtmlBuilder.clearElement(eventsSection)
            //after eventsSection is cleared refresh with new list
            eventsDom.listAllEvents()
        })
    },
    handleEdit : () => {
        console.log("Edit button clicked!!")

    },
    handleDelete: () => {
        console.log("Delete button clicked!!")
    }
}
