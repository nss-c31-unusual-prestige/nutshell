import apiManger from "../apiManager.js"
import taskDom from "./tasksDomBuilder.js"
import HtmlBuilder from "../HtmlBuilder.js";

export default {
    handleSave() {
        let name = document.getElementById("newName")
        let description = document.getElementById("newDescription")
        let completeDate = document.getElementById("newCompleteDate")
        let checkbox = document.getElementById("newCheckbox")

        let newSection = {
            name: name.value,
            description: description.value,
            completeDate: completeDate.value,
            checkbox: checkbox.value
        }
        console.log(newSection)
        apiManger.postAll("tasks", newSection)
            .then(() => taskDom.listAllTask())
    },

    handleEdit(currentTask) {
        let taskId = currentTask.target.id.split("-")[1]
        let name = document.getElementById(`edit-task-name-${taskId}`)
        let description = document.getElementById(`edit-task-description-${taskId}`)
        let completeDate = document.getElementById(`edit-task-completeDate-${taskId}`)
        let checkbox =document.getElementById(`edit-task-checkbox-${taskId}`)

        let editTask = {
            name: name.value,
            description: description.value,
            completeDate: completeDate.value,
            checkbox: checkbox.value,
            id:taskId

        }
        console.log(editTask)
        apiManger.patchAll("tasks", `${taskId}`, editTask)
            .then(() => taskDom.listAllTask())
    },
    handleDelete() {
        console.log("delete button clicked")
        // event.target.id.split("--")[1]
        let taskId = event.target.id.split("--")[1]

        apiManger.delFetch("tasks", taskId)
            .then(() => taskDom.listAllTask())
    },
}
