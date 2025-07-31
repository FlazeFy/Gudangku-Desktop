import { serviceRemoveReportItemByReportItemId } from "../../app/services/report_service.js";

export function btnRemoveReportItemByItemId(reportId, renderReportDetailByReportId) {
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const itemName = btn.dataset.item_name
            const reportName = btn.dataset.report_title
            const id = btn.dataset.id

            const modal_permission = await Swal.fire({
                title: "Are you sure!",
                text: `Remove this item "${itemName}" from report "${reportName}"?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Remove",
                cancelButtonText: "Cancel",
                allowOutsideClick: false
            });

            if (modal_permission.isConfirmed) {
                try {
                    const res = await serviceRemoveReportItemByReportItemId(id)

                    const modal_res_signout = await Swal.fire({
                        title: res.status === 200 ? "Success!" : "Failed!",
                        text: res.body.message,
                        icon: res.status === 200 ? "success" : "error",
                        allowOutsideClick: false
                    });

                    if (modal_res_signout.isConfirmed) {
                        renderReportDetailByReportId(reportId)
                    }
                } catch (err) {
                    Swal.fire({
                        title: "Error!",
                        text: "Something went wrong",
                        icon: "error"
                    });
                }
            }
        })
    })
}
