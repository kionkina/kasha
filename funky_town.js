//Team Kasha -- Karina Ionkina and Daria Shifrina
//SoftDev pd07
//K #15: Sequential Progression
//2017-12-06 


var fibonacci = function(n){
    if (n==0){
	return 0;
    }
    else if (n == 1){
	return 1;
    }
    else {
	return  fibonacci(n - 1) + fibonacci(n - 2);
    }};

var geecd = function(a,b){
    var c = Math.max(a,b);
    var d = Math.min(a,b);
    if(b == a){
	return a;
    }
    else{
    return geecd(d,c-d);
}};


var randomStudent = function(Lism){
    var rannum = Math.floor(Math.random() * Lism.length);
    //    console.log(rannum);
    return(Lism[rannum]);

};


var buttonCallback = function(e) {
    console.log("\n \nhere comes e ...");
    console.log(e);
    console.log("\n \nhere comes this ...");    
    console.log(this);
};

var nameFxn = function(){
    var boop = randomStudent(['Karina', 'Dasha', 'Adam', 'TMoi', 'Jawad', 'Taylor']);
    console.log(boop);
};


var fibFxn = function(){
    var eep = fibonacci(6);
    console.log(eep);
};

var gcdFxn = function(){
    var wat = geecd(4,28);
    console.log(wat);
};

var b = document.getElementById('b');
b.addEventListener('click', buttonCallback);

var name = document.getElementById('getName');
getName.addEventListener('click', nameFxn);

var fib = document.getElementById('fib');
fib.addEventListener('click', fibFxn);

var gcd = document.getElementById('gcd');
gcd.addEventListener('click', gcdFxn);


//console.log("fibonacci(15) . . .");
//console.log(fibonacci(15));
//console.log("gcd(28, 4) . . .");
//console.log(gcd(28,4));
//console.log('randomStudent(["Banana","Orange","Apple","Mango"]) . . .');
//console.log(randomStudent(["Banana","Orange","Apple","Mango"]));