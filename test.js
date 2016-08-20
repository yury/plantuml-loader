var loader = require(".")

var src = [
"@startuml",
"Alice -> Bob: Authentication Request",
"Bob --> Alice: Authentication Response",
"",
"Alice -> Bob: Another authentication Request",
"Alice <-- Bob: another authentication Response",
"@enduml" ].join("\n")

let res = loader(src)
console.log(res)
