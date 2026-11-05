const rl = require("node:readline/promises")
const {stdin , stdout } = require("node:process")


/**
 * 
 * @param {*} firstName 
 * @param {*} lastName 
 * @returns 
 */
function formatName(firstName="", lastName="") {
    return `${firstName} ${lastName}`;
}

/**
 * 
 * @param {*} timeOfDay 
 * @returns 
 */
function getGreeting(timeOfDay="") {
    switch (timeOfDay) {
        case 'morning':
            return 'Good morning!';
        case 'afternoon':
            return 'Good afternoon!';
        case 'evening':
            return 'Good evening!';
        default:
            return 'Hello!';
    }
}

/**
 * 
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} timeOfDay 
 * @returns 
 */
export function createGreeting(firstName="", lastName="", timeOfDay="") {
    const fullName = formatName(firstName, lastName);
    const greeting = getGreeting(timeOfDay);
    return `${greeting} ${fullName}`;
}

/**
 * 
 * @param {*} question 
 * @returns 
 */
async function readline(question=""){
    let input  = stdin
    let output = stdout
    const r1 = rl.createInterface({input, output});
    const answer = await r1.question(question);
    r1.close();
    return answer;
}

/**
 * MAIN ENTRY POINT FUNCTION
 */
async function main(){
 const firstName = await readline("Enter your first name: ");
 const lastName = await readline("Enter your last name: ");
 const timeOfDay = await readline("Enter the time of day (morning, afternoon, evening): ");

 Promise.all([firstName, lastName, timeOfDay]).then(values => {
     const greetingMessage = createGreeting(values[0], values[1], values[2]);
     console.log(greetingMessage);
 }); 
}

if (require.main === module) {
    main()
}
else{
    console.log("IMPORT main function or createGreeting")
}