import apiManager from "./apiManager.js"
import taskform from "./task/tasksDomBuilder"
import taskForm from "./task/taskForm.js"
import tasksDomBuilder from "./task/tasksDomBuilder.js";
import taskEventHandler from "./task/taskEventHandler.js";

taskForm.taskFormSection()
tasksDomBuilder.listAllTask()
taskEventHandler.handleSave()
