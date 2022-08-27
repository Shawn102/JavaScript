
//JavaScript Date Objects



{
    //JavaScript Date Output:
    //By default, JavaScript will use the browser's time zone and display a date as a full text string:
}



//Creating Date Objects
{
    //Date objects are created with the "new Date()" constructor
    //There are '4 ways' to create a new date object:


    //1)"new Date()" 

    //2)"new Date(year,month, day, hours, minutes, seconds, milliseconds)"

    //3)"new Date(milliseconds)"

    //4)"new Date(date string)"

}









//'new Date()'
{
    //"new Date()" creates a new date object with 'current date and time':
    const d = new Date();
    console.log(d);

}
{
    const cD = new Date();
    console.log(cD);
}










//"new Date(year,month,.....)"
{
    const date_of_birth_year_month = new Date(2021, 8, 28, 00, 35, 59, 0);
    console.log(date_of_birth_year_month);
}



//Note: JavaScript counts months from 0 to 11:

// January = 0.
//December = 11.

{
    //Specifying a day higher than max,will not result in an error but add the overflow to the next month:



    //Previous Century: 
    //One or Two digit years will be interpreted as "19xx"

    const overflow_month = new Date(99,10,52,10,50,20,0); //Here the 3rd value '52'for days,but we know the max value for days are 30.
    //but here we used 52,it cross the max value for days,that's why it  add the overflow to the next month:
    //We used 10 for month, because of the day value,it's addition 1 more month,and it will be return December now
    console.log(overflow_month);
    console.log(overflow_month.toUTCString());

}






//We cannot omit month. If you supply only one parameter,it will be treated as milliseconds
{
    const d = new Date(2020e9); //we can write this using exponential(power/scientific notation)
    //also we can write like this: "const d = new Date(559966859614392781312000000000);"
    //const d = new Date(559966859614392781312000000000); but this will return invalid Date,
    //Because JavaScript can only read 15 digit integer correctly,more than 15 digit number will return anything because JS can't understand it;
    //That's why if we want to write big digit 'milliseconds',it'll will invalid Date,to fix this problem we can use "exponential"formula
   console.log(d);
   console.log(d.toUTCString());
}

//Note: One day (24 hours) is 86 400 000 milliseconds.







{
//Date Methods
//When a Date object is created, a number of methods allow you to operate on it.
//Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC (universal, or GMT) time.

//UTC: Universal Time Coordinated
//PM: Post meridiem (pm - stands for post meridiem )
//AM: Ante meridiem (am - stands for the Latin ante meridiem)
}






//Displaying Dates format:
{
    //JavaScript will (by default) output dates in full text string format:

    //When you display a date object in HTML, it is automatically converted to a string, with the 'toString()' method.

    const Birth_Day = new Date(99,11,22,14,20,50,00);
    console.log(Birth_Day);
    console.log(Birth_Day.toString());

    console.log(Birth_Day.toUTCString());
    //The toUTCString() method converts a date to a UTC string (a date display standard).

    console.log(Birth_Day.toDateString());
    //The 'toDateString()' method converts a date to a more readable format.

    console.log(Birth_Day.toISOString());
    //The 'toISOString()' method converts a Date object to a string, using the ISO standard format,
    //This format is the 'VS' editor terminal default output type,but output is number not a string

}


{
    const My_Birth_Day = new Date(2021,11,22,00,00,00,00);
    console.log(My_Birth_Day); //vs terminal default formet is IOS

    console.log(My_Birth_Day.toString()); //This format is Html page defualt setting

    console.log(My_Birth_Day.toUTCString()); //This one strandard global format

    console.log(My_Birth_Day.toISOString());

    console.log(My_Birth_Day.toDateString()); // This format is more readable
}


//Note: The ISO format follows a strict standard in JavaScript.(ISO date input format like this "2021-09-28":"YYYY-MM-DD")
//Note: The other formats are not so well defined and might be browser specific.
















//JavaScript Date Formats

{
    //JavaScript Date Input

    //There are generally 3 types of JavaScript date input formats:

    //1)ISO Date: "2021-09-28"(The International Standard)("YYYY-MM-DD")

    //2)Short Date: "09/28/2021"("MM/DD/YYYY")

    //3)Long Date: "Sep 28 2021" or "28 Sep 2021"




    //The 'ISO' format follows a strict standard in JavaScript.
    //The other formats are not so well defined and might be browser specific.

}

{
    //ISO Dates (Year and Month)
    //ISO dates can be written with or without specifying day(YYYY-MM)
    const with_day = new Date("2021-09-28");
    console.log(with_day);


    const without_day = new Date("2021-03");
    console.log(without_day);
    //Time zones will vary the result above between February 28 and March 01.
}


{
    //ISO Dates (only year)

    //ISO dates can be written without month and day

    const only_year = new Date("2021");
    console.log(only_year);
    //Time zones will vary the result above between December 31 2020 and January 01 2021.
}


{
    //ISO Dates (Date-Time)

    //ISO dates can be written with add hours, minutes, and seconds(YYYY-MM-DDTHH:MM:SSZ)

    /*
   // Date and time is separated with a capital 'T'
   /// UTC(Universal Time Coordinated) time is defined with a capital letter 'Z'
   */



   ////UTC(Universal Time Coordinated)is the same as GMT(Greenwich Mean Time).
}





//JavaScript Short Dates
{
    //Short dates are written with an "MM/DD/YYYY" syntax like this:
    const d = new Date("09/28/2020");
    console.log(d);
}




//Date Input - Parsing Dates
{
    //If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
    //'Date.parse()' returns the number of milliseconds between the date and January 1, 1970:
    const mSecDate = Date.parse("Sep 28,2021");
    console.log(mSecDate);

    let isoDate = new Date(mSecDate);
    console.log(isoDate);


    const millisecond_converted_from_valid_date = Date.parse("Dec 22,2021");
    console.log(millisecond_converted_from_valid_date);

    const real_date_converted_from_milli = new Date(millisecond_converted_from_valid_date);
    console.log(real_date_converted_from_milli);


    const d_to_m = Date.parse("Jan 01,2000");
    console.log(d_to_m);

    let m_to_d = new Date(d_to_m);
    console.log(m_to_d);

}












//JavaScript Get Date Methods
{

    //The getTime() Method
    {
        const d = new Date();
        const dTime = d.getTime();
        console.log(dTime);
        //The getTime() method returns the number of milliseconds since January 1, 1970.

        const defineTime = new Date(70,01,01,20,50,36,10);
        console.log(defineTime);

        const get_time = defineTime.getTime();
        console.log(get_time);
    }



    //The 'getFullYear()' method
    {
       //The getFullYear() method returns the year of a date as a four digit number:
       const d = new Date();
        console.log(d);

        const full_year = d.getFullYear();
        console.log(full_year);
    }




    //The 'getMonth() method
    {
        //The getMonth() method returns the month of a date as a number (0-11):

        const d = new Date();
        console.log(d);

        let m = d.getMonth();
        console.log(m);


        const current_month = new Date(2021,01,22,10,50,20,100);
        console.log(current_month);

        const getCurrentMonth = current_month.getMonth();
        console.log(getCurrentMonth);



        //You can use an array of names, and getMonth() to return the month as a name:

        const dT = new Date();
        const months_in_a_year =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const get_the_current_from_the_array_list = months_in_a_year[dT.getMonth()];
        console.log(get_the_current_from_the_array_list);




        const from_array_list = new Date();
        const get_d = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "Novermber", "December"];
        const get_months = get_d[from_array_list.getMonth()];
        console.log(get_months);   
    }







    //The 'getDate()'method
    {

        //The getDate() method returns the day of a date as a number (1-31):
        const helloDate = new Date();
        const get_date = helloDate.getDate();
        console.log(get_date);


        const nowDate = new Date();
        const GetDate = nowDate.getDate();
        console.log(GetDate);

    }





    //The 'getHours()' method
    {
        //The getHours() method returns the hours of a date as a number (0-23):
        const get_hours = new Date();
        const make_variables = get_hours.getHours();
        console.log(make_variables);



        let gets_hour = new Date();
        let makes_variable = gets_hour.getHours();
        console.log(makes_variable);
    }




    //The 'getMinutes()' method
    {
        //The getMinutes() method returns the minutes of a date as a number (0-59):
        const get_minutes = new Date();
        const getminutes_result = get_minutes.getMinutes();
        console.log(getminutes_result);



        let getsMinutes = new Date();
        let result = getsMinutes.getMinutes();
        console.log(result);

    }



    //The "getSeconds()" method
    {
       //The getSeconds() method returns the seconds of a date as a number (0-59):
       const get_sec = new Date();
       const result = get_sec.getSeconds();
       console.log(result);
       
       

       let currentSec = new Date();
       let getSec = currentSec.getSeconds();
       console.log(getSec);
    }





    //The "getMilliseconds()"method
    {
        const get_mS = new Date();
        const getMs = get_mS.getMilliseconds();
        console.log(getMs);


        let Ms_get = new Date();
        let getmS = Ms_get.getMilliseconds();
        console.log(getmS);
    }





    //The "getDay()" Method
    {
       //The getDay() method returns the weekday of a date as a number (0-6):
       const d = new Date();
       const gD = d.getDay();
       console.log(gD); 
    }










    //All the get method overview
    {
        const d = new Date();

        console.log(d.getTime()); //The getTime() method returns the number of milliseconds since January 1, 1970.

        console.log(d.getFullYear()); //The 'getFullYear()'method returns the current year.

        console.log(d.getMonth()); //It'll returns the current month

        console.log(d.getDate()); // Get the day as a number (1-31)

        console.log(d.getHours()); //Get the hour (0-23)

        console.log(d.getMinutes()); //Get the minute (0-59)

        console.log(d.getSeconds()); //Get the second (0-59)

        console.log(d.getMilliseconds()); //Get the millisecond (0-999)

        console.log(d.getDay()); //Get the weekday as a number (0-6)

    }

}



















//JavaScript Date Methods
{
    //1)setDate() method

    //2) setFullYear() method

    //3)setHours() method

    //4)setMinutes() method

    //5)setSeconds() method

    //6)setMilliseconds() method

    //7)setMonth() method

    //8)setTime() method




    {
        //The setFullYear() Method
        {
            //The setFullYear() method sets the year of a date object
            const year = new Date();
            const dtu =year.getFullYear();
            year.setFullYear(1999,11,22);
            console.log(year);
            console.log(dtu);
        }



        //The setDate() method 
        {
            const d = new Date();
            d.setDate(15);
            console.log(d);


            const m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const dT = new Date();
            const getMonth =m[dT.getMonth()];
            console.log(getMonth);
        }
        {
            //The setDate() method can be used to add days to a date.
            const f = new Date();
            f.setDate(f.getDate() + 50);
            console.log(f);
        }
        {
            const p = new Date();
            p.setDate(p.getDate() + 100);
            console.log(p);
            //If adding days shifts the month or year, the changes are handled automatically by the Date object.
        }









        //The 'setHours()' method
        {
            const d = new Date();
            d.setHours(23);
            const f = d.toString();
            console.log(d);
            console.log(f);
        }




        //The 'setMinutes()' method
        {
          //The setHours() method sets the hours of a date object (0-59):
          const x = new Date();
          x.setMinutes(50); 
          console.log(x); 
        }



        //The "setSeconds()" method
        {
            //The setSeconds() method sets the seconds of a date object (0-59):
            const y = new Date();
            y.setSeconds(35);
            console.log(y);
        }




        //The "setTime()" method
        // {
        //     //Set the time (milliseconds since January 1, 1970)
        //     const a = new Date();
        //     a.setTime(2021e3);
        //     console.log(a);
        // }








        //The "setMilliseconds()" method
        {
            //Set the milliseconds (0-999)
            const b = new Date();
            b.setMilliseconds(100);
            console.log(b);
        }











        //Compare Dates

        //Dates can easily be compared.
        {
            let text="";
            const today = new Date();
            const future_day = new Date();
            future_day.setFullYear(2100,1,14);

            if( today < future_day)
            {text = "Today is before Feb 14, 2100"}
            else
            {
                text = "Today is after Feb 14,2100"
            }
            console.log(text);

        }



        {
            let text = "";
            const currentDate = new Date;
            const InFuture = new Date;
            InFuture.setFullYear(3000);

            if(InFuture > currentDate)
            {text = "currentDate is before Infuture date"}
            else
            {text = "currentDate is after Infuture date"}

            console.log(text);
        }
        {
            let textOfTheResult = "";
            const shain_Birthday = new Date;
            shain_Birthday.setFullYear(1997,09,12);
            const Shawn_Birthday = new Date();
            Shawn_Birthday.setFullYear(1999,11,22);

            if( shain_Birthday < Shawn_Birthday)
            {textOfTheResult = "Shain born before Shawn"}
            else
            {textOfTheResult = "Shain born after Shawn"}

            console.log(textOfTheResult);
        }
    }
}





