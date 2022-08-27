//JavaScript Math Object

//The JavaScript Math object allows you to perform mathematical tasks on numbers.



//The Math Object
//Unlike other objects, the Math object has no constructor.
//All methods and properties can be used without creating a Math object first.

console.log(Math.PI);


{


    //Math Properties(Constants)
    {
        console.log(Math.E); // returns Euler's number
        console.log(Math.PI);  // returns PI
        console.log(Math.SQRT2); // returns the square root of 2
        console.log(Math.SQRT1_2); // returns the square root of 1/2
        console.log(Math.LN2); // returns the natural logarithm of 2
        console.log(Math.LN10); // returns the natural logarithm of 10
        console.log(Math.LOG2E); // returns base 2 logarithm of E
        console.log(Math.LOG10E);  // returns base 10 logarithm of E 

    }







    //Math Methods
    {
        //The syntax for Math any methods is : Math.method.(number)
        {
           //Number to Integer
            //There are 4 common methods to round a number to an integer:
            {
                //1)Math.round(x)	Returns x rounded to its nearest integer
                //2)Math.ceil(x)	Returns x rounded up to its nearest integer
                //3)Math.floor(x)	Returns x rounded down to its nearest integer
                //4)Math.trunc(x)	Returns the integer part of x (new in ES6)
            }


            


            //Math.round()
            {
                //Math.round(x) returns the nearest integer:
                console.log(Math.round(4.4));
                console.log(Math.round(4.5));
                console.log(Math.round(3.4));
                console.log(Math.round(-4.2));
            }


            //Math.ceil()
            {
                //Math.ceil(x) returns the value of x rounded 'up' to its nearest integer
                console.log(Math.ceil(4.2));
                console.log(Math.ceil(-4.2));
                console.log(Math.ceil(4.4));
                console.log(Math.ceil(4.7));
            }




            //Math.floor()
            {
                //Math.floor(x) returns the value of x rounded down to its nearest integer:
                console.log(Math.floor(4.9));
                console.log(Math.floor(4.2));
                console.log(Math.floor(4.5));
            }




            //Math.trunc()
            {
               //Math.trunc(x) returns the integer part of x
               console.log(Math.trunc(4.9));
               console.log(Math.trunc(4.3));
            }



            //Math.sign()
            {
                //Math.sign(x) returns if x is negative, null or positive:
                console.log(Math.sign(-4)); //returns -1
                console.log(Math.sign(0)); //returns 0
                console.log(Math.sign(4)); //returns 1
            }
            //Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6





            //Math.pow()
            {
                //"Math.pow(x,y)" returns the value of x to the power of y
                console.log(Math.pow(8,2));
                //returns 64

                console.log(Math.pow(8,4));
            }


            //Math.sqrt()
            {
                //Math.sqrt(x) returns the square root of x:
                console.log(Math.sqrt(64));
                console.log(Math.sqrt(81));
            }


            //Math.abs()
            {
                //Math.abs(x) returns the absolute(positive) value of x:
                console.log(Math.abs(-4)); 
                //returns 4

                console.log(Math.abs(-1)); //it returns 1
            }


            //Math.sin()
            {
                //Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).

                //If you want to use degrees instead of radians, you have to convert degrees to radians:
                //Angle in radians = Angle in degrees x PI / 180.
                {
                    console.log(Math.sin(90 * Math.PI / 180));
                    // returns 1 (the sine of 90 degrees)
                    
                    
                    console.log(Math.sin(180 * Math.PI / 180));
                }



                //Math.cos()
                {
                    //Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
                    console.log(Math.cos(0 * Math.PI / 180));
                    //// returns 1 (the cos of 0 degrees) 

                    console.log(Math.cos(90 * Math.PI / 180));
                }
            }
        }







        //Math.min() and Math.max()
        {
            //Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:


            //Math.min()
            console.log(Math.min(5,100,20,3));
            console.log(Math.min(200,100,1000,300));



            //Math.max()
            console.log(Math.max(100,5,105,50,150));
            console.log(Math.max(1000,40,200));
        }






        //Math.randow()
        {
            //Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
            console.log(Math.random());
        }




        //The 'Math.log()' Method
        {
           //Math.log(x) returns the natural logarithm of x:
           {
               console.log(Math.log(1)); //It returns 0(zero);
               console.log(Math.log(10)); //// returns 2.302585092994046
           } 




           //The Math.log2() Method
           {
               //Math.log2(x) returns the base 2 logarithm of x.
               //How many times must we multiply 2 to get 8?
               console.log(Math.log2(8)); //It returns 3
               console.log(Math.log2(64));
           }



           //The Math.log10() Method
           {
               //Math.log10(x) returns the base 10 logarithm of x.

                //How many times must we multiply 10 to get 1000?

                console.log(Math.log10(1000)); //it returns 3
                console.log(Math.log10(10000));
           }
        }
    }
















    //Again JS Math practice


    //JavaSript Math Object
    {
        //The JavaScript Math object allows you to perform mathematical tasks on numbers.
        console.log(Math.PI);
        /// returns 3.141592653589793
        
        




        //The Math Object
        {
           //Unlike other objects, the Math object has no constructor
           // The Math object is static.
           //All methods and properties can be used without creating a Math object first.



           {
               //Math Properties (Constants)
               //The syntax for any Math property is : Math.property.

               //JavaScript provides 8 mathematical constants that can be accessed as Math properties:
               {
                   console.log(Math.E);
                   console.log(Math.PI);
                   console.log(Math.SQRT2);
                   console.log(Math.SQRT1_2);
                   console.log(Math.LN2);
                   console.log(Math.LN10);
                   console.log(Math.LOG2E);
                   console.log(Math.LOG10E);
               }




               //Math Methods
               {
                   //The syntax for Math any mehtod is: Math.method(number);
                   {
                       //Number to Integer
                       {
                           //There are 4 common methods to round a number to an integer

                           //1)Math.round(x) returns x rounded to its nearest integer
                           //2)Math.ceil(x) returns x rounded 'up' to its nearest integer
                           //3)Math.floor(x) returns x rounded 'down' to its nearest integer
                           //4)Math.trunc(x) returns the  integer part of x(new in ES6)
                           
                           {
                               //Math.round()
                               //The "Math.round(x)" returns the nearest integer
                               console.log(Math.round(4.4));
                               console.log(Math.round(4.5));
                               console.log(Math.round(4.9));
                               console.log(Math.round(-4.2));
                           }


                           //Math.ceil()
                           {
                               //The "Math.ceil(x)"returns the value of x rounded up to its nearest integer:
                               console.log(Math.ceil(4.3));
                               console.log(Math.ceil(4.7));
                               console.log(Math.ceil(-4.3));
                           }



                           //Math.floor()
                           {
                               //The "Math.floor(x)"returns the value of x rounded down to its nearest integer:
                               console.log(Math.floor(4.8));
                               console.log(Math.floor(4.3));
                               console.log(Math.floor(-4.5));
                           }


                           //Math.trunc()
                           {
                               //Math.trunc(x) returns the integer part of x:
                               console.log(Math.trunc(5.9));
                               console.log(Math.trunc(-4.5));
                               console.log(Math.trunc(4.3));
                           }





                           //Math.sign()
                           {
                               //Math.sing(x) returns if x is positive,null or negative
                               console.log(Math.sign(-5)); 
                               //it will returns '-1' 
                               console.log(Math.sign(0));
                               //it will returns '0'
                               console.log(Math.sign(5));
                               //It'll returns 1
                           }




                           //Math.pow()
                           {
                               //Math.pow(x, y) returns the value of x to the power of y:
                               console.log(Math.pow(5,2));
                               console.log(Math.pow(8,3));
                           }




                           //Math.sqrt()
                           {
                               //Math.sqrt(x) returns the square root of x:
                               console.log(Math.sqrt(64));
                               console.log(Math.sqrt(81));
                               console.log(Math.sqrt(100));
                           }


                           //Math.abs()
                           {
                               //Math.abs(x) returns the absolute (positive) value of x:
                               console.log(Math.abs(-3)); 
                               console.log(Math.abs(-5));
                           }



                           //Math.sin()
                           {
                               //Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
                               //If you want to use degrees instead of radians, you have to convert degrees to radians:
                               //Angle in radians = Angle in degrees x PI / 180.
                               console.log(Math.sin(90 * Math.PI / 180));
                               console.log(Math.sin(80 * Math.PI / 180));
                               console.log(Math.sin(0 * Math.PI / 180));
                               console.log(Math.sin(-90 * Math.PI / 180));
                               console.log(Math.sin(60 * Math.PI / 180));
                           }


                           //Math.cos()
                           {
                               //Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
                               //If you want to use degrees instead of radians, you have to convert degrees to radians:
                               //Angle in radians = Angle in degrees x PI / 180.
                               {
                                  console.log(Math.cos(0 * Math.PI / 180));
                                  console.log(Math.cos(-180 * Math.PI / 180));
                                  console.log(Math.cos(360 * Math.PI / 180)); 
                               }





                               //Math.min() and Math.max()
                               {
                                   //Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
                                   console.log(Math.min(900,100,150,250));
                                   console.log(Math.min(30,20,2,50));




                                   //Math.max()
                                   console.log(Math.max(190,2000,300,200));
                                   console.log(Math.max(10,100,140,200,1000));
                               }



                               //Math.random()
                               {
                                   //Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
                                   console.log(Math.random());
                                   console.log(Math.random());
                               }



                               //Math.log() method
                               {
                                   //Math.log(x) returns the natural logarithm of x:
                                   console.log(Math.log(1));
                                   console.log(Math.log(9));
                                   console.log(Math.log(81));
                               }



                               //The 'Math.log2()' Method
                               {
                                  //Math.log2(x) returns the base 2 logarithm of x.
                                  //How many times must we multiply 2 to get 8?
                                  console.log(Math.log2(8)); 
                                  console.log(Math.log2(64));
                                  console.log(Math.log2(256));
                               }



                               //Math.log10() Method
                               {
                                   //Math.log10(x) returns the base 10 logarithm of x.
                                   console.log(Math.log10(100));
                                   console.log(Math.log10(1000));
                                   console.log(Math.log10(10000));
                                   console.log(Math.log10(100000));
                               }
                           }
                       }
                   }
               }

           }
        }
    }
}