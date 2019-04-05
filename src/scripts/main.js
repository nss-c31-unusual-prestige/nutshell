import apiManager from "./apiManager.js"
import taskform from "./task/tasksDomBuilder"

<<<<<<< HEAD
taskform.listAllTask()
=======
import taskForm from "./task/taskForm.js"
import tasksDomBuilder from "./task/tasksDomBuilder.js";
import taskEventHandler from "./task/taskEventHandler.js";


import messageManager from "../scripts/chat/messages/"
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
//call chatbox inititialization function.
messageManager.createChat();

taskForm.taskFormSection()
tasksDomBuilder.listAllTask()
taskEventHandler.handleSave()
>>>>>>> 85b6ce5db5dbdb996c09365d157935f4e27d2d64
