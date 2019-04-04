import apiManager from "../apiManager";
import HtmlBuilder from "../HtmlBuilder";
import messageField from "./messageField";

    //reference to the section of the DOM the messageBox will be appended to after all the messages have been built. Stored as a property of the module.
    const messageSection = document.getElementById("messages-section");
    //(elementType, elementId, elementTextContent, elementValue). Section all messages will appear on.
    const messageBox = HtmlBuilder.elementBuilder("section", "message--section", undefined, undefined);

    //reference to dom fragment that will be appended to the box.
    const messageFragment = document.createDocumentFragment();

export default {
    //initialize chatbox.
    createChat: () => {
        messageSection.appendChild(messageBox);
    },
    //display current messages.
    printMessages: () => {
        HtmlBuilder.clearElement(messageBox);
        //calls the API manager to pull the messages from the database,
        apiManager.getAll("messages").then(messages => {
            //then for each message, pass the values contained in the database to build the message.
            messages.forEach(message => {
                const element = HtmlBuilder.elementBuilder("P", `message--${message.id}`, message.message, undefined);
                //adds element to the fragment.
                messageFragment.appendChild(element);
            })
            //append fragment to messageBox.
            messageBox.appendChild(messageFragment);
        })
    }
}