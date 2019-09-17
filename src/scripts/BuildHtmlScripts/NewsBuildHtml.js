// Building an Html String for News


const newsBuildHtml= {
 mainNews:() =>{
 document.querySelector("#newsContainerA").innerHTML =
 `
        <fieldset>
        <label for="Date">Date</label>
        <br>
        <input type="date" name="newsDate" id= "news-date">
        <label for="newsTitle">Title</label>
        <br>
        <input type="text" name="newsTitle" id="news-title">
        <br>
        <label for="newsUrl">Url Link</label>
        <br>
        <input type="text" name="newsUrl" id="news-url">
        <br>
        <label for="newsSum">Synopsis</label>
        <br>
        <input type ="text" name="newsSum" id="news-sum">

        <button id ="news-submit-button" type ="submit">Submit News Entry</button>
        </fieldset>

        `},

    buildNewsCard:(singleEntry)=>{

        return `<h3 id= "jsonTitle">${singleEntry.title}</h3>
                <a id = "jsonUrl" href="${singleEntry.url}">${singleEntry.url}</a>
                <p id = "jsonSynopsis">${singleEntry.synopsis}</p>
                <button id= "news-button-delete-${singleEntry.id}">Delete</button>
                <button id= "news-button-edit-${singleEntry.id}">Edit</button>`
    },

    editNewsCard:(singleEntry)=>{
        return `<fieldset>
        <label for="newsTitle">Title</label>
        <br>
        <input type="text" name="newsTitle" id="edit-title-${singleEntry.id}" value="${singleEntry.title}">
        <br>
        <label for="newsUrl">Url Link</label>
        <br>
        <input type="text" name="newsUrl" id="edit-url-${singleEntry.id}" value ="${singleEntry.url}">
        <br>
        <label for="newsSum">Synopsis</label>
        <br>
        <input type ="text" name="newsSum" id="edit-sum-${singleEntry.id}" value ="${singleEntry.synopsis}">

        <button id ="news-save-button-${singleEntry.id}" type ="submit">Save</button>
        </fieldset>`
    }


}
newsBuildHtml.mainNews()

//  Exports
export default newsBuildHtml;


