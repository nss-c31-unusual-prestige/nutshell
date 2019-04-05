import apiManager from "../apiManager.js";
import HtmlBuilder from "../HtmlBuilder.js";


export default {
    listAllTask() {
        let childSection = HtmlBuilder.elementBuilder("section", "childTasksSection")
        // HtmlBuilder.clearElement(childSection)
        apiManager.getAll("tasks")
            .then(tasks => tasks.forEach(task => {
                childSection.appendChild(HtmlBuilder.elementBuilder("section", `newName--${task.id}`, `${task.name}`))
                childSection.appendChild(HtmlBuilder.elementBuilder("section", `newDescription--${task.id}`, `${task.description}`))
                childSection.appendChild(HtmlBuilder.elementBuilder("section", `newCompleteDate--${task.id}`, `${task.completeDate}`))

                let tasksSection = document.getElementById("tasks-section")
                tasksSection.appendChild(childSection)
            }))
    }

}