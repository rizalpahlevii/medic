const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/* Copy directory*/
mix.copyDirectory(
    "node_modules/@fortawesome/fontawesome-free",
    "public/assets/css/@fortawesome/fontawesome-free"
);
mix.copyDirectory(
    "node_modules/simple-line-icons",
    "public/assets/css/simple-line-icons"
);
mix.copyDirectory(
    "node_modules/lightgallery/dist",
    "public/assets/lightgallery/dist"
);
mix.copyDirectory("resources/assets/img", "public/assets/img");

mix.copy("node_modules/datatables.net-dt/images", "public/assets/images");
mix.copy(
    "node_modules/@coreui/coreui/dist/css/coreui.min.css",
    "public/assets/css/coreui.min.css"
);
mix.copy(
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "public/assets/css/bootstrap.min.css"
);
mix.copy(
    "node_modules/bootstrap-select/dist/css/bootstrap-select.min.css",
    "public/assets/css/bootstrap-select/bootstrap-select.min.css"
);
mix.copy(
    "node_modules/sweetalert/dist/sweetalert.css",
    "public/assets/css/sweetalert.css"
);
mix.copy(
    "node_modules/datatables.net-dt/css/jquery.dataTables.min.css",
    "public/assets/css/jquery.dataTables.min.css"
);
mix.copy(
    "node_modules/jquery-toast-plugin/dist/jquery.toast.min.css",
    "public/assets/css/jquery.toast.min.css"
);
mix.copy(
    "node_modules/select2/dist/css/select2.min.css",
    "public/assets/css/select2.min.css"
);
mix.copy(
    "node_modules/fullcalendar/dist/fullcalendar.min.css",
    "public/assets/css/fullcalendar.min.css"
);
mix.copy(
    "node_modules/intl-tel-input/build/css/intlTelInput.css",
    "public/assets/css/int-tel/css/intlTelInput.css"
);
mix.copy(
    "node_modules/intl-tel-input/build/css/intlTelInput.css",
    "public/assets/css/int-tel/css/intlTelInput.css"
);
mix.copyDirectory(
    "node_modules/intl-tel-input/build/img",
    "public/assets/css/int-tel/img"
);
mix.copy(
    "node_modules/daterangepicker/daterangepicker.css",
    "public/assets/css/daterangepicker.css"
);
mix.copy(
    "node_modules/owl.carousel/dist/assets/owl.carousel.min.css",
    "public/assets/css/owl.carousel.min.css"
);

mix.babel(
    "node_modules/sweetalert/dist/sweetalert.min.js",
    "public/assets/js/sweetalert.min.js"
);
mix.babel(
    "node_modules/datatables.net-dt/js/dataTables.dataTables.min.js",
    "public/assets/js/dataTables.dataTables.min.js"
);
mix.babel(
    "node_modules/datatables.net/js/jquery.dataTables.min.js",
    "public/assets/js/jquery.dataTables.min.js"
);
mix.babel(
    "node_modules/jquery-toast-plugin/dist/jquery.toast.min.js",
    "public/assets/js/jquery.toast.min.js"
);
mix.babel(
    "node_modules/select2/dist/js/select2.min.js",
    "public/assets/js/select2.min.js"
);
mix.babel(
    "node_modules/jquery/dist/jquery.min.js",
    "public/assets/js/jquery.min.js"
);
mix.babel(
    "node_modules/@coreui/coreui/dist/js/coreui.min.js",
    "public/assets/js/coreui.min.js"
);
mix.babel(
    "node_modules/bootstrap/dist/js/bootstrap.min.js",
    "public/assets/js/bootstrap.min.js"
);
mix.babel(
    "node_modules/bootstrap-select/dist/js/bootstrap-select.min.js",
    "public/assets/js/bootstrap-select/bootstrap-select.min.js"
);
mix.babel(
    "node_modules/popper.js/dist/umd/popper.min.js",
    "public/assets/js/popper.min.js"
);
mix.babel(
    "node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js",
    "public/assets/js/perfect-scrollbar.min.js"
);
mix.babel(
    "node_modules/moment/min/moment.min.js",
    "public/assets/js/moment.min.js"
);
mix.babel(
    "node_modules/fullcalendar/dist/fullcalendar.min.js",
    "public/assets/js/fullcalendar.min.js"
);
mix.babel(
    "node_modules/intl-tel-input/build/js/intlTelInput.js",
    "public/assets/js/int-tel/js/intlTelInput.min.js"
);
mix.babel(
    "node_modules/intl-tel-input/build/js/utils.js",
    "public/assets/js/int-tel/js/utils.min.js"
);
mix.babel(
    "node_modules/chart.js/dist/Chart.min.js",
    "public/assets/js/chart.min.js"
);
mix.babel(
    "node_modules/daterangepicker/daterangepicker.js",
    "public/assets/js/daterangepicker.js"
);
mix.babel(
    "node_modules/owl.carousel/dist/owl.carousel.min.js",
    "public/assets/js/owl.carousel.min.js"
);

/* css */
mix.sass("resources/assets/sass/app.scss", "public/assets/css/app.css")
    .sass("resources/assets/sass/style.scss", "public/assets/css/style.css")
    .sass(
        "resources/assets/sass/infy-loader.scss",
        "public/assets/css/infy-loader.css"
    )
    .sass("resources/assets/sass/bill.scss", "public/assets/css/bill.css")
    .sass(
        "resources/assets/sass/timeline.scss",
        "public/assets/css/timeline.css"
    )
    .version();

/* JS */
mix.js(
    "resources/assets/js/custom/custom.js",
    "public/assets/js/custom/custom.js"
)
    .js(
        "resources/assets/js/custom/helpers.js",
        "public/assets/js/custom/helpers.js"
    )
    .js(
        "resources/assets/js/custom/custom-datatable.js",
        "public/assets/js/custom/custom-datatable.js"
    )
    .js(
        "resources/assets/js/custom/new-edit-modal-form.js",
        "public/assets/js/custom/new-edit-modal-form.js"
    )
    .js(
        "resources/assets/js/custom/delete.js",
        "public/assets/js/custom/delete.js"
    )
    .js(
        "resources/assets/js/custom/reset_models.js",
        "public/assets/js/custom/reset_models.js"
    )
    .js(
        "resources/assets/js/custom/add-edit-profile-picture.js",
        "public/assets/js/custom/add-edit-profile-picture.js"
    )
    .js(
        "resources/assets/js/departments/departments.js",
        "public/assets/js/departments/departments.js"
    )
    .js(
        "resources/assets/js/appointments/appointments.js",
        "public/assets/js/appointments/appointments.js"
    )
    .js(
        "resources/assets/js/appointments/create-edit.js",
        "public/assets/js/appointments/create-edit.js"
    )
    .js(
        "resources/assets/js/brands/brands.js",
        "public/assets/js/brands/brands.js"
    )
    .js(
        "resources/assets/js/brands/medicine_brands_list.js",
        "public/assets/js/brands/medicine_brands_list.js"
    )
    .js(
        "resources/assets/js/category/category.js",
        "public/assets/js/category/category.js"
    )
    .js(
        "resources/assets/js/category/medicines_list.js",
        "public/assets/js/category/medicines_list.js"
    )
    .js(
        "resources/assets/js/nurses/nurses.js",
        "public/assets/js/nurses/nurses.js"
    )
    .js(
        "resources/assets/js/nurses/nurses_data_listing.js",
        "public/assets/js/nurses/nurses_data_listing.js"
    )
    .js(
        "resources/assets/js/nurses/create-edit.js",
        "public/assets/js/nurses/create-edit.js"
    )
    .js(
        "resources/assets/js/doctors/doctors.js",
        "public/assets/js/doctors/doctors.js"
    )
    .js(
        "resources/assets/js/doctors/doctors_data_listing.js",
        "public/assets/js/doctors/doctors_data_listing.js"
    )
    .js(
        "resources/assets/js/doctors/create-edit.js",
        "public/assets/js/doctors/create-edit.js"
    )
    .js(
        "resources/assets/js/lab_technicians/lab_technicians.js",
        "public/assets/js/lab_technicians/lab_technicians.js"
    )
    .js(
        "resources/assets/js/lab_technicians/lab_technicians_data_listing.js",
        "public/assets/js/lab_technicians/lab_technicians_data_listing.js"
    )
    .js(
        "resources/assets/js/lab_technicians/create-edit.js",
        "public/assets/js/lab_technicians/create-edit.js"
    )
    .js(
        "resources/assets/js/receptionists/receptionists.js",
        "public/assets/js/receptionists/receptionists.js"
    )
    .js(
        "resources/assets/js/receptionists/receptionists_data_listing.js",
        "public/assets/js/receptionists/receptionists_data_listing.js"
    )
    .js(
        "resources/assets/js/receptionists/create-edit.js",
        "public/assets/js/receptionists/create-edit.js"
    )
    .js(
        "resources/assets/js/pharmacists/pharmacists.js",
        "public/assets/js/pharmacists/pharmacists.js"
    )
    .js(
        "resources/assets/js/pharmacists/pharmacists_data_listing.js",
        "public/assets/js/pharmacists/pharmacists_data_listing.js"
    )
    .js(
        "resources/assets/js/pharmacists/create-edit.js",
        "public/assets/js/pharmacists/create-edit.js"
    )
    .js(
        "resources/assets/js/patients/patients.js",
        "public/assets/js/patients/patients.js"
    )
    .js(
        "resources/assets/js/medics/medics.js",
        "public/assets/js/medics/medics.js"
    )
    .js(
        "resources/assets/js/suppliers/suppliers.js",
        "public/assets/js/suppliers/suppliers.js"
    )
    .js(
        "resources/assets/js/suppliers/suppliers_data_listing.js",
        "public/assets/js/suppliers/suppliers_data_listing.js"
    )
    .js(
        "resources/assets/js/patients/patients_data_listing.js",
        "public/assets/js/patients/patients_data_listing.js"
    )
    .js(
        "resources/assets/js/patients/create-edit.js",
        "public/assets/js/patients/create-edit.js"
    )
    .js(
        "resources/assets/js/accountants/accountants.js",
        "public/assets/js/accountants/accountants.js"
    )
    .js(
        "resources/assets/js/accountants/accountants_data_listing.js",
        "public/assets/js/accountants/accountants_data_listing.js"
    )
    .js(
        "resources/assets/js/accountants/create-edit.js",
        "public/assets/js/accountants/create-edit.js"
    )
    .js(
        "resources/assets/js/custom/input_price_format.js",
        "public/assets/js/custom/input_price_format.js"
    )
    .js("resources/assets/js/bills/bill.js", "public/assets/js/bills/bill.js")
    .js("resources/assets/js/bills/new.js", "public/assets/js/bills/new.js")
    .js("resources/assets/js/bills/edit.js", "public/assets/js/bills/edit.js")
    .js(
        "resources/assets/js/blood_donors/blood_donors.js",
        "public/assets/js/blood_donors/blood_donors.js"
    )
    .js(
        "resources/assets/js/blood_banks/blood_banks.js",
        "public/assets/js/blood_banks/blood_banks.js"
    )
    .js(
        "resources/assets/js/bed_types/bed_types.js",
        "public/assets/js/bed_types/bed_types.js"
    )
    .js(
        "resources/assets/js/bed_types/beds_view_list.js",
        "public/assets/js/bed_types/beds_view_list.js"
    )
    .js("resources/assets/js/beds/beds.js", "public/assets/js/beds/beds.js")
    .js(
        "resources/assets/js/beds/beds_assigns_view_list.js",
        "public/assets/js/beds/beds_assigns_view_list.js"
    )
    .js(
        "resources/assets/js/beds/bulk_beds.js",
        "public/assets/js/beds/bulk_beds.js"
    )
    .js(
        "resources/assets/js/beds/create-edit.js",
        "public/assets/js/beds/create-edit.js"
    )
    .js(
        "resources/assets/js/medicines/medicines.js",
        "public/assets/js/medicines/medicines.js"
    )
    .js(
        "resources/assets/js/medicines/new.js",
        "public/assets/js/medicines/new.js"
    )
    .js(
        "resources/assets/js/document_type/doc_type.js",
        "public/assets/js/document_type/doc_type.js"
    )
    .js(
        "resources/assets/js/document/document.js",
        "public/assets/js/document/document.js"
    )
    .js(
        "resources/assets/js/document_type/user_documents.js",
        "public/assets/js/document_type/user_documents.js"
    )
    .js(
        "resources/assets/js/notice_boards/notice_boards.js",
        "public/assets/js/notice_boards/notice_boards.js"
    )
    .js(
        "resources/assets/js/notice_boards/create-edit.js",
        "public/assets/js/notice_boards/create-edit.js"
    )
    .js(
        "resources/assets/js/bed_assign/bed_assign.js",
        "public/assets/js/bed_assign/bed_assign.js"
    )
    .js(
        "resources/assets/js/bed_assign/create-edit.js",
        "public/assets/js/bed_assign/create-edit.js"
    )
    .js(
        "resources/assets/js/death_reports/death_reports.js",
        "public/assets/js/death_reports/death_reports.js"
    )
    .js(
        "resources/assets/js/death_reports/create-edit.js",
        "public/assets/js/death_reports/create-edit.js"
    )
    .js(
        "resources/assets/js/user_profile/user_profile.js",
        "public/assets/js/user_profile/user_profile.js"
    )
    .js(
        "resources/assets/js/birth_reports/birth_reports.js",
        "public/assets/js/birth_reports/birth_reports.js"
    )
    .js(
        "resources/assets/js/birth_reports/create-edit.js",
        "public/assets/js/birth_reports/create-edit.js"
    )
    .js(
        "resources/assets/js/operation_reports/operation_reports.js",
        "public/assets/js/operation_reports/operation_reports.js"
    )
    .js(
        "resources/assets/js/operation_reports/create-edit.js",
        "public/assets/js/operation_reports/create-edit.js"
    )
    .js(
        "resources/assets/js/employee_payrolls/employee_payrolls.js",
        "public/assets/js/employee_payrolls/employee_payrolls.js"
    )
    .js(
        "resources/assets/js/employee_payrolls/payrolls.js",
        "public/assets/js/employee_payrolls/payrolls.js"
    )
    .js(
        "resources/assets/js/employee_payrolls/edit.js",
        "public/assets/js/employee_payrolls/edit.js"
    )
    .js(
        "resources/assets/js/patient_cases/patient_cases.js",
        "public/assets/js/patient_cases/patient_cases.js"
    )
    .js(
        "resources/assets/js/patient_cases/create-edit.js",
        "public/assets/js/patient_cases/create-edit.js"
    )
    .js(
        "resources/assets/js/employee/my_payrolls.js",
        "public/assets/js/employee/my_payrolls.js"
    )
    .js(
        "resources/assets/js/employee/doctors.js",
        "public/assets/js/employee/doctors.js"
    )
    .js(
        "resources/assets/js/settings/setting.js",
        "public/assets/js/settings/setting.js"
    )
    .js(
        "resources/assets/js/doctors_departments/doctors_departments.js",
        "public/assets/js/doctors_departments/doctors_departments.js"
    )
    .js(
        "resources/assets/js/doctors_departments/doctor_departments_list.js",
        "public/assets/js/doctors_departments/doctor_departments_list.js"
    )
    .js(
        "resources/assets/js/investigation_reports/investigation_reports.js",
        "public/assets/js/investigation_reports/investigation_reports.js"
    )
    .js(
        "resources/assets/js/investigation_reports/create-edit.js",
        "public/assets/js/investigation_reports/create-edit.js"
    )
    .js(
        "resources/assets/js/accounts/accounts.js",
        "public/assets/js/accounts/accounts.js"
    )
    .js(
        "resources/assets/js/accounts/payments_list.js",
        "public/assets/js/accounts/payments_list.js"
    )
    .js(
        "resources/assets/js/insurances/insurances.js",
        "public/assets/js/insurances/insurances.js"
    )
    .js(
        "resources/assets/js/insurances/create-edit.js",
        "public/assets/js/insurances/create-edit.js"
    )
    .js(
        "resources/assets/js/payments/payments.js",
        "public/assets/js/payments/payments.js"
    )
    .js(
        "resources/assets/js/payment_reports/payments_reports.js",
        "public/assets/js/payment_reports/payments_reports.js"
    )
    .js(
        "resources/assets/js/payments/create-edit.js",
        "public/assets/js/payments/create-edit.js"
    )
    .js(
        "resources/assets/js/invoices/invoice.js",
        "public/assets/js/invoices/invoice.js"
    )
    .js(
        "resources/assets/js/invoices/new.js",
        "public/assets/js/invoices/new.js"
    )
    .js(
        "resources/assets/js/schedules/schedules.js",
        "public/assets/js/schedules/schedules.js"
    )
    .js(
        "resources/assets/js/schedules/create-edit.js",
        "public/assets/js/schedules/create-edit.js"
    )
    .js(
        "resources/assets/js/services/services.js",
        "public/assets/js/services/services.js"
    )
    .js(
        "resources/assets/js/services/create-edit.js",
        "public/assets/js/services/create-edit.js"
    )
    .js(
        "resources/assets/js/packages/packages.js",
        "public/assets/js/packages/packages.js"
    )
    .js(
        "resources/assets/js/packages/create-edit.js",
        "public/assets/js/packages/create-edit.js"
    )
    .js(
        "resources/assets/js/case_handlers/case_handlers.js",
        "public/assets/js/case_handlers/case_handlers.js"
    )
    .js(
        "resources/assets/js/case_handlers/case_handlers_data_listing.js",
        "public/assets/js/case_handlers/case_handlers_data_listing.js"
    )
    .js(
        "resources/assets/js/case_handlers/create-edit.js",
        "public/assets/js/case_handlers/create-edit.js"
    )
    .js(
        "resources/assets/js/patient_cases_list/patient_cases_list.js",
        "public/assets/js/patient_cases_list/patient_cases_list.js"
    )
    .js(
        "resources/assets/js/employee/notice_boards.js",
        "public/assets/js/employee/notice_boards.js"
    )
    .js(
        "resources/assets/js/advanced_payments/advanced_payments.js",
        "public/assets/js/advanced_payments/advanced_payments.js"
    )
    .js(
        "resources/assets/js/advanced_payments/create-edit.js",
        "public/assets/js/advanced_payments/create-edit.js"
    )
    .js(
        "resources/assets/js/patient_admissions/patient_admission.js",
        "public/assets/js/patient_admissions/patient_admission.js"
    )
    .js(
        "resources/assets/js/patient_admissions/create-edit.js",
        "public/assets/js/patient_admissions/create-edit.js"
    )
    .js(
        "resources/assets/js/appointment_calendar/appointment_calendar.js",
        "public/assets/js/appointment_calendar/appointment_calendar.js"
    )
    .js(
        "resources/assets/js/enquiry/enquiry.js",
        "public/assets/js/enquiry/enquiry.js"
    )
    .js(
        "resources/assets/js/ambulances/ambulances.js",
        "public/assets/js/ambulances/ambulances.js"
    )
    .js(
        "resources/assets/js/ambulances/create-edit.js",
        "public/assets/js/ambulances/create-edit.js"
    )
    .js(
        "resources/assets/js/ambulance_call/ambulance_calls.js",
        "public/assets/js/ambulance_call/ambulance_calls.js"
    )
    .js(
        "resources/assets/js/ambulance_call/create-edit.js",
        "public/assets/js/ambulance_call/create-edit.js"
    )
    .js(
        "resources/assets/js/prescriptions/prescriptions.js",
        "public/assets/js/prescriptions/prescriptions.js"
    )
    .js(
        "resources/assets/js/patient_prescriptions/patient_prescriptions.js",
        "public/assets/js/patient_prescriptions/patient_prescriptions.js"
    )
    .js(
        "resources/assets/js/patient_prescriptions/create-edit.js",
        "public/assets/js/patient_prescriptions/create-edit.js"
    )
    .js(
        "resources/assets/js/prescriptions/create-edit.js",
        "public/assets/js/prescriptions/create-edit.js"
    )
    .js(
        "resources/assets/js/employee/patient_admission.js",
        "public/assets/js/employee/patient_admission.js"
    )
    .js(
        "resources/assets/js/employee/invoice.js",
        "public/assets/js/employee/invoice.js"
    )
    .js(
        "resources/assets/js/employee/bill.js",
        "public/assets/js/employee/bill.js"
    )
    .js(
        "resources/assets/js/charge_categories/charge_categories.js",
        "public/assets/js/charge_categories/charge_categories.js"
    )
    .js(
        "resources/assets/js/charge_categories/create-edit.js",
        "public/assets/js/charge_categories/create-edit.js"
    )
    .js(
        "resources/assets/js/charges/charges.js",
        "public/assets/js/charges/charges.js"
    )
    .js(
        "resources/assets/js/charges/create-edit.js",
        "public/assets/js/charges/create-edit.js"
    )
    .js(
        "resources/assets/js/radiology_categories/radiology_categories.js",
        "public/assets/js/radiology_categories/radiology_categories.js"
    )
    .js(
        "resources/assets/js/pathology_categories/pathology_categories.js",
        "public/assets/js/pathology_categories/pathology_categories.js"
    )
    .js(
        "resources/assets/js/radiology_tests/radiology_tests.js",
        "public/assets/js/radiology_tests/radiology_tests.js"
    )
    .js(
        "resources/assets/js/radiology_tests/create-edit.js",
        "public/assets/js/radiology_tests/create-edit.js"
    )
    .js(
        "resources/assets/js/doctor_opd_charges/doctor_opd_charges.js",
        "public/assets/js/doctor_opd_charges/doctor_opd_charges.js"
    )
    .js(
        "resources/assets/js/pathology_tests/pathology_tests.js",
        "public/assets/js/pathology_tests/pathology_tests.js"
    )
    .js(
        "resources/assets/js/pathology_tests/create-edit.js",
        "public/assets/js/pathology_tests/create-edit.js"
    )
    .js(
        "resources/assets/js/expenses/expenses.js",
        "public/assets/js/expenses/expenses.js"
    )
    .js(
        "resources/assets/js/incomes/incomes.js",
        "public/assets/js/incomes/incomes.js"
    )
    .js("resources/assets/js/web/plugin.js", "public/assets/js/web/plugin.js")
    .js("resources/assets/js/sms/sms.js", "public/assets/js/sms/sms.js")
    .js(
        "resources/assets/js/custom/phone-number-country-code.js",
        "public/assets/js/custom/phone-number-country-code.js"
    )
    .js(
        "resources/assets/js/brands/create-edit.js",
        "public/assets/js/brands/create-edit.js"
    )
    .js(
        "resources/assets/js/dashboard/dashboard.js",
        "public/assets/js/dashboard/dashboard.js"
    )
    .js("resources/assets/js/mail/mail.js", "public/assets/js/mail/mail.js")
    .js(
        "resources/assets/js/patient_diagnosis_test/create-edit.js",
        "public/assets/js/patient_diagnosis_test/create-edit.js"
    )
    .js(
        "resources/assets/js/patient_diagnosis_test/patient_diagnosis_test.js",
        "public/assets/js/patient_diagnosis_test/patient_diagnosis_test.js"
    )
    .js(
        "resources/assets/js/diagnosis_category/diagnosis_category.js",
        "public/assets/js/diagnosis_category/diagnosis_category.js"
    )
    .js(
        "resources/assets/js/sidebar_menu_search/sidebar_menu_search.js",
        "public/assets/js/sidebar_menu_search/sidebar_menu_search.js"
    )
    .js(
        "resources/assets/js/employee/patient_diagnosis_test.js",
        "public/assets/js/employee/patient_diagnosis_test.js"
    )
    .js(
        "resources/assets/js/item_categories/item_categories.js",
        "public/assets/js/item_categories/item_categories.js"
    )
    .js("resources/assets/js/roles/roles.js", "public/assets/js/roles/roles.js")
    .js("resources/assets/js/users/users.js", "public/assets/js/users/users.js")
    .js("resources/assets/js/items/items.js", "public/assets/js/items/items.js")
    .js(
        "resources/assets/js/items/create-edit.js",
        "public/assets/js/items/create-edit.js"
    )
    .js(
        "resources/assets/js/item_stocks/item_stocks.js",
        "public/assets/js/item_stocks/item_stocks.js"
    )
    .js(
        "resources/assets/js/item_stocks/create-edit.js",
        "public/assets/js/item_stocks/create-edit.js"
    )
    .js(
        "resources/assets/js/issued_items/issued_items.js",
        "public/assets/js/issued_items/issued_items.js"
    )
    .js(
        "resources/assets/js/issued_items/create.js",
        "public/assets/js/issued_items/create.js"
    )
    .js(
        "resources/assets/js/ipd_patients/ipd_patients.js",
        "public/assets/js/ipd_patients/ipd_patients.js"
    )
    .js(
        "resources/assets/js/ipd_patients/create.js",
        "public/assets/js/ipd_patients/create.js"
    )
    .js(
        "resources/assets/js/ipd_diagnosis/ipd_diagnosis.js",
        "public/assets/js/ipd_diagnosis/ipd_diagnosis.js"
    )
    .js(
        "resources/assets/js/ipd_consultant_register/ipd_consultant_register.js",
        "public/assets/js/ipd_consultant_register/ipd_consultant_register.js"
    )
    .js(
        "resources/assets/js/ipd_charges/ipd_charges.js",
        "public/assets/js/ipd_charges/ipd_charges.js"
    )
    .js(
        "resources/assets/js/ipd_prescriptions/ipd_prescriptions.js",
        "public/assets/js/ipd_prescriptions/ipd_prescriptions.js"
    )
    .js(
        "resources/assets/js/ipd_timelines/ipd_timelines.js",
        "public/assets/js/ipd_timelines/ipd_timelines.js"
    )
    .js(
        "resources/assets/js/ipd_payments/ipd_payments.js",
        "public/assets/js/ipd_payments/ipd_payments.js"
    )
    .js(
        "resources/assets/js/ipd_patients_list/ipd_patients.js",
        "public/assets/js/ipd_patients_list/ipd_patients.js"
    )
    .js(
        "resources/assets/js/ipd_patients_list/ipd_diagnosis.js",
        "public/assets/js/ipd_patients_list/ipd_diagnosis.js"
    )
    .js(
        "resources/assets/js/ipd_patients_list/ipd_consultant_register.js",
        "public/assets/js/ipd_patients_list/ipd_consultant_register.js"
    )
    .js(
        "resources/assets/js/ipd_patients_list/ipd_charges.js",
        "public/assets/js/ipd_patients_list/ipd_charges.js"
    )
    .js(
        "resources/assets/js/ipd_patients_list/ipd_prescriptions.js",
        "public/assets/js/ipd_patients_list/ipd_prescriptions.js"
    )
    .js(
        "resources/assets/js/ipd_patients_list/ipd_timelines.js",
        "public/assets/js/ipd_patients_list/ipd_timelines.js"
    )
    .js(
        "resources/assets/js/ipd_patients_list/ipd_payments.js",
        "public/assets/js/ipd_patients_list/ipd_payments.js"
    )
    .js(
        "resources/assets/js/ipd_bills/ipd_bills.js",
        "public/assets/js/ipd_bills/ipd_bills.js"
    )
    .js(
        "resources/assets/js/opd_patients/opd_patients.js",
        "public/assets/js/opd_patients/opd_patients.js"
    )
    .js(
        "resources/assets/js/opd_patients/create.js",
        "public/assets/js/opd_patients/create.js"
    )
    .js(
        "resources/assets/js/opd_patients/visits.js",
        "public/assets/js/opd_patients/visits.js"
    )
    .js(
        "resources/assets/js/ipd_patients_list/ipd_stripe_payment.js",
        "public/assets/js/ipd_patients_list/ipd_stripe_payment.js"
    )
    .js(
        "resources/assets/js/opd_diagnosis/opd_diagnosis.js",
        "public/assets/js/opd_diagnosis/opd_diagnosis.js"
    )
    .js(
        "resources/assets/js/opd_timelines/opd_timelines.js",
        "public/assets/js/opd_timelines/opd_timelines.js"
    )
    .js(
        "resources/assets/js/opd_patients_list/opd_patients.js",
        "public/assets/js/opd_patients_list/opd_patients.js"
    )
    .js(
        "resources/assets/js/opd_patients_list/visits.js",
        "public/assets/js/opd_patients_list/visits.js"
    )
    .js(
        "resources/assets/js/opd_patients_list/opd_diagnosis.js",
        "public/assets/js/opd_patients_list/opd_diagnosis.js"
    )
    .js(
        "resources/assets/js/opd_patients_list/opd_timelines.js",
        "public/assets/js/opd_patients_list/opd_timelines.js"
    )
    .js(
        "resources/assets/js/opd_tab_active/opd_tab_active.js",
        "public/assets/js/opd_tab_active/opd_tab_active.js"
    )
    .js(
        "resources/assets/js/call_logs/call_log.js",
        "public/assets/js/call_logs/call_log.js"
    )
    .js(
        "resources/assets/js/call_logs/create-edit.js",
        "public/assets/js/call_logs/create-edit.js"
    )
    .js(
        "resources/assets/js/visitors/visitor.js",
        "public/assets/js/visitors/visitor.js"
    )
    .js(
        "resources/assets/js/visitors/create-edit.js",
        "public/assets/js/visitors/create-edit.js"
    )
    .js(
        "resources/assets/js/postals/postal.js",
        "public/assets/js/postals/postal.js"
    )
    .js(
        "resources/assets/js/appointments/patient_appointment.js",
        "public/assets/js/appointments/patient_appointment.js"
    )
    .js(
        "resources/assets/js/testimonials/testimonial.js",
        "public/assets/js/testimonials/testimonial.js"
    )
    .js(
        "resources/assets/js/blood_donations/blood_donations.js",
        "public/assets/js/blood_donations/blood_donations.js"
    )
    .js(
        "resources/assets/js/blood_issues/blood_issues.js",
        "public/assets/js/blood_issues/blood_issues.js"
    )
    .js(
        "resources/assets/js/live_consultations/live_consultations.js",
        "public/assets/js/live_consultations/live_consultations.js"
    )
    .js(
        "resources/assets/js/live_consultations/live_meetings.js",
        "public/assets/js/live_consultations/live_meetings.js"
    )
    .js(
        "resources/assets/js/vaccinations/vaccinations.js",
        "public/assets/js/vaccinations/vaccinations.js"
    )
    .js(
        "resources/assets/js/vaccinated_patients/vaccinated_patients.js",
        "public/assets/js/vaccinated_patients/vaccinated_patients.js"
    )
    .js(
        "resources/assets/js/vaccinated_patients/patient_vaccinated.js",
        "public/assets/js/vaccinated_patients/patient_vaccinated.js"
    )
    .version();
