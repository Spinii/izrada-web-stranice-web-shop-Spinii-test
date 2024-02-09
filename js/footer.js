const xhttpFooter = new XMLHttpRequest();

xhttpFooter.onload = function(){
    document.getElementById("footer").innerHTML = this.responseText
}

xhttpFooter.open("GET", "../partials/footer.html");
xhttpFooter.send();