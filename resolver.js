//OpenURL sample
//?ctx_ver=Z39.88-2004&url_ver=Z39.88-2004&ctx_enc=info%3aofi%2fenc%3aUTF-8&rft_val_fmt=info%3aofi%2ffmt%3akev%3amtx%3ajournal&rfr_id=info%3asid%2fci.nii.ac.jp%3aCiNii&rfe_dat=naid%2f110002763494&rft.issn=04478053&rft.eissn=04478053&rft.atitle=3.%e5%ad%a6%e8%a1%93%e6%83%85%e5%a0%b1%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e3%81%ae%e3%83%87%e3%82%a3%e3%82%b8%e3%82%bf%e3%83%ab%e5%9b%b3%e6%9b%b8%e9%a4%a8%e3%83%97%e3%83%ad%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88+%28%3c%e7%89%b9%e9%9b%86%3e%e3%83%87%e3%82%a3%e3%82%b8%e3%82%bf%e3%83%ab%e5%9b%b3%e6%9b%b8%e9%a4%a8%29&rft.jtitle=%e6%83%85%e5%a0%b1%e5%87%a6%e7%90%86&rft.aulast=%e5%ae%89%e9%81%94&rft.aufirst=%e6%b7%b3&rft.aucorp=%e5%ad%a6%e8%a1%93%e6%83%85%e5%a0%b1%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e7%a0%94%e7%a9%b6%e9%96%8b%e7%99%ba%e9%83%a8&rft.date=1996&rft.volume=37&rft.issue=9&rft.spage=826&rft.epage=830
//?ctx_ver=Z39.88-2004&url_ver=Z39.88-2004&ctx_enc=info%3Aofi%2Fenc%3AUTF-8&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&rfr_id=info%3Asid%2Fci.nii.ac.jp%3ACiNii&rfe_dat=info%3Anaid%2F110000269603&rfe_dat=info%3Ancid%2FAN00158206&rft.issn=03878929&rft.eissn=03878929&rft.atitle=%E6%88%A6%E5%BE%8C%E5%8F%B0%E6%B9%BE%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E5%A4%A9%E7%90%86%E6%95%99%E3%81%AE%E5%B8%83%E6%95%99%E9%81%8E%E7%A8%8B%283%29&rft.jtitle=%E6%9D%B1%E4%BA%AC%E5%AD%A6%E8%8A%B8%E5%A4%A7%E5%AD%A6%E7%B4%80%E8%A6%81.+%E7%AC%AC2%E9%83%A8%E9%96%80%2C+%E4%BA%BA%E6%96%87%E7%A7%91%E5%AD%A6&rft.aulast=%E8%97%A4%E4%BA%95&rft.aufirst=%E5%81%A5%E5%BF%97&rft.aucorp=%E6%9D%B1%E4%BA%AC%E5%AD%A6%E8%8A%B8%E5%A4%A7%E5%AD%A6%E5%93%B2%E5%AD%A6&rft.date=2000&rft.volume=51&rft.spage=1&rft.epage=17
//?ctx_ver=Z39.88-2004&url_ver=Z39.88-2004&ctx_enc=info%3Aofi%2Fenc%3AUTF-8&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&rfr_id=info%3Asid%2Fci.nii.ac.jp%3ACiNii&rfe_dat=info%3Anaid%2F40020506894&rfe_dat=info%3Ancid%2FAA11981769&rft.atitle=女性の地域移動歴と所得の関係について+%3A+有配偶者の学歴に着目した考察&rft.jtitle=一橋大学大学教育研究開発センター年報&rft.aulast=朴澤&rft.aufirst=泰男&rft.date=2014&rft.spage=47&rft.epage=70
jQuery(function($){
	// load JSON-encoded data
	$.getJSON("json/data10000.json",function(data){
		alert(param['rft.issn']);
		kb = data;

		// issn normalize
		// param['rft.issn'].match(/-/) ?  issn_hyphen =  param['rft.issn'] : issn_hyphen = param['rft.issn'].replace(/(\d\d\d\d)(\d\d\d.)/, "$1-$2");
		param['rft.issn'] == null ?  issn_hyphen =  param['rft.jtitle'] : issn_hyphen = param['rft.issn'].replace(/(\d\d\d\d)(\d\d\d.)/, "$1-$2");
		alert(issn_hyphen);

		// render to html
		var eventList=jsonParse(kb, issn_hyphen);
		$("#demo").html(eventList);

	});
  var fullquery =	window.location.search;
  var param = $.ex.queryString();
  var ciniinaid = 'http://ci.nii.ac.jp/' + param['rfe_dat'];

	//json parse
	function jsonParse(data1, keyname){
		var eventList="";
		var data=data1[ keyname ];
		for(key in data){
			data[key].match(/http/) ? kbvalue = data[key].replace(/(http.+)/,'<a href="$1">$1</a>') : kbvalue = data[key];
			// eventList+='<li>' + key + ':' + data[key] + '</li>'
			eventList+='<li>' + key + ':' + kbvalue + '</li>'
		}
		return eventList;
	}

  if ( param['rft.aulast'] ) { var sei = param['rft.aulast'] }
	  else { sei = "" };
  if ( param['rft.aufirst'] ) {var mei =  param['rft.aufirst']}
	  else { mei = ""};
//var authorfull = param['rft.aulast'] + param['rft.aufirst'];
  var authorfull = sei + mei;
  var citation =  '<a href="' +ciniinaid + '">' + decodeURIComponent(authorfull) + ', 「' + decodeURIComponent(param['rft.atitle']) + '」('+ decodeURIComponent(param['rft.date']) + ')『' + decodeURIComponent(param['rft.jtitle']) + '』' + decodeURIComponent(param['rft.volume']) + '(' + decodeURIComponent(param['rft.issue']) + '), pp.' + decodeURIComponent(param['rft.spage']) + '-' + decodeURIComponent(param['rft.epage']) + '</a>';
  var opac_issn_s = '<a href="https://opac.lib.hit-u.ac.jp/opac/opac_openurl/?issn=' + param['rft.issn'] + '" target=_brank>opac_issn_serial-query</a>';
  var mylibrary = '<a href="https://opac.lib.hit-u.ac.jp/service-php/rtlill.php?VLNO=' + param['rft.volume'] + '(' + param['rft.issue'] +')&PAGE1='+ param['rft.spage'] +'&PAGE2='+ param['rft.epage'] +'&YEAR='+ param['rft.date'] +'&ARTCL='+ param['rft.aulast'] + param['rft.aufirst'] +' / ' + param['rft.atitle'] +'&NCID=&ISSN='+ param['rft.issn'] +'&ISBN=&CIT='+ param['rft.jtitle'] +'&AUTH=&COMMENT='+ param['rfr.id'] +'&SERIES=" target=_brank>ill_order</a>';
  var google = '<a href="http://www.google.co.jp/search?hl=ja&q=' + param['rft.atitle'] + '" target=_brank>google(article_title)</a>';
  var googlescholar = '<a href="http://scholar.google.co.jp/scholar?hl=ja&q=' + param['rft.atitle'] + '" target=_brank>googlescholar(article_title)</a>';
  var webcat = '<a href="http://webcatplus-equal.nii.ac.jp/libportal/EqualFromForm?txt_isbn=' + param['rft.issn'] + '" target=_brank>webcatplus(issn)</a>';
  var rns = '<a href="http://rns.nii.ac.jp/?field=9&&dummy=&search=+&query=' +  authorfull + '" target=_brank>研究者リゾルバ</a>';

  var resolver = [
	  {"base":opac_issn_s,'name':'opac'},
	  {"base":mylibrary,'name':'mylibray'},
	  {"base":google,'name':'google'},
	  {"base":googlescholar,'name':'googlescholar'},
	  {"base":webcat,'name':'webcat'},
	  {'base':rns,'name':'rns'}
	]

  $("#citation").append( citation );

  for(i in resolver) {
	  $("#resolver").append('<br />' + resolver[i]['base']);
  }
/*other libraries link resolver*/
  for(i in portal) {
	  $("#other").append('<br /><a href="' + portal[i]['base'] +  fullquery + '">' + portal[i]['name'] + '</a>');
  }
});

/*base URL of other libraries*/
var portal=[
  {"base":"http://vs2ga4mq9g.search.serialssolutions.com/","name":'東大'},
  {"base":"http://nw5sg2bn2y.search.serialssolutions.com/","name":'鹿児島大'},
  {"base":"http://yk2pw4vj9e.openurl.xml.serialssolutions.com/","name":'一橋大学'},
  {"base":"http://qp4wz6vz5k.search.serialssolutions.com/","name":'千葉大'},
  {"base":"http://mx9kp2xn4f.search.serialssolutions.com/","name":'中央大学'},
  {"base":"http://sfx4.usaco.co.jp/kanazawa","name":'金沢大学'},
  {"base":"http://sfx.nul.nagoya-u.ac.jp/nagoya","name":'名古屋大学'},
  {"base":"http://tt2mx4dc7s.search.serialssolutions.com/","name":'京都大学'},
  {"base":"http://sfx.usaco.co.jp/osaka","name":'大阪大学'},
  {"base":"http://sfx.usaco.co.jp/kobe","name":'神戸大学'},
  {"base":"http://te8rl7nq6r.search.serialssolutions.com/","name":'九州大学'},
  {"base":"http://fukui.1cate.com/","name":'福井大学'},
  {"base":"http://search.tulips.tsukuba.ac.jp:70/sfx","name":'筑波大学'},
  {"base":"http://linksource.ebsco.com/linking.aspx?","name":'東京学芸大学（EBSCO LinkSource'},
  {"base":"","name":''}
];
