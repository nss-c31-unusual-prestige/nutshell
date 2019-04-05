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
        sectionTesk.appendChild(HtmlBuilder.elementBuilder("input", "newDescription", "decription:", ""))

        sectionTesk.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Complete Date:", "newCompleteDate"))
        let dateInput = sectionTesk.appendChild(HtmlBuilder.elementBuilder("input", "newCompleteDate", "completeDate:", ""))
        dateInput.setAttribute("type", "date")

        let saveButtonForm = HtmlBuilder.elementBuilder("button", undefined, "Add Task ", "Save")
        let editButtonForm = HtmlBuilder.elementBuilder("button", undefined, "Edit Task ", "Edit")

        saveButtonForm.addEventListener("click", formEvent.handleSave)
        editButtonForm.addEventListener("click", formEvent.handleEdit)
        sectionTesk.appendChild(saveButtonForm)
        sectionTesk.appendChild(editButtonForm)
        newDocFragment.appendChild(sectionTesk)
        taskSection.appendChild(newDocFragment)
    }
}