import { Debug, Error as ErrorLog } from '../dist' 

Debug<{ func: string }>("Show breakpoint for remote debuging", {}, {
    func: "saveValidateHistory"
} )

ErrorLog<{ func: string }>("Something bad happend", {}, {
    func: "saveValidateHistory"
} )

ErrorLog<{ func: string }>("Database is Down",{ error: true }, {
    func: "saveValidateHistory"
} )

ErrorLog<{ func: string }>("Database is Down", new Error("Database connection"), {
    func: "saveValidateHistory"
} )