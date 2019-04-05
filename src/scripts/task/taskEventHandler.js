import apiManger from "../apiManager.js"
import taskDom from "./tasksDomBuilder"

export default{
    handleSave() {
        let name = document.getElementById("name")
        let description = document.getElementById("description")
        let completeDate = document.getElementById("completeDate")

        let newSection = {
            name = name.value,
            description = description.value,
            completeDate = completeDate.value
        }
        console.log(newSection)
        apiManger.postAll("tasks", newSection)
        .then(() => taskDom.listAllTask)
    }
}