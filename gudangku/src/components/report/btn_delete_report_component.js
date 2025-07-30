import { serviceDeleteReportById } from "../../app/services/report_service.js";

export function btnDeleteReportById(reportId, renderListReport) {
    document.querySelectorAll('#btn-delete-report').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const reportName = btn.dataset.report_title
            const id = btn.dataset.id

            const modal_permission = await Swal.fire({
                title: "Are you sure!",
                text: `Are you sure want to Permentally Delete this report "${reportName}"?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Delete",
                cancelButtonText: "Cancel",
                allowOutsideClick: false
            });

            if (modal_permission.isConfirmed) {
                try {
                    const res = await serviceDeleteReportById(id)

                    const modal_res_signout = await Swal.fire({
                        title: res.status === 200 ? "Success!" : "Failed!",
                        text: res.body.message,
                        icon: res.status === 200 ? "success" : "error",
                        allowOutsideClick: false
                    });

                    if (modal_res_signout.isConfirmed) {
                        let holder = document.querySelector('#main-content')
                        holder.innerHTML = ''
                        renderListReport(1)
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
