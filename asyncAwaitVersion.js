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
            if (Math.random() > 0.18) {
            resolve(`${name} finished trimming the hedges.`);
            } else {
            reject((`${name} fell asleep after weed eating the yard.`))
            }
        }, timeTrim);
    });
};

function collectWood(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (Math.random > 0.22) {
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
            if (Math.random > 0.26) {
            resolve(`${name} finished watering the garden.`);
            } else {
                reject(`${name} fell asleep after collecting wood.`)
            }
        }, timeWater);
    });
};

async function doSummerChores(name) {
   try {

    const mowYardResult = await mowYard(name);
    console.log(mowYardResult);

    const weedEatResult = await weedEat(name);
    console.log(weedEatResult);

    const trimHedgeResult = await trimHedges(name);
    console.log(trimHedgeResult);

    const collectWoodResult = await collectWood(name);
    console.log(collectWoodResult);

    const waterGardenResult = await waterGarden(name);
    console.log(waterGardenResult);

    console.log(`${name} completed all their chores!`);
   }

   catch(error) {

    console.error(error) };

};

 doSummerChores("Grace");