import apiManger from "../apiManager.js"
import taskDom from "./tasksDomBuilder"

export default {
    handleSave() {
        let name = document.getElementById("newName")
        let newDescription = document.getElementById("newDescription")
        let newCompleteDate = document.getElementById("newCompleteDate")

        let newSection = {
            name: name.value,
            newDescription: newDescription.value,
            newCompleteDate: newCompleteDate.value
        }
        console.log(newSection)
        apiManger.postAll("tasks", newSection)
            .then(() => taskDom.listAllTask())
    }
}