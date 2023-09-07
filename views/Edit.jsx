const React = require('react')


function Edit({logs}){
    return(
        
        <div>
            <h2> Edit Logs</h2>
            <form action= {`/logs/${logs._id}?_method=PUT`} method="POST">
                Title: <input type='text' name= "title" defaultValue={logs.title} required />
                
                <textarea name="entry"  defaultValue={logs.entry} required />
                ShipIsBroken<input type="checkbox" name="shipIsBroken" defaultChecked={logs.shipIsBroken}/>
                <input type="submit" value="Update" />
            </form>
        </div>
        
    )
}

module.exports = Edit;