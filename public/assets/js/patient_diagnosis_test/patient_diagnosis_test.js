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
/******/ 	return __webpack_require__(__webpack_require__.s = 138);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/patient_diagnosis_test/patient_diagnosis_test.js":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/patient_diagnosis_test/patient_diagnosis_test.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tableName = '#patientDiagnosisTestTable';
var tbl = $('#patientDiagnosisTestTable').DataTable({
  processing: true,
  serverSide: true,
  'order': [[4, 'asc']],
  ajax: {
    url: patientDiagnosisTestUrl
  },
  columnDefs: [{
    targets: '_all',
    defaultContent: 'N/A'
  }, {
    'targets': [0],
    'className': 'text-center',
    'width': '12%'
  }, {
    'targets': [5],
    'orderable': false,
    'className': 'text-center',
    'width': '8%'
  }],
  columns: [{
    data: function data(row) {
      var showLink = patientDiagnosisTestUrl + '/' + row.id;
      return '<a href="' + showLink + '">' + row.report_number + '</a>';
    },
    name: 'report_number'
  }, {
    data: function data(row) {
      var showLink = diagnosisCategoryUrl + '/' + row.category.id;
      return '<a href="' + showLink + '">' + row.category.name + '</a>';
    },
    name: 'category.name'
  }, {
    data: function data(row) {
      return row.patient.user.full_name;
    },
    name: 'patient.user.first_name'
  }, {
    data: function data(row) {
      return row.doctor.user.full_name;
    },
    name: 'doctor.user.first_name'
  }, {
    data: function data(row) {
      return row;
    },
    render: function render(row) {
      if (row.created_at === null) {
        return 'N/A';
      }

      return moment(row.created_at).format('Do MMM, Y');
    },
    name: 'created_at'
  }, {
    data: function data(row) {
      var url = patientDiagnosisTestUrl + '/' + row.id;
      var data = [{
        'id': row.id,
        'url': url + '/edit'
      }];
      return prepareTemplateRender('#patientDiagnosisTestActionTemplate', data);
    },
    name: 'id'
  }]
});
$(document).on('click', '.delete-btn', function (event) {
  var patientDiagnosisTestId = $(event.currentTarget).data('id');
  deleteItem(patientDiagnosisTestUrl + '/' + patientDiagnosisTestId, '#patientDiagnosisTestTable', 'Patient diagnosis test');
});

/***/ }),

/***/ 138:
/*!************************************************************************************!*\
  !*** multi ./resources/assets/js/patient_diagnosis_test/patient_diagnosis_test.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/rizal-ganeshahusada/resources/assets/js/patient_diagnosis_test/patient_diagnosis_test.js */"./resources/assets/js/patient_diagnosis_test/patient_diagnosis_test.js");


/***/ })

/******/ });