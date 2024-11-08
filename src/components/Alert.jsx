import Swal from 'sweetalert2'

export default function AlertOut(callback) {
    Swal.fire({
        title: "Apakah anda yakin?",
        text: "Anda tidak akan dapat mengembalikannya!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Keluar!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Berhasil!",
                text: "Anda telah keluar dari akun.",
                icon: "success"
            }).then(() => {
                if (callback) callback(); // Jika ada callback, panggil setelah konfirmasi
            });
        }
    });
}
