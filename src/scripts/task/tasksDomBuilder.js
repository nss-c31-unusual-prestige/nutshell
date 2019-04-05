import apiManager from "../apiManager.js";
import HtmlBuilder from "../HtmlBuilder.js";


export default {
    listAllTask() {
      let childSection = HtmlBuilder.elementBuilder("tasks", "childTasksSection")
        // HtmlBuilder.clearElement(childSection)
        apiManager.getAll("tasks")
            .then(tasks => tasks.forEach(task => {
                childSection.appendChild(HtmlBuilder.elementBuilder("tasks", `newName--${task.id}`, `${task.newName}`))
                childSection.appendChild(HtmlBuilder.elementBuilder("tasks", `newDescription--${task.id}`, `${task.newDescription}`))
                childSection.appendChild(HtmlBuilder.elementBuilder("tasks", `newCompleteDate--${task.id}`, `${task.newCompleteDate}`))
            }))
    },
    childDisplay() {
        let taskSection = document.getElementById("tasks-section")
        taskSection.appendChild(childSection)

    }
}