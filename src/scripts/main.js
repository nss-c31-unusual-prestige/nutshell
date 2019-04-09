import apiManager from "./apiManager.js";
import newsFeedDOM from "./newsFeed/newsDomManage.js"
import newsForm from "./newsFeed/newsForm.js"
import newsEventHandler from "./newsFeed/newsEventHandler.js"
import homepage from "./Homepage/homePage.js"
import messageHandler from "./chat/messages.js"
// newsForm.newsForm()
// newsFeedDOM.childArticleContainer()
// newsFeedDOM.listAllNews()
import eventForm from "./events/eventsForm.js"
import eventsDom from "./events/eventsDomManager.js"

//call event form from eventsForm
eventForm.eventForm()
//call editEventForm
eventForm.editEventForm()
//call childEventContainer from eventsDomManager
eventsDom.childEventContainer()
//call listAllEvents from eventsForm
eventsDom.listAllEvents()
// //call chatbox inititialization function.
// messageManager.createChat();
homepage.homePage()
messageHandler.createChat();
