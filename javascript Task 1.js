var name = "sule ibrahim";
var courses = ["frontend", "code tracking"];
document.write(name + courses)

var courseNumber
var i = courses.length;
var n = 0;
var m = 1;
for(n = 0; n<=200; n + 2){
    if((i % 2) == 0){
        document.write(n);
    }
}

for(m = 1; m<=200; m + 2){
    if((i % 2) == 1){
        document.write(m);
    }
}
