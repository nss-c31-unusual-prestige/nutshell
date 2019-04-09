
import taskForm from "./task/taskForm.js"
import tasksDomBuilder from "./task/tasksDomBuilder.js";
import taskEventHandler from "./task/taskEventHandler.js";

taskForm.taskFormSection()
tasksDomBuilder.listAllTask()
// taskEventHandler.listAllTask()
import apiManager from "./apiManager.js";
import newsFeedDOM from "./newsFeed/newsDomManage.js"
import newsForm from "./newsFeed/newsForm.js"
import newsEventHandler from "./newsFeed/newsEventHandler.js"
import homepage from "./Homepage/homePage.js"
import messageHandler from "./chat/messages.js"
// newsForm.newsForm()
// newsFeedDOM.childArticleContainer()
// newsFeedDOM.listAllNews()

homepage.homePage()
messageHandler.createChat();
