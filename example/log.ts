import { Debug, Error as ErrorLog, Info } from '../dist' 

(function application(value: string) {

    Info("Application is about to start", {
        TID: "25852388-ebd8-11ed-94f7-d3c91de140b8"
    } )

    Debug<{ func: string }>("Show breakpoint for remote debugging", {}, {
        TID: "25852388-ebd8-11ed-94f7-d3c91de140b8"
    } )
    
    ErrorLog<{ func: string }>("Database is Down",{ error: true }, {
        TID: "25852388-ebd8-11ed-94f7-d3c91de140b8"
    } )
    
    ErrorLog("Database is Down", {
        class: application.name,
        function: application.name,
        input: value,
        path: "example/log.ts",
        error: new Error("Database connection")
    }, {
        TID: "25852388-ebd8-11ed-94f7-d3c91de140b8",
    } )

})("salam")

