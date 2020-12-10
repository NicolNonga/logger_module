var assert = require('assert');
const mock= require('mock-fs')
const path = require('path'); 
const config= require('../config/app')
const {loggererror}= require('../index')


describe('Array', function() {

  describe('', function() {
 /*    beforeAll(function(){

      const loggerInfo={level:'error', urls:'http/controller/test',folderPath:'errorLogger', message:'testMensagem'}
     
       const loggerTest= new loggerService(config);
       loggerTest.loggerService(loggerInfo)
     
     }) */
     before( function () {
      //Open none angular site
     loggererror('test', 'urlsTest')
  });
    it('it should create a folder with file', function() {
     
     //const fileMock= mock.load('my-file.)
    mock({
      '../public/logger/errorLogger/error10-12-2020': 'eete'
    });
    });
  });
});