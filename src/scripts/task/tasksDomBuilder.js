import apiManager from "../apiManager.js";
import HtmlBuilder from "../HtmlBuilder.js";

let display = document.querySelector("#tasks-section")

export default {
    listAllTask() {
        apiManager.getAll("tasks")
        .then(tasks => tasks.forEach(tasks =>{
            display.appendChild(HtmlBuilder.elementBuilder("tasks", `taskName--${tasks.id}`, `${tasks.name}`))
            display.appendChild(HtmlBuilder.elementBuilder("tasks", `taskDescription--${tasks.id}`, `${tasks.description}`))
            display.appendChild(HtmlBuilder.elementBuilder("tasks", `taskCompleteDate--${tasks.id}`, `${tasks.completeDate}`))
        }))
    }
}

