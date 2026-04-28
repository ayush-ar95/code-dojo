const rocketLaunch = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const launchSuccess = false;    // change this to "true" to run "then" method and "false" to run "catch" method.
            if (launchSuccess) {
                resolve("Rocket Successfully Launched");
            } else {
                reject("uh-no, the rocket encountered a problem.");
            }
        }, 5000);
    })
        .then(resolvedValue => {
            console.log("then method is called");
            console.log(resolvedValue);
            console.log("Rocket launch process completed");
        })
        .catch(rejectedValue =>{
            console.log("catch method called");
            console.log(rejectedValue);
            console.log("Rocket launch process completed");
        })
        .finally(()=>{
            console.log("Rocket launch process completed");
            console.log("cleanup code being executed");
            console.log("mandatory codes are being executed");
        })

const status = rocketLaunch();
console.log(status);