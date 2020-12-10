
/* const Helpers = use('Helpers');
const moment= require('moment'); */
//const config= require('./config)

const config=require('./config/app')
const loggerService= require('./loggerService')


 const logger= new loggerService(config.filename)

 const loggerInfo={level:'error', urls:'http/controller/test',folderPath:'errorLogger', message:'testMensagem'}
 const loggerInfoTwo={level:'info', urls:'http/controller/test',folderPath:'info', message:'tsteMensagemInfo'}
 
 logger.loggerService(loggerInfo)
 logger.logerServiceTwo(loggerInfoTwo);


 function loggererror(message, urls){
    const loggerInfo={level:'error', urls:urls,folderPath:'errorLogger', message:message}
    logger.loggerService(loggerInfo);

 }
 //logger.cleanerLog()
/* console.log(config.file.filename)
fs.mkdir(path.join(__dirname, 'test'), (err) => { 
    if (err) { 
        return console.error(err); 
    } 
    console.log('Directory created successfully!'); 
}); */


module.exports= {loggererror}