/*
 * jqGrid  3.3.1 - jQuery Grid
 * Copyright (c) 2008, Tony Tomov, tony@trirand.com
 * Dual licensed under the MIT and GPL licenses
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Date: 2008-11-01 rev 67
 */

;(function($){$.fn.extend({setColumns:function(p){p=$.extend({top:0,left:0,width:200,height:195,modal:false,drag:true,closeicon:'ico-close.gif',beforeShowForm:null,afterShowForm:null,afterSubmitForm:null},$.jgrid.col,p||{});return this.each(function(){var $t=this;if(!$t.grid){return;}
var onBeforeShow=typeof p.beforeShowForm==='function'?true:false;var onAfterShow=typeof p.afterShowForm==='function'?true:false;var onAfterSubmit=typeof p.afterSubmitForm==='function'?true:false;if(!p.imgpath){p.imgpath=$t.p.imgpath;}
var gID=$("table:first",$t.grid.bDiv).attr("id");var IDs={themodal:'colmod'+gID,modalhead:'colhd'+gID,modalcontent:'colcnt'+gID};var dtbl="ColTbl_"+gID;if($("#"+IDs.themodal).html()!=null){if(onBeforeShow){p.beforeShowForm($("#"+dtbl));}
viewModal("#"+IDs.themodal,{modal:p.modal});if(onAfterShow){p.afterShowForm($("#"+dtbl));}}else{var tbl=$("<table id='"+dtbl+"' class='ColTable'><tbody></tbody></table>");for(i=0;i<this.p.colNames.length;i++){if(!$t.p.colModel[i].hidedlg){$(tbl).append("<tr><td ><input type='checkbox' id='col_"+this.p.colModel[i].name+"' class='cbox' value='T' "+
((this.p.colModel[i].hidden==undefined)?"checked":"")+"/>"+"<label for='col_"+this.p.colModel[i].name+"'>"+this.p.colNames[i]+"("+this.p.colModel[i].name+")</label></td></tr>");}}
var bS="<input id='dData' type='button' value='"+p.bSubmit+"'/>";var bC="<input id='eData' type='button' value='"+p.bCancel+"'/>";$(tbl).append("<tr><td class='ColButton'>"+bS+"&nbsp;"+bC+"</td></tr>");createModal(IDs,tbl,p,$t.grid.hDiv,$t.grid.hDiv);if(p.drag){DnRModal("#"+IDs.themodal,"#"+IDs.modalhead+" td.modaltext");}
$("#dData","#"+dtbl).click(function(e){for(i=0;i<$t.p.colModel.length;i++){if(!$t.p.colModel[i].hidedlg){if($("#col_"+$t.p.colModel[i].name).attr("checked")){$($t).showCol($t.p.colModel[i].name);$("#col_"+$t.p.colModel[i].name).attr("defaultChecked",true);}else{$($t).hideCol($t.p.colModel[i].name);$("#col_"+$t.p.colModel[i].name).attr("defaultChecked","");}}}
$("#"+IDs.themodal).jqmHide();if(onAfterSubmit){p.afterSubmitForm($("#"+dtbl));}
return false;});$("#eData","#"+dtbl).click(function(e){$("#"+IDs.themodal).jqmHide();return false;});if(onBeforeShow){p.beforeShowForm($("#"+dtbl));}
viewModal("#"+IDs.themodal,{modal:p.modal});if(onAfterShow){p.afterShowForm($("#"+dtbl));}}});}});})(jQuery);