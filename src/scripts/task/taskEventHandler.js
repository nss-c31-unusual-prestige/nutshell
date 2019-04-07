import apiManger from "../apiManager.js"
import taskDom from "./tasksDomBuilder.js"
import HtmlBuilder from "../HtmlBuilder.js";

export default {
    handleSave() {
        let name = document.getElementById("newName")
        let description = document.getElementById("newDescription")
        let completeDate = document.getElementById("newCompleteDate")

        let newSection = {
            name: name.value,
            description: description.value,
            completeDate: completeDate.value
        }
        console.log(newSection)
        apiManger.postAll("tasks", newSection)
            .then(() => taskDom.listAllTask())
    },

    handleEdit(currentTask) {
        let userId = currentTask.terget.id.split("-")[1]
        let name = document.getElementById(`edit-task-name-${userId.id}`).value
        let description = document.getElementById(`edit-task-decription-${userId.id}`).value
        let completeDate = document.getElementById(`edit-task-completeDate-${userId.id}`)

        let editTask = {
            name: name,
            description: description,
            completeDate: completeDate
        }
        console.log(editTask)
        apiManger.postAll("tasks", `${userId}`, editTask)
            .then(() => taskDom.listAllTask())
    }
}