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



export {hello, colour_mix}