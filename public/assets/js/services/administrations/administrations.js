!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=25)}({25:function(t,e,n){t.exports=n("OMGb")},OMGb:function(t,e,n){"use strict";$("#administrationsTable").DataTable({processing:!0,serverSide:!0,order:[[1,"asc"]],ajax:{url:administrationUrl,data:function(t){t.status=$("#filter_status").find("option:selected").val()}},columnDefs:[{targets:"_all",defaultContent:"N/A"}],columns:[{data:function(t){return'<a href="'+(administrationUrl+"/"+t.id)+'">'+t.service_number+"</a>"},name:"service_number"},{data:"registration_time",name:"registration_time"},{data:function(t){return'<a href="'+(patientUrl+"/"+t.patient.id)+'">'+t.patient.name+"</a>"},name:"patient.name"},{data:function(t){return'<a href="'+(medicUrl+"/"+t.medic.id)+'">'+t.medic.name+"</a>"},name:"medic.name"},{data:"phone",name:"phone"},{data:"total_fee",name:"total_fee"},{data:function(t){var e=administrationUrl+"/"+t.id,n=[{id:t.id,url:e+"/edit",urlPrint:e+"/print"}];return prepareTemplateRender("#administrationActionTemplate",n)},name:"id"}],fnInitComplete:function(){$("#filter_status").change((function(){$("#administrationsTable").DataTable().ajax.reload(null,!0)}))}});$(document).on("click",".delete-btn",(function(t){var e=$(t.currentTarget).data("id");deleteItem(administrationUrl+"/"+e,"#administrationsTable","Layanan Administrasi")})),$(document).on("change",".status",(function(t){var e=$(t.currentTarget).data("id");updateStatus(e)}))}});