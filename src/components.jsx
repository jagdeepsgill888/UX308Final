import {hello, colour_mix, largest_product, day_of_the_week } from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a function that determines the secondary rgb_colour from mixing two primaryRGB (Red, Green, Blue) colours.

      <h2>results</h2>
      <p>First colour red & Second colour blue:colour_mix("red", "blue") == "{colour_mix('red', 'blue')}"</p>
      <p>First colour green & Second colour green:colour_mix("green", "green") == "{colour_mix('green', 'green')}"</p>
      <p>First colour red & Second colour pink:colour_mix("red", "pink") == "{colour_mix('red', 'pink')}"</p>
    </section>;
}


function Question3(){
    return <section>
3. Write a function that determines the product of the two largest values of val1, val2, and val3.

      <h2>results</h2>
      <p>First value: 2 Second value: -13 Third value: 5 largest_product(2, -13, 5) == "{largest_product(2, -13, 5)}"</p>
      <p>First value: 1 Second value: 4 Third value: 100 largest_product(1, 4, 100) == "{largest_product(1, 4, 100)}"</p>
      <p>First value: -10 Second value: 8 Third value: 8 largest_product(-10, 8, 8) == "{largest_product(-10, 8, 8)}"</p>
    </section>;
}

function Question4(){
    return <section>
4. Write a function that determines that the name of a day in a week from an an integer day number.

      <h2>results</h2>
      <p>Please enter a number between 1 and 7: Number 2 day_of_the_week(2) == "{day_of_the_week(2)}"</p>
      <p>Please enter a number between 1 and 7: Number 8 day_of_the_week(8) == "{day_of_the_week(8)}"</p>
      <p>Please enter a number between 1 and 7: Number 7 day_of_the_week(3) == "{day_of_the_week(7)}"</p>
    </section>;
}

export {Question1, Question2, Question3, Question4}