import HtmlBuilder from "../HtmlBuilder"
import apiManger from "../apiManager"
import formEvent from "./taskEventHandler.js"

let taskSection = document.getElementById("tasks-section")

export default {
    taskFormSection() {
        let newDocFragment = document.createDocumentFragment()
        let sectionTesk = HtmlBuilder.elementBuilder("section", "taskFormSection")

        sectionTesk.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Name:", "name"))
        sectionTesk.appendChild(HtmlBuilder.elementBuilder("input", "newName", "Name:", ""))

        sectionTesk.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Decription:", "newDescription"))
        sectionTesk.appendChild(HtmlBuilder.elementBuilder("input", "newDescription", "description:", ""))

        sectionTesk.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Complete Date:", "newCompleteDate"))
        let dateInput = sectionTesk.appendChild(HtmlBuilder.elementBuilder("input", "newCompleteDate", "completeDate:", ""))
        dateInput.setAttribute("type", "date")

        //sectionTesk.appendChild(HtmlBuilder.elementBuilder("input", "checkBox", "Completation"))

        let saveButtonForm = HtmlBuilder.elementBuilder("button", undefined, "Add Task ", "Save")

        saveButtonForm.addEventListener("click", formEvent.handleSave)
        const articleSection = HtmlBuilder.elementBuilder("section", "taskSection")
        sectionTesk.appendChild(saveButtonForm)
        newDocFragment.appendChild(sectionTesk)
        newDocFragment.appendChild(articleSection)
        taskSection.appendChild(newDocFragment)
    },

     editTaskForm(taskObject){
        let taskEditArticle = HtmlBuilder.elementBuilder("article", "taskEditArticle")

        taskEditArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Name:"))
        taskEditArticle.appendChild(HtmlBuilder.elementBuilder("input", `edit-task-name-${taskObject.id}`, undefined, taskObject.name))

        taskEditArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Decription:"))
        taskEditArticle.appendChild(HtmlBuilder.elementBuilder("input", `edit-task-decription-${taskObject.id}`, undefined, taskObject.decription))

        taskEditArticle.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Complete Date:"))
        taskEditArticle.appendChild(HtmlBuilder.elementBuilder("input", `edit-task-completeDate-${taskObject.id}`, undefined, taskObject.completeDate))

        let editButtonForm = HtmlBuilder.elementBuilder("button", `edit-${taskObject.id}`, "Edit Task ", "Save")
        editButtonForm.addEventListener("click", formEvent.handleEdit)
        taskEditArticle.appendChild(editButtonForm)
        return taskEditArticle
    }
}