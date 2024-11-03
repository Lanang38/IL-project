// AlertOut.js
import Swal from 'sweetalert2'

export default function AlertOut(callback) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log out!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Logged out!",
                text: "You have been logged out.",
                icon: "success"
            }).then(() => {
                if (callback) callback(); // Jika ada callback, panggil setelah konfirmasi
            });
        }
    });
}
