import HtmlBuilder from "../HtmlBuilder"
import apiManger from "./apiManager"
import formEvent from "./taskEventHandler.js"

let taskSection = document.getElementById ("tasks-section")

export default{
    taskFormSection() {
        let newDocFragment = document.createDocumentFragment()
        // let newSection =HtmlBuilder.elementBuilder("section", "newFormSection")

        newDocFragment.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Name:", "newName"))
        newDocFragment.appendChild(HtmlBuilder.elementBuilder("input", "newName", "Name:", "newName"))

        newDocFragment.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Decription:", "newDescription"))
        newDocFragment.appendChild(HtmlBuilder.elementBuilder("input", "newDescription", "decription:", "newDescription"))

        newDocFragment.appendChild(HtmlBuilder.elementBuilder("label", undefined, "Complete Date:", "newCompleteDate"))
        newDocFragment.appendChild(HtmlBuilder.elementBuilder("input", "newCompleteDate", "completeDate:", "newCompleteDate"))

        let saveButtonForm = HtmlBuilder.elementBuilder("button", undefined, "saveSection", "Save")

        saveButtonForm.addEventListener("click", formEvent.handleSave)


        //newDocFragment.appendChild(newSection)
        taskSection.appendChild(newDocFragment)
    }
}
