function buttonClicked() {
    document.getElementById("textbox").style.fontSize = "24pt";
    alert("Text size increased");
}

function radioClicked() {
    if (document.getElementById("FancyShmancy").checked == true) {
        document.getElementById("textbox").style.fontWeight = "bold";
        document.getElementById("textbox").style.color = "blue";
        document.getElementById("textbox").style.textDecoration = "underline";
        alert("Fancy Shmancy");    
    }

    if (document.getElementById("BoringBetty").checked == true) {
        document.getElementById("textbox").style.fontWeight = "normal";
        alert("Boring Betty");    
    }
}

function moo() {
    document.getElementById("textbox").value = document.getElementById("textbox").value.toUpperCase();
    var str = document.getElementById("textbox").value;
    var parts = str.split(".");
    str = parts.join("-Moo.");
    document.getElementById("textbox").value = str;
}