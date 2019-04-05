import apiManager from "../apiManager.js";
import HtmlBuilder from "../HtmlBuilder.js";


export default {
    listAllTask() {
        let taskSection = document.querySelector("#childTasksSection")
        apiManager.getAll("tasks")
        .then(tasks => tasks.forEach(tasks =>{
            taskSection.appendChild(HtmlBuilder.elementBuilder("tasks", `name--${tasks.id}`, `${tasks.name}`))
            taskSection.appendChild(HtmlBuilder.elementBuilder("tasks", `description--${tasks.id}`, `${tasks.description}`))
            taskSection.appendChild(HtmlBuilder.elementBuilder("tasks", `completeDate--${tasks.id}`, `${tasks.completeDate}`))
        }))},
        childDisplay() {
            let childTasksSection =document.getElementById("tasks-section")
            taskSection = HtmlBuilder.elementBuilder("tasks", "childTasksSection")
            childTasksSection.appendChild(taskSection)

        }
    }

