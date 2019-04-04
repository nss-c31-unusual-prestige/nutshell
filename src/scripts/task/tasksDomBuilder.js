import apiManager from "../apiManager";
import HtmlBuilder from "../HtmlBuilder";

let display = document.querySelectorAll("#tasks-section")

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

