import messageManager from "../scripts/chat/messages/"
import apiManager from "./apiManager.js";
import eventsDom from "./events/eventsDomManager.js"
import eventForm from "./events/eventsForm.js"
import eventsEventHandler from "./events/eventsEventHandler.js"

//call event form from eventsForm
eventForm.eventForm()
//call editEventForm
// eventForm.editEventForm()
//call childEventContainer from eventsDomManager
eventsDom.childEventContainer()
//call listAllEvents from eventsForm
eventsDom.listAllEvents()
// //call chatbox inititialization function.
// messageManager.createChat();
