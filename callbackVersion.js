// 1. Mowing the Yard (2000 ms)
// 2. Weedeating the edges of the house and fence line (1500 ms)
// 3. Trimming the hedges (1000 ms)
// 4. Collect fallen wood for summer night fires (2500 ms)
// 5. Water the garden (500 ms)

const timeMow = 2000;
const timeWeedEat = 1500;
const timeTrim = 1000;
const timeWood = 2500;
const timeWater = 500;


function mowYard(name, callback) {
    setTimeout(() => {console.log(`${name} mowed the yard.`)
    callback(name)
    }, timeMow);  
}

function weedEat(name, callback) {
    setTimeout(() => {
        if (Math.random() < 0.15) {
            console.log(`${name} fell asleep while mowing the lawn.`)
        } else {
            console.log(`${name} finished using the weed eater.`);
            callback(name);
        }
    }, timeWeedEat);
};

function trimHedges(name, callback) {
    setTimeout(() => {
        if (Math.random() < 0.20) {
            console.log(`${name} fell asleep after weed eating the yard.`)
        } else {
            console.log(`${name} finished trimming the hedges.`);
            callback(name);
        }
    }, timeTrim);
};

function collectWood(name, callback) {
    setTimeout(() => {
        if (Math.random() < 0.25) {
            console.log(`${name} fell asleep after trimming the hedges.`)
        } else {
            console.log(`${name} finished collecting wood.`);
            callback(name);
        }
    }, timeWood);
};

function waterGarden(name, callback) {
    setTimeout(() => {
        if (Math.random() < 0.30) {
            console.log(`${name} fell asleep after collecting wood.`)
        } else {
            console.log(`${name} finished watering the garden.`);
            callback(name);
        }
    }, timeWater);
};


function doSummerChores(name) {
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    console.log(`${name} finished all their chores!`);
    })
    })
    })
    });
}


doSummerChores("Grace");





// if (time > 2000) {
//    weedEat(mowYard)} 
//    else { console.log('Grace fell asleep after mowing the yard')};
