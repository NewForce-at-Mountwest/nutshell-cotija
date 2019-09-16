// Imports
import newsBuildHtml from "../BuildHtmlScripts/NewsBuildHtml.js";

// Printing News to the DOM
 const printNewsToDom = {
 renderNewsEntries: (entries) => {

  entries.forEach(singleEntry => {
    document.querySelector("#newsContainer").innerHTML += newsBuildHtml.buildNewsCard(singleEntry)
  })},

  printNewsEntries:(entriesSubmitted) =>{
    entriesSubmitted.forEach(singleEntrySubmitted=>{
      document.querySelector("#insideNewsContainer").innerHTML += newsBuildHtml.buildNewsCard(singleEntrySubmitted)
    })
  }
}
// Export
export default printNewsToDom;