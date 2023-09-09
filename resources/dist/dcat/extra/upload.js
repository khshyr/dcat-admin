(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,a){for(var i=0;i<a.length;i++){var r=a[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(n=r.key,o=void 0,o=function(t,a){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,a||"default");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(t)}(n,"string"),"symbol"===e(o)?o:String(o)),r)}var n,o}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.uploader=t,this.isSupportBase64=this.supportBase64()}var a,i,r;return a=e,(i=[{key:"supportBase64",value:function(){var e=new Image,t=!0;return e.onload=e.onerror=function(){1==this.width&&1==this.height||(t=!1)},e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t}},{key:"showError",value:function(e){var t="Unknown error!";e&&e.data&&(t=e.data.message||t),Dcat.error(t)}},{key:"orderFiles",value:function(e){var t=this,a=e.parents("li").first(),i=e.data("id"),r=e.data("order"),n=a.prev(),o=a.next();if(r){if(!n.length)return;return t.swrapUploadedFile(i,r),void t.uploader.reRenderUploadedFiles()}o.length&&(t.swrapUploadedFile(i,r),t.uploader.reRenderUploadedFiles())}},{key:"swrapUploadedFile",value:function(e,t){var a=this,i=a.uploader.addUploadedFile.uploadedFiles,r=parseInt(a.searchUploadedFile(e)),n=i[r],o=i[r-1],l=i[r+1];if(t){if(0===r)return;i[r-1]=n,i[r]=o}else{if(!l)return;i[r+1]=n,i[r]=l}a.setUploadedFilesToInput()}},{key:"setUploadedFilesToInput",value:function(){var e,t=this.uploader,a=t.addUploadedFile.uploadedFiles,i=[];for(e in a)a[e]&&i.push(a[e].serverId);t.input.set(i)}},{key:"searchUploadedFile",value:function(e){var t=this.uploader.addUploadedFile.uploadedFiles;for(var a in t)if(t[a].serverId===e)return a;return-1}}])&&t(a.prototype,i),r&&t(a,r),Object.defineProperty(a,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(n=r.key,o=void 0,o=function(e,t){if("object"!==i(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(n,"string"),"symbol"===i(o)?o:String(o)),r)}var n,o}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.uploader=t}var t,a,i;return t=e,(a=[{key:"delete",value:function(e,t){var a=this.uploader,i=a.options,r=a.uploader;Dcat.confirm(a.lang.trans("confirm_delete_file"),e.serverId,(function(){var n=i.deleteData;if(n.key=e.serverId,!n.key)return a.input.delete(e.serverId),r.removeFile(e);n._column=a.getColumn(),n._relation=a.relation,Dcat.loading(),$.post({url:i.deleteUrl,data:n,success:function(e){Dcat.loading(!1),e.status?t(e):a.helper.showError(e)}})}))}},{key:"update",value:function(){var e=this.uploader,t=e.uploader,a=e.options,i=e.getColumn(),r=this.relation,n=e.input.get(),o=t.getStats().successNum,l=$.extend({},a.formData);if(o&&n&&a.autoUpdateColumn){if(r){if(!r[1])return;l[r[0]]={},l[r[0]][r[1]]={},l[r[0]][r[1]][i]=n.join(",")}else l[i]=n.join(",");delete l._relation,delete l.upload_column,$.post({url:a.updateServer,data:l})}}}])&&r(t.prototype,a),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function l(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,n=void 0,n=function(e,t){if("object"!==o(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===o(n)?n:String(n)),i)}var r,n}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.uploader=t,this.$selector=t.$selector.find(t.options.inputSelector)}var t,a,i;return t=e,(a=[{key:"get",value:function(){var e=this.$selector.val();return e?e.split(","):[]}},{key:"add",value:function(e){var t=this.get();t.push(e),this.set(t)}},{key:"set",value:function(e){e=e.filter((function(e,t,a){return a.indexOf(e)===t})).filter((function(e){return!!e})),this.$selector.val(e.join(",")).trigger("change")}},{key:"delete",value:function(e){var t=this;if(t.deleteUploadedFile(e),!e)return t.$selector.val("");t.set(t.get().filter((function(t){return t!=e})))}},{key:"deleteUploadedFile",value:function(e){var t=this.uploader.addUploadedFile;t.uploadedFiles=t.uploadedFiles.filter((function(t){return t.serverId!=e}))}},{key:"removeValidatorErrors",value:function(){this.$selector.parents(".form-group,.form-label-group,.form-field").find(".with-errors").html("")}}])&&l(t.prototype,a),i&&l(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function d(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,n=void 0,n=function(e,t){if("object"!==u(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!==u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===u(n)?n:String(n)),i)}var r,n}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.uploader=t,this.state="pending",this.originalFilesNum=Dcat.helpers.len(t.options.preview)}var t,a,i;return t=e,(a=[{key:"switch",value:function(e,t){var a=this,i=a.uploader;if(t=t||{},e!==a.state){switch(i.$uploadButton&&(i.$uploadButton.removeClass("state-"+a.state),i.$uploadButton.addClass("state-"+e)),a.state=e,a.state){case"pending":a.pending();break;case"ready":a.ready();break;case"uploading":a.uploading();break;case"paused":a.paused();break;case"confirm":a.confirm();break;case"finish":a.finish();break;case"decrOriginalFileNum":a.decrOriginalFileNum();break;case"incrOriginalFileNum":a.incrOriginalFileNum();break;case"decrFileNumLimit":a.decrFileNumLimit(t.num);break;case"incrFileNumLimit":a.incrFileNumLimit(t.num||1);break;case"init":a.init()}a.updateStatusText()}}},{key:"incrOriginalFileNum",value:function(){this.originalFilesNum++}},{key:"decrOriginalFileNum",value:function(){this.originalFilesNum>0&&this.originalFilesNum--}},{key:"confirm",value:function(){var e,t=this.uploader,a=t.uploader;a&&(t.$progress.hide(),t.$selector.find(t.options.addFileButton).removeClass("element-invisible"),t.$uploadButton.text(t.lang.trans("start_upload")),(e=a.getStats()).successNum&&!e.uploadFailNum&&this.switch("finish"))}},{key:"paused",value:function(){var e=this.uploader;e.$progress.show(),e.$uploadButton.text(e.lang.trans("go_on_upload"))}},{key:"uploading",value:function(){var e=this.uploader;e.$selector.find(e.options.addFileButton).addClass("element-invisible"),e.$progress.show(),e.$uploadButton.text(e.lang.trans("pause_upload"))}},{key:"pending",value:function(){var e=this.uploader;e.options.disabled||(e.$placeholder.removeClass("element-invisible"),e.$files.hide(),e.$statusBar.addClass("element-invisible"),e.isImage()&&(e.$wrapper.removeAttr("style"),e.$wrapper.find(".queueList").removeAttr("style")),e.uploader.refresh())}},{key:"decrFileNumLimit",value:function(e){var t,a=this.uploader.uploader;a&&("-1"==(t=a.option("fileNumLimit"))&&(t=0),0==(e=t>=(e=e||1)?t-e:0)&&(e="-1"),a.option("fileNumLimit",e))}},{key:"incrFileNumLimit",value:function(e){var t,a=this.uploader.uploader;a&&("-1"==(t=a.option("fileNumLimit"))&&(t=0),e=t+(e=e||1),a.option("fileNumLimit",e))}},{key:"ready",value:function(){var e=this.uploader,t=e.options;e.$placeholder.addClass("element-invisible"),e.$selector.find(e.options.addFileButton).removeClass("element-invisible"),e.$files.show(),t.disabled||e.$statusBar.removeClass("element-invisible"),e.uploader.refresh(),e.isImage()&&e.$wrapper.find(".queueList").css({border:"1px solid #d3dde5",padding:"5px"}),setTimeout((function(){e.input.removeValidatorErrors()}),10)}},{key:"finish",value:function(){var e,t=this.uploader,a=t.options,i=t.uploader;i&&((e=i.getStats()).successNum?(Dcat.success(t.lang.trans("upload_success_message",{success:e.successNum})),setTimeout((function(){1==a.upload.fileNumLimit&&(i.request("get-stats").numOfSuccess=0)}),10)):(this.state="done",Dcat.reload()))}},{key:"init",value:function(){var e=this,t=e.uploader,a=t.options;t.$uploadButton.addClass("state-"+e.state),e.updateProgress(),e.originalFilesNum||a.disabled?(t.$placeholder.addClass("element-invisible"),a.disabled?t.$wrapper.addClass("disabled"):t.$statusBar.show(),e.switch("ready")):t.isImage()&&(t.$wrapper.removeAttr("style"),t.$wrapper.find(".queueList").css("margin","0")),t.uploader.refresh()}},{key:"updateStatusText",value:function(){var e,t=this,a=t.uploader,i=a.uploader,r=a.lang.trans.bind(a.lang),n="";function o(){(e=i.getStats()).successNum&&(n=r("selected_success",{num:a.fileCount,size:WebUploader.formatSize(a.fileSize),success:e.successNum})),e.uploadFailNum&&(n+=(n?r("dot"):"")+r("failed_num",{fail:e.uploadFailNum}))}i&&("ready"===t.state?(e=i.getStats(),a.fileCount?n=r("selected_files",{num:a.fileCount,size:WebUploader.formatSize(a.fileSize)}):o()):"confirm"===t.state?(e=i.getStats()).uploadFailNum&&(n=r("selected_has_failed",{success:e.successNum,fail:e.uploadFailNum})):o(),a.$infoBox.html(n))}},{key:"updateProgress",value:function(){var e,t=this.uploader,a=0,i=0,r=t.$progress.find(".progress-bar");$.each(t.percentages,(function(e,t){i+=t[0],a+=t[0]*t[1]})),e=i?a/i:0,e=Math.round(100*e)+"%",r.text(e),r.css("width",e),this.updateStatusText()}}])&&d(t.prototype,a),i&&d(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,n=void 0,n=function(e,t){if("object"!==p(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!==p(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===p(n)?n:String(n)),i)}var r,n}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.uploader=t}var t,a,i;return t=e,(a=[{key:"render",value:function(e){var t,a,i=this,r=i.uploader,n=r.isImage(),o=WebUploader.formatSize(e.size),l=e.name||null;n?(t=$('<li id="'.concat(r.getFileViewSelector(e.id),'" title="').concat(l,'" >\n                    <p class="file-type">').concat(e.ext.toUpperCase()||"FILE",'</p>\n                    <p class="imgWrap "></p>\n                    <p class="title" style="">').concat(e.name,'</p>\n                    <p class="title" style="margin-bottom:20px;">(<b>').concat(o,"</b>)</p>\n                    </li>")),a=$('<div class="file-panel">\n                    <a class="btn btn-sm btn-white" data-file-act="cancel"><i class="fas fa-ban red-dark" style="font-size:13px"></i></a>\n                    <a class="btn btn-sm btn-white" data-file-act="delete" style="display: none">\n                    <i class="fas fa-trash red-dark" style="font-size:13px"></i></a>\n                    <a class="btn btn-sm btn-white" data-file-act="preview" ><i class="feather icon-zoom-in"></i></a>\n                    <a class=\'btn btn-sm btn-white\' data-file-act=\'order\' data-order="1" style="display: none"><i class=\'feather icon-arrow-up\'></i></a>\n                    <a class=\'btn btn-sm btn-white\' data-file-act=\'order\' data-order="0" style="display: none"><i class=\'feather icon-arrow-down\'></i></a>\n\n                    </div>').appendTo(t)):(t=$('\n                    <li id="'.concat(r.getFileViewSelector(e.id),'" title="').concat(e.nam,'">\n                    <p class="title" style="display:block">\n                        <i class="feather icon-check green _success icon-success"></i>\n                        ').concat(e.name," (").concat(o,")\n                    </p>\n                    </li>\n                ")),a=$('\n<span style="right: 65px;" class="file-action d-none" data-file-act=\'order\' data-order="1"><i class=\'feather icon-arrow-up\'></i></span>\n<span style="right: 45px;" class="file-action d-none" data-file-act=\'order\' data-order="0"><i class=\'feather icon-arrow-down\'></i></span>\n<span style="right: 25px;" class="file-action d-none" data-file-act=\'download\' data-id=\'\'><i class=\'feather icon-download-cloud\'></i></span>\n<span data-file-act="cancel" class="file-action" style="font-size:13px">\n    <i class="fas fa-ban red-dark"></i>\n</span>\n<span data-file-act="delete" class="file-action" style="display:none">\n    <i class="fas fa-trash red-dark"></i>\n</span>\n').appendTo(t)),t.appendTo(r.$files),setTimeout((function(){t.css({margin:"5px"})}),50),"invalid"===e.getStatus()?i.showError(t,e.statusText,e):(n&&i.showImage(t,e),r.percentages[e.id]=[e.size,0],e.rotation=0),e.on("statuschange",i.resolveStatusChangeCallback(t,a,e)),(n?a.find("a"):a).on("click",i.resolveActionsCallback(e))}},{key:"showError",value:function(e,t,a){var i=this.uploader.lang,r="",n=$('<p class="error"></p>');switch(t){case"exceed_size":r=i.trans("exceed_size");break;case"interrupt":r=i.trans("interrupt");break;default:r=i.trans("upload_failed")}this.uploader.faildFiles[a.id]=a,n.text(r).appendTo(e)}},{key:"showImage",value:function(e,t){var a=this,i=a.uploader.uploader,r=a.uploader.lang,n=e.find("p.imgWrap"),o=i.makeThumb(t,(function(t,i){var r;if(n.empty(),t)return e.find(".title").show(),void e.find(".file-type").show();a.uploader.helper.isSupportBase64?(r=$('<img src="'+i+'">'),n.append(r)):e.find(".file-type").show()}));try{o.once("load",(function(){t._info=t._info||o.info(),t._meta=t._meta||o.meta();var e=t._info.width,n=t._info.height;if(!a.validateDimensions(t))return Dcat.error(r.trans("dimensions")||"The image dimensions is invalid."),i.removeFile(t),!1;o.resize(e,n)}))}catch(e){return setTimeout((function(){i.removeFile(t)}),10)}}},{key:"resolveStatusChangeCallback",value:function(e,t,a){var i=this,r=i.uploader;return function(n,o,l){"progress"===o||"queued"===o&&(t.find('[data-file-act="cancel"]').hide(),t.find('[data-file-act="delete"]').show()),"error"===n||"invalid"===n?(i.showError(e,a.statusText,a),r.percentages[a.id][1]=1):"interrupt"===n?i.showError(e,"interrupt",a):"queued"===n?r.percentages[a.id][1]=0:"progress"===n?i.removeError(e):"complete"===n&&(i.uploader.isImage()?e.append('<span class="success"><em></em><i class="feather icon-check"></i></span>'):e.find("._success").show()),e.removeClass("state-"+o).addClass("state-"+n)}}},{key:"resolveActionsCallback",value:function(e){var t=this.uploader,a=t.uploader,i=t.helper;return function(){switch($(this).data("file-act")){case"cancel":return void a.removeFile(e);case"deleteurl":case"delete":if(t.options.removable)return t.input.delete(e.serverId),a.removeFile(e);t.request.delete(e,(function(){t.input.delete(e.serverId),a.removeFile(e)}));break;case"preview":Dcat.helpers.previewImage($(this).parent().parent().find("img").attr("src"),null,e.name);break;case"order":$(this).attr("data-id",e.serverId),i.orderFiles($(this));break;case"download":window.open($(this).attr("data-id"))}}}},{key:"removeError",value:function(e){e.find(".error").remove()}},{key:"validateDimensions",value:function(e){var t=this.uploader,a=t.options,i=a.dimensions,r=e._info.width,n=e._info.height,o=Dcat.helpers.isset;return!(t.isImage()&&this.isImage(e)&&Dcat.helpers.len(a.dimensions)&&(o(i,"width")&&i.width!=r||o(i,"min_width")&&i.min_width>r||o(i,"max_width")&&i.max_width<r||o(i,"height")&&i.height!=n||o(i,"min_height")&&i.min_height>n||o(i,"max_height")&&i.max_height<n||o(i,"ratio")&&i.ratio!=r/n))}},{key:"isImage",value:function(e){return e.type.match(/^image/)}}])&&f(t.prototype,a),i&&f(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,n=void 0,n=function(e,t){if("object"!==v(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!==v(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===v(n)?n:String(n)),i)}var r,n}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.uploader=t,this.uploadedFiles=[],this.init=!1}var t,a,i;return t=e,(a=[{key:"render",value:function(e){var t=this,a=t.uploader,i=a.options,r=a.isImage(),n="";n+="<li title='"+e.serverPath+"'>",!r&&i.sortable&&(n+='\n<p style="right: 65px" class="file-action" data-file-act=\'order\' data-order="1" data-id=\''.concat(e.serverId,"'><i class='feather icon-arrow-up'></i></p>\n<p style=\"right: 45px\" class=\"file-action\" data-file-act='order' data-order=\"0\" data-id='").concat(e.serverId,"'><i class='feather icon-arrow-down'></i></p>\n")),!r&&i.downloadable&&(n+='\n<p style="right: 25px" class="file-action" data-file-act=\'download\' data-id=\''.concat(e.serverUrl,"'><i class='feather icon-download-cloud'></i></p>\n")),r?n+="<p class='imgWrap'><img src='".concat(e.serverUrl,"'></p>"):i.disabled||(n+='<p class="file-action" data-file-act="delete" data-id="'.concat(e.serverId,'"><i class="fas fa-trash red-dark"></i></p>')),n+="<p class='title' style=''><i class='feather icon-check text-white icon-success text-white'></i>",n+=e.serverPath,n+="</p>",r&&(n+="<p class='title' style='margin-bottom:20px;'>&nbsp;</p>",n+="<div class='file-panel' >",i.disabled||(n+="<a class='btn btn-sm btn-white' data-file-act='deleteurl' data-id='".concat(e.serverId,"'><i class='fas fa-trash red-dark' style='font-size:13px'></i></a>")),n+="<a class='btn btn-sm btn-white' data-file-act='preview' data-url='".concat(e.serverUrl,"' ><i class='feather icon-zoom-in'></i></a>"),i.sortable&&(n+="\n<a class='btn btn-sm btn-white' data-file-act='order' data-order=\"1\" data-id='".concat(e.serverId,"'><i class='feather icon-arrow-up'></i></a>\n<a class='btn btn-sm btn-white' data-file-act='order' data-order=\"0\" data-id='").concat(e.serverId,"'><i class='feather icon-arrow-down'></i></a>\n")),n+="</div>"),n+="</li>",n=$(n),r||(n.find(".file-type").show(),n.find(".title").show(),a.$wrapper.css("background","transparent"));var o=function(){var e=$(this).data("id");if(i.removable)return n.remove(),t.removeFormFile(e);a.request.delete({serverId:e},(function(){n.remove(),t.removeFormFile(e)}))};n.find('[data-file-act="deleteurl"]').click(o),n.find('[data-file-act="delete"]').click(o),i.sortable&&n.find('[data-file-act="order"]').click((function(){a.helper.orderFiles($(this))})),i.downloadable&&n.find('[data-file-act="download"]').click((function(){window.open($(this).attr("data-id"))})),n.find('[data-file-act="preview"]').click((function(){var e=$(this).data("url");Dcat.helpers.previewImage(e)})),a.formFiles[e.serverId]=e,a.input.add(e.serverId),a.$files.append(n),r&&(setTimeout((function(){n.css("margin","5px")}),t.init?0:400),t.init=1)}},{key:"reRender",value:function(){for(var e in this.uploadedFiles)this.uploadedFiles[e]&&this.render(this.uploadedFiles[e])}},{key:"removeFormFile",value:function(e){if(e){var t=this.uploader,a=this.uploader,i=t.formFiles[e];t.input.delete(e),delete t.formFiles[e],a&&!i.fake&&a.removeFile(i),t.status.switch("decrOriginalFileNum"),t.status.switch("incrFileNumLimit"),Dcat.helpers.len(t.formFiles)||Dcat.helpers.len(t.percentages)||t.status.switch("pending")}}},{key:"add",value:function(e){e.serverId&&-1===this.uploader.helper.searchUploadedFile(e.serverId)&&this.uploadedFiles.push(e)}}])&&h(t.prototype,a),i&&h(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,n=void 0,n=function(e,t){if("object"!==b(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!==b(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===b(n)?n:String(n)),i)}var r,n}!function(e,t){var i=e.Dcat,r=function(){function e(r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=r=t.extend({wrapper:".web-uploader",addFileButton:".add-file-button",inputSelector:"",isImage:!1,preview:[],server:"",updateServer:"",autoUpload:!1,sortable:!1,deleteUrl:"",deleteData:{},thumbHeight:160,elementName:"",disabled:!1,autoUpdateColumn:!1,removable:!1,downloadable:!1,dimensions:{},lang:{exceed_size:"文件大小超出",interrupt:"上传暂停",upload_failed:"上传失败，请重试",selected_files:"选中:num个文件，共:size。",selected_has_failed:'已成功上传:success个文件，:fail个文件上传失败，<a class="retry"  href="javascript:"";">重新上传</a>失败文件或<a class="ignore" href="javascript:"";">忽略</a>',selected_success:"共:num个(:size)，已上传:success个。",dot:"，",failed_num:"失败:fail个。",pause_upload:"暂停上传",go_on_upload:"继续上传",start_upload:"开始上传",upload_success_message:"已成功上传:success个文件",go_on_add:"继续添加",Q_TYPE_DENIED:"对不起，不允许上传此类型文件",Q_EXCEED_NUM_LIMIT:"对不起，已超出文件上传数量限制，最多只能上传:num个文件",F_EXCEED_SIZE:"对不起，当前选择的文件过大",Q_EXCEED_SIZE_LIMIT:"对不起，已超出文件大小限制",F_DUPLICATE:"文件重复",confirm_delete_file:"您确定要删除这个文件吗？"},upload:{formData:{_id:null},thumb:{width:160,height:160,quality:70,allowMagnify:!0,crop:!0,preserveHeaders:!1,type:"image/jpeg"}}},r);var o=this;o.uploader=WebUploader.create(r.upload),o.$selector=t(r.selector),o.updateColumn=r.upload.formData.upload_column||"webup"+i.helpers.random(),o.relation=r.upload.formData._relation;var l=new a(this),u=new n(this),d=new c(this),p=new m(this),f=new y(this),v=new s(this);o.helper=l,o.request=u,o.status=d,o.addFile=p,o.addUploadedFile=f,o.input=v,o.lang=i.Translator(r.lang),o.percentages={},o.faildFiles={},o.formFiles={},o.fileCount=0,o.fileSize=0,void 0!==r.upload.formData._id&&r.upload.formData._id||(r.upload.formData._id=o.updateColumn+i.helpers.random())}var r,o,l;return r=e,(o=[{key:"build",value:function(){var e=this,a=e.uploader,r=e.options,n=e.$selector.find(r.wrapper),o=t('<ul class="filelist"></ul>').appendTo(n.find(".queueList")),l=n.find(".statusBar"),s=l.find(".info"),u=n.find(".upload-btn"),d=n.find(".placeholder"),c=l.find(".upload-progress").hide();e.$wrapper=n,e.$files=o,e.$statusBar=l,e.$uploadButton=u,e.$placeholder=d,e.$progress=c,e.$infoBox=s,r.upload.fileNumLimit>1&&!r.disabled&&a.addButton({id:r.addFileButton,label:'<i class="feather icon-folder"></i> &nbsp;'+e.lang.trans("go_on_add")}),e.uploader.on("dndAccept",(function(e){for(var t=!1,a=e.length,i=0;i<a;i++)if(~"text/plain;application/javascript ".indexOf(e[i].type)){t=!0;break}return!t})),a.onUploadProgress=function(t,a){e.percentages[t.id][1]=a,e.status.updateProgress()},a.onFileQueued=function(t){e.fileCount++,e.fileSize+=t.size,1===e.fileCount&&(d.addClass("element-invisible"),l.show()),e.addFile.render(t),e.status.switch("ready"),e.status.updateProgress(),!r.disabled&&r.autoUpload&&a.upload()},a.onFileDequeued=function(t){e.fileCount--,e.fileSize-=t.size,e.fileCount||i.helpers.len(e.formFiles)||e.status.switch("pending"),e.removeUploadFile(t)},a.on("all",(function(t,a,i){switch(t){case"uploadFinished":e.status.switch("confirm"),e.request.update();break;case"startUpload":e.status.switch("uploading");break;case"stopUpload":e.status.switch("paused");break;case"uploadAccept":if(!1===e._uploadAccept(a,i))return!1}})),a.onError=function(t){switch(t){case"Q_TYPE_DENIED":i.error(e.lang.trans("Q_TYPE_DENIED"));break;case"Q_EXCEED_NUM_LIMIT":i.error(e.lang.trans("Q_EXCEED_NUM_LIMIT",{num:r.upload.fileNumLimit}));break;case"F_EXCEED_SIZE":i.error(e.lang.trans("F_EXCEED_SIZE"));break;case"Q_EXCEED_SIZE_LIMIT":i.error(e.lang.trans("Q_EXCEED_SIZE_LIMIT"));break;case"F_DUPLICATE":i.warning(e.lang.trans("F_DUPLICATE"));break;default:i.error("Error: "+t)}},u.on("click",(function(){var i=e.status.state;if(t(this).hasClass("disabled"))return!1;"ready"===i||"paused"===i?a.upload():"uploading"===i&&a.stop()})),s.on("click",".retry",(function(){a.retry()})),s.on("click",".ignore",(function(){for(var t in e.faildFiles)a.removeFile(t,!0),delete e.faildFiles[t]})),e.status.switch("init")}},{key:"_uploadAccept",value:function(e,t){var a=this,i=a.options;if(!t||!t.status)return a.helper.showError(t),a.faildFiles[e.file.id]=e.file,!1;if(!t.data||!t.data.merge){e.file.serverId=t.data.id,e.file.serverName=t.data.name,e.file.serverPath=t.data.path,e.file.serverUrl=t.data.url||null,a.addUploadedFile.add(e.file),a.input.add(t.data.id);var r=a.getFileView(e.file.id);if(a.isImage()||(r.find(".file-action").hide(),r.find('[data-file-act="delete"]').show()),i.sortable&&r.find('[data-file-act="order"]').removeClass("d-none").show(),i.downloadable){var n=r.find('[data-file-act="download"]');n.removeClass("d-none").show(),n.attr("data-id",e.file.serverUrl)}}}},{key:"preview",value:function(){var e,t=this,a=t.options;for(e in a.preview){var i=a.preview[e].path,r=void 0;i.indexOf(".")&&(r=i.split(".").pop());var n={serverId:a.preview[e].id,serverUrl:a.preview[e].url,serverPath:i,ext:r,fake:1};t.status.switch("incrOriginalFileNum"),t.status.switch("decrFileNumLimit"),t.addUploadedFile.render(n),t.addUploadedFile.add(n)}}},{key:"reRenderUploadedFiles",value:function(){this.$files.html(""),this.addUploadedFile.reRender()}},{key:"refreshButton",value:function(){this.uploader.refresh()}},{key:"getFileViewSelector",value:function(e){return this.options.elementName.replace(/[\[\]]*/g,"_")+"-"+e}},{key:"getFileView",value:function(e){return t("#"+this.getFileViewSelector(e))}},{key:"removeUploadFile",value:function(e){var t=this,a=t.getFileView(e.id);delete t.percentages[e.id],t.status.updateProgress(),a.off().find(".file-panel").off().end().remove()}},{key:"getColumn",value:function(){return this.updateColumn}},{key:"isImage",value:function(){return this.options.isImage}}])&&g(r.prototype,o),l&&g(r,l),Object.defineProperty(r,"prototype",{writable:!1}),e}();i.Uploader=function(e){return new r(e)}}(window,jQuery)})();
//# sourceMappingURL=upload.js.map