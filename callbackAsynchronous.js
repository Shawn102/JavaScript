//Problem: Make a process that can calculate a student course progress
//In this processs you can define 3 situation such as "pyment, study progress, getting certificate"
{
    const studentPayment = true;
    const studentMarks = 90;
    function payment(callback1) {
        console.log(`Payment on progress!`);
        setTimeout(function () {
            if(studentPayment === true) {
                callback1();
            }
            else {
                console.log(`Payment failed! try again later :(`);
            }
        }, 2000)
    }
    function progress(callback2) {
        console.log(`Course on progress.....`);
        setTimeout(function () {
            if(studentMarks >= 80) {
                callback2();
            }
            else {
                console.log(`Not enough marks to get your certificate.`);
            }
        }, 3000)
    }
    function getCertificate() {
        console.log(`Preparing your certificate>>>>>`);
        setTimeout(function () {
            console.log(`Congratulations! We feel proud of you.`);
        }, 1000)
    }

    payment(function (){
        progress(getCertificate)
    })
}