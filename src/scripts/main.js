import apiManager from "./apiManager.js";
import newsFeedDOM from "./newsFeed/newsDomManage.js"
import newsForm from "./newsFeed/newsForm.js"
import newsEventHandler from "./newsFeed/newsEventHandler.js"

newsForm.newsForm()
newsFeedDOM.childArticleContainer()
newsFeedDOM.listAllNews()

import messageHandler from "./chat/messages.js"

messageHandler.createChat();