import apiManager from "../apiManager";
import HtmlBuilder from "../HtmlBuilder";
import messageField from "./messageField";

//reference to the section of the DOM the messageBox will be appended to after all the messages have been built.
const messageSection = document.getElementById("messages-section");
//(elementType, elementId, elementTextContent, elementValue). Section all messages will appear on.
const messageBox = HtmlBuilder.elementBuilder("section", "message--window", undefined, undefined);

//reference to dom fragment that will be appended to the box.
const messageFragment = document.createDocumentFragment();

export default {
    printMessages: function () {
        messageBox.appendChild(messageFragment);
        //scroll to bottom.
        messageBox.scrollTop = messageBox.scrollHeight;

    },
    createEditButton: function (messageId) {
        const button = HtmlBuilder.elementBuilder("button", `edit--${messageId}`, "Edit", undefined);
        button.addEventListener("click", (event) => {
            event.preventDefault()
            //build form
            const messageContainer = event.target.parentNode
            const editForm = messageField.createUpdateForm(messageId, event.target);
            //place edit form in place of the original message.
            messageContainer.appendChild(editForm);
            //save button will addOneMessage to parentNode.
        })
        return button;
    },
    assembleMessage: function (userObject, message, currentUserId) {
        //create the divider that contains the user name and message.
        const messageDiv = HtmlBuilder.elementBuilder("DIV", `message--${message.id}`, undefined, undefined);
        //create username HTML.
        const nameTag = HtmlBuilder.elementBuilder("SPAN", `userbox--${userObject.id}`, `${userObject.name}: `, undefined);
        //create message HTML.
        const element = HtmlBuilder.elementBuilder("SPAN", `line--${message.id}`, message.message, undefined);
        //append name and element to the container.
        messageDiv.appendChild(nameTag);
        messageDiv.appendChild(element);
        if (userObject.id === currentUserId) {
            const editButton = this.createEditButton(message.id);
            messageDiv.appendChild(editButton);
        }
        //append message container to the message box that contains all messages.
        messageFragment.appendChild(messageDiv);
    },
    createMessages: function () {
        //clears the message box before appending the new message list.
        HtmlBuilder.clearElement(messageBox);
        //create scollbar.
        messageBox.style.overflowY = "auto";
        //floating chatbox.
        messageSection.style.position = "absolute";
        messageBox.style.minHeight = "600px"
        messageBox.style.maxHeight = "600px"
        messageBox.style.maxWidth = "300px"
        //calls the API manager to pull the messages from the database.
        apiManager.getAll("messages").then(messages => {
            //then for each message, pass the values contained in the database to build the message.
            messages.forEach(message => {
                apiManager.getOne("users", message.userId).then(user => {
                    this.assembleMessage(user, message, 4);
                    return
                }).then(next => {
                    this.printMessages();
                })
            })
        })
    },
    //display newest message.
    addOneMessage: function () {
        apiManager.getAll("messages").then(messages => {
            //determine id of last added message and append it to DOM.
            messages.forEach(message => {
                if (message.id === messages.length) {
                    apiManager.getOne("users", message.userId).then(user => {
                        this.assembleMessage(user, message, 4);
                    }).then(next => {
                        this.printMessages();
                    })
                }
            })
        })
    },
    //initialize chatbox.
    createChat: function () {
        const chatForm = messageField.createMessageForm()
        messageSection.appendChild(messageBox);
        messageSection.appendChild(chatForm);
        this.createMessages()
    }
}