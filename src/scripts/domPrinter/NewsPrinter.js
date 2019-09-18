// Imports
import newsBuildHtml from "../BuildHtmlScripts/NewsBuildHtml.js";

// Printing News to the DOM
const printNewsToDom = {
  renderNewsEntries: (entries) => {
    document.querySelector("#newsContainerB").innerHTML = ""
    entries.forEach(singleEntry => {
      document.querySelector("#newsContainerB").innerHTML += newsBuildHtml.buildNewsCard(singleEntry)
    })
  },

  editNewsEntries: (objectToEdit) => {
    document.querySelector("#newsContainerB").innerHTML += newsBuildHtml.editNewsCard(objectToEdit)
  }
}

// Export
export default printNewsToDom;