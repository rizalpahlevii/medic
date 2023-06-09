/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 158);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/ipd_payments/ipd_payments.js":
/*!**********************************************************!*\
  !*** ./resources/assets/js/ipd_payments/ipd_payments.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  'use strict';

  var tableName = '#tblIpdPayments';
  $(tableName).DataTable({
    processing: true,
    serverSide: true,
    'order': [[1, 'desc']],
    ajax: {
      url: ipdPaymentUrl,
      data: function data(_data) {
        _data.id = ipdPatientDepartmentId;
      }
    },
    columnDefs: [{
      'targets': [0, 1, 2],
      'width': '10%'
    }, {
      'targets': [0],
      'className': 'text-right'
    }, {
      'targets': [3],
      'width': '5%'
    }, {
      'targets': [4],
      'width': '20%'
    }, {
      'targets': [5],
      'className': 'text-center',
      'orderable': false,
      'width': '4%',
      'visible': actionAcoumnVisibal
    }, {
      targets: '_all',
      defaultContent: 'N/A'
    }],
    columns: [{
      data: function data(row) {
        return !isEmpty(row.amount) ? '<p class="cur-margin">' + getCurrentCurrencyClass() + ' ' + addCommas(row.amount) + '</p>' : 'N/A';
      },
      name: 'amount'
    }, {
      data: function data(row) {
        return row;
      },
      render: function render(row) {
        if (row.date === null) {
          return 'N/A';
        }

        return moment(row.date).format('Do MMM, Y h:mm A');
      },
      name: 'date'
    }, {
      data: function data(row) {
        return ipdPaymentModes[row.payment_mode];
      },
      name: 'payment_mode'
    }, {
      data: function data(row) {
        if (row.ipd_payment_document_url != '') {
          var downloadLink = downloadPaymetDocumentUrl + '/' + row.id;
          return '<a href="' + downloadLink + '">' + 'Download' + '</a>';
        } else return 'N/A';
      },
      name: 'id'
    }, {
      data: 'notes',
      name: 'notes'
    }, {
      data: function data(row) {
        var isPaymentModeStripe = row.payment_mode == 3 ? true : false;
        var data = [{
          'id': row.id,
          'isPaymentModeStripe': isPaymentModeStripe
        }];
        return prepareTemplateRender('#ipdPaymentActionTemplate', data);
      },
      name: 'id'
    }]
  });
  $('#ipdPaymentDate,#editIpdPaymentDate').datetimepicker(DatetimepickerDefaults({
    format: 'YYYY-MM-DD HH:mm:ss',
    useCurrent: true,
    sideBySide: true,
    minDate: ipdPatientCaseDate,
    widgetPositioning: {
      horizontal: 'right',
      vertical: 'bottom'
    }
  }));
  $('#paymentModeId, #editPaymentModeId').select2({
    width: '100%'
  });
  $(document).on('click', '.ipdpayment-delete-btn', function (event) {
    var id = $(event.currentTarget).data('id');
    var url = ipdPaymentUrl + '/' + id;
    swal({
      title: 'Delete !',
      text: 'Are you sure want to delete this " IPD Payment " ?',
      type: 'warning',
      showCancelButton: true,
      closeOnConfirm: false,
      showLoaderOnConfirm: true,
      confirmButtonColor: '#5cb85c',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Yes'
    }, function () {
      deleteItemAjax(url, tableName, 'IPD Payment');
      location.reload();
    });
  });
  $(document).on('click', '.ipdpayment-edit-btn', function (event) {
    if (ajaxCallIsRunning) {
      return;
    }

    ajaxCallInProgress();
    var ipdPaymentId = $(event.currentTarget).data('id');
    renderData(ipdPaymentId);
  });
  $(document).on('submit', '#addIpdPaymentNewForm', function (event) {
    event.preventDefault();
    var loadingButton = jQuery(this).find('#btnIpdPaymentSave');
    loadingButton.button('loading');
    var formData = new FormData($(this)[0]);
    $.ajax({
      url: ipdPaymentCreateUrl,
      type: 'POST',
      dataType: 'json',
      data: formData,
      processData: false,
      contentType: false,
      success: function success(result) {
        if (result.success) {
          displaySuccessMessage(result.message);
          $('#addIpdPaymentModal').modal('hide');
          location.reload();
        }
      },
      error: function error(result) {
        console.log(result);
        printErrorMessage('#paymentValidationErrorsBox', result);
      },
      complete: function complete() {
        loadingButton.button('reset');
      }
    });
  });

  window.renderData = function (id) {
    $.ajax({
      url: ipdPaymentUrl + '/' + id + '/edit',
      type: 'GET',
      success: function success(result) {
        if (result.success) {
          var ext = result.data.ipd_payment_document_url.split('.').pop().toLowerCase();

          if (ext == 'pdf') {
            $('#editPaymentPreviewImage').attr('src', pdfDocumentImageUrl);
          } else if (ext == 'docx' || ext == 'doc') {
            $('#editPaymentPreviewImage').attr('src', docxDocumentImageUrl);
          } else {
            if (result.data.ipd_payment_document_url != '') {
              $('#editPaymentPreviewImage').attr('src', result.data.ipd_payment_document_url);
            }
          }

          $('#ipdPaymentId').val(result.data.id);
          $('#editIpdPaymentAmount').val(result.data.amount);
          $('#editIpdPaymentDate').val(moment(result.data.date).format('YYYY-MM-DD HH:mm:ss'));
          $('#editIpdPaymentNote').val(result.data.notes);
          $('#editPaymentModeId').val(result.data.payment_mode).trigger('change.select2');
          console.log(result.data.payment_mode);
          $('#editIpdPaymentModal').modal('show');
          ajaxCallCompleted();
        }
      },
      error: function error(result) {
        manageAjaxErrors(result);
      }
    });
  };

  $(document).on('submit', '#editIpdPaymentForm', function (event) {
    event.preventDefault();
    var loadingButton = jQuery(this).find('#btnIpdPaymentSave');
    loadingButton.button('loading');
    var id = $('#ipdPaymentId').val();
    var url = ipdPaymentUrl + '/' + id;
    var data = {
      'formSelector': $(this),
      'url': url,
      'type': 'POST',
      'tableSelector': tableName
    };
    editIpdPaymentRecord(data, loadingButton, '#editIpdPaymentModal');
  });
  $('#addIpdPaymentModal').on('hidden.bs.modal', function () {
    resetModalForm('#addIpdPaymentNewForm', '#paymentValidationErrorsBox');
    $('#paymentPreviewImage').attr('src', defaultDocumentImageUrl);
  });
  $('#editIpdPaymentModal').on('hidden.bs.modal', function () {
    resetModalForm('#editIpdPaymentForm', '#editPaymentValidationErrorsBox');
  });
});
$(document).on('change', '#paymentDocumentImage', function () {
  var extension = isValidDocument($(this), '#paymentValidationErrorsBox');

  if (!isEmpty(extension) && extension != false) {
    $('#paymentValidationErrorsBox').html('').hide();
    displayDocument(this, '#paymentPreviewImage', extension);
  }
});
$(document).on('change', '#editPaymentDocumentImage', function () {
  var extension = isValidDocument($(this), '#editPaymentValidationErrorsBox');

  if (!isEmpty(extension) && extension != false) {
    $('#editValidationErrorsBox').html('').hide();
    displayDocument(this, '#editPaymentPreviewImage', extension);
  }
});

window.isValidDocument = function (inputSelector, validationMessageSelector) {
  var ext = $(inputSelector).val().split('.').pop().toLowerCase();

  if ($.inArray(ext, ['png', 'jpg', 'jpeg', 'pdf', 'doc', 'docx']) == -1) {
    $(inputSelector).val('');
    $(validationMessageSelector).html('The document must be a file of type: jpeg, jpg, png, pdf, doc, docx.').show();
    return false;
  }

  return ext;
};

function deleteItemAjax(url, tableId, header) {
  var callFunction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  $.ajax({
    url: url,
    type: 'DELETE',
    dataType: 'json',
    success: function success(obj) {
      if (obj.success) {
        location.reload();
      }

      swal({
        title: 'Deleted!',
        text: header + ' has been deleted.',
        type: 'success',
        timer: 2000
      });

      if (callFunction) {
        eval(callFunction);
      }
    },
    error: function error(data) {
      swal({
        title: '',
        text: data.responseJSON.message,
        type: 'error',
        timer: 5000
      });
    }
  });
}

window.editIpdPaymentRecord = function (data, loadingButton) {
  var modalSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#EditModal';
  var formData = data.formSelector === '' ? data.formData : new FormData($(data.formSelector)[0]);
  $.ajax({
    url: data.url,
    type: data.type,
    data: formData,
    processData: false,
    contentType: false,
    success: function success(result) {
      if (result.success) {
        displaySuccessMessage(result.message);
        $(modalSelector).modal('hide');
        location.reload();
      }
    },
    error: function error(result) {
      UnprocessableInputError(result);
    },
    complete: function complete() {
      loadingButton.button('reset');
    }
  });
};

/***/ }),

/***/ 158:
/*!****************************************************************!*\
  !*** multi ./resources/assets/js/ipd_payments/ipd_payments.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/rizal-ganeshahusada/resources/assets/js/ipd_payments/ipd_payments.js */"./resources/assets/js/ipd_payments/ipd_payments.js");


/***/ })

/******/ });