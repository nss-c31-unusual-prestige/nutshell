import apiManger from "../apiManager.js"
import taskform from "./task/taskForm.js"
import tasksDomBuilder from "./task/tasksDomBuilder.js";
import taskEventHandler from "./task/taskEventHandler.js";

taskform.taskFormSection()
tasksDomBuilder.listAllTask()
taskEventHandler.handleSave()
