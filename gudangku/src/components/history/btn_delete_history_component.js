import { removeHistoryById } from "../../app/services/history_service.js"

export function btnDeleteHistoryById(render,page) {
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const historyType = btn.dataset.history_type
            const historyContext = btn.dataset.history_context
            const id = btn.dataset.id

            const modal_permission = await Swal.fire({
                title: "Are you sure!",
                text: `Delete this history about ${historyType} - ${historyContext}?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Delete",
                cancelButtonText: "Cancel",
                allowOutsideClick: false
            });

            if (modal_permission.isConfirmed) {
                try {
                    const res = await removeHistoryById(id)

                    const modal_res_signout = await Swal.fire({
                        title: res.status === 200 ? "Success!" : "Failed!",
                        text: res.body.message,
                        icon: res.status === 200 ? "success" : "error",
                        allowOutsideClick: false
                    });

                    if (modal_res_signout.isConfirmed) {
                        render(page)
                    }
                } catch (err) {
                    Swal.fire({
                        title: "Error!",
                        text: err,
                        icon: "error"
                    });
                }
            }
        })
    })
}
