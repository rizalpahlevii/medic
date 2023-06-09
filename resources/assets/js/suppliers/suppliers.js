"use strict";
let tableName = "#suppliersTable";
let tbl = $("#suppliersTable").DataTable({
    processing: true,
    serverSide: true,
    order: [[1, "asc"]],
    ajax: {
        url: supplierUrl,
        data: function(data) {
            data.status = $("#filter_status")
                .find("option:selected")
                .val();
        }
    },
    columnDefs: [
        {
            targets: [0],
            orderable: false,
            searchable: false,
            className: "text-center",
            width: "5%"
        },
        {
            targets: "_all",
            defaultContent: "N/A"
        }
    ],
    columns: [
        {
            data: "DT_RowIndex",
            name: "DT_RowIndex"
        },
        {
            data: function(row) {
                let showLink = supplierUrl + "/" + row.id;
                return '<a href="' + showLink + '">' + row.name + "</a>";
            },
            name: "name"
        },

        {
            data: "phone",
            name: "phone"
        },
        {
            data: "address",
            name: "address"
        },
        {
            data: function(row) {
                let url = supplierUrl + "/" + row.id;
                let data = [
                    {
                        id: row.id,
                        url: url + "/edit"
                    }
                ];
                return prepareTemplateRender("#patientActionTemplate", data);
            },
            name: "id"
        }
    ],
    fnInitComplete: function() {
        $("#filter_status").change(function() {
            $(tableName)
                .DataTable()
                .ajax.reload(null, true);
        });
    }
});

$(document).on("click", ".delete-btn", function(event) {
    let supplierId = $(event.currentTarget).data("id");
    deleteItem(supplierUrl + "/" + supplierId, "#suppliersTable", "Supplier");
});

$(document).on("change", ".status", function(event) {
    let supplierId = $(event.currentTarget).data("id");
    updateStatus(supplierId);
});

window.updateStatus = function(id) {
    $.ajax({
        url: supplierUrl + "/" + +id + "/active-deactive",
        method: "post",
        cache: false,
        success: function(result) {
            if (result.success) {
                tbl.ajax.reload(null, false);
            }
        }
    });
};
