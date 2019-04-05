import apiManager from "../apiManager.js";
import HtmlBuilder from "../HtmlBuilder.js";


export default {
    listAllTask() {
        let childSection = document.querySelector("#childTasksSection")
        HtmlBuilder.clearElement(childSection)
        apiManager.getAll("tasks")
        .then(tasks => tasks.forEach(tasks =>{
            childSection.appendChild(HtmlBuilder.elementBuilder("tasks", `newName--${tasks.id}`, `${tasks.newName}`))
            childSection.appendChild(HtmlBuilder.elementBuilder("tasks", `newDescription--${tasks.id}`, `${tasks.newDescription}`))
            childSection.appendChild(HtmlBuilder.elementBuilder("tasks", `newCompleteDate--${tasks.id}`, `${tasks.newCompleteDate}`))
        }))},
        childDisplay() {
            let taskSection =document.getElementById("tasks-section")
            childSection = HtmlBuilder.elementBuilder("tasks", "childTasksSection")
            taskSection.appendChild(taskSection)

        }
    }

