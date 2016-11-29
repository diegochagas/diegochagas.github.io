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
				"txtDisciplinas": "Course",
				"txtSemestres": "Academic Semesters",
				"txtCargaHoraria": "Hours of study",
				"txtBack": "Back",
				"txtTop": "Top",
				// Lista de matérias ETEC
				"txtMateriaEtec11": "Programming logic",
				"txtMateriaEtec12": "Programming Techniques for Internet I",
				"txtMateriaEtec13": "Techniques of languages for database I",
				"txtMateriaEtec14": "Systems analysis",
				"txtMateriaEtec15": "Management of operating systems I",
				"txtMateriaEtec16": "Application software operation",
				"txtMateriaEtec17": "Installation and maintenance of computers",
				"txtMateriaEtec18": "English instrumental",
				"txtMateriaEtec19": "Language, work and technology",
				"txtMateriaEtec21": "Object Orientation Techniques",
				"txtMateriaEtec22": "Programming Techniques for Internet II",
				"txtMateriaEtec23": "Techniques of languages for database II",
				"txtMateriaEtec24": "Software development I",
				"txtMateriaEtec25": "Computer programming I",
				"txtMateriaEtec26": "Management of operational systems II",
				"txtMateriaEtec27": "Entrepreneurship and Innovation",
				"txtMateriaEtec28": "Planning of final course assignment in computer science",
				"txtMateriaEtec31": "Data communication networks",
				"txtMateriaEtec32": "Mobility Technologies",
				"txtMateriaEtec33": "Database Languages III Techniques",
				"txtMateriaEtec34": "Software Development II",
				"txtMateriaEtec35": "Computer Programming II",
				"txtMateriaEtec36": "Digital security",
				"txtMateriaEtec37": "Ethics and Organizational Citizenship",
				"txtMateriaEtec38": "Development of the final course assignment in computer science",
				// Lista de matérias FALS
				"txtMateriaFals11": "Principles of algorithm development",
				"txtMateriaFals12": "Probability and statistics I",
				"txtMateriaFals13": "Methodology of research I",
				"txtMateriaFals14": "Mathematics",
				"txtMateriaFals15": "Calculation I",
				"txtMateriaFals16": "Technical and business Portuguese",
				"txtMateriaFals17": "Technical English I",
				"txtMateriaFals18": "Introduction to computing",
				"txtMateriaFals19": "Fundamentals of Information Systems I",
				"txtMateriaFals21": "Methodology of research II",
				"txtMateriaFals22": "Mathematical logic",
				"txtMateriaFals23": "Principles of research II",
				"txtMateriaFals24": "Computer Architecture",
				"txtMateriaFals25": "Calculation II",
				"txtMateriaFals26": "Fundamentals of Information System II",
				"txtMateriaFals27": "Probability and statistics II",
				"txtMateriaFals28": "Technical English II",
				"txtMateriaFals31": "Data structure I",
				"txtMateriaFals32": "Database I",
				"txtMateriaFals33": "Software engineering I",
				"txtMateriaFals34": "Methods in computational mathematics I",
				"txtMateriaFals35": "Computer networks I",
				"txtMateriaFals36": "Administration I",
				"txtMateriaFals37": "Computer and society",
				"txtMateriaFals38": "Logic and programming I",
				"txtMateriaFals39": "Operating Systems I",
				"txtMateriaFals41": "Software engineering II",
				"txtMateriaFals42": "Operating Systems II",
				"txtMateriaFals43": "Programming language II",
				"txtMateriaFals44": "Methods in Computational Mathematics II",
				"txtMateriaFals45": "Computer Networks II",
				"txtMateriaFals46": "Data structure II",
				"txtMateriaFals47": "Database II",
				"txtMateriaFals48": "Administration II",
				"txtMateriaFals49": "Economics applied to technology area",
				"txtMateriaFals51": "Programming language III",
				"txtMateriaFals52": "Project management",
				"txtMateriaFals53": "Operational Research",
				"txtMateriaFals54": "Distributed systems",
				"txtMateriaFals55": "Complementary activities I",
				"txtMateriaFals61": "Programming language IV",
				"txtMateriaFals62": "Artificial intelligence",
				"txtMateriaFals63": "Complementary Activities II",
				"txtMateriaFals64": "Computer Graphics (CG)",
				"txtMateriaFals65": "Database design",
				"txtMateriaFals66": "Software Project",
				"txtMateriaFals71": "Management Information Systems",
				"txtMateriaFals72": "Scientific initiation project I",
				"txtMateriaFals73": "Final course assignment I",
				"txtMateriaFals74": "Supervised internship I",
				"txtMateriaFals75": "Complementary Activities III",
				"txtMateriaFals76": "Software and information quality",
				"txtMateriaFals77": "Process and engineering modeling",
				"txtMateriaFals81": "Topics in information systems",
				"txtMateriaFals82": "Complementary Activities IV",
				"txtMateriaFals83": "Feasibility of system projects",
				"txtMateriaFals84": "Security of information systems",
				"txtMateriaFals85": "Information Technology Governance",
				"txtMateriaFals86": "Supervised internship II",
				"txtMateriaFals87": "Scientific initiation project II",
				"txtMateriaFals88": "Final course assignment II",
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
				// Lista de matérias ETEC
				"txtMateriaEtec11": "Lógica de programação",
				"txtMateriaEtec12": "Técnicas de programação para internet I",
				"txtMateriaEtec13": "Técnicas de linguagens para banco de dados I",
				"txtMateriaEtec14": "Análise de sistemas",
				"txtMateriaEtec15": "Gestão de sistemas operacionais I",
				"txtMateriaEtec16": "Operação de software aplicativo",
				"txtMateriaEtec17": "Instalação e manutenção de computadores",
				"txtMateriaEtec18": "Inglês instrumental",
				"txtMateriaEtec19": "Linguagem, trabalho e tecnologia",
				"txtMateriaEtec21": "Técnias de orientação a objetos",
				"txtMateriaEtec22": "Técnicas de programação para internet II",
				"txtMateriaEtec23": "Técnicas de linguagens para banco de dados II",
				"txtMateriaEtec24": "Desenvolvimento de software I",
				"txtMateriaEtec25": "Programação de computadores I",
				"txtMateriaEtec26": "Gestão de sistemas operacionais II",
				"txtMateriaEtec27": "Empreendedorismo e inovação",
				"txtMateriaEtec28": "Planejamento do trabalho de conclusão de curso (TCC) em informática",
				"txtMateriaEtec31": "Redes de comunicação de dados",
				"txtMateriaEtec32": "Tecnologias para mobilidade",
				"txtMateriaEtec33": "Técnicas de linguagens para banco de dados III",
				"txtMateriaEtec34": "Desenvolvimento de software II",
				"txtMateriaEtec35": "Programação de computadores II",
				"txtMateriaEtec36": "Segurança digital",
				"txtMateriaEtec37": "Ética e cidadania organizacional",
				"txtMateriaEtec38": "Desenvolvimento do trabalho de conclusão de curso (TCC) em informática",
				// Lista de matérias FALS
				"txtMateriaFals11": "Princípios de desenvolvimento de algoritimo I",
				"txtMateriaFals12": "Probabilidade e estatística I",
				"txtMateriaFals13": "Metodologia da pesquisa I",
				"txtMateriaFals14": "Matemática",
				"txtMateriaFals15": "Cálculo I",
				"txtMateriaFals16": "Português técnico e empresarial",
				"txtMateriaFals17": "Inglês instrumental I",
				"txtMateriaFals18": "Introdução a computação",
				"txtMateriaFals19": "Fundamentos de sistemas de informações I",
				"txtMateriaFals21": "Metodologia da pesquisa II",
				"txtMateriaFals22": "Lógica matemática",
				"txtMateriaFals23": "Princípios da pesquisa II",
				"txtMateriaFals24": "Arquitetura de computadores",
				"txtMateriaFals25": "Cálculo II",
				"txtMateriaFals26": "Fundamentos de sistema de informações II",
				"txtMateriaFals27": "Probabilidade e estatística II",
				"txtMateriaFals28": "Inglês instrumental II",
				"txtMateriaFals31": "Estrutura de dados I",
				"txtMateriaFals32": "Banco de dados I",
				"txtMateriaFals33": "Engenharia de software I",
				"txtMateriaFals34": "Métodos em matemática computacional I",
				"txtMateriaFals35": "Redes de computadores I",
				"txtMateriaFals36": "Administração I",
				"txtMateriaFals37": "Computador e sociedade",
				"txtMateriaFals38": "Lógica e programação I",
				"txtMateriaFals39": "Sistemas operacionais I",
				"txtMateriaFals41": "Engenharia de software II",
				"txtMateriaFals42": "Sistemas operacionais II",
				"txtMateriaFals43": "Linguagem de programação II",
				"txtMateriaFals44": "Métodos em matemática computacional II",
				"txtMateriaFals45": "Redes de computadores II",
				"txtMateriaFals46": "Estrutura de dados II",
				"txtMateriaFals47": "Banco de dados II",
				"txtMateriaFals48": "Administração II",
				"txtMateriaFals49": "Economia aplicada a área de tecnologia",
				"txtMateriaFals51": "Linguagem de programação III",
				"txtMateriaFals52": "Gestão de projetos",
				"txtMateriaFals53": "Pesquisa operacional",
				"txtMateriaFals54": "Sistemas distribuídos",
				"txtMateriaFals55": "Atividades complementares I",
				"txtMateriaFals61": "Linguagem de programação IV",
				"txtMateriaFals62": "Inteligência artificial",
				"txtMateriaFals63": "Atividades complementares II",
				"txtMateriaFals64": "Computação gráfica",
				"txtMateriaFals65": "Projeto de banco de dados",
				"txtMateriaFals66": "Projeto de software",
				"txtMateriaFals71": "Sistemas de informações gerenciais",
				"txtMateriaFals72": "Projeto de iniciação científica I",
				"txtMateriaFals73": "Trabalho de conclusão de curso I (TCC)",
				"txtMateriaFals74": "Estágio supervisionado I",
				"txtMateriaFals75": "Atividades complementares III",
				"txtMateriaFals76": "Qualidade do software e da informação",
				"txtMateriaFals77": "Modelagem de processos e engenharia de requisitos",
				"txtMateriaFals81": "Tópicos em sistemas de informação",
				"txtMateriaFals82": "Atividades complementares IV",
				"txtMateriaFals83": "Viabilidade de projetos de sistemas de informação e técnologia da informação",
				"txtMateriaFals84": "Segurança de sistemas de informação",
				"txtMateriaFals85": "Governança de tecnologia da informação",
				"txtMateriaFals86": "Estágio supervisionado II",
				"txtMateriaFals87": "Projeto de iniciação científica II",
				"txtMateriaFals88": "Trabalho de conclusão de curso II (TCC)",
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
		$("div .curso-etec").text(txt.getText("txtCursoEtec"));
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
		// Lista de matérias ETEC
		$(".materia-etec-11").text(txt.getText("txtMateriaEtec11"));
		$(".materia-etec-12").text(txt.getText("txtMateriaEtec12"));
		$(".materia-etec-13").text(txt.getText("txtMateriaEtec13"));
		$(".materia-etec-14").text(txt.getText("txtMateriaEtec14"));
		$(".materia-etec-15").text(txt.getText("txtMateriaEtec15"));
		$(".materia-etec-16").text(txt.getText("txtMateriaEtec16"));
		$(".materia-etec-17").text(txt.getText("txtMateriaEtec17"));
		$(".materia-etec-18").text(txt.getText("txtMateriaEtec18"));
		$(".materia-etec-19").text(txt.getText("txtMateriaEtec19"));
		$(".materia-etec-21").text(txt.getText("txtMateriaEtec21"));
		$(".materia-etec-22").text(txt.getText("txtMateriaEtec22"));
		$(".materia-etec-23").text(txt.getText("txtMateriaEtec23"));
		$(".materia-etec-24").text(txt.getText("txtMateriaEtec24"));
		$(".materia-etec-25").text(txt.getText("txtMateriaEtec25"));
		$(".materia-etec-26").text(txt.getText("txtMateriaEtec26"));
		$(".materia-etec-27").text(txt.getText("txtMateriaEtec27"));
		$(".materia-etec-28").text(txt.getText("txtMateriaEtec28"));
		$(".materia-etec-31").text(txt.getText("txtMateriaEtec31"));
		$(".materia-etec-32").text(txt.getText("txtMateriaEtec32"));
		$(".materia-etec-33").text(txt.getText("txtMateriaEtec33"));
		$(".materia-etec-34").text(txt.getText("txtMateriaEtec34"));
		$(".materia-etec-35").text(txt.getText("txtMateriaEtec35"));
		$(".materia-etec-36").text(txt.getText("txtMateriaEtec36"));
		$(".materia-etec-37").text(txt.getText("txtMateriaEtec37"));
		$(".materia-etec-38").text(txt.getText("txtMateriaEtec38"));
		// Lista de matérias FALS
		$(".materia-fals-11").text(txt.getText("txtMateriaFals11"));
		$(".materia-fals-12").text(txt.getText("txtMateriaFals12"));
		$(".materia-fals-13").text(txt.getText("txtMateriaFals13"));
		$(".materia-fals-14").text(txt.getText("txtMateriaFals14"));
		$(".materia-fals-15").text(txt.getText("txtMateriaFals15"));
		$(".materia-fals-16").text(txt.getText("txtMateriaFals16"));
		$(".materia-fals-17").text(txt.getText("txtMateriaFals17"));
		$(".materia-fals-18").text(txt.getText("txtMateriaFals18"));
		$(".materia-fals-19").text(txt.getText("txtMateriaFals19"));
		$(".materia-fals-21").text(txt.getText("txtMateriaFals21"));
		$(".materia-fals-22").text(txt.getText("txtMateriaFals22"));
		$(".materia-fals-23").text(txt.getText("txtMateriaFals23"));
		$(".materia-fals-24").text(txt.getText("txtMateriaFals24"));
		$(".materia-fals-25").text(txt.getText("txtMateriaFals25"));
		$(".materia-fals-26").text(txt.getText("txtMateriaFals26"));
		$(".materia-fals-27").text(txt.getText("txtMateriaFals27"));
		$(".materia-fals-28").text(txt.getText("txtMateriaFals28"));
		$(".materia-fals-31").text(txt.getText("txtMateriaFals31"));
		$(".materia-fals-32").text(txt.getText("txtMateriaFals32"));
		$(".materia-fals-33").text(txt.getText("txtMateriaFals33"));
		$(".materia-fals-34").text(txt.getText("txtMateriaFals34"));
		$(".materia-fals-35").text(txt.getText("txtMateriaFals35"));
		$(".materia-fals-36").text(txt.getText("txtMateriaFals36"));
		$(".materia-fals-37").text(txt.getText("txtMateriaFals37"));
		$(".materia-fals-38").text(txt.getText("txtMateriaFals38"));
		$(".materia-fals-39").text(txt.getText("txtMateriaFals39"));
		$(".materia-fals-41").text(txt.getText("txtMateriaFals41"));
		$(".materia-fals-42").text(txt.getText("txtMateriaFals42"));
		$(".materia-fals-43").text(txt.getText("txtMateriaFals43"));
		$(".materia-fals-44").text(txt.getText("txtMateriaFals44"));
		$(".materia-fals-45").text(txt.getText("txtMateriaFals45"));
		$(".materia-fals-46").text(txt.getText("txtMateriaFals46"));
		$(".materia-fals-47").text(txt.getText("txtMateriaFals47"));
		$(".materia-fals-48").text(txt.getText("txtMateriaFals48"));
		$(".materia-fals-49").text(txt.getText("txtMateriaFals49"));
		$(".materia-fals-51").text(txt.getText("txtMateriaFals51"));
		$(".materia-fals-52").text(txt.getText("txtMateriaFals52"));
		$(".materia-fals-53").text(txt.getText("txtMateriaFals53"));
		$(".materia-fals-54").text(txt.getText("txtMateriaFals54"));
		$(".materia-fals-55").text(txt.getText("txtMateriaFals55"));
		$(".materia-fals-61").text(txt.getText("txtMateriaFals61"));
		$(".materia-fals-62").text(txt.getText("txtMateriaFals62"));
		$(".materia-fals-63").text(txt.getText("txtMateriaFals63"));
		$(".materia-fals-64").text(txt.getText("txtMateriaFals64"));
		$(".materia-fals-65").text(txt.getText("txtMateriaFals65"));
		$(".materia-fals-66").text(txt.getText("txtMateriaFals66"));
		$(".materia-fals-71").text(txt.getText("txtMateriaFals71"));
		$(".materia-fals-72").text(txt.getText("txtMateriaFals72"));
		$(".materia-fals-73").text(txt.getText("txtMateriaFals73"));
		$(".materia-fals-74").text(txt.getText("txtMateriaFals74"));
		$(".materia-fals-75").text(txt.getText("txtMateriaFals75"));
		$(".materia-fals-76").text(txt.getText("txtMateriaFals76"));
		$(".materia-fals-77").text(txt.getText("txtMateriaFals77"));
		$(".materia-fals-81").text(txt.getText("txtMateriaFals81"));
		$(".materia-fals-82").text(txt.getText("txtMateriaFals82"));
		$(".materia-fals-83").text(txt.getText("txtMateriaFals83"));
		$(".materia-fals-84").text(txt.getText("txtMateriaFals84"));
		$(".materia-fals-85").text(txt.getText("txtMateriaFals85"));
		$(".materia-fals-86").text(txt.getText("txtMateriaFals86"));
		$(".materia-fals-87").text(txt.getText("txtMateriaFals87"));
		$(".materia-fals-88").text(txt.getText("txtMateriaFals88"));

	}
}

