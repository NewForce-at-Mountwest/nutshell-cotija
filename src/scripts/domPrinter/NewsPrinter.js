// Imports
import newsBuildHtml from "../BuildHtmlScripts/NewsBuildHtml.js";

// Printing News to the DOM
const printNewsToDom = {
  renderNewsEntries: (entries) => {
    document.querySelector("#insideNewsContainer").innerHTML = ""
    entries.forEach(singleEntry => {
      document.querySelector("#insideNewsContainer").innerHTML += newsBuildHtml.buildNewsCard(singleEntry)
    })
  },

  editNewsEntries: (objectToEdit) => {
    document.querySelector("#insideNewsContainer").innerHTML += newsBuildHtml.editNewsCard(objectToEdit)
  }
}

// Export
export default printNewsToDom;