const mon = require('mongoose')

const schema1 = mon.Schema(
    {
        Title : {
            type : String
        },
        Author : {
            type : String 
        },
        Price : {
            type : Number
        }
    }
)

module.exports = mon.model("list1",schema1)