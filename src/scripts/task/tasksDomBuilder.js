import apiManager from "../apiManager.js";
import HtmlBuilder from "../HtmlBuilder.js";
import taskForm from "./taskForm.js"

export default {
    listAllTask() {
        const tasksSection = document.querySelector("#taskSection")
        let childSection = document.createElement("article")
        HtmlBuilder.clearElement(tasksSection)
        tasksSection.appendChild(childSection)
        apiManager.getAll("tasks")
        .then(tasks => tasks.forEach(task => {
            let childDiv = HtmlBuilder.elementBuilder("div", `childDiv-${task.id}`)
                childDiv.appendChild(HtmlBuilder.elementBuilder("section", `newName--${task.id}`, `${task.name}`))
                childDiv.appendChild(HtmlBuilder.elementBuilder("section", `newDescription--${task.id}`, `${task.description}`))
                childDiv.appendChild(HtmlBuilder.elementBuilder("section", `newCompleteDate--${task.id}`, `${task.completeDate}`))

                let deleteFormButtom = HtmlBuilder.elementBuilder("buuton", `delete--${task.id}`, )

                let editFormButton = HtmlBuilder.elementBuilder("button",`${task.id}`, "Task Edit", "Edit")
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