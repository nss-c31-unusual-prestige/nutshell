import HtmlBuilder from "../HtmlBuilder"
import apiManger from "../apiManager"
import formEvent from "./taskEventHandler.js"

let taskSection = document.getElementById("tasks-section")

export default {
    taskFormSection() {
        let newDocFragment = document.createDocumentFragment()

        newDocFragment.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Name:", "newName"))
        newDocFragment.appendChild(HtmlBuilder.elementBuilder("input", "newName", "Name:", ""))

        newDocFragment.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Decription:", "newDescription"))
        newDocFragment.appendChild(HtmlBuilder.elementBuilder("input", "newDescription", "decription:", ""))

        newDocFragment.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Complete Date:", "newCompleteDate"))
        let dateInput = newDocFragment.appendChild(HtmlBuilder.elementBuilder("input", "newCompleteDate", "completeDate:", ""))
        dateInput.setAttribute("type", "date")

        let saveButtonForm = HtmlBuilder.elementBuilder("button", undefined, "Submit", "Save")

        saveButtonForm.addEventListener("click", formEvent.handleSave)

        taskSection.appendChild(newDocFragment)
        taskSection.appendChild(saveButtonForm)
    }
}