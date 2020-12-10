module.exports={

logger: {
    /*
    |--------------------------------------------------------------------------
    | Transport
    |--------------------------------------------------------------------------
    |
    | Transport to be used for logging messages. You can have multiple
    | transports using same driver.
    |
    | Available drivers are: `file` and `console`.
    |
    */
    transport: 'file',

    /*
    |--------------------------------------------------------------------------
    | Console Transport
    |--------------------------------------------------------------------------
    |
    | Using `console` driver for logging. This driver writes to `stdout`
    | and `stderr`
    |
    */
    console: {
      driver: 'console',
      name: 'adonis-app',
      level: 'info'
    },

    /*
    |--------------------------------------------------------------------------
    | File Transport
    |--------------------------------------------------------------------------
    |
    | File transport uses file driver and writes log messages for a given
    | file inside `tmp` directory for your app.
    |
    | For a different directory, set an absolute path for the filename.
    |
    */
    file: {
      driver: 'file',
      name: 'adonis-app',
      filename: 'adonis.log',
      level: 'info'
    }
}
}