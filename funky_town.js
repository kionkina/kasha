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

var gcd = function(a,b){
    var c = Math.max(a,b);
    var d = Math.min(a,b);
    if(b == a){
	return a;
    }
    else{
	return gcd(d,c-d);
}};


var randomStudent = function(Lism){
    var rannum = Math.floor(Math.random() * Lism.length);
    console.log(rannum);
    return(Lism[rannum]);

};

console.log("fibonacci(15) . . .");
console.log(fibonacci(15));
console.log("gcd(28, 4) . . .");
console.log(gcd(28,4));
console.log('randomStudent(["Banana","Orange","Apple","Mango"]) . . .');
console.log(randomStudent(["Banana","Orange","Apple","Mango"]));