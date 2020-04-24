import * as Sentry from '@sentry/node';
// or using CommonJS
// const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'https://0b91060d33854ce892cba9c12fe60a31@o382923.ingest.sentry.io/5212531' });

const MM = require('ms-manager');  
let config = require(`./config.json`) || {};  

MM.init(config, (err, serviceInfo) => {  
    if (err) {  
        return console.error(err);  
    }
    
    /**  
    * Our micro-service is now up. 
    * */
    console.log('#Micro-service UP#');  
    
    /**
    * You can now subscribe to specific message
    */
    MM.subscribe('add', (bdy, msg) => {  
        /**
        * TODO: Uncomment when operationnal
        **/
        const computer = require('./computer');
        try {
             const result = computer.add(bdy.a, bdy.b);
             msg.reply({ result });
         } catch (err) {
             console.error(err);
             return msg.replyErr(err);
         }
    });
});
