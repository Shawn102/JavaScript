// {
//   //Callback function
//   let display = (opps) => {
//     console.log(opps);
//   };
//   let calculation = (sum1, sum2, callback) => {
//     let total = sum1 * sum2;
//     return callback(total);
//   };
//   calculation(5, 5, display);
// }

{
  //Asynchronous function
  // let calculation = () => {
  //     let d = new Date();
  //     // return callback(total);
  //     setInterval(() => {
  //         console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
  //     }, 1000)
  // }
  // calculation();

  {
    // let myTime = () => {
    //     let d = new Date();
    //     console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
    // }
    // setInterval(myTime, 1000);
  }
}

// {
//   //js promise
//   {
//     const age = 22;
//     let currentTimeZone = () => {
//       console.log(`It's a js promise!`);
//       const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//           if (age >= 20) {
//             resolve("He is old enough to join this test.");
//           } else {
//             reject("He is not still teenager and can not join this test.");
//           }
//         }, 5000);
//       });
//       return promise;
//     };
//     currentTimeZone()
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }

// {
  //Make a program easier to read and maintain -
  //Use "async" and "await"
  //Problem: Define a process, that can maintain a whole business institute
  //In this problem you have to define the buyer payment method, business status and delivery, and total profit
  //Make this with "Arrow function"
//   {
//     const buyerPayment = 10000;
//     const orderProduct = 500;
//     const deliveryTime = "7d";
//     //Define the payment method
//     const paymentReceived = () => {
//         console.log(`Payment status is in progress>>>>>`);
//         const promise1 = new Promise((resolve1, reject1) => {
//             setTimeout(() => {
//                if(buyerPayment) {
//                    resolve1();
//                } else {
//                    reject1(`Payment failed.`);
//                }
//             }, 2000)
//         })
//         return promise1;
//     }
//     //Checking the countity of the products
//     const numberOfProduct = () => {
//         console.log(`Checking the the total number of products.`);
//         ///Delivery time depend on how many products buyer ordered
//         const promise2 = new Promise((resolve2, reject2) => {
//             setTimeout(() => {
//                 if(orderProduct >= 500) {
//                     resolve2();
//                 } else {
//                     reject2(`You have to wait few more day! We'll send your product as soon as possible,
//                     Our minimum requirement to send any parcel is 500.`);
//                 }
//             }, 5000)
//         })
//         return promise2;
//     }
//     //Checking the Delivery status
//     const deliveryStatus = () => {
//         console.log(`Checking the delivery status.....`);
//         /////Checking the time....
//         const promise3 = new Promise((resolve3, reject3) => {
//             setTimeout(() => {
//                 if(deliveryTime === "7d") {
//                     resolve3();
//                 } else {
//                     reject3(`Your products on the way, please wait for further notification.`);
//                 }
//             }, 8000)
//         })
//         return promise3;
//     }
//     ////Final stage of this courier service and buyer product....
//     const receivingProduct = () => {
//         console.log(`Please go to our nearest logistic office to rececive your product.`);
//         const promise4 = new Promise((resolve4) => {
//             setTimeout(() => {
//                 resolve4(`Thanks for your cooperation! Send us feedback about our logistic and products.`);
//             },15000)
//         })
//         return promise4;
//     }
//     //make a "async" and "await" function
//     async function readAble() {
//         try{
//         await paymentReceived();
//         await numberOfProduct();
//         await deliveryStatus();
//         const lastStep = await receivingProduct();
//         console.log(lastStep);
//         } 
//         catch(error) {
//             console.log(error);
//         }
//     }
//     readAble();
//   }
// }




////Define a school study plan and excute all the situation in 3 step:
{
    const studentPayment = true;
    const studentCredit = 150;
    //Create an Arrow function to define all the state
    let paymentStatus = () => {
        console.log(`Payment method is in progress>>>>>`);
        //Creating a promise
        const promise1 = new Promise((resolve1, reject1) => {
            setTimeout(() => {
                if(studentPayment) {
                    resolve1();
                }
                else {
                    reject1(`Payment failed!`);
                }
            }, 5000)
        })
        return promise1;
    }
    //Checking student exam result 
    let earnedCredit = () => {
        console.log(`Checking student credit status....`);
        //Creating another promise
        const promise2 = new Promise((resolve2, reject2) => {
            setTimeout(() => {
                if(studentCredit >= 140) {
                    resolve2();
                } else{
                    reject2(`You can't graduate with this credit, fulfil your requirement to get your graduation certificate :(`);
                }
            }, 10000)
        })
        return promise2;
    }
    //Final stage of providing certificate among the qulified students
    let getCertificate = () => {
        console.log(`Preparing your certificate.....`);
        //Creating another promise for this stage
        const promise3 = new Promise((resolve3) => {
            setTimeout(() => {
                resolve3(`Congratulation! We're proud of your great achievement, it's not an easy work. But finally you done.
                You're always welcome to our university. Once you graduate from this university, eternally you'll be in our golden students list`);
            }, 15000)
        })
        return promise3;
    }

    //Creating a function to call all the process above according to it's serial
    async function ourInstituteSystem() {
       try{
        await paymentStatus();
        await earnedCredit();
        const valueOfPromis3 = await getCertificate();
        console.log(valueOfPromis3);
       } catch(error) {
           console.log(error);
       }
    }
    ourInstituteSystem();
}

// node .\advancedCallbackAsyncAwait.js
