const React = require('react')


function Show({logs}){
    console.log(logs)
    return(
      
        <div>
            
            <div>{logs.title}</div>
            <div>{logs.entry}</div>
            <p>{logs.shipIsBroken ? 'Ship: is Broken': '  Ship: Not Broken'}</p>
            <p>{logs.createdAt.toLocaleString()}</p>
            <button> <a href='/logs'>Back</a></button>
          </div>


        
    )
}

module.exports = Show;