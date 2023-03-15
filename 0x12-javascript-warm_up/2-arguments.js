#!/usr/bin/node

// .slice() method trims out the first 2
// default arguments

const args = process.argv.slice(2);

// console.log(args.length);

if (args.length > 1) {
    console.log(' Arguments found');
} else if (args.length === 1) {
    console.log('Argument found');
} else {
    console.log('No argument');
}



