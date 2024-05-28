#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "console";

console.log(chalk.bgCyanBright.bold('\n\t ADVENTURE GAME\n\t'));
// class of player
class Player{
    name:string
    fuel:number = 100
    constructor(name:string){
        this.name = name
    }
    fuelDeclined(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
    fuelIncreased(){
        this.fuel = 100
    }
}
// class of opponent
class Opponent{
    name:string
    fuel:number = 100
    constructor(name:string){
        this.name = name
    }
    fuelDeclined(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt({
        name:'name',
        type:'input',
        message:"please enter your name: "
})


let opponent = await inquirer.prompt({
        name:'select',
        type:'list',
        message:'Select your opponent',
        choices:['Skeleton','Zombie','Monster']
})
// now gathering data
let player1 = new Player (player.name);
let opponent1 = new Player (opponent.select);

do{
    // skeleton
    if (opponent.select == "Skeleton"){
        
        let ask = await inquirer.prompt({
            name:'options',
            type:'list',
            message:'Select your action',
            choices:['Attack','Have potion','Quit'],
        });
        if(ask.options == 'Attack'){
            let num=Math.floor(Math.random( )*2)
            if(num > 0){
                player1.fuelDeclined()
                console.log(chalk.green(`${player1.name} fuel is ${player1.fuel}`));
                console.log(chalk.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                if(player1.fuel <=0){
                    console.log(chalk.bgRedBright('You lose !Try again'));
                    process.exit();
                }
            }
            if(num <= 0){
                opponent1.fuelDeclined()
                console.log(chalk.green(`${player1.name} fuel is ${player1.fuel}`));
                console.log(chalk.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                if(opponent1.fuel <=0){
                    console.log(chalk.bgGreenBright('you win !Congragulations'));
                    process.exit();
                }
            }
                
        }
    
     
        if(ask.options == 'Have potion'){
            player1.fuelIncreased()
            console.log(chalk.bold.italic.green(`You intake a energy potion ! Your fuel is ${player1.fuel}`));
    
    
        }
        if(ask.options == 'Quit'){
            console.log(chalk.bgRedBright('You lose !Try again'));
            process.exit();
            
        }
    }
    
    // zombie
    if (opponent.select == 'Zombie'){
        
        let ask = await inquirer.prompt({
            name:'options',
            type:'list',
            message:'Select your action',
            choices:['Attack','Have potion','Quit'],
        });
        if(ask.options == 'Attack'){
            let num=Math.floor(Math.random( )*2)
            if(num > 0){
                player1.fuelDeclined()
                console.log(chalk.green(`${player1.name} fuel is ${player1.fuel}`));
                console.log(chalk.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                if(player1.fuel <=0){
                    console.log(chalk.bgRedBright('You lose !Try again'));
                    process.exit();
                }
            }
            if(num <= 0){
                opponent1.fuelDeclined()
                console.log(chalk.green(`${player1.name} fuel is ${player1.fuel}`))
                console.log(chalk.red(`${opponent1.name} fuel is ${opponent1.fuel}`))
                if(opponent1.fuel <=0){
                    console.log(chalk.bgGreenBright('you win !Congragulations'));
                    process.exit();
                }
            }
                
        }
    
     
        if(ask.options == 'Have potion'){
            player1.fuelIncreased()
            console.log(chalk.bold.italic.green(`You intake a energy potion ! Your fuel is ${player1.fuel}`))
    
    
        }
        if(ask.options == 'Quit'){
            console.log(chalk.bgRedBright('You lose !Try again'));
            process.exit();
            
        }
    }

    // 'Monster'
    if (opponent.select == 'Monster'){
        
        let ask = await inquirer.prompt({
            name:'options',
            type:'list',
            message:'Select your action',
            choices:['Attack','Have potion','Quit'],
        });
        if(ask.options == 'Attack'){
            let num=Math.floor(Math.random( )*2)
            if(num > 0){
                player1.fuelDeclined()
                console.log(chalk.green(`${player1.name} fuel is ${player1.fuel}`));
                console.log(chalk.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                if(player1.fuel <=0){
                    console.log(chalk.bgRedBright('You lose !Try again'));
                    process.exit();
                }
            }
            if(num <= 0){
                opponent1.fuelDeclined()
                console.log(chalk.green(`${player1.name} fuel is ${player1.fuel}`));
                console.log(chalk.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                if(opponent1.fuel <=0){
                    console.log(chalk.bgGreenBright('you win !Congragulations'));
                    process.exit();
                }
            }
                
        }
    
     
        if(ask.options == 'Have potion'){
            player1.fuelIncreased()
            console.log(chalk.bold.italic.green(`You intake a energy potion ! Your fuel is ${player1.fuel}`));
    
    
        }
        if(ask.options == 'Quit'){
            console.log(chalk.bgRedBright('You lose !Try again'));
            process.exit();
            
        }
    }
}
while(true);



























