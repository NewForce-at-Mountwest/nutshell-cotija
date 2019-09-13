// Imports
import renderNewsEntries from "./domPrinter/NewsPrinter.js"

// Managing Info from Json
const apiNews ={
    // Grab all Entries
    getAllEntries: () =>
       fetch(" http://localhost:3000/nutshell")
        .then(response => response.json())
        .then(newsEntryArray => renderNewsEntries(newsEntryArray))
}
console.log(apiNews)

// Exports
export default apiNews; 