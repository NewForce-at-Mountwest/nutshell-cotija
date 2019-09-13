// Imports
import makeNewsComponent from "./BuildHtmlScripts/NewsBuildHtml.js";

// Printing News to the DOM
const renderNewsEntries = (entries) => {

    entries.forEach( singleEntry => {
      document.querySelector(".newsContainer").innerHTML += makeNewsComponent.buildNewsCard(singleEntry)})}

// Export
export default renderNewsEntries;