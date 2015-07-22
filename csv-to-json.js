
//===========================================================================//
                        /* ~~~ node5 ~~~ */ 
//===========================================================================//

var _ = require('underscore');
var fs = require('fs');

// set variable to the csv
var csv = fs.readFileSync(process.argv[2], 'utf-8');
// console.log(csv);


function jsonify(list) {

    // define variables
    var obj = {};
    // lines get's split on each new line
    var lines = list.split('\n');

    loop through the lines
    for (var i = 0; i < lines.length; i++) {

        // for the first iteration, we need to set the keys of our master object to null 
        if (i === 0) {

            _.each(lines[i].split(','), function(el) {

                obj[el] = null;
            })
            
        } else {

            
        }
    };
    console.log(obj);
}

jsonify(csv);  