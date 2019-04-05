import apiManager from "../apiManager.js";
import HtmlBuilder from "../HtmlBuilder.js";


export default {
    listAllTask() {
        let taskSection = document.querySelector("#childTasksSection")
        apiManager.getAll("tasks")
        .then(tasks => tasks.forEach(tasks =>{
            taskSection.appendChild(HtmlBuilder.elementBuilder("tasks", `newName--${tasks.id}`, `${tasks.newName}`))
            taskSection.appendChild(HtmlBuilder.elementBuilder("tasks", `newDescription--${tasks.id}`, `${tasks.newDescription}`))
            taskSection.appendChild(HtmlBuilder.elementBuilder("tasks", `newCompleteDate--${tasks.id}`, `${tasks.newCompleteDate}`))
        }))},
        childDisplay() {
            let childTasksSection =document.getElementById("tasks-section")
            taskSection = HtmlBuilder.elementBuilder("tasks", "childTasksSection")
            childTasksSection.appendChild(taskSection)

        }
    }

