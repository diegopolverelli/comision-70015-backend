import fs from "fs"

console.log(process.pid, "process id")
console.log(process.cwd(), "directorio")
console.log(process.platform, "SO")
console.log(process.version, "version de node")
console.log(process.env)
console.log(process.env.path)
console.log(process.argv)