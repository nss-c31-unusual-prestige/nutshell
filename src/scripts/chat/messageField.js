import HtmlBuilder from "../HtmlBuilder";
import messageEventHanlder from "./messageEventHandler";

export default {
    createMessageForm: () => {
        //(elementType, elementId, elementTextContent, elementValue)
        //This is the form that will contain the input field and the enter button.
        const messageForm = HtmlBuilder.elementBuilder("form", "message--form", undefined, undefined);
        //creates input field and stores it in variable.
        const messageInput = HtmlBuilder.elementBuilder("input", "message--input", undefined, undefined);
        //adds the text type attribute to message input so that it will be the proper input type.
        messageInput.setAttribute("type","text");
        //create the button element and store it in the variable.
        const messageButton = HtmlBuilder.elementBuilder("button", "message--button", "Send", undefined);
        //event listener for submit button.
        messageButton.addEventListener("click", (event) => {
            //prevents submit button from reloading page on submit.
            event.preventDefault()
            //calls messageEventHanlder and passes a reference to the input field so that its value can be read.
            messageEventHanlder.postNewMessage(messageInput);
        })
        //adds the button type to the button.
        messageButton.setAttribute("type", "button");
        //adds input field and button to the form.
        messageForm.appendChild(messageInput);
        messageForm.appendChild(messageButton);
        //returns the entire form to be used by the function that called it.
        return messageForm;
    }
}