import apiNews from "../apiManagers/Newsapi.js";
import printNewsToDom from "../domPrinter/NewsPrinter.js";
import newsBuildHtml from "../BuildHtmlScripts/NewsBuildHtml.js"

// Click Event for my Test Button

const newsClickEvents = {

    submitfunction: () => {
        document.querySelector("#news-submit-button").addEventListener("click", function () {
            console.log("Youve clicked the Test Button")

            const newsTitleInput = document.querySelector("#news-title").value;

            const newsUrlInput = document.querySelector("#news-url").value;

            const newsSumInput = document.querySelector("#news-sum").value;

            console.log(newsTitleInput, newsUrlInput, newsSumInput);

            const newsObjectToPost = {
                title: newsTitleInput,
                url: newsUrlInput,
                synopsis: newsSumInput,
            }
            // apiNews.getAllEntries()
            apiNews.saveNewsEntry(newsObjectToPost)
            .then(apiNews.getAllEntries)
                .then(entries => printNewsToDom.renderNewsEntries(entries))
        })},

    // Delete Button Click Event


    deleteButtonFunction: () => {
        document.querySelector("#insideNewsContainer").addEventListener("click", function () {

            if (event.target.id.includes("delete")) {
                console.log(event.target.id)
                console.log(event.target.id.split("-"));
                console.log(event.target.id.split("-")[1])

                const newsEntryArray = event.target.id.split("-")
                const idOfEntryToDelete = newsEntryArray[3];
                console.log(idOfEntryToDelete);

                apiNews.deleteNewsEntry(idOfEntryToDelete)
                    .then(() => {
                        apiNews.getAllEntries()



                    })
            }
        })},

        // Edit Button Click Event
        editButtonFunction: ()=>{
            document.querySelector("#insideNewsContainer").addEventListener("click", function () {

            if (event.target.id.includes("edit")) {
                console.log(event.target.id)
                console.log(event.target.id.split("-"));
                console.log(event.target.id.split("-")[1])

                const newsEntryArray = event.target.id.split("-")
                const idOfeEntryToEdit = newsEntryArray[3];

                apiNews.editOneNewsEntry(idOfeEntryToEdit)
                    .then((singleEntry => {
                        newsBuildHtml.editNewsCard(singleEntry)
                    }
                    ))
            }}
        )}
}
export default newsClickEvents;