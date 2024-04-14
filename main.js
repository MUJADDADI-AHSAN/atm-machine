#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000; //USD
let myPin = 2098;
let pinAnswer = await inquirer.prompt([
    { name: "pin", message: "Enter Your Pin", type: "number" },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select An Option",
            type: "list",
            choices: ["Withdrawl", "Check Balance", "quickCash"],
        },
    ]);
    if (operationAns.operation === "quickCash") {
        let fastCashans = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Please Select An Amount",
                type: "list",
                choices: ["10000", "30000", "50000", "100000"],
            },
        ]);
        if (fastCashans.fastCash > myBalance) {
            console.log("insufficient Balance");
        }
        else if (myBalance -= fastCashans.fastCash)
            console.log("Your Remaining Balance is :" + myBalance);
    }
    if (operationAns.operation === "Withdrawl") {
        let amountAns = await inquirer.prompt([
            { name: "amount", message: "enter your amount", type: "number" },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient Balance");
        }
        else if (myBalance -= amountAns.amount) {
            console.log("Your Remaining Balance is :" + myBalance);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your Balance is :" + myBalance);
    }
}
else {
    console.log("Incorrect Pin Code");
}
