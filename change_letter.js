

var text = "my name is mnz";
var change_text = "";
var text = text.split("");

for(var i = 0;i<text.length;i++){
    if(text[i] == " ") {
        change_text += "/";

    }
    else{
        change_text += text[i];
    }
}



console.log(change_text);