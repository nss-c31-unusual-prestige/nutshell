import newsFeedDOM from "./newsFeed/newsDomManage.js"
import newsForm from "./newsFeed/newsForm.js"

newsForm.newsForm()
newsFeedDOM.childArticleContainer()
newsFeedDOM.listAllNews()

import homepage from "./Homepage/homePage.js"
import messageHandler from "./chat/messages.js"

homepage.homePage()
messageHandler.createChat();