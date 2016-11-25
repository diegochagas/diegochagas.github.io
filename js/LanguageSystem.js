function LanguageSystem(){
	var language;

	this.verifyLanguage = function(){
		var aux = localStorage.getItem("language");

		if(aux == null){
			localStorage.setItem("language", "pt");
			language = "en";
		} else
			language = aux;
	}

	this.setLanguage = function(idiom){
		if(idiom == "en" || idiom == "pt"){
			localStorage.setItem("language", idiom);
			language = idiom;
			return true;
		} else
			return false;
	}

	this.changeLanguage = function(){
		if(language == "en")
			this.setLanguage("pt");
		else
			this.setLanguage("en");
	}

	this.getLanguage = function(){
		return language;
	}

	this.getText = function(type){
		if(language == "en"){
			var array = {
				"txtOcupation": "Front-end web development",
			}
			return array[type];
		}

		else{
			var array = {
				"txtOcupation": "Desenvolvedor Web Front-end",	
			}
			return array[type];
		}
	}

	this.setText = function(){
		$(".identification h3").text(txt.getText("txtOcupation"));
	}
}

