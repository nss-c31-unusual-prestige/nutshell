import apiManger from "../apiManager.js"
import taskDom from "./tasksDomBuilder.js"
import HtmlBuilder from "../HtmlBuilder.js";

export default {
    handleSave() {
        let childSection = HtmlBuilder.elementBuilder("childTasksSection")
        let name = document.getElementById("newName")
        let description = document.getElementById("newDescription")
        let completeDate = document.getElementById("newCompleteDate")

        let newSection = {
            name: name.value,
            description: description.value,
            completeDate: completeDate.value
        }
        //console.log(newSection)
        apiManger.postAll("tasks", newSection)
            .then(() => taskDom.listAllTask())
    }
}