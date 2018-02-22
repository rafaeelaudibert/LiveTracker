(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['championCard'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"card col "
    + alias4(((helper = (helper = helpers.cardColor || (depth0 != null ? depth0.cardColor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardColor","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"card-image waves-effect waves-block waves-light card-ownimage\"> <!-- CardImage -->\r\n    <img class=\"activator\" src=\""
    + alias4(((helper = (helper = helpers.championImage || (depth0 != null ? depth0.championImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championImage","hash":{},"data":data}) : helper)))
    + "\">\r\n  </div>\r\n  <div class=\"card-content\"> <!-- CardContent -->\r\n    <div class=\"row\"> <!-- CardTitle -->\r\n      <span class=\"card-title grey-text text-darken-4\">\r\n        <div class=\"col s8 padding-0\"><strong>"
    + alias4(((helper = (helper = helpers.championName || (depth0 != null ? depth0.championName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championName","hash":{},"data":data}) : helper)))
    + "</strong></div>\r\n        <div class=\"col s2 padding-0\"><img class=\"mastery-img tooltipped\" src=\"assets/champmastery/"
    + alias4(((helper = (helper = helpers.championMasteryImage || (depth0 != null ? depth0.championMasteryImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championMasteryImage","hash":{},"data":data}) : helper)))
    + ".png\" data-position=\"top\" data-tooltip=\""
    + alias4(((helper = (helper = helpers.championMasteryPoints || (depth0 != null ? depth0.championMasteryPoints : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championMasteryPoints","hash":{},"data":data}) : helper)))
    + " points\"></div>\r\n      </span>\r\n    </div>\r\n    <div class=\"row\"> <!-- PersonIfo -->\r\n      <div class=\"col s6 padding-0\"><span>"
    + alias4(((helper = (helper = helpers.summonerName || (depth0 != null ? depth0.summonerName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summonerName","hash":{},"data":data}) : helper)))
    + "<br>"
    + alias4(((helper = (helper = helpers.summonerElo || (depth0 != null ? depth0.summonerElo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summonerElo","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n      <div class=\"col s2 offset-s2 padding-0\"><img class=\"elo-img tooltipped\" src=\"assets/elos/"
    + alias4(((helper = (helper = helpers.eloImage || (depth0 != null ? depth0.eloImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eloImage","hash":{},"data":data}) : helper)))
    + ".png\" data-position=\"bottom\" data-tooltip=\""
    + alias4(((helper = (helper = helpers.pdl || (depth0 != null ? depth0.pdl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pdl","hash":{},"data":data}) : helper)))
    + " LP\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-reveal overflow-hidden "
    + alias4(((helper = (helper = helpers.cardColor || (depth0 != null ? depth0.cardColor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardColor","hash":{},"data":data}) : helper)))
    + "\"> <!-- CardReveal -->\r\n    <div class=\"row margin-right-0\"> <!-- RevealTitle -->\r\n      <div class=\"col s11 offset-s1 padding-0\"><span class=\"card-title grey-text text-darken-4\">"
    + alias4(((helper = (helper = helpers.championName || (depth0 != null ? depth0.championName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championName","hash":{},"data":data}) : helper)))
    + "<i class=\"material-icons right\">close</i></span></div>\r\n    </div>\r\n    <div class=\"row margin-right-0\"> <!-- RevealContent -->\r\n       <!-- Runes -->\r\n      <div class=\"col s1 padding-0\" style=\"padding-left: 0.3rem !important\">\r\n        <img class=\"keystone\" src=\"assets/runes/perk/"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.runes : depth0)) != null ? stack1.keystone : stack1), depth0))
    + ".png\">\r\n      </div>\r\n      <div class=\"col s10 offset-s2 padding-0\">\r\n        <img class=\"non-keystone\" src=\"assets/runes/perk/"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.runes : depth0)) != null ? stack1.bigger : stack1)) != null ? stack1["1"] : stack1), depth0))
    + ".png\">\r\n        <img class=\"non-keystone\" src=\"assets/runes/perk/"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.runes : depth0)) != null ? stack1.bigger : stack1)) != null ? stack1["2"] : stack1), depth0))
    + ".png\">\r\n        <img class=\"non-keystone\" src=\"assets/runes/perk/"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.runes : depth0)) != null ? stack1.bigger : stack1)) != null ? stack1["3"] : stack1), depth0))
    + ".png\">\r\n      </div>\r\n      <div class=\"col s6 offset-s3 padding-0\" style=\"padding-left: 0.2rem !important\">\r\n        <img class=\"non-keystone\" src=\"assets/runes/perk/"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.runes : depth0)) != null ? stack1.lesser : stack1)) != null ? stack1["1"] : stack1), depth0))
    + ".png\">\r\n        <img class=\"non-keystone\" src=\"assets/runes/perk/"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.runes : depth0)) != null ? stack1.lesser : stack1)) != null ? stack1["2"] : stack1), depth0))
    + ".png\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row white-text statistic-row\">\r\n      <div class=\"col s5 padding-0 outerspace-transparent z-depth-3 statistic-col\">\r\n        <strong style=\"font-size: 14px !important\">"
    + alias4(((helper = (helper = helpers.championWinrate || (depth0 != null ? depth0.championWinrate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championWinrate","hash":{},"data":data}) : helper)))
    + "</strong> WinRate<br>"
    + alias4(((helper = (helper = helpers.championName || (depth0 != null ? depth0.championName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championName","hash":{},"data":data}) : helper)))
    + "<br>"
    + alias4(((helper = (helper = helpers.championWinLost || (depth0 != null ? depth0.championWinLost : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championWinLost","hash":{},"data":data}) : helper)))
    + "\r\n      </div>\r\n      <div class=\"col s5 offset-s2 padding-0 outerspace-transparent z-depth-3 statistic-col\">\r\n        <strong style=\"font-size: 14px !important\">"
    + alias4(((helper = (helper = helpers.rankedWinrate || (depth0 != null ? depth0.rankedWinrate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rankedWinrate","hash":{},"data":data}) : helper)))
    + "</strong> WinRate<br>@ Ranked<br>"
    + alias4(((helper = (helper = helpers.rankedWinLost || (depth0 != null ? depth0.rankedWinLost : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rankedWinLost","hash":{},"data":data}) : helper)))
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> <!-- End Cartão !-->\r\n";
},"useData":true});
templates['profileModal'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <img class=\"circle responsive-img tooltipped\" data-position=\"bottom\" data-delay=\"0\" data-tooltip=\""
    + alias4(((helper = (helper = helpers.tooltip || (depth0 != null ? depth0.tooltip : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tooltip","hash":{},"data":data}) : helper)))
    + "\" style=\"max-height: 4rem\" src=\"http://ddragon.leagueoflegends.com/cdn/"
    + alias4(((helper = (helper = helpers.patch || (depth0 != null ? depth0.patch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"patch","hash":{},"data":data}) : helper)))
    + "/img/champion/"
    + alias4(((helper = (helper = helpers.championName || (depth0 != null ? depth0.championName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championName","hash":{},"data":data}) : helper)))
    + ".png\">\r\n          <img class=\"profile-mastery-img\" src=\"assets/champmastery/7.png\">\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <img class=\"circle responsive-img tooltipped\" data-position=\"bottom\" data-delay=\"0\" data-tooltip=\""
    + alias4(((helper = (helper = helpers.tooltip || (depth0 != null ? depth0.tooltip : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tooltip","hash":{},"data":data}) : helper)))
    + "\" style=\"max-height: 4rem\" src=\"http://ddragon.leagueoflegends.com/cdn/"
    + alias4(((helper = (helper = helpers.patch || (depth0 != null ? depth0.patch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"patch","hash":{},"data":data}) : helper)))
    + "/img/champion/"
    + alias4(((helper = (helper = helpers.championName || (depth0 != null ? depth0.championName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championName","hash":{},"data":data}) : helper)))
    + ".png\">\r\n          <img class=\"profile-mastery-img\" src=\"assets/champmastery/6.png\">\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <img class=\"circle responsive-img tooltipped\" data-position=\"bottom\" data-delay=\"0\" data-tooltip=\""
    + alias4(((helper = (helper = helpers.tooltip || (depth0 != null ? depth0.tooltip : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tooltip","hash":{},"data":data}) : helper)))
    + "\" style=\"max-height: 4rem\" src=\"http://ddragon.leagueoflegends.com/cdn/"
    + alias4(((helper = (helper = helpers.patch || (depth0 != null ? depth0.patch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"patch","hash":{},"data":data}) : helper)))
    + "/img/champion/"
    + alias4(((helper = (helper = helpers.championName || (depth0 != null ? depth0.championName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championName","hash":{},"data":data}) : helper)))
    + ".png\">\r\n          <img class=\"profile-mastery-img\" src=\"assets/champmastery/5.png\">\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <img class=\"circle responsive-img tooltipped\" data-position=\"bottom\" data-delay=\"0\" data-tooltip=\""
    + alias4(((helper = (helper = helpers.tooltip || (depth0 != null ? depth0.tooltip : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tooltip","hash":{},"data":data}) : helper)))
    + "\" style=\"max-height: 4rem\" src=\"http://ddragon.leagueoflegends.com/cdn/"
    + alias4(((helper = (helper = helpers.patch || (depth0 != null ? depth0.patch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"patch","hash":{},"data":data}) : helper)))
    + "/img/champion/"
    + alias4(((helper = (helper = helpers.championName || (depth0 != null ? depth0.championName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championName","hash":{},"data":data}) : helper)))
    + ".png\">\r\n          <img class=\"profile-mastery-img\" src=\"assets/champmastery/4.png\">\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <img class=\"circle responsive-img tooltipped\" data-position=\"bottom\" data-delay=\"0\" data-tooltip=\""
    + alias4(((helper = (helper = helpers.tooltip || (depth0 != null ? depth0.tooltip : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tooltip","hash":{},"data":data}) : helper)))
    + "\" style=\"max-height: 4rem\" src=\"http://ddragon.leagueoflegends.com/cdn/"
    + alias4(((helper = (helper = helpers.patch || (depth0 != null ? depth0.patch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"patch","hash":{},"data":data}) : helper)))
    + "/img/champion/"
    + alias4(((helper = (helper = helpers.championName || (depth0 != null ? depth0.championName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championName","hash":{},"data":data}) : helper)))
    + ".png\">\r\n          <img class=\"profile-mastery-img\" src=\"assets/champmastery/3.png\">\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <img class=\"circle responsive-img tooltipped\" data-position=\"bottom\" data-delay=\"0\" data-tooltip=\""
    + alias4(((helper = (helper = helpers.tooltip || (depth0 != null ? depth0.tooltip : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tooltip","hash":{},"data":data}) : helper)))
    + "\" style=\"max-height: 4rem\" src=\"http://ddragon.leagueoflegends.com/cdn/"
    + alias4(((helper = (helper = helpers.patch || (depth0 != null ? depth0.patch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"patch","hash":{},"data":data}) : helper)))
    + "/img/champion/"
    + alias4(((helper = (helper = helpers.championName || (depth0 != null ? depth0.championName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championName","hash":{},"data":data}) : helper)))
    + ".png\">\r\n          <img class=\"profile-mastery-img\" src=\"assets/champmastery/2.png\">\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <img class=\"circle responsive-img tooltipped\" data-position=\"bottom\" data-delay=\"0\" data-tooltip=\""
    + alias4(((helper = (helper = helpers.tooltip || (depth0 != null ? depth0.tooltip : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tooltip","hash":{},"data":data}) : helper)))
    + "\" style=\"max-height: 4rem\" src=\"http://ddragon.leagueoflegends.com/cdn/"
    + alias4(((helper = (helper = helpers.patch || (depth0 != null ? depth0.patch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"patch","hash":{},"data":data}) : helper)))
    + "/img/champion/"
    + alias4(((helper = (helper = helpers.championName || (depth0 != null ? depth0.championName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"championName","hash":{},"data":data}) : helper)))
    + ".png\">\r\n          <img class=\"profile-mastery-img\" src=\"assets/champmastery/1.png\">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div id=\"profile-modal\" class=\"modal modal-fixed-footer rich-black outerspace-lighten-text profile-modal\">\r\n  <div class=\"modal-content profile-modal-content modal-background\">\r\n    <h3><strong>PROFILE</strong></h3><br>\r\n\r\n    <!-- Profile Information -->\r\n    <div class=\"row\" style=\"margin-top: 0.4rem\">\r\n      <div class=\"col s12 m3 profile-inner\">\r\n        <img class=\"circle responsive-img perfil-icon\" style=\"margin-left: 23% !important\" src=\"http://ddragon.leagueoflegends.com/cdn/"
    + alias4(((helper = (helper = helpers.patch || (depth0 != null ? depth0.patch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"patch","hash":{},"data":data}) : helper)))
    + "/img/profileicon/"
    + alias4(((helper = (helper = helpers.summonerIcon || (depth0 != null ? depth0.summonerIcon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summonerIcon","hash":{},"data":data}) : helper)))
    + ".png\">\r\n        <span style=\"padding-top: 4rem; font-size: 2.5rem\">"
    + alias4(((helper = (helper = helpers.summonerName || (depth0 != null ? depth0.summonerName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summonerName","hash":{},"data":data}) : helper)))
    + "</span><br>\r\n        <span style=\"font-size: 1.5rem\">"
    + alias4(((helper = (helper = helpers.summonerLevel || (depth0 != null ? depth0.summonerLevel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summonerLevel","hash":{},"data":data}) : helper)))
    + "</span>\r\n      </div>\r\n      <div class=\"col s12 m3 profile-inner profile-runes\">\r\n        <span class=\"flow-text\" style=\"margin-left: 1.5rem\">Solo/Duo 5x5</span><br>\r\n        <img class=\"profile-runes-images\" src=\"assets/elos/"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.elo : depth0)) != null ? stack1.soloDuo : stack1), depth0))
    + ".png\">\r\n        <br><span class=\"flow-text\" style=\"margin-left: 3.4rem\">Flex 5x5</span><br>\r\n        <img class=\"profile-runes-images\" src=\"assets/elos/"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.elo : depth0)) != null ? stack1.Flex : stack1), depth0))
    + ".png\">\r\n        <br><span class=\"flow-text\" style=\"margin-left: 3.4rem\">Flex 3x3</span><br>\r\n        <img class=\"profile-runes-images\" src=\"assets/elos/"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.elo : depth0)) != null ? stack1.tt : stack1), depth0))
    + ".png\">\r\n      </div>\r\n      <div class=\"col s12 m5 profile-inner profile-mastery\">\r\n        <span class=\"flow-text\">Mastery 7</span><br>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.mastery : depth0)) != null ? stack1.m7 : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n        <br><span class=\"flow-text\">Mastery 6</span><br>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.mastery : depth0)) != null ? stack1.m6 : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n        <br><span class=\"flow-text\">Mastery 5</span><br>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.mastery : depth0)) != null ? stack1.m6 : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n        <br><span class=\"flow-text\">Mastery 4</span><br>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.mastery : depth0)) != null ? stack1.m6 : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n        <br><span class=\"flow-text\">Mastery 3</span><br>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.mastery : depth0)) != null ? stack1.m6 : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n        <br><span class=\"flow-text\">Mastery 2</span><br>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.mastery : depth0)) != null ? stack1.m6 : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n        <br><span class=\"flow-text\">Mastery 1</span><br>\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.mastery : depth0)) != null ? stack1.m6 : stack1),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer rich-black\">\r\n    <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-blue outerspace white-text btn\">Close</a>\r\n    <!-- Need to change it dinamically to Apply if something has changed-->\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['searchModal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"search-modal\" class=\"modal modal-fixed-footer rich-black outerspace-lighten-text search-modal\">\r\n  <div class=\"modal-content modal-owncontent modal-background\">\r\n    <h3><strong>NEW SUMMONER SEARCH</strong></h3>\r\n\r\n    <!-- Search Information -->\r\n    <div class=\"row\" style=\"margin-top: 1rem\">\r\n      <form>\r\n        <div class=\"input-field col s8\">\r\n          <i class=\"material-icons prefix\">account_circle</i>\r\n          <input id=\"summoner_name\" type=\"text\">\r\n          <label for=\"summoner_name\">Summoner Name</label>\r\n        </div>\r\n\r\n        <div class=\"input-field col s3\" style=\"margin-left: 2rem\">\r\n          <select class=\"icons\" size=\"2\">\r\n            <option value=\"\" disabled selected>Your region</option>\r\n            <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png\" class=\"circle\">BR</option>\r\n            <option value=\"\" data-icon=\"https://www.infoescola.com/wp-content/uploads/2007/08/uniao-europeia.png\" class=\"circle\">EUNE</option>\r\n            <option value=\"\" data-icon=\"https://www.infoescola.com/wp-content/uploads/2007/08/uniao-europeia.png\" class=\"circle\">EUW</option>\r\n            <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2000px-Flag_of_Japan.svg.png\" class=\"circle\">JP</option>\r\n            <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/200px-Flag_of_South_Korea.svg.png\" class=\"circle\">KR</option>\r\n            <option value=\"\" data-icon=\"\" class=\"circle\">LAN</option>\r\n            <option value=\"\" data-icon=\"\" class=\"circle\">LAS</option>\r\n            <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png\" class=\"circle\">NA</option>\r\n            <option value=\"\" data-icon=\"\" class=\"circle\">OCE</option>\r\n            <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/200px-Flag_of_Russia.svg.png\" class=\"circle\">RU</option>\r\n            <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/300px-Flag_of_Turkey.svg.png\" class=\"circle\">TK</option>\r\n          </select>\r\n          <label>Region</label>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer rich-black\">\r\n    <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-blue outerspace white-text btn\">Search</a>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['settingsModal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"settings-modal\" class=\"modal modal-fixed-footer rich-black outerspace-lighten-text settings-modal\">\r\n  <div id=\"settings-modal-content\" class=\"modal-content modal-owncontent modal-background\">\r\n    <h3><strong>SETTINGS</strong></h3>\r\n\r\n    <!-- Default Information -->\r\n    <div class=\"row\" style=\"margin-top: 1rem\">\r\n      <span class=\"flow-text\">Default Values<br></span>\r\n      <form>\r\n        <div class=\"input-field col s8\">\r\n          <i class=\"material-icons prefix\">account_circle</i>\r\n          <input id=\"summoner_name\" type=\"text\">\r\n          <label for=\"summoner_name\">Default Summoner Name</label>\r\n        </div>\r\n\r\n        <div class=\"input-field col s3\" style=\"margin-left: 2rem\">\r\n          <i class=\"material-icons prefix\">home</i>\r\n          <select class=\"icons\" size=\"2\">\r\n            <option value=\"\" disabled selected>Default region</option>\r\n            <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png\" class=\"circle\">BR</option>\r\n            <option value=\"\" data-icon=\"https://www.infoescola.com/wp-content/uploads/2007/08/uniao-europeia.png\" class=\"circle\">EUNE</option>\r\n            <option value=\"\" data-icon=\"https://www.infoescola.com/wp-content/uploads/2007/08/uniao-europeia.png\" class=\"circle\">EUW</option>\r\n            <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2000px-Flag_of_Japan.svg.png\" class=\"circle\">JP</option>\r\n            <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/200px-Flag_of_South_Korea.svg.png\" class=\"circle\">KR</option>\r\n            <option value=\"\" data-icon=\"\" class=\"circle\">LAN</option>\r\n            <option value=\"\" data-icon=\"\" class=\"circle\">LAS</option>\r\n            <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png\" class=\"circle\">NA</option>\r\n            <option value=\"\" data-icon=\"\" class=\"circle\">OCE</option>\r\n            <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/200px-Flag_of_Russia.svg.png\" class=\"circle\">RU</option>\r\n            <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/300px-Flag_of_Turkey.svg.png\" class=\"circle\">TK</option>\r\n          </select>\r\n          <label>Region</label>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"class s8\">\r\n        <form>\r\n          <div class=\"input-field col s8\">\r\n            <i class=\"material-icons prefix\">flag</i>\r\n            <select class=\"icons\" size=\"2\">\r\n              <option value=\"\" disabled selected></option>\r\n              <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png\" class=\"circle\">BR</option>\r\n              <option value=\"\" data-icon=\"https://www.infoescola.com/wp-content/uploads/2007/08/uniao-europeia.png\" class=\"circle\">EUNE</option>\r\n              <option value=\"\" data-icon=\"https://www.infoescola.com/wp-content/uploads/2007/08/uniao-europeia.png\" class=\"circle\">EUW</option>\r\n              <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2000px-Flag_of_Japan.svg.png\" class=\"circle\">JP</option>\r\n              <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/200px-Flag_of_South_Korea.svg.png\" class=\"circle\">KR</option>\r\n              <option value=\"\" data-icon=\"\" class=\"circle\">LAN</option>\r\n              <option value=\"\" data-icon=\"\" class=\"circle\">LAS</option>\r\n              <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png\" class=\"circle\">NA</option>\r\n              <option value=\"\" data-icon=\"\" class=\"circle\">OCE</option>\r\n              <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/200px-Flag_of_Russia.svg.png\" class=\"circle\">RU</option>\r\n              <option value=\"\" data-icon=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/300px-Flag_of_Turkey.svg.png\" class=\"circle\">TK</option>\r\n            </select>\r\n            <label>Default Language</label>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Switches -->\r\n    <div class=\"row\" style=\"line-height: 1.6rem !important\">\r\n      <div class=\"col s6\">\r\n        <span class=\"flow-text\"><br>Finish app at Exit button (Else minimize)<br></span>\r\n        <div class=\"switch ownswitch\">\r\n          <label>\r\n            Off\r\n            <input type=\"checkbox\">\r\n            <span class=\"lever\"></span>\r\n            On\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s6\">\r\n        <span class=\"flow-text\"><br>Windows Notifications<br></span>\r\n        <div class=\"switch ownswitch\">\r\n          <label>\r\n            Off\r\n            <input type=\"checkbox\">\r\n            <span class=\"lever\"></span>\r\n            On\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col s4\">\r\n        <span class=\"flow-text\"><br>Show tooltips in Runes<br></span>\r\n        <div class=\"switch ownswitch\">\r\n          <label>\r\n            Off\r\n            <input type=\"checkbox\">\r\n            <span class=\"lever\"></span>\r\n            On\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s4\">\r\n        <span class=\"flow-text\"><br>Show tooltips in Masteries<br></span>\r\n        <div class=\"switch ownswitch\">\r\n          <label>\r\n            Off\r\n            <input type=\"checkbox\">\r\n            <span class=\"lever\"></span>\r\n            On\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s4\">\r\n        <span class=\"flow-text\"><br>Show tooltips in Elos<br></\r\n          span>\r\n        <div class=\"switch ownswitch\">\r\n          <label>\r\n            Off\r\n            <input type=\"checkbox\">\r\n            <span class=\"lever\"></span>\r\n            On\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer rich-black\">\r\n    <a href=\"#!\" class=\"modal-action modal-close waves-effect waves-blue outerspace white-text btn\">Close</a>\r\n    <!-- Need to change it dinamically to Apply if something has changed-->\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true});
templates['sidebar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul id=\"slide-out\" class=\"side-nav fixed outerspace white-text\">\r\n  <li>\r\n    <div class=\"user-view\">\r\n      <div class=\"background\">\r\n        <img src=\"assets/splashs/4.png\">\r\n      </div>\r\n      <img class=\"circle responsive-img left perfil-icon\" src=\"http://ddragon.leagueoflegends.com/cdn/"
    + alias4(((helper = (helper = helpers.patch || (depth0 != null ? depth0.patch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"patch","hash":{},"data":data}) : helper)))
    + "/img/profileicon/"
    + alias4(((helper = (helper = helpers.summonerIcon || (depth0 != null ? depth0.summonerIcon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summonerIcon","hash":{},"data":data}) : helper)))
    + ".png\">\r\n      <br><br><br>\r\n      <span class=\"white-text flow-text perfil-name\">"
    + alias4(((helper = (helper = helpers.summonerName || (depth0 != null ? depth0.summonerName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summonerName","hash":{},"data":data}) : helper)))
    + "</span>\r\n      <span class=\"white-text flow-text email perfil-level\">Level "
    + alias4(((helper = (helper = helpers.summonerLevel || (depth0 != null ? depth0.summonerLevel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summonerLevel","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </div>\r\n  </li>\r\n  <li><a class=\"waves-effect modal-trigger white-text sidenav-li\" href=\"#profile-modal\"><i class=\"material-icons white-text sidenav-icon\">person</i>Profile</a></li>\r\n  <li><a class=\"waves-effect modal-trigger white-text  sidenav-li\" href=\"#settings-modal\"><i class=\"material-icons white-text sidenav-icon\">settings</i>Settings</a></li>\r\n  <div class=\"divider white\"></div>\r\n  <div style=\"margin-top: 20rem\">\r\n    <a class=\"right white-text\" href=\"#!\" style=\"padding-right: 0.4rem\">Donate</a><br>\r\n    <a class=\"right white-text\" href=\"#!\" style=\"padding-right: 0.4rem\">About</a>\r\n  </div>\r\n</ul>\r\n";
},"useData":true});
templates['topRow'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row\"> <!-- Top Information !-->\r\n  <div class=\"col s6\">\r\n    <a class=\"waves-effect waves-light outerspace btn modal-trigger search-summoner\" href=\"#search-modal\"><i class=\"material-icons right\">edit</i>Search Another Summoner</a>\r\n  </div> <!--Modal Trigger !-->\r\n  <div class=\"col s5 outerspace z-depth-1 match-info\"><a class=\"white-text\"><span class=\"flow-text\"><strong>"
    + alias4(((helper = (helper = helpers.matchMap || (depth0 != null ? depth0.matchMap : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"matchMap","hash":{},"data":data}) : helper)))
    + "</strong></span><br>"
    + alias4(((helper = (helper = helpers.matchQueue || (depth0 != null ? depth0.matchQueue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"matchQueue","hash":{},"data":data}) : helper)))
    + "</a></div>\r\n</div>\r\n";
},"useData":true});
})();