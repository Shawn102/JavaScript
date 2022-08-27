//JavaScript Random

{
    //Math.random()

    {
        //Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
        console.log(Math.random());
        //Math.random() always returns a number lower than 1
    }


    //JavaScript Random Integers
    {
        //Math.random() used with Math.floor() can be used to return random integers.

        console.log(Math.floor(Math.random() * 10));
        //// Returns a random integer from 0 to 9:

        console.log(Math.floor(Math.random()*11));
        //Returns a random integer from 0 to 10



        console.log(Math.floor(Math.random()*100));
        //Returns a random integer from 0 to 99


        console.log(Math.floor(Math.random()*101));
        //Returns a random integer from 0 to 100


        console.log(Math.floor(Math.random()*100)+1);
        //Returns a random integer from 1 to 100


        console.log(Math.floor(Math.random()*10)+1);
        //Returns a random integer from 1 to 10
    }






    //JavaScript Random Integers
    {
      //Math.random() used with Math.floor() can be used to return random integers.
      
      console.log(Math.floor(Math.random()*10));
      //Returns a random integer from 0 to 9


      console.log(Math.floor(Math.random()*11));
      //Returns a random integer from 0 to 10


      console.log(Math.floor(Math.random()*100));
      //Returns a random integer from 0 to 99


      console.log(Math.floor(Math.random()*101));
      //Returns a random integer from 0 to 100


      console.log(Math.floor(Math.random()*100)+1);
      //Returns a random integer from 1 to 100


      console.log(Math.floor(Math.random()*10)+1);
      //Returns a random integer from 0 to 10
    }







    ///A Proper Random Function 
    {
        //As you can see from the examples above, it might be a good idea to create a proper random function to use for all random integer purposes.
        //This JavaScript function always returns a random number between min (included) and max (excluded):
        console.log(MathRandom(0,10));
        function MathRandom(min,max){
            return Math.floor(Math.random()* (max-min)) + min;
        }
        //This function returns the number between 0 to 9
    }


    {
        console.log(random(0,10));
        function random(min,max){
            return Math.floor(Math.random() *  (max - min)) + min;
        }
        //This one also returns the number between 0 to 9
    }



    {
        console.log(myRandomNumber(1,10));

        function myRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        //This returns a random number between 1 to 10
    }









    //JS Math.random() integers
    {
        console.log(Math.floor(Math.random() * 10));
        //This will returns a random integer from 0 to 9


        console.log(Math.floor(Math.random() * 11));
        //This will returns a random integer from 0 to 10


        console.log(Math.floor(Math.random()*100));
        //This will returns a random integer from 0 to 99


        console.log(Math.floor(Math.random()*101));
        //This will returns a random integer from 0 to 100


        console.log(Math.floor(Math.random()*100)+1);
        //This will returns a random integer from 1 to 100


        console.log(Math.floor(Math.random()*10)+1);
        //This will returns a random integer from 1 to 10
    }








    //Again creating proper Random function
    {
        console.log(myRan(0,10));

        function myRan(min,max){
            return Math.floor(Math.random()*(max-min)) + min;
        }
        //This will returns a random number between 0 to 9
    }
    {
        console.log(MyRan(0,11));

        function MyRan(min,max){
            return Math.floor(Math.random()* (max-min)) + min;
        }
        //This will returns a random number between 0 to 10
    }

    {
        console.log(mYraN(0,100));
        function mYraN(min,max){
            return Math.floor(Math.random() * (max-min)) + min;
        }
        //This will returns a number between 0 to 99
    }

 



    {
        console.log(nRandom(1,10));

        function nRandom(min,max){
            return Math.floor(Math.random()* (max-min+1)) + min;
        }
        //This will returns a random number between 1 to 10
    }



    {
        console.log(Nrandom(1,100));

        function Nrandom(min,max){
            return Math.floor(Math.random()*(max-min+1)) + min;
        }
        //This will returns a random number between 1 to 100
    }









    //Js random integer
    {
        console.log(Math.floor(Math.random() *10));
        //This will returns a random integer from 0 to 9


        console.log(Math.floor(Math.random()*11));
        //this will returns a random integer from 0 to 10


        console.log(Math.floor(Math.random()*100));
        //This will returns a random integer from 0 to 99


        console.log(Math.floor(Math.random()*101));
        //This will returns a integer from 0 to 100


        console.log(Math.floor(Math.random()*10) + 1);
        //This will returns a random integer from 1 to  10

        console.log(Math.floor(Math.random()*100)+1);
        //This will returns a random integer from 1 to 100
    }





    //A proper random function
    {
        console.log(myWay(0,100));

        function myWay(min,max){
            return Math.floor(Math.random()*(max-min))+min;
        }
        //This function will returns a integer number between 0 to 99
    }




    {
        console.log(noWay(1,100));

        function noWay(min,max){
            return Math.floor(Math.random()* (max - min + 1))+min;
        }
        //This function will returns a integer number between 1 to 100
    }




}