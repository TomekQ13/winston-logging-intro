const { createLogger, format, transports } = require("winston");

const logger = createLogger({
    transports: [
        new transports.Console()
        // new transports.File({
        //     level: 'warn',
        //     filename: 'logsWarnings.log'
        // }),
        // new transports.File({
        //     level: 'error',
        //     filename: 'logsErrors.log'
        // })
    ],
    format:  format.combine(
        format.timestamp(),
        format.json()
        
        // format.metadata()
        // format.prettyPrint()
    )
})

module.exports = logger