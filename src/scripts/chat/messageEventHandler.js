export default {
    //called from event listener in MessageField. The variable containing a reference to the input element is passed to this function, and it value is evaluated.
    postNewMessage: function(input){
        //message input value stored in variable.
        const message = input.value;
        //removes the last user text from the input element once logged.
        input.value = "";
    }
}