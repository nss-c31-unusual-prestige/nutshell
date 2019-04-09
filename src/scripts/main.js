
import homepage from "./Homepage/homePage.js"
homepage.homePage()




import apiManager from "./apiManager.js";

import newsFeedDOM from "./newsFeed/newsDomManage.js"
import newsForm from "./newsFeed/newsForm.js"

newsForm.newsForm()
newsFeedDOM.childArticleContainer()
newsFeedDOM.listAllNews()   

import messageHandler from "./chat/messages.js"
messageHandler.createChat();

import eventsDom from "./events/eventsDomManager.js"
import eventsForm from "./events/eventsForm.js"

eventsForm.eventForm()
eventsDom.childEventContainer()
eventsDom.listAllEvents()

import taskForm from "./task/taskForm.js"
import tasksDomBuilder from "./task/tasksDomBuilder.js";


taskForm.taskFormSection()
tasksDomBuilder.listAllTask()

