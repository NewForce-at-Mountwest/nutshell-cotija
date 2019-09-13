// Building an Html String for News
const makeNewsComponent = {
    buildNewsCard: (singleNewsEntry) =>{
    `

        //  Title Text Area
        <fieldset>
        <label for="newsTitle">Title</label>
        <br>
        <input type="text" name="newsTitle" id="news-title">
        <fieldset>

        // Url Text Area
        <fieldset>
        <label for="newsUrl">Url Link</label>
        <br>
        <input type="text" name="newsUrl" id="news-url">
        </fieldset>

        // Synopsis Text Area
        <fieldset>
        <label for="newsSum">Synopsis</label>
        <br>
        <input type ="text" name="newsSum" id="news-sum">
        </fieldset>

        // News article Submit Button
        <button id ="news-submit-button" type ="submit">Submit News Entry</button>

        `
        console.log(singleNewsEntry)
    }
    }

 console.log(makeNewsComponent)

//  Exports
export default makeNewsComponent;
