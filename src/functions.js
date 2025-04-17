function hello(name){
    return(`hello ${name}`);
}


function colour_mix(rgb_colour1, rgb_colour2){
 
    let rgb_colour;
    if ((rgb_colour1 === "red" && rgb_colour2 === "blue") || (rgb_colour1 === "blue" && rgb_colour2 === "red")) {
        rgb_colour = "fuchsia";
    } else if ((rgb_colour1 === "red" && rgb_colour2 === "green") || (rgb_colour1 === "green" && rgb_colour2 === "red")) {
        rgb_colour = "yellow";
    } else if ((rgb_colour1 === "green" && rgb_colour2 === "blue") || (rgb_colour1 === "blue" && rgb_colour2 === "green")) {
        rgb_colour = "aqua";
    } else if (rgb_colour1 === rgb_colour2 && ["red", "green", "blue"].includes(rgb_colour1)) {
        rgb_colour = rgb_colour1;
    } else {
        rgb_colour = "Error";
    }

    return rgb_colour;
}


function largest_product(val1, val2, val3) {
    let product;
    if ((val1 >= val2 && val2 >= val3) || (val2 >= val1 && val1 >= val3)) {
        product = val1 * val2;
    } else if ((val1 >= val3 && val3 >= val2) || (val3 >= val1 && val1 >= val2)) {
        product = val1 * val3;
    } else if ((val2 >= val3 && val3 >= val1) || (val3 >= val2 && val2 >= val1)) {
        product = val2 * val3;
    } else {
        product = "Error! Please enter 3 sets of valid numbers";
    }
    return product;
}

function day_of_the_week(day_num) {
    let day;
    if (day_num === 1) {
        day = "Day - Sunday";
    } else if (day_num === 2) {
        day = "Day - Monday";
    } else if (day_num === 3) {
        day = "Day - Tuesday";
    } else if (day_num === 4) {
        day = "Day - Wednesday";
    } else if (day_num === 5) {
        day = "Day - Thursday";
    } else if (day_num === 6) {
        day = "Day - Friday";
    } else if (day_num === 7) {
        day = "Day - Saturday";
    } else {
        day = "Error please enter a number between 1-7";
    }
    return day;
}

export {hello, colour_mix, largest_product, day_of_the_week}