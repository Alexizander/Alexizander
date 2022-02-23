function baixarArquivo(){
    
}

function updateDate(){
n =  new Date();
y = n.getFullYear() + 30;
m = n.getMonth() + 1;
d = n.getDate();
h = n.getHours();
min = n.getMinutes();
s = n.getSeconds();



document.getElementById("date").innerHTML = (m < 10 ? '0' + m : m) + "/" + (d < 10 ? '0' + d : d) + "/" + y + " às " + (h < 10 ? '0' + h : h) + ":" + (min < 10 ? '0' + min : min) + "." + (s < 10 ? '0' + s : s);
}

setInterval(updateDate, 50);