import { serviceRecoverInventoryById } from "../../app/services/inventory_service.js";

export function btnRecoverInventoryById() {
    document.querySelectorAll('#btn-recover-inventory').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const inventoryName = btn.dataset.inventory_name
            const id = btn.dataset.id

            const modal_permission = await Swal.fire({
                title: "Are you sure!",
                text: `Are you sure want to Recover this inventory "${inventoryName}"?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Recover",
                cancelButtonText: "Cancel",
                allowOutsideClick: false
            });

            if (modal_permission.isConfirmed) {
                try {
                    const res = await serviceRecoverInventoryById(id)

                    const modal_res_signout = await Swal.fire({
                        title: res.status === 200 ? "Success!" : "Failed!",
                        text: res.body.message,
                        icon: res.status === 200 ? "success" : "error",
                        allowOutsideClick: false
                    });

                    if (modal_res_signout.isConfirmed) {
                        let holder = document.querySelector('#main-content')
                        holder.innerHTML = ''
                        render(1)
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
