import apiManager from "./apiManager.js";
import eventsDom from "./events/eventsDomManager.js"
import eventForm from "./events/eventsForm.js"
import eventsEventHandler from "./events/eventsEventHandler.js"

//call event form from eventsForm
eventForm.eventForm()
//call childEventContainer from eventsDomManager
eventsDom.childEventContainer()
//call listAllEvents from eventsForm
eventsDom.listAllEvents()