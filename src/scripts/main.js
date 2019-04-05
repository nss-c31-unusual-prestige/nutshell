import apiManger from "./apiManager.js"
import taskForm from "./task/taskForm.js"
import tasksDomBuilder from "./task/tasksDomBuilder.js";
import taskEventHandler from "./task/taskEventHandler.js";

taskForm.taskFormSection()
tasksDomBuilder.listAllTask()
taskEventHandler.handleSave()
