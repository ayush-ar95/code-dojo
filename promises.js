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
        .catch(rejectedValue => {
            console.log("catch method called");
            console.log(rejectedValue);
            console.log("Rocket launch process completed");
        })
        .finally(() => {
            console.log("Rocket launch process completed");
            console.log("cleanup code being executed");
            console.log("mandatory codes are being executed");
        })

const status = rocketLaunch();
console.log(status);

// ----------- promise chaining --------------

const calculateDistanceToMoon = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const distance = 384400;
            console.log(`Distance to the moon: ${distance} km`);
            resolve(distance);
        }, 1000);
    });
};

const determineRocketSpeed = distance => {
    return new Promise(resolve => {
        setTimeout(() => {
            const speed = 4000;
            console.log(`Rocket speed: ${speed} km/h`);
            resolve({ distance, speed });
        }, 1000);
    });
};

const calculateTimeToReachMoon = ({ distance, speed }) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const time = distance / speed;
            console.log(`Time to reach the moon: ${time.toFixed(2)} hours`);
            resolve(time);
        }, 1000);
    });
};

const verifyTrajectory = time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isTrajectoryCorrect = true;
            console.log(`Trajectory verification: ${isTrajectoryCorrect ? "success" : "failure"}`);
            if (isTrajectoryCorrect) {
                resolve();
            } else {
                reject("Trajectory verification failed. Launch aborted");
            }
        }, 1000);
    });
};

const initiateLaunch = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Rocket Launched");
            resolve();
        }, 1000);
    });
};

calculateDistanceToMoon()
    .then(distance => determineRocketSpeed(distance))
    .then(result => calculateTimeToReachMoon(result))
    .then(time => verifyTrajectory(time))
    .then(() => initiateLaunch())
    .catch(error => console.error(error));

/*
    * with promises, error can be caught in a single .catch() block at the end of the chain.
    * Adding new steps to the sequence is straight forward. we can simply append another .then() block to the chain.
*/

// ----------- Promises.all Example --------------

const causeErrorWhilefetchingUserProfile = true;
const causeErrorWhilefetchingRecentActivity = true;
const causeErrorWhilefetchingNotificationSetting = true;

const fetchUserProfile = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (causeErrorWhilefetchingUserProfile) {
                resolve({
                    id: 1,
                    name: "Sam Smith"
                });
            } else {
                reject("Failed to fetch user profile.");
            }
        }, 1000);
    });
};

const fetchRecentActivity = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (causeErrorWhilefetchingRecentActivity) {
                resolve(["Logged in", "Updated profile", "Posted a comment"]);
            } else {
                reject("Failed to fetch recent activity.");
            }
        }, 1500);
    });
};

const fetchNotificationSettings = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (causeErrorWhilefetchingNotificationSetting) {
                resolve({
                    email: true,
                    sms: false
                });
            } else {
                reject("Failed to fetch notification settings.");
            }
        }, 1700);
    });
};

Promise.all([fetchUserProfile(), fetchRecentActivity(), fetchNotificationSettings()])
    .then(([profile, activity, settings]) => {
        console.log("User Profile:", profile);
        console.log("Recent Activity:", activity);
        console.log("Notification Settings:", settings);
        console.log("Dashboard data loaded successfully!");
    })
    .catch((error) => {
        console.error("Failed to load dashboard data:", error);
    });

// https://courses.bigbinaryacademy.com/learn-javascript/promises/exercise-2-chaining-promises/

