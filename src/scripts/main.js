import apiManager from "./apiManager.js";
import eventsDom from "./events/eventsDomManager.js"
import eventForm from "./events/eventsForm.js"
import eventsEventHandler from "./events/eventsEventHandler.js"

eventForm.eventForm()
eventsDom.childEventContainer()
eventsDom.listAllEvents()