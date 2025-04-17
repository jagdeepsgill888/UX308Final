import {hello, colour_mix} from './functions.js';

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
2. Write a function that determines the secondary rgb_colour from mixing two primaryRGB (Red, Green, Blue) colours

      <h2>results</h2>
      <p>The secondary of colour_mix("red", "blue") == "{colour_mix('red', 'blue')}"</p>
      <p>The secondary of colour_mix("green", "green") == "{colour_mix('green', 'green')}"</p>
      <p>The secondary of colour_mix("green", "pink") == "{colour_mix('green', 'pink')}"</p>
    </section>;
}


export {Question1, Question2}