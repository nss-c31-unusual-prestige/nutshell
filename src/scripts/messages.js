import apiManager from "./apiManager";
import HtmlBuilder from "./HtmlBuilder";

export default {
    //display current messages.
    createMessages: (key) => {
        //calls the API manager to pull the messages from the database,
        apiManager.getAll(key).then(messages => {
            //then for each message, pass the values contained in the database to build the message.
            messages.forEach(message => {
                //(elementType, elementId, elementTextContent, elementValue)
                console.log(HtmlBuilder.elementBuilder("P", message.id, message.message, undefined));
            })
        })
    }


    //api call to get current messages.

    //build element.

    //post messages.

}