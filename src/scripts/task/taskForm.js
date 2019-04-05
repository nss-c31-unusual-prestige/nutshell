import HtmlBuilder from "../HtmlBuilder"
import apiManger from "../apiManager"
import formEvent from "./taskEventHandler.js"

let taskSection = document.getElementById ("tasks-section")

export default{
    taskFormSection() {
        let newDocFragment = document.createElement()
        let newSection =HtmlBuilder.elementBuilder("tesk", "newDocFragment")

        newSection.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Name:", "newName"))
        newSection.appendChild(HtmlBuilder.elementBuilder("input", "newName", "Name:", "newName"))

        newSection.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Decription:", "newDescription"))
        newSection.appendChild(HtmlBuilder.elementBuilder("input", "newDescription", "decription:", "newDescription"))

        newSection.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Complete Date:", "newCompleteDate"))
        newSection.appendChild(HtmlBuilder.elementBuilder("input", "newCompleteDate", "completeDate:", "newCompleteDate"))

        let saveButtonForm = HtmlBuilder.elementBuilder("button", undefined, "saveSection", "Save")

        saveButtonForm.addEventListener("click", formEvent.handleSave)

        newSection.appendChild(saveButtonForm)
        newDocFragment.appendChild(newSection)
        taskSection.appendChild(newDocFragment)
    }
}
