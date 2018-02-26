	/*Atbash Cipher*/
/*Encoding function*/
function AtbashEncode(){
	var Text = document.getElementById('message').value;
	var ResoltText = "";
	var Alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
	var AlChek = 0;
for( var iT=0; iT<Text.length; iT ++){
	AlChek = 0;
	for(var iA=0; iA<Alphabet.length; iA ++){
		if(Text[iT] == Alphabet[iA]){
			ResoltText += Alphabet[Alphabet.length - iA];
			AlChek = 1;
			break;
		}
	}
	if(AlChek == 0){
		ResoltText += Text[iT];
	}
}
document.getElementById('message').value= ResoltText;
ResoltText="";
}

	/*ROT 13*/
/*Encoding Function*/
function ROT13(){
	var Text = document.getElementById('message').value;
	var ResoltText = "";
	var Alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
	var AlChek = 0;
for( var iT=0; iT<Text.length; iT ++){
	AlChek = 0;
	for(var iA=0; iA<Alphabet.length; iA ++){
		if(Text[iT] == Alphabet[iA]){
			if(iA < 26){
				ResoltText += Alphabet[iA+26];
				AlChek = 1;
			}
			else{
				ResoltText += Alphabet[iA-26];
				AlChek = 1;
			}
		}
	}
	if(AlChek == 0){
		ResoltText += Text[iT];
	}
}
document.getElementById('message').value= ResoltText;
ResoltText="";
}	
	/*Caessar Cipher*/
/*Encoding Function*/
function CaessarI(){
	var Text = document.getElementById('message').value;
	var ResoltText = "";
	var Alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
	var AlChek = 0;
	var Key = document.getElementById('KeyNumber').value;
		if(Key>25){
		window.alert("The key must be a number between 1and 25");
		return;
	}
		if(Key<1){
		window.alert("The key must be a number between 1and 25");
		return;
	}
	if(isNaN(Key)){
		window.alert("The key must be a number between 1and 25");
		return;
	}
	
for( var iT=0; iT<Text.length; iT ++){
	AlChek = 0;
	for(var iA=0; iA<Alphabet.length; iA ++){
		if(Text[iT] == Alphabet[iA]){
			if(iA < 52-Key*2){
				ResoltText += Alphabet[iA+Key*2];
				AlChek = 1;
			}
			else{
				ResoltText += Alphabet[(iA+Key*2)-52];
				AlChek = 1;
			}
		}
	}
	if(AlChek == 0){
		ResoltText += Text[iT];
	}
}
document.getElementById('message').value= ResoltText;
ResoltText="";
}
	/*Caessar Cipher*/
/*Decipher Function*/
function CaessarD(){
	var Text = document.getElementById('message').value;
	var ResoltText = "";
	var Alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
	var AlChek = 0;
	var Key = document.getElementById('KeyNumber').value;
	if(Key>25){
		window.alert("The key must be a number between 1and 25");
		return;
	}
		if(Key<1){
		window.alert("The key must be a number between 1and 25");
		return;
	}
	if(isNaN(Key)){
		window.alert("The key must be a number between 1and 25");
		return;
	}
	
for( var iT=0; iT<Text.length; iT ++){
	AlChek = 0;
	for(var iA=0; iA<Alphabet.length; iA ++){
		if(Text[iT] == Alphabet[iA]){
			if(iA < Key*2){
				ResoltText += Alphabet[52-(Key*2-iA)];
				AlChek = 1;
			}
			else{
				ResoltText += Alphabet[iA-Key*2];
				AlChek = 1;
			}
		}
	}
	if(AlChek == 0){
		ResoltText += Text[iT];
	}
}
document.getElementById('message').value= ResoltText;
ResoltText="";
}