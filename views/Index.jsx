const React = require('react')


function Index({logs}){
    return(
       <div>
            <nav>
                <a href='/logs/new'> Create a new Log</a>
            </nav>
            <h1>Captain Log's</h1>
            <ul>
                {
                    logs.map(log => {
                        return(
                            <li key={log._id} >
                                <a href={`/logs/${log._id}`}>{log.title} </a>
                                <p>{log.entry}</p>
                                <p>{log.shipIsBroken ? 'Ship: is Broken': '  Ship: Not Broken'}</p>
                                
                
                            
                                 <button><a href={`/logs/${log._id}/edit`}> Edit</a></button>
                                <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
                                    <input type="submit" value="Delete" />
                                </form> 
                                <br/>
                            </li>
                        )
                    })
                }
            </ul>
            </div>
    )
}

module.exports = Index;