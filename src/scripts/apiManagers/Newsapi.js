// Imports

// Managing Info from Json
const apiNews = {
  // Grab all Entries
  getAllEntries: () =>
    fetch(" http://localhost:3000/news?_sort=date&_order=desc")
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

  getOneNewsEntry: id => {
    return fetch(`http://localhost:3000/news/${id}`)
    .then(response => response.json())
  },

  // Edit an Entry
  editOneNewsEntry(id, editEntryParam) {
    return fetch(`http://localhost:3000/news/${id}`, {
      method: "PUT",
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