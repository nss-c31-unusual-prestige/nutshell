import apiManager from "../apiManager.js";
import HtmlBuilder from "../HtmlBuilder.js";


export default {
    listAllTask() {
        let childSection = document.getElementById("childTasksSection")
        HtmlBuilder.clearElement(childSection)
        apiManager.getAll("tasks")
        .then(tasks => tasks.forEach(task => {
            let childDiv = HtmlBuilder.elementBuilder("div", `childDiv-${task.id}`)
                childDiv.appendChild(HtmlBuilder.elementBuilder("section", `newName--${task.id}`, `${task.name}`))
                childDiv.appendChild(HtmlBuilder.elementBuilder("section", `newDescription--${task.id}`, `${task.description}`))
                childDiv.appendChild(HtmlBuilder.elementBuilder("section", `newCompleteDate--${task.id}`, `${task.completeDate}`))

                let editFormButton = HtmlBuilder.elementBuilder("Button",`${task.id}`, "Edit Task", "Edit")
                childDiv.appendChild(editFormButton)
                editFormButton.addEventListener("click", function () {
                    childDiv.appendChild(taskFormSection.editTaskForm(task))
                })
                childSection.appendChild(childDiv)

            }))
    },

    childSectionForm() {
        let tasksSection = document.getElementById("tasks-section")
        let childSection = HtmlBuilder.elementBuilder("task", "childTasksSection")
        tasksSection.appendChild(childSection)
    }
}