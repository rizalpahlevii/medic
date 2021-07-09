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
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/employee_payrolls/payrolls.js":
/*!***********************************************************!*\
  !*** ./resources/assets/js/employee_payrolls/payrolls.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  'use strict';

  $('#type,#ownerType,#month,#status').select2({
    width: '100%'
  });
  $('.price-input').trigger('input');
  $('#type').focus();
});
$('#basicSalary,#allowance,#deductions').on('change', function () {
  var basicSalary = parseFloat(removeCommas($('#basicSalary').val()));
  var allowance = parseFloat(removeCommas($('#allowance').val()));
  var deductions = parseFloat(removeCommas($('#deductions').val()));
  var netSalary = (basicSalary + allowance).toFixed(2);

  if (deductions > netSalary) {
    $('#validationErrorsBox').removeClass('d-none');
    $('#validationErrorsBox').text('Deductions cannot be greater than Basic salary + Allowance').show();
    $('#deductions').val(null);
    deductions = 0;
    setTimeout(function () {
      $('#validationErrorsBox').addClass('d-none');
      $('#validationErrorsBox').text('');
    }, 7000);
  }

  netSalary = (basicSalary + allowance - deductions).toFixed(2);
  !isNaN(netSalary) ? $('#netSalary').val(netSalary).trigger('input') : $('#netSalary').val(0);
});
$('#type').on('change', function () {
  if ($(this).val() !== '') {
    $.ajax({
      url: employeeUrl,
      type: 'get',
      dataType: 'json',
      data: {
        id: $(this).val()
      },
      success: function success(data) {
        $('#ownerType').empty();
        $('#ownerType').removeAttr('disabled');
        $.each(data.data, function (i, v) {
          $('#ownerType').append($('<option></option>').attr('value', i).text(v));
        });

        if (isEdit) {
          $('#ownerType').val(employeeOwnerId).trigger('change');
          isEdit = false;
        }
      }
    });
  }

  $('#ownerType').empty();
  $('#ownerType').prop('disabled', true);
});
$(document).on('submit', '#createPayroll, #editPayroll', function () {
  $('#btnSave').attr('disabled', true);
});

/***/ }),

/***/ 70:
/*!*****************************************************************!*\
  !*** multi ./resources/assets/js/employee_payrolls/payrolls.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/rizal-ganeshahusada/resources/assets/js/employee_payrolls/payrolls.js */"./resources/assets/js/employee_payrolls/payrolls.js");


/***/ })

/******/ });