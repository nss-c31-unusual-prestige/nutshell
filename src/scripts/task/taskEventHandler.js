import apiManger from "../apiManager.js"
import taskDom from "./tasksDomBuilder"

export default{
    handleSave() {
        let newName = document.getElementById("newName")
        let newDescription = document.getElementById("newDescription")
        let newCompleteDate = document.getElementById("newCompleteDate")

        let newSection = {
            newName = newName.value,
            newDescription = newDescription.value,
            newCompleteDate = newCompleteDate.value
        }
        console.log(newSection)
        apiManger.postAll("tasks", newSection)
        .then(() => taskDom.listAllTask)
    }
}