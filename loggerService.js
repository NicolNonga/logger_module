
const path = require('path'); 
const winston = require('winston');
const moment= require('moment');

class logger{

    constructor(config){
       
       this.config= config
    }

 loggerService(parameter){
       // console.log(parameter)
      const colors= {
        foo: 'blue',
        bar: 'green',
        baz: 'yellow',
        foobar: 'red'
      }
        this.config = Object.assign({}, {
            name: 'adonis.log',
            filename: `${moment(Date.now()).format('DD-MM-YYYY')}.log`,
            level:parameter.level

        }, this.config)

        this.config.level= parameter.level;
        // console.log(this.config.level)
       this.config.filename= `${parameter.level}${moment(Date.now()).format('DD-MM-YYYY')}.log`
   
    /*    let dir = 'public/logger'+'/'+parameter
       if (!(fs.existsSync(dir))) {
         fs.mkdirSync(dir, {recursive: true},{});
        
         fs.appendFile(dir + '/' + this.config.filename, '', function (err, fd) { 
        
         });
    //console.log(fileTest)
       } else {
           //fs.appendFile('public/uploads/suporte/' + filemane + '.pdf', buffer, function (err, fd) { })
       } */
        this.config.filename=  path.join(__dirname,'public', 'logger' ,parameter.folderPath, this.config.filename)
              
        winston.addColors(colors);
        winston.format.colorize()
        let logger = winston.createLogger({
            format: winston.format.json(),
           // defaultMeta: { service: 'user-service' },
            transports: [
        
                new winston.transports.File({filename:this.config.filename}),
              /*   new winston.transports.File({ filename: 'combined.log' }), */
            ],
        });

     

        // console.log( `ErroLogs${moment(Date.now()).format('MM/DD/YYYY')}.log` )
        logger.log({
            level: parameter.level,
            message: parameter.message,
           hora:` ${moment(Date.now()).format('HH:mm:ss')}`,
            //tipo_error:parameter.typeError,
            urls: parameter.urls
          });

          //console.log(logger.log({level:'info',message:'teste'}))

    }


    logerServiceTwo(parameter){

        this.config = Object.assign({}, {
            name: 'adonis.log',
            filename: `${moment(Date.now()).format('DD-MM-YYYY')}.log`,
            level:parameter.level

        }, this.config)

        this.config.level= parameter.level;
        // console.log(this.config.level)
       this.config.filename= `${parameter.level}${moment(Date.now()).format('DD-MM-YYYY')}.log`
   
    /*    let dir = 'public/logger'+'/'+parameter
       if (!(fs.existsSync(dir))) {
         fs.mkdirSync(dir, {recursive: true},{});
        
         fs.appendFile(dir + '/' + this.config.filename, '', function (err, fd) { 
        
         });
    //console.log(fileTest)
       } else {
           //fs.appendFile('public/uploads/suporte/' + filemane + '.pdf', buffer, function (err, fd) { })
       } */
        this.config.filename=  path.join(__dirname,'public', 'logger' ,parameter.folderPath, this.config.filename)
              
        console.log(this.config)
        let logger = winston.createLogger({
            format: winston.format.json(),
           // defaultMeta: { service: 'user-service' },
            transports: [
        
                new winston.transports.File({filename:this.config.filename}),
              /*   new winston.transports.File({ filename: 'combined.log' }), */
            ],
        });

     

        // console.log( `ErroLogs${moment(Date.now()).format('MM/DD/YYYY')}.log` )
        logger.log({
            level: parameter.level,
            message: parameter.message,
           hora:` ${moment(Date.now()).format('HH:mm:ss')}`,
            //tipo_error:parameter.typeError,
            urls: parameter.urls
          });


          

    }

  
}

module.exports= logger