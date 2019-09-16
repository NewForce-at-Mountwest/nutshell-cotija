// Imports

// Managing Info from Json
const apiNews = {
  // Grab all Entries
  getAllEntries: () =>
    fetch(" http://localhost:3000/news")
      .then(response => response.json())
  ,

  // Save a new Entry
  saveNewsEntry(entryObjectParam) {
    return fetch("http://localhost:3000/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entryObjectParam)
    })
  },
  // Deleting an Entry
  deleteNewsEntry(deleteEntryParam) {
    return fetch(`http://localhost:3000/news/${deleteEntryParam}`, {
      method: "DELETE"
    })
  },

  // Edit an Etry
  editOneNewsEntry(editEntryParam) {
    return fetch(`http://localhost:3000/news/${editEntryParam}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editEntryParam)
    })
  }

}
console.log(apiNews)

// Exports
export default apiNews;