// Building an Html String for News


const newsBuildHtml= {
 mainNews:() =>{
 document.querySelector("#newsContainer").innerHTML =
 `
        <fieldset>
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
                <p id = "jsonUrl">${singleEntry.url}</p>
                <p id = "jsonSynopsis">${singleEntry.synopsis}</p>
                <button id= "news-button-delete-${singleEntry.id}">Delete</button>
                <button id= "news-button-edit-${singleEntry.id}">Edit</button>`
    },

    editNewsCard:(singleEntry)=>{
        return `<fieldset>
        <label for="newsTitle">Title</label>
        <br>
        <input type="text" name="newsTitle" id="${singleEntry.id} value="${singleEntry.title}">
        <br>
        <label for="newsUrl">Url Link</label>
        <br>
        <input type="text" name="newsUrl" id="${singleEntry.id}" value ="${singleEntry.url}>
        <br>
        <label for="newsSum">Synopsis</label>
        <br>
        <input type ="text" name="newsSum" id="${singleEntry.id}" value ="${singleEntry.synopsis}>

        <button id ="news-submit-button-edit-${singleEntry.id}" type ="submit">Submit News Entry</button>
        </fieldset>`
    }


}
newsBuildHtml.mainNews()

//  Exports
export default newsBuildHtml;


