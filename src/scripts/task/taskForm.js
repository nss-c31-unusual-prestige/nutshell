import HtmlBuilder from "../HtmlBuilder"
import apiManger from "../apiManager"
import formEvent from "./taskEventHandler.js"

let taskSection = document.getElementById ("tasks-section")

export default{
    taskFormSection() {
        let newDocFragment = document.createElement()
        let newSection =HtmlBuilder.elementBuilder("tesk", "newDocFragment")

        newSection.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Task Name:", "taskName"))
        newSection.appendChild(HtmlBuilder.elementBuilder("input", "taskName", "Task Name:", "taskName"))

        newSection.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Task Decription:", "taskDescription"))
        newSection.appendChild(HtmlBuilder.elementBuilder("input", "taskDescription", "Task Decription:", "taskDescription"))

        newSection.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Task Complete Date:", "taskCompleteDate"))
        newSection.appendChild(HtmlBuilder.elementBuilder("input", "taskCompleteDate", "Task Complete Date:", "taskCompleteDate"))

        let saveButtonForm = HtmlBuilder.elementBuilder("button", undefined, "saveSection", "SaveButton")

        saveButtonForm.addEventListener("click", formEvent.handleSave)

        newSection.appendChild(saveButtonForm)
        newDocFragment.appendChild(newSection)
        taskSection.appendChild(newDocFragment)
    }
}
