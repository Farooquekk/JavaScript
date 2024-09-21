function fizzBuzz(counter) {
    let value = " ";
    for (let i = 1; i <= counter; i++) {
        if (i % 3 == 0 && i % 5 == 0) value = value.concat('fizzBuzz ');
        else if (i % 3 == 0) value = value.concat('fizz ');
        else if (i % 5 == 0) value = value.concat('Buzz ');
    }
    console.log(value);
}

fizzBuzz(10);
