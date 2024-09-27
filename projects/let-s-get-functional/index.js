// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return array.filter(function(customer) {
        return customer.gender === 'male'; //check if the customer's gender is male
    }).length; //return the count of male customers
};

var femaleCount = function(array) {
    return array.reduce(function(count, customer) {
        //increment count if the customer is female
        return count + (customer.gender === 'female' ? 1 : 0);
    }, 0);//start the count at zero
};

var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(accumulator, current) {
        //acc = adele mullen | current = Olga Newton
        if (current.age > accumulator.age) {
            return current;
        }
        return accumulator;
    });
    return oldest.name;
};

var youngestCustomer = function(array) {
    return _.reduce(array, function(accumulator, current) {
        //check if cureeent is younger thsn accumulator
        if (!accumulator || current.age < accumulator.age) {
            return current; //update accumulator to the current customer
        }
        return accumulator; //keep exsisting accumulator
    }, null).name; //return youngest customer
};

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
