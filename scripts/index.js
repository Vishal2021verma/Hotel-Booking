
var div = document.getElementById('toggle-viewMore');
var btn = document.getElementById('change-text-btn');

function toggleViewMore() {
    if (div.style.display == "flex") {
        div.style.display = "none";
        btn.innerText = "View More >>";
    }
    else {
        div.style.display = "flex";
        btn.innerText = "View Less >>";
        
    }

}