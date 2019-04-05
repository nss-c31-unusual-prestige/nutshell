import apiManager from "../apiManager.js";
import HtmlBuilder from "../HtmlBuilder.js"

//targets the events-section and assigns to a variable.
let eventContainer = document.getElementById("events-section");

export default {
    //runs throuh a forEach loop and appends data to the DOM.
    listAllEvents(){
        apiManager.getAll("events")
        .then(events => events.forEach(event => {
            console.log("eventsArray", events)
            //targets event by id and returns the name of the event and then appends to the DOM.
            eventContainer.appendChild(HtmlBuilder.elementBuilder("article", `eventName--${event.id}`, `${event.eventName}`))
            //targets event by id and returns the date of the event and then appends to the DOM.
            eventContainer.appendChild(HtmlBuilder.elementBuilder("article", `eventDate--${event.id}`, `${event.eventDate}`))
            //targets event by id and returns the location of the event and then appends to the DOM.
            eventContainer.appendChild(HtmlBuilder.elementBuilder("article", `eventLocation--${event.id}`, `${event.eventLocation}`))
        }))
    }
}