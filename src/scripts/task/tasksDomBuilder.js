import apiManager from "../apiManager.js";
import HtmlBuilder from "../HtmlBuilder.js";
import taskForm from "./taskForm.js"
import event from "./taskEventHandler.js"

export default {
    listAllTask() {
        const tasksSection = document.querySelector("#taskSection")
        let childSection = document.createElement("article")
        HtmlBuilder.clearElement(tasksSection)
        tasksSection.appendChild(childSection)
        apiManager.getAll("tasks")
        .then(tasks => tasks.forEach(task => {
            let childDiv = HtmlBuilder.elementBuilder("div", `childDiv-${task.id}`)
                childDiv.id = "childDiv"
                childDiv.appendChild(HtmlBuilder.elementBuilder("section", `newName--${task.id}`, `${task.name}`))
                childDiv.appendChild(HtmlBuilder.elementBuilder("section", `newDescription--${task.id}`, `${task.description}`))
                childDiv.appendChild(HtmlBuilder.elementBuilder("section", `newCompleteDate--${task.id}`, `${task.completeDate}`))
                childDiv.appendChild(HtmlBuilder.elementBuilder("section", `newCheckbox--${task.id}`, `${task.checkbox}`))
                if(taskObject.isCompleted === true) {
                 let editButtonForm = HtmlBuilder.elementBuilder("button", undefined, "Task Complete")
                 editButtonForm.addEventListener("click", handleComplete)
                }

                let deleteFormButtom = HtmlBuilder.elementBuilder("button", `delete--${task.id}`, "Delete Task", "Delete")
                deleteFormButtom.classList = "delete"
                deleteFormButtom.addEventListener("click", event.handleDelete)
                childDiv.appendChild(deleteFormButtom)

                let editFormButton = HtmlBuilder.elementBuilder("button",`save-${task.id}`, "Task Edit", "Edit")
                editFormButton.id = "editButton"
                childDiv.appendChild(editFormButton)
                editFormButton.addEventListener("click", function () {
                    childDiv.appendChild(taskForm.editTaskForm(task))
                })
                childSection.appendChild(childDiv)

            }))
    },

    childTaskSection() {
        let tasksSection = document.getElementById("tasks-section")
        let childSection = HtmlBuilder.elementBuilder("task", "childTasksSection")
        tasksSection.appendChild(childSection)
    }
}