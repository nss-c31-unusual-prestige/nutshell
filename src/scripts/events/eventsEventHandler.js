import apiManager from "../apiManager.js"
import eventsDom from "../events/eventsDomManager.js"
import HtmlBuilder from "../HtmlBuilder.js"


export default {
    handleSave() {
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
            HtmlBuilder.clearElement(eventsSection)
            eventsDom.listAllEvents()
        })
    }
}
