
//===========================================================================//
                        /* ~~~ node5 ~~~ */ 
//===========================================================================//

var _ = require('underscore');
var fs = require('fs');

// set variable to the csv
var csv = fs.readFileSync(process.argv[2], 'utf-8');
var fileName = process.argv[3];
// console.log(csv);


function jsonify(list) {

    // define variables
    var obj = {};
    // lines get's split on each new line
    var lines = list.split('\n');
    // can extend this to other csv's by keeping track of the keys we 
    var keysArr = [];
    // object array
    var objArr = [];


    // loop through the lines
    for (var i = 0; i < lines.length; i++) {

        // for the first iteration, we need to set the keys of our master object to null 
        if (i === 0) {

            // set the keys of our object
            _.each(lines[i].split(','), function(el) {

                obj[el] = null;

                // push the key name to the keysArr for use below
                keysArr.push(el);
            })

        } else {

            var newObj = _.clone(obj);
            var line = lines[i].split(',');

            // construct the new object
            for (var j = 0; j < line.length; j ++) {

                // set the proper key value (from keysArr) to the current word from line[j]
                    // keysArr will be in the same order as the line array
                newObj[ keysArr[j] ] = line[j];
            }

            // after we construct the new object, push it to the object array
            objArr.push(newObj)
        }
    };

    return JSON.stringify(objArr);
}

fs.writeFileSync( fileName, jsonify(csv) ) ;

