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
				"buttonChecked": false,
				"txtEducation": "Education",
				"txtWorkExperience": "Work Experience",
				"txtSkills": "Skills",
				"txtWorksDeveloped": "Works developed",
				"txtOcupation": "Front-end web developer",
				"txtBirtday": "5 November 1989",
				"txtLocal": "São Paulo / Brazil",
				"txtChangeLanguage": "Trocar Idioma",
				"txtCursoEtec": "Computer technician",
				"txtLocalEducation": "Praia Grande / São Paulo - Brazil",
				"txtDateEtec": "January 2014 - July 2015",
				"txtCursoFals": "Information systems",
				"txtDateFals": "February 2008 - December 2011",
				"txtAcademicRecords": "Academic records",
				"txtViewitOcupation": "Front-end web developer",
				"txtViewitDate": "March 2016 - Actually",
				"txtViewitResponsibilities": '<span>Node.js <span class="glyphicon glyphicon-ok"></span></span><span>Version control <span class="glyphicon glyphicon-ok"></span></span><span>Java web development<span class="glyphicon glyphicon-ok"></span></span><span>Mobile web pages <span class="glyphicon glyphicon-ok"></span></span><span>Handlebars.js <span class="glyphicon glyphicon-ok"></span></span><span>Apache Velocity Project<span class="glyphicon glyphicon-ok"></span></span><span>Jetty<span class="glyphicon glyphicon-ok"></span></span><span>Regex<span class="glyphicon glyphicon-ok"></span></span><span>Ajax<span class="glyphicon glyphicon-ok"></span></span><span>Bootstrap<span class="glyphicon glyphicon-ok"></span></span><span>Sass<span class="glyphicon glyphicon-ok"></span></span>',
				"txtUsatellOcupation": "Computer technician",
				"txtUsatellDate": "August 2014 - August 2015",
				"txtUsatellResponsibilities": '<span>SQL Server<span class="glyphicon glyphicon-ok"></span></span><span>Datebase<span class="glyphicon glyphicon-ok"></span></span><span>VPN Security Platforms<span class="glyphicon glyphicon-ok"></span></span><span>Phone systems<span class="glyphicon glyphicon-ok"></span></span><span>Customer support<span class="glyphicon glyphicon-ok"></span></span><span>Computer network<span class="glyphicon glyphicon-ok"></span></span>', 
				"txtNotaControlOcupation": "Customer Support Technician",
				"txtNotaControlDate": "December 2011 - May 2012",
				"txtNotaControlResponsibilities": '<span>Tributary administration<span class="glyphicon glyphicon-ok"></span></span><span>Customer support<span class="glyphicon glyphicon-ok"></span></span><span>Public administration<span class="glyphicon glyphicon-ok"></span></span><span>Excel spreadsheets<span class="glyphicon glyphicon-ok"></span></span><span>Applying formulas in Excel<span class="glyphicon glyphicon-ok"></span></span>', 
				"txtPrefeituraOcupation": "Administrative assistant",
				"txtPrefeituraDate": "August 2009 - December 2011",
				"txtPrefeituraResponsibilities": '<span>Writing memos and crafts<span class="glyphicon glyphicon-ok"></span></span><span>input and output<span class="glyphicon glyphicon-ok"></span></span><span>Digitation<span class="glyphicon glyphicon-ok"></span></span><span>Excel spreadsheets<span class="glyphicon glyphicon-ok"></span></span><span>Customer service<span class="glyphicon glyphicon-ok"></span></span><span>Educational systems<span class="glyphicon glyphicon-ok"></span></span><span>Inventory control<span class="glyphicon glyphicon-ok"></span></span><span>Receipt of enrollment<span class="glyphicon glyphicon-ok"></span></span><span>Telephonic service<span class="glyphicon glyphicon-ok"></span></span><span>Sending and receiving email<span class="glyphicon glyphicon-ok"></span></span><span>Student registration<span class="glyphicon glyphicon-ok"></span></span>',
				"txtCampOcupation": "Young apprentice",
				"txtCampDate": "February 2006 - November 2007",
				"txtCampResponsibilities": '<span>Telephonic service<span class="glyphicon glyphicon-ok"></span></span><span>Marketing<span class="glyphicon glyphicon-ok"></span></span><span>Dactylography<span class="glyphicon glyphicon-ok"></span></span><span>Entrepreneurship<span class="glyphicon glyphicon-ok"></span></span><span>Digitation<span class="glyphicon glyphicon-ok"></span></span><span>Work safety<span class="glyphicon glyphicon-ok"></span></span><span>Business management<span class="glyphicon glyphicon-ok"></span></span>', 
				"txtMoreWorks": "More works",
				"txtInfra": "Infrastructure",
				"txtDev": "Development",
				"txtBusiness": "Business",
				"txtUnderArmourTitulo": "Under Armour mobile web page",
				"txtUnderArmourDescricao": "Sports clothing and equipment company",
				"txtGiulianaFloresTitulo": "Giuliana Flores mobile web page",
				"txtGiulianaFloresDescricao": "Company that has been in the floral market for more than two decades",
				"txtNestleTitulo": "Nestlé mobile web page",
				"txtNestleDescricao": "World nutrition, health and wellness authority",
				"txtFloresOnlineTitulo": "Flores Online mobile web page",
				"txtFloresOnlineDescricao": "Leader in the segment of flowers and gifts on the Internet",
				"txtMariaVittoriaTitulo": "Maria Vittoria mobile web page",
				"txtMariaVittoriaDescricao": "Offers an exclusive collection of semi-jewelery and fine accessories",
				"txtDisciplinas": "Subjects",
				"txtSemestres": "Semesters",
				"txtCargaHoraria": "Workload",
				"txtBack": "Back",
				"txtTop": "Top",
			}
			return array[type];
		}

		else{
			var array = {
				"buttonChecked": true,
				"txtEducation": "Educação",
				"txtWorkExperience": "Experiência Profissional",
				"txtSkills": "Conhecimentos Específicos",
				"txtWorksDeveloped": "Trabalhos Desenvolvidos",
				"txtOcupation": "Desenvolvedor Web Front-end",	
				"txtBirtday": "5 de Novembro de 1989",
				"txtLocal": "São Paulo / Brasil",
				"txtChangeLanguage": "Change language",
				"txtCursoEtec": "Técnico de informática",
				"txtLocalEducation": "Praia Grande / São Paulo - Brasil",
				"txtDateEtec": "Janeiro de 2014 - Julho de 2015",
				"txtCursoFals": "Sistemas de informação",
				"txtDateFals": "Fevereiro de 2008 - Dezembro de 2011",
				"txtAcademicRecords": "Histórico Escolar",
				"txtViewitOcupation": "Desenvolvedor web front-end",
				"txtViewitDate": "Março de 2016 - Atualmente",
				"txtViewitResponsibilities": '<span>Node.js <span class="glyphicon glyphicon-ok"></span></span><span>Controle de versão <span class="glyphicon glyphicon-ok"></span></span><span>Desenvolvedor web Java<span class="glyphicon glyphicon-ok"></span></span><span>Páginas web mobile <span class="glyphicon glyphicon-ok"></span></span><span>Handlebars.js <span class="glyphicon glyphicon-ok"></span></span><span>Apache Velocity Project<span class="glyphicon glyphicon-ok"></span></span><span>Jetty<span class="glyphicon glyphicon-ok"></span></span><span>Regex<span class="glyphicon glyphicon-ok"></span></span><span>Ajax<span class="glyphicon glyphicon-ok"></span></span><span>Bootstrap<span class="glyphicon glyphicon-ok"></span></span><span>Sass<span class="glyphicon glyphicon-ok"></span></span>',
				"txtUsatellOcupation": "Técnico de informática",
				"txtUsatellDate": "Agosto de 2014 - Agosto de 2015",
				"txtUsatellResponsibilities": '<span>SQL Server<span class="glyphicon glyphicon-ok"></span></span><span>Banco de dados<span class="glyphicon glyphicon-ok"></span></span>							<span>Plataforma de Segurannça VPN<span class="glyphicon glyphicon-ok"></span></span><span>Sistemas de telefonia<span class="glyphicon glyphicon-ok"></span></span><span>Suporte ao cliente<span class="glyphicon glyphicon-ok"></span></span><span>Redes de computadores<span class="glyphicon glyphicon-ok"></span></span>', 
				"txtNotaControlOcupation": "Técnico de Suporte ao Cliente",
				"txtNotaControlDate": "December 2011 - May 2012",
				"txtNotaControlResponsibilities": '<span>Administração tributária<span class="glyphicon glyphicon-ok"></span></span><span>Suporte ao cliente<span class="glyphicon glyphicon-ok"></span></span><span>Gestão pública<span class="glyphicon glyphicon-ok"></span></span><span>Planilhas em Excel<span class="glyphicon glyphicon-ok"></span></span><span>Aplicação de fórmulas do Excel<span class="glyphicon glyphicon-ok"></span></span>',
				"txtPrefeituraOcupation": "Agente Administrativo",
				"txtPrefeituraDate": "Agosto de 2009 - Dezembro de 2011",
				"txtPrefeituraResponsibilities": '<span>Redigir memorandos e ofícios<span class="glyphicon glyphicon-ok"></span></span><span>Protocolar entrada e saída de documentos<span class="glyphicon glyphicon-ok"></span></span><span>Digitação<span class="glyphicon glyphicon-ok"></span></span><span>Planilhas em Excel<span class="glyphicon glyphicon-ok"></span></span><span>Atendimento ao cliente<span class="glyphicon glyphicon-ok"></span></span><span>Sistemas educacionais<span class="glyphicon glyphicon-ok"></span></span><span>Controle de estoque<span class="glyphicon glyphicon-ok"></span></span><span>Recebimento de matrículas<span class="glyphicon glyphicon-ok"></span></span><span>Atendimeto telefônico<span class="glyphicon glyphicon-ok"></span></span><span>Envio e recebimento de e-mails<span class="glyphicon glyphicon-ok"></span></span><span>Cadastro de alunos<span class="glyphicon glyphicon-ok"></span></span>',
				"txtCampOcupation": "Jovem Aprendiz",
				"txtCampDate": "Fevereiro de 2006 - Novembro de 2007",
				"txtCampResponsibilities": '<span>Atendimento via telefone<span class="glyphicon glyphicon-ok"></span></span><span>Marketing<span class="glyphicon glyphicon-ok"></span></span><span>Datilografia<span class="glyphicon glyphicon-ok"></span></span><span>Empreendorismo<span class="glyphicon glyphicon-ok"></span></span><span>Digitação<span class="glyphicon glyphicon-ok"></span></span><span>Segurança do trabalho<span class="glyphicon glyphicon-ok"></span></span><span>Gestão empresarial<span class="glyphicon glyphicon-ok"></span></span>', 
				"txtMoreWorks": "Mais trabalhos",
				"txtInfra": "Infraestrutura",
				"txtDev": "Programação",
				"txtBusiness": "Empresarial",
				"txtUnderArmourTitulo": "Página web mobile da Under Armour",
				"txtUnderArmourDescricao": "Empresa de roupas e equipamentos esportivos",
				"txtGiulianaFloresTitulo": "Página web mobile da Giuliana Flores",
				"txtGiulianaFloresDescricao": "Empresa que está no mercado floral a mais de duas décadas",
				"txtNestleTitulo": "Página web mobile da Nestlé",
				"txtNestleDescricao": "Autoridade mundial em nutrição, saúde e bem-estar",
				"txtFloresOnlineTitulo": "Página web mobile da Flores Online",
				"txtFloresOnlineDescricao": "Líder no segmento de flores e presentes pela Internet",
				"txtMariaVittoriaTitulo": "Página web mobile da Maria Vittoria",
				"txtMariaVittoriaDescricao": "Oferece uma coleção exclusiva de semijoias e acessórios finos",
				"txtDisciplinas": "Disciplinas",
				"txtSemestres": "Semestres",
				"txtCargaHoraria": "Carga Horária",
				"txtBack": "Voltar",
				"txtTop": "Topo",
			}
			return array[type];
		}
	}

	this.setText = function(){
		$("#switch-language").prop("checked", txt.getText("buttonChecked"));
		$(".navbar-nav .education a").text(txt.getText("txtEducation"));
		$(".navbar-nav .work-experience a").text(txt.getText("txtWorkExperience"));
		$(".navbar-nav a.skills").html(txt.getText("txtSkills") + '<span class="caret"></span>');
		$(".navbar-nav .development a").text(txt.getText("txtDev"));
		$(".navbar-nav .infrastructure a").text(txt.getText("txtInfra"));
		$(".navbar-nav .business a").text(txt.getText("txtBusiness"));
		$(".navbar-nav .works-developed a").text(txt.getText("txtWorksDeveloped"));
		$(".identification h3").text(txt.getText("txtOcupation"));
		$(".about-me .birtday").text(txt.getText("txtBirtday"));
		$(".about-me .local").text(txt.getText("txtLocal"));
		$(".change-language").text(txt.getText("txtChangeLanguage"));
		$("div.education h3").text(txt.getText("txtEducation"));
		$("div.education .curso-etec").text(txt.getText("txtCursoEtec"));
		$("div .local").text(txt.getText("txtLocalEducation"));
		$("div .date-etec").text(txt.getText("txtDateEtec"));
		$("div .curso-fals").text(txt.getText("txtCursoFals"));
		$("div .date-fals").text(txt.getText("txtDateFals"));
		$("div .panel-body a").text(txt.getText("txtAcademicRecords"));
		$("div.work-experience h3").text(txt.getText("txtWorkExperience"));
		$("div.work-experience .viewit h5").text(txt.getText("txtViewitOcupation"));
		$("div.work-experience .viewit h6").text(txt.getText("txtViewitDate"));
		$("div.work-experience .viewit p").html(txt.getText("txtViewitResponsibilities"));
		$("div.work-experience .usatell h5").text(txt.getText("txtUsatellOcupation"));
		$("div.work-experience .usatell h6").text(txt.getText("txtUsatellDate"));
		$("div.work-experience .usatell p").html(txt.getText("txtUsatellResponsibilities"));
		$("div.work-experience .nota-control h5").text(txt.getText("txtNotaControlOcupation"));
		$("div.work-experience .nota-control h6").text(txt.getText("txtNotaControlDate"));
		$("div.work-experience .nota-control p").html(txt.getText("txtNotaControlResponsibilities"));
		$("div.work-experience .prefeitura h5").text(txt.getText("txtPrefeituraOcupation"));
		$("div.work-experience .prefeitura h6").text(txt.getText("txtPrefeituraDate"));
		$("div.work-experience .prefeitura p").html(txt.getText("txtPrefeituraResponsibilities"));
		$("div.work-experience .camp h5").text(txt.getText("txtCampOcupation"));
		$("div.work-experience .camp h6").text(txt.getText("txtCampDate"));
		$("div.work-experience .camp p").html(txt.getText("txtCampResponsibilities"));
		$("#more-works").text(txt.getText("txtMoreWorks"));
		$(".infrastructure h3").text(txt.getText("txtInfra"));
		$(".development h3").text(txt.getText("txtDev"));
		$(".business h3").text(txt.getText("txtBusiness"));
		$("#works-developed > h3").text(txt.getText("txtWorksDeveloped"));
		$(".underarmour h3").text(txt.getText("txtUnderArmourTitulo"));
		$(".underarmour p").text(txt.getText("txtUnderArmourDescricao"));
		$(".giulianaflores h3").text(txt.getText("txtGiulianaFloresTitulo"));
		$(".giulianaflores p").text(txt.getText("txtGiulianaFloresDescricao"));
		$(".nestle h3").text(txt.getText("txtNestleTitulo"));
		$(".nestle p").text(txt.getText("txtNestleDescricao"));
		$(".floresonline h3").text(txt.getText("txtFloresOnlineTitulo"));
		$(".floresonline p").text(txt.getText("txtFloresOnlineDescricao"));
		$(".mariavittoria h3").text(txt.getText("txtMariaVittoriaTitulo"));
		$(".mariavittoria p").text(txt.getText("txtMariaVittoriaDescricao"));

		// Telas de histórico escolar
		$(".panel-body .disciplinas").text(txt.getText("txtDisciplinas"));
		$(".panel-body .semestres").text(txt.getText("txtSemestres"));
		$(".panel-body .carga-horaria").text(txt.getText("txtCargaHoraria"));
		$(".back").text(txt.getText("txtBack"));
		$(".top").text(txt.getText("txtTop"));
	}
}

