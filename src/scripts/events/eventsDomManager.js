import apiManager from "../apiManager.js";
import HtmlBuilder from "../HtmlBuilder.js"

let eventContainer = document.getElementById("events-section");

export default {
    listAllEvents(){
        apiManager.getAll("events")
        .then(events => events.forEach(event => {
            console.log("eventsArray", events)
            eventContainer.appendChild(HtmlBuilder.elementBuilder("article", `eventName--${event.id}`, `${event.eventName}`))
            eventContainer.appendChild(HtmlBuilder.elementBuilder("article", `eventDate--${event.id}`, `${event.eventDate}`))
            eventContainer.appendChild(HtmlBuilder.elementBuilder("article", `eventLocation--${event.id}`, `${event.eventLocation}`))
        }))
    }
}