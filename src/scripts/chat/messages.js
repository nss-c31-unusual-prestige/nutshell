import apiManager from "./apiManager";
import HtmlBuilder from "./HtmlBuilder";

//reference to document fragment to which new elements will be appended.
const messageFragment = document.createDocumentFragment();
//reference to the section of the DOM the fragment will be appended to after all the messages have been built.
const messageSection = document.getElementById("messages-section");

export default {
    //display current messages.
    printMessages: (key) => {
        //calls the API manager to pull the messages from the database,
        apiManager.getAll(key).then(messages => {
            //then for each message, pass the values contained in the database to build the message.
            messages.forEach(message => {
                //(elementType, elementId, elementTextContent, elementValue)
                const element = HtmlBuilder.elementBuilder("P", `message--${message.id}`, message.message, undefined);
                //adds element to the fragment.
                messageFragment.appendChild(element);
            })
            messageSection.appendChild(messageFragment);
            console.log(messageSection);
        })
    }
}