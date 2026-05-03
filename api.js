const completionMessage = "All tasks processed";

// Write your code below this
const executeTask = (taskName, taskDuration) => {
    return new Promise((resolve, reject) => {
        if (taskDuration < 0) {
            reject("failed: Invalid duration");
        }
        setTimeout(() => {
            resolve(`Completed Successfully in ${taskDuration} ms`);
        }, taskDuration);
    });
};

const runScheduler = async (tasks) => {

    const promises = tasks.map(task => {
        return executeTask(task.taskName, task.taskDuration).finally(console.log(completionMessage));
    })

    Promise.all(promises).then((results) => {
        console.log(results);

    })
}


const tasks = [{
    taskName: "Data Backup",
    taskDuration: 3000
},
{
    taskName: "Test Task",
    taskDuration: 0
},
{
    taskName: "Process Payment",
    taskDuration: 1
},
{
    taskName: "System Update",
    taskDuration: 5000
},
];

runScheduler(tasks);

// ----------------------------------------------


// 🔥 2. Implement a Timeout Wrapper for Any Async Function

// Problem:
// Write a utility function withTimeout(promise, ms) that ensures a promise either resolves within the given time or rejects with a timeout error.

const withTimeout = (promise, timeDuration) => {
    return new Promise((resolve, reject) => {
        promise.then((data)=>{
            resolve(data);
            clearTimeout(timerId);
        }).catch(err=>{
            reject(error); 
            clearTimeout(timerId)
        })
        // const timerId = setTimeout(()=>{
        //     reject(new Error("Operation timed out"));
        // }, timeDuration)
    })
}
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Task complete ✅"), 200)
})
const ress = withTimeout(p1, 300)



// 🔥4. Retry Failed Promises with Exponential Backoff

// Problem:
// Write a function retry(fn, retries) that retries an async function on failure, waiting 2x longer each time before retrying.

// Example Usage:

// let attempt = 0;
// const unstableTask = async () => {
//     attempt++;
//     if (attempt < 3) throw new Error("Fail " + attempt);
//     return "Success!";
// };

const retry = ((fn, retries, delay=200)=>{
    if(retries<0)
        return new Error("jfkj");
    new Promise ((resolve, reject)=>{
        setTimeout(()=>{

        })
    })

})

function retry(fn, retries,delay=2000) {
    if(retries<0) throw new Error("Failed to retry")
        return new Promise((resolve,reject)=>{
    fn().then(data=>resolve(data)).catch((err)=>{
        console.error('retrying');  // Retry failed promise
        setTimeout(()=>retry(fn,retries-1).then(resolve).catch(reject), 2*delay)
    })

})
}


const createPost = async ({title, body, userId}) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
    });

    if (!response.ok) {
      console.error("Network response was not ok.");
      return;
    }

    const data = await response.json();
    console.log("Created Resource:", data);
  } catch (error) {
    console.error("Fetch Error:", error);
  }
};

const newPost = {
  title: "New Post",
  body: "This is the body of the new post",
  userId: 1,
}
createPost(newPost);