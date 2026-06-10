
const timeMow = 2000;
const timeWeedEat = 1500;
const timeTrim = 1000;
const timeWood = 2500;
const timeWater = 500;


function mowYard(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(`${name} mowed the yard.`);
        }, timeMow);
    });
};

function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.15)  {
            resolve(`${name} finished using the weedeater.`);
            } else { 
            reject((`${name} fell asleep after mowing the yard.`))
            }
        }, timeWeedEat);
    });
};

function trimHedges(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.25) {
            resolve(`${name} finished trimming the hedges.`);
            } else {
            reject((`${name} fell asleep after weed eating the yard.`))
            }
        }, timeTrim);
    });
};

function collectWood(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random > 0.35) {
            resolve(`${name} finished collecting wood.`);
            } else {
                reject(`${name} fell asleep after trimming the hedges.`)
            }
        }, timeWood);
    });
};

function waterGarden(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (Math.random > 0.4) {
            resolve(`${name} finished watering the garden.`);
            } else {
                reject(`${name} fell asleep after collecting wood.`)
            }
        }, timeWater);
    });
};

function doSummerChores(name) {
    mowYard(name).then(value => {
        console.log(value); return weedEat(name)}).catch((error) => console.error(error))
    .then(value => {console.log(value); return trimHedges(name)}).catch((error) => console.error(error))
    .then(value => {console.log(value); return collectWood(name)}).catch((error) => console.error(error))
    .then(value => {console.log(value); return waterGarden(name)}).catch((error) => console.error(error))
    .then(value => console.log(value)).catch((error) => console.error(error))
    .then(() => {
        console.log(`${name} finished all their chores!`)});

};

 doSummerChores("Grace");