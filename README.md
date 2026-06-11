# summer-chores

Summer Chores is a practice for callbacks, promises, and async/await.

The activity involves getting a list of summer chores done from start to finish. If the user falls asleep after completing a chore, the code will stop running, and return a line saying that they fell asleep. The likelihood of them falling asleep is dependent on a random number generator and which number chore they are on.

I first did the callback version where I referenced the previous function to make sure it was complete before executing the next function.

The second version uses Promises. In the Promises version, the callbacks are removed, and the setTimeout() are nested into a return new Promise method. 