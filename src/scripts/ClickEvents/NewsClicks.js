import apiNews from "../apiManagers/Newsapi.js";
import printNewsToDom from "../domPrinter/NewsPrinter.js";
import newsBuildHtml from "../BuildHtmlScripts/NewsBuildHtml.js"
import { parse } from "url";

// Click Event for my Test Button

const newsClickEvents = {

    submitfunction: () => {

        apiNews.getAllEntries()
        .then(entries => printNewsToDom.renderNewsEntries(entries))

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
        })
    },

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
                    .then(apiNews.getAllEntries)
                    .then(parsedEntries => {
                        printNewsToDom.renderNewsEntries(parsedEntries)
                    })

            }
        })
    },
    editButtonFunction: () => {
        document.querySelector("#insideNewsContainer").addEventListener("click", function () {
            if (event.target.id.includes("news-button-edit")) {
                console.log(event.target.id)
                console.log(event.target.id.split("-"));
                console.log(event.target.id.split("-")[1])

                const newsEntryArray = event.target.id.split("-")
                const idOfEntryToEdit = newsEntryArray[3];

                apiNews.getOneNewsEntry(idOfEntryToEdit)
                    .then((objectToEdit) => printNewsToDom.editNewsEntries(objectToEdit))

            }
        })
    },
    //    Save News Button in Edit Card
    saveButtonFunction: () => {
        document.querySelector("#insideNewsContainer").addEventListener("click", function () {

            if (event.target.id.includes("news-save-button")) {
                console.log(event.target.id)
                console.log(event.target.id.split("-"));
                console.log(event.target.id.split("-")[1])

                const idOfEntryAfterEditToSave = event.target.id.split("-")[3]
                console.log(idOfEntryAfterEditToSave);

                const editedNewsTitleInput = document.querySelector(`#edit-title-${idOfEntryAfterEditToSave}`).value;

                const editedNewsUrlInput = document.querySelector(`#edit-url-${idOfEntryAfterEditToSave}`).value;

                const editedNewsSumInput = document.querySelector(`#edit-sum-${idOfEntryAfterEditToSave}`).value;

                console.log(editedNewsTitleInput, editedNewsUrlInput, editedNewsSumInput);

                const editedNewsObject = {
                    title: editedNewsTitleInput,
                    url: editedNewsUrlInput,
                    synopsis: editedNewsSumInput,
                }



                apiNews.editOneNewsEntry(idOfEntryAfterEditToSave, editedNewsObject)
                    .then(apiNews.getAllEntries)
                    .then(parsedEntries => {
                        printNewsToDom.renderNewsEntries(parsedEntries)
                    })
            }
        })
    }
}

export default newsClickEvents;