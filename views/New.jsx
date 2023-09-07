const React = require('react')


function New(){
    return(
        
        <div>
            <h2> Create a New Log</h2>
            <form action= '/logs' method="POST">
                Title: <input type='text' name= "title" required />
                <textarea name="entry" required />
                Broken?<input type="checkbox" name="shipIsBroken" />
                <input type="submit" value="Post" />
            </form>
        </div>
       
    )
}

module.exports = New;