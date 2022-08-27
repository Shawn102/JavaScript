//Problem: Make a process that can calculate a student course progress
//Use "promise" to solve this problem
////In this processs you can define 3 situation such as "pyment, study progress, getting certificate"
{
    // const sPayment = true;
    // const sMarks = 90;
    // function payment() {
    //     console.log(`Payment method is in progess....`);
    //     const promise1 = new Promise(function (resolve, reject) {
    //         setTimeout(function () {
    //             if(sPayment === true) {
    //                 resolve();
    //             }
    //             else {
    //                 reject("Payment failed!");
    //             }
    //         }, 2000)
    //     })
    //     return promise1;
    // }
    // function progress() {
    //     console.log(`Course is in progress>>>>>`);
    //     const promise2 = new Promise(function (resolve, reject) {
    //         setTimeout(function () {
    //             if(sMarks >= 80) {
    //                 resolve();
    //             }
    //             else {
    //                 reject(`You don't have enough marks to get the certificate :(`);
    //             }
    //         }, 3000)
    //     })
    //     return promise2;
    // }
    // function certificate() {
    //     console.log(`Preparing your certificate.......`);
    //     const promise3 = new Promise(function (resolve) {
    //         setTimeout(function () {
    //             resolve(`Congratulations for your achievevment :)`);
    //         }, 1000)
    //     })
    //     return promise3;
    // }
    // payment()
    // .then(progress)
    // .then(certificate)
    // .then(function (value) {
    //     console.log(value);
    // })
    // .catch(function (err) {
    //     console.log(err);
    // })
}



{
    //Define a school study plan and excute all the situation in 3 step:
    let studentAddmission = true;
    let allSemesterDone = true;
    function addmissionProcess() {
        console.log(`Addmission is in progress>>>>`);
        const promise1 = new Promise(function (res, rej) {
            setTimeout(function () {
                if(studentAddmission) {
                    res();
                } else {
                    rej("You failed to get addimission in our institute! Better luck next time.");
                }
            }, 1000)
        })
        return promise1;
    }
    function semesterProgress() {
        console.log(`Semester is in progress.....`);
        const promise2 = new Promise(function (resolve, reject) {
            setTimeout(function () {
                if(allSemesterDone) {
                    resolve();
                } else {
                    reject("You have to pay money to get addmission again :(")
                }
            }, 15000)
        })
        return promise2;
    }
    function gratuating() {
        console.log(`Preparing your certificate!`);
        const promise3 = new Promise(function (re) {
            setTimeout(function () {
                re(`Congratulation for your long journy with us, wish you a bright future.`)
            }, 3000)
        })
        return promise3;
    }
    addmissionProcess()
    .then(semesterProgress)
    .then(gratuating)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    })
}