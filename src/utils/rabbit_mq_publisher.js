var container = require('rhea');

exports.produceJenkinsTask = () =>{
    const queuePromise = new Promise((resolve, reject)=>{
        try{
            container.on('connection_open', function (context) {
                context.connection.open_sender('examples');
            });
            
            container.on('sendable', function (context) {
                context.sender.send({body:'Hello World!'});
                context.sender.detach();
                context.connection.close();
            });
        
            container.connect({port: 5672});
            resolve("Job message Published")
        }catch(err){
            console.log(err)
            reject(new Error(err.message))

        }
    })
    return queuePromise
}
