//Based on knowladage (JavaScript 1 to 30)





//1st Problem

//How to get output from 1 to 6 number
{
    console.log(my_number(1,6))

    function my_number(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
}





//2nd problem

//How to sort an array alphabetically

{
    const students_name =["Shawn","Zahin","Ashik","Dristy","Rahim","Fahad"];
    console.log(students_name.sort());
}



//3rd problem

//How to sort students roll number in ascending order
{
    const all_students = [ 9,5,10,1,4,3,2,6,7,8];
    console.log(all_students.sort(function(a,b){
        return a - b;
    }));
}



//4th problem

//How to know that,the declare year is 'leap year' or not

function notLeapYear(year){
    if ((year %  400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
        console.log(`${year} is a leap year`)
    } 
    else{
        console.log(`${year} is not a leap year`)
    }

}

notLeapYear(2026);


{
function leap_year(years){
    if( (years % 400 === 0) || ((years % 4 === 0) && (years % 100 !== 0))){
        console.log(`${years} is leap year`)
    }
    else{
        console.log(`${years} not a leap year`)
    }
};

leap_year(2032);
}




//5th problem

//How to compare two friends birth year?
let text = "";
const shain_Birthday = new Date();
shain_Birthday.setFullYear(1996,01,15);
const Shawn_Birthday = new Date;
Shawn_Birthday.setFullYear(1999,11,22);

if(Shawn_Birthday > shain_Birthday){
    text = "Shain born before Shawn"
}
else{
    text = "Shain born after Shawn"
}
console.log(text);




//6th problem

//how to findout how many vowels have in a sentence
{
    const vowels = ["a","e","i","o","u","A","E","I","O","U"];

    function count_vowels(sentence){
        let count = 0;
        const letters = Array.from(sentence);

        letters.forEach(function(value){
           if(vowels.includes(value)){
               count++;
           } 
        });
        return count;

    }

    console.log(count_vowels("I love Bangladesh"))
}



{
    const vowels = ["a","e","i","o","u","A","E","I","O","U"];

    function all_vowels(sentence){
        let count = 0;
        const letter = Array.from(sentence);

        letter.forEach(function(value){
            if(vowels.includes(value)){
                count++;
            }
        })
        return count;
    }
    console.log(all_vowels("Hi there,I'm Shawn"));
}



{
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    function count_all_vowels(sentence){
        let count = 0;
        const converting_to_array = Array.from(sentence);
        converting_to_array.forEach(function(value){
            if(vowels.includes(value)){
                count++;
            }
        });
        return count;

    }
    console.log(count_all_vowels("I'm studying Computer Science at Southwest Forestry University"));
}


{
    const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    function my_vowels(sentence){
        let count = 0;
        const countAllVowels = Array.from(sentence);
        countAllVowels.forEach(function(value){
            if(vowel.includes(value)){
                count++;
            }
        });
        return count;

    }
    console.log(my_vowels("What to do I don't know"));

}


{
    const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    function my_thinking_sucks(sentence){
        let count = 0;
        const countallVowels = Array.from(sentence);
        countallVowels.forEach(function(value){
            if(vowel.includes(value)){
                count++;
            }
        });
        return count;

    }
    console.log(my_thinking_sucks("Hi there"));
}




//7th problem 

//How to returns the duplicate numbers from an Array
{
    const numbers = [1,2,4,4,5,6,7,8,6,2];
    const duplicate = numbers.filter(function(value,index,array){
        return array.indexOf(value) !== index
    });

    console.log(duplicate);
}


{
    const numbers_of = [ 1,1,2,3,2,4,5,6,3,7,8,9,5];
    const duplicates = numbers_of.filter(function(value,index,array){
        return array.indexOf(value) !== index
    });

    console.log(duplicates);
}


{
    const n = [1,2,1,3,4,5,2,6,7,8,9,3];
    const duplicating = n.filter(function(value,index,array){
        return array.indexOf(value) !== index
    });
    console.log(duplicating);
}








//Again practice
{
    //1st problem
    
    //How to get output from 1 to 6
    {
        console.log(myRandom_num(1,6));

        function myRandom_num(min,max){
            return Math.floor(Math.random()*(max-min+1))+min;
        };
    }



    //Sort all students name alphabetically
    {
        const sN = ["Shawn","Ashik","Dristy","Rabby"];
        console.log(sN.sort());
    }


    //Sort students roll numbers in ascending order\
    {
        const rN = [201901024,201901008,201901016,201901037];
        console.log(rN.sort(function(a,b){
            return a - b;
        }));
    }



    //Findout a year is a leap year or not 
    {
        function leapYearORnot(year){
            if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
                console.log(`${year} is a leap year`);
            }
            else{
                console.log(`${year} is not a leap year`)
            }
        };
        leapYearORnot(2026);
    }

    {
        function mustbeLeapYearNeed(year){
            if(year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
                console.log(`${year} is a leap year`)
            }
            else{
                console.log(`${year} not a leap year`)
            }

        };
        mustbeLeapYearNeed(2024);
    }

    {
        function L_Y(year){
            if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
                console.log(`${year} is a leap year`)
            }
            else{
                console.log(`${year} is not a leap year`)
            }

        };
        L_Y(2028);
    }




    //count the vowels in a sentence
    {
        const vowels = ["a","e","i","o","u","A","E","I","O","U"];
        function vowels_function(sentence){
            let count = 0;
            const creating_array = Array.from(sentence);

            creating_array.forEach(function(value){
                if(vowels.includes(value)){
                    count++;
                }
            });
            return count;

        }
        console.log(vowels_function("I'm new programmer,My name is Shawn"));
    }




    {
        const vowels = ["a","e","i","o","u","A","E","I","O","U"];
        function c_vowels(sentence){
            let count = 0;
            const c_a = Array.from(sentence);

            c_a.forEach(function(value){
                if(vowels.includes(value)){
                    count++;
                }
            });
            return count;
        };
        console.log(c_vowels("I'm Shawn and I'm 21 years old"));
    }



    {
        const vowels = ["a","e","i","o","u","A","E","I","O","U"];

        function n_numbers_vowels(sentence){
            let count = 0;
            const v = Array.from(sentence);

            v.forEach(function(value){
                if(vowels.includes(value)){
                    count++;
                }
            });
            return count;

        }
        console.log(n_numbers_vowels("Hello JavaScript"));
    }


        ////7th problem 

        //How to returns the duplicate numbers from an Array
        {
            const n = [1,2,1,3,4,5,2,6,7,8,9,3];
            const d_n = n.filter(function(value,index,array){
                return array.indexOf(value) !==index
            });
            console.log(d_n);
        }



        {
            const num = [1,2,3,4,2,4,5,6,7,8,9,5];
            const dp_num = num.filter(function(value,index,array){
                return array.indexOf(value) !==index
            })
            console.log(dp_num);
        }




}


