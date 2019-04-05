import apiManager from "../apiManager";
import messageManager from "./messages";

export default {
    //called from event listener in MessageField. The variable containing a reference to the input element is passed to this function, and it value is evaluated.
    postNewMessage: function (input) {
        //message input value stored in variable.
        const messageText = input.value;
        //builds new message object to post to API.
        const message = {
            "message": messageText,
            //will be updated to have the user ID for that session/user passed to it.
            "userId": 4,
        }
        //removes the last user text from the input element once logged.
        input.value = "";
        apiManager.postAll("messages", message).then(response => {
            messageManager.addOneMessage()
        })
    }
}