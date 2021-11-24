#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;

//defining chalk features as variables
const dim = chalk.dim;
const italic = chalk.italic;
const linkedinClr = chalk.hex(`#0077b5`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const devtoClr = chalk.hex(`#ffffff`).bold.inverse;
const blogClr = chalk.hex(`#2962FF`).bold.inverse;

// Shows welcome text
welcome({
    title: `Chaance T. Graves`,
    tagLine: `Howdy, nice to meet y'all!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#2962FF`,
    color: `#000000`,
    bold: true,
    clear: true,
});

log(`${italic(

`Greetings, ladies and gentlemen! 

I’m a creative problem solver eager to implement solutions to many issues foreseen in our modern society. In addition to that, I am also a big advocate for giving back to others who aspire to follow a path like mine.

I currently work at Intel Corporation in the Datacenter AI group as a Platform Applications Engineer. I provide technical support and expertise for Intel server CPUs and server board design development for customers such as Facebook, Google, Amazon Web Services, etc.` 
)}

${linkedinClr(` LinkedIn `)} ${dim(`https://www.linkedin.com/in/chaancegraves/`)}
${githubClr(` Github `)}   ${dim(`https://github.com/ctg123`)}
${devtoClr(` Dev.to `)}   ${dim(`https://dev.to/ctg123`)}
${blogClr( ` Blog ` )}     ${dim(`https://www.chaancegraves.com/`)}

`);