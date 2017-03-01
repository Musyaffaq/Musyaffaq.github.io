window.onload = function() {
    document.getElementById("input").onkeyup = function() { filter()};
    function filter() {
        var i;
        var input = document.getElementById("input").value.toUpperCase();
        var list = document.getElementById("list");
        var item = list.getElementsByTagName("li");
        
        for (i = 0; i < item.length; i++) {
            x = item[i].getElementsByTagName("h4")[0];
            if (x.innerHTML.toUpperCase().indexOf(input) > -1) {
                item[i].style.display = "";
            } else {
                item[i].style.display = "none";
            }
        }
    }
}