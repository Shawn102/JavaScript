//Make a program easier to read and maintain -

//Problem: Define a process, that can maintain a whole business institute
//In this problem you have to define the buyer payment method, business status and delivery, and total profit
{
    const buyerPayment = 10000;
    const orderProduct = 500;
    const deliveryTime = "7d";

    //Payment status....
    function paymentReceived() {
        console.log(`Payment is in progess>>>>`);
        
        const promise1 = new Promise(function (resolve1, reject1) {
            setTimeout(function() {
                if(buyerPayment) {
                    resolve1();
                } else {
                    reject1("Payment failed! try again later.")
                }
            }, 2000)
        })
        return promise1;
    }
    //Number of products buyer want....
    function numberOfProduct() {
        console.log(`Counting the number of product.....`);

        //Delivery time depend on how many products buyer ordered
        const promise2 = new Promise(function (resolve2, reject2) {
            setTimeout(function () {
                if(orderProduct >= 500) {
                    resolve2();
                } else {
                    reject2("You have to wait few more day, we can not send anything under 500 products. So please wait for our further delivery information.");
                }
            }, 3000)
        })
        return promise2;
    }

    //Delivery status.....
    function deliveryStatus() {
        console.log(`Checking your delivery status.......`);

        //Checking the time....
        const promise3 = new Promise(function (resolve3, reject3) {
            setTimeout(function () {
                if(deliveryTime === "7d") {
                    resolve3();
                } else {
                    reject3("Please wait, your product on the way. Wait for next notification.");
                }
            }, 4000)
        })
        return promise3;
    }

    //Final stage of this courier service and buyer product....
    function receivingProduct() {
        console.log(`Go to the nearest logistic office to receive your products.`);

        const promise4 = new Promise(function (resolve4) {
            setTimeout(function () {
                resolve4('Thanks for your cooperation, if you like our products and logistic service then come again.')
            }, 2000)
        })
        return promise4;
    }

    async function logisticService() {
        try {
            await paymentReceived();
            await numberOfProduct();
            await deliveryStatus();
            const receive = await receivingProduct();
            console.log(receive);
        } 
        catch (error) {
            console.log(error);
        }
    }
    logisticService();
}