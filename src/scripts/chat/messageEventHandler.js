import apiManager from "../apiManager";
import messageManager from "./messages";

let currentId = sessionStorage.getItem("id");
currentId = parseInt(currentId);

export default {
    //called from event listener in MessageField. The variable containing a reference to the input element is passed to this function, and it value is evaluated.
    postNewMessage: function (input) {
        //message input value stored in variable.
        const messageText = input.value;
        //builds new message object to post to API.
        const message = {
            "message": messageText,
            //session stored current id.
            "userId": currentId,
        }
        //removes the last user text from the input element once logged.
        input.value = "";
        apiManager.postAll("messages", message).then(response => {
            messageManager.addOneMessage()
        })
    },
    updateMessage: function (id ,input) {
        const message = {
            "message": input,
            //session stored current id.
            "userId": currentId,
            "id": id
        }
        apiManager.patchAll("messages", id, message).then(()=>{
            messageManager.createMessages();
        });
    }
}