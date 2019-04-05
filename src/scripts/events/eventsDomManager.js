import apiManager from "../apiManager.js";
import HtmlBuilder from "../HtmlBuilder.js"

export default {
    //runs throuh a forEach loop and appends data to the DOM.
    listAllEvents() {
        //targets the events-section and assigns to a variable.
        let childEvent = document.getElementById("childEventsArticle")
        apiManager.getAll("events")
            .then(events => events.forEach(event => {
                console.log("eventsArray", events)
                //targets event by id and returns the name of the event and then appends to the DOM.
                childEvent.appendChild(HtmlBuilder.elementBuilder("article", `eventName--${event.id}`, `${event.eventName}`))
                //targets event by id and returns the date of the event and then appends to the DOM.
                childEvent.appendChild(HtmlBuilder.elementBuilder("article", `eventDate--${event.id}`, `${event.eventDate}`))
                //targets event by id and returns the location of the event and then appends to the DOM.
                childEvent.appendChild(HtmlBuilder.elementBuilder("article", `eventLocation--${event.id}`, `${event.eventLocation}`))
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