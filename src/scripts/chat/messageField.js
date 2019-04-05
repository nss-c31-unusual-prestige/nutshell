import HtmlBuilder from "../HtmlBuilder";

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
        //adds the button type to the button.
        messageButton.setAttribute("type", "button");
        messageForm.appendChild(messageInput);
        messageForm.appendChild(messageButton);
        return messageForm;
    }
}