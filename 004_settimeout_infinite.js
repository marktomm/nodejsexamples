const fn = () => {
    console.log("settimeout fire");
    setTimeout(fn, 5000);
};

setTimeout(fn, 5000);

console.log("Console.log after settimeout");