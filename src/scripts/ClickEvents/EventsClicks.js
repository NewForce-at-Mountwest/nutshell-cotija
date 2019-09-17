// this is the code for the click event of the event submit form
const Event = {
    eventClickEvent: () => {

      document.querySelector("#event-button").addEventListener("click", () => {
        // Get the username and password values from the form on the html
        console.log("the event button works!")
        const eventValue = document.querySelector("#event-form").value;
        console.log(eventValue)


    })}}



export default Event;