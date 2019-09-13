// Imports
import apiEntries from "./apiManagers/Newsapi.js"

// Click Event for my Test Button
const testButton =document.querySelector("#test-submit-button");

testButton.addEventListener("click", function(){
    console.log("Youve clicked the Test Button")

    const newsTitleInput = document.querySelector("#news-title").value;

    const newsUrlInput = document.querySelector("#news-url").value;

    const newsSumInput = document.querySelector("#news-sum").value;

    console.log(newsTitleInput, newsUrlInput, newsSumInput);

    newsObjectToPost ={
        title: newsTitleInput,
        url: newsUrlInput,
        synopsis: newsSumInput,
    }
})
