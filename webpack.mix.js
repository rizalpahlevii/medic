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
        "resources/assets/js/patients/patients.js",
        "public/assets/js/patients/patients.js"
    )
    .js(
        "resources/assets/js/medics/medics.js",
        "public/assets/js/medics/medics.js"
    )
    .js(
        "resources/assets/js/product_categories/product_categories.js",
        "public/assets/js/product_categories/product_categories.js"
    )
    .js(
        "resources/assets/js/product_brands/product_brands.js",
        "public/assets/js/product_brands/product_brands.js"
    )
    .js(
        "resources/assets/js/products/products.js",
        "public/assets/js/products/products.js"
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
        "resources/assets/js/user_profile/user_profile.js",
        "public/assets/js/user_profile/user_profile.js"
    )

    .js(
        "resources/assets/js/settings/setting.js",
        "public/assets/js/settings/setting.js"
    )

    .js(
        "resources/assets/js/accounts/accounts.js",
        "public/assets/js/accounts/accounts.js"
    )

    .js(
        "resources/assets/js/payments/payments.js",
        "public/assets/js/payments/payments.js"
    )
    .js(
        "resources/assets/js/services/generals/generals.js",
        "public/assets/js/services/generals/generals.js"
    )
    .js(
        "resources/assets/js/services/family_plannings/family_plannings.js",
        "public/assets/js/services/family_plannings/family_plannings.js"
    )
    .js(
        "resources/assets/js/services/pregnancies/pregnancies.js",
        "public/assets/js/services/pregnancies/pregnancies.js"
    )
    .js(
        "resources/assets/js/services/laboratories/laboratories.js",
        "public/assets/js/services/laboratories/laboratories.js"
    )
    .js("resources/assets/js/roles/roles.js", "public/assets/js/roles/roles.js")
    .js("resources/assets/js/users/users.js", "public/assets/js/users/users.js")

    .version();
