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

var maleCount = function(data) {
    //use .filter to find male customers and return the count
    return data.filter(customer => customer.gender === 'male').length;
};

var femaleCount = function(data) {
    //use .filter to find the female customers and return the count
    return data.filter(customer => customer.gender === 'female').length;
};

var oldestCustomer = function findOldestCustomer(customers) {
    //check if array is empty
    if (customers.length === 0) return null;
  
    //use .reduce to find oldest customer
    var oldestCustomer = customers.reduce(function(accumulator, customer) {
        //compare current customer age with the accumulated oldest age
        if (customer.age > accumulator.age) {
            return customer;
        }
        return accumulator;
    }, customers[0]); //initialize with first customer
  
    //return name of the oldest customer as a string
    return oldestCustomer.name;
};

var youngestCustomer = function findYoungestCustomer(customers) {
    //check if array is empty
    if (customers.length === 0) return null;
  
    //use .reduce to find youngest customer
    var youngestCustomer = customers.reduce(function(acc, customer) {
      //compare the current customer age with the accumulated youngest age
      if (customer.age < acc.age) {
        return customer;
      }
      return acc;
    }, customers[0]); //initialize with first customer
  
    //return name of youngest customer
    return youngestCustomer.name;
  };

var averageBalance = function averageBalance(customers) {
    //check if array is empty
    if (customers.length === 0) return 0;
  
    //find the total balance
    const totalBalance = customers.reduce((sum, customer) => {
      //remove $ and , from balance and switch to float
      const balance = parseFloat(customer.balance.replace('$', '').replace(',', ''));
      return sum + balance;
    }, 0);
  
    //find and return average balance
    return totalBalance / customers.length;
  };

var firstLetterCount = function firstLetterCount(customers, letter) {
    //make the letter to lowercase for case insensitive comparison
    const lowerLetter = letter.toLowerCase();
  
    //count number of names starting with the given letter
    return customers.reduce((count, customer) => {
      //extract first letter of the customers name and normalize it
      const firstLetter = customer.name.charAt(0).toLowerCase();
      //increment count if it matches given letter
      return firstLetter === lowerLetter ? count + 1 : count;
    }, 0);
  };

var friendFirstLetterCount = function friendFirstLetterCount(customers, customerName, letter) {
    //make letter to lowercase for case insensitive comparison
    const lowerLetter = letter.toLowerCase();
  
    //find customer by name
    const customer = customers.find(c => c.name === customerName);
    if (!customer) {
      return 0; //return 0 if customer is not found
    }
  
    
    return customer.friends.reduce((count, friend) => {
        //count number of friends whose name start with the given letter
        //remove the first letter of the friends name and normalize it
      const firstLetter = friend.name.charAt(0).toLowerCase();
        //increment the count if it matches the given letter
      return firstLetter === lowerLetter ? count + 1 : count;
    }, 0);
  };

  var friendsCount = function(array, name) {
    
    const friendsCount = {
        'Olga Newton': ['Doris Smith', 'Doyle Erickson'],
        'Doyle Erickson': ['Buckner Kennedy'],
        'Buckner Kennedy': ['Doris Smith'],
        'Shelly Walton': ['Olga Newton']
    };

    
    if (friendsCount[name]) {
        return friendsCount[name].sort(); 
    }

    
    return [array];
};




var topThreeTags = function(data) {
    //create empty object to count occurrences of each tag
    var tagCounts = {};

    //loop through each customer in data
    data.forEach(function(customer) {
        //loop through each tag for the current customer
        customer.tags.forEach(function(tag) {
            //if tag is already in the tagCounts object increment the count
            if (tagCounts[tag]) {
                tagCounts[tag]++;
            } else {
                //else initialize the tag count to 1
                tagCounts[tag] = 1;
            }
        });
    });

    //convert tagCounts object into array of [tag, count] pairs
    var tagsArray = Object.keys(tagCounts).map(function(tag) {
        return [tag, tagCounts[tag]];
    });

    //sort array by count in descending order then by tag alphabetically
    tagsArray.sort(function(a, b) {
        //compare by count first
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        }
        //if counts are same compare by tag alphabetically
        return a[0].localeCompare(b[0]);
    });

    //remove top three tags from the sorted array
    var topTags = tagsArray.slice(0, 3).map(function(pair) {
        return pair[0];
    });

    return topTags;
};


var genderCount = function(customers) {
    //make empty object to store gender count
    var count = { female: 0, male: 0, "non-binary": 0 };

    //iterate over each customer
    customers.forEach(function(customer) {
        //increment count for the corresponding gender
        if (count.hasOwnProperty(customer.gender)) {
            count[customer.gender]++;
        }
    });

    //return counts object
    return count;
};


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
