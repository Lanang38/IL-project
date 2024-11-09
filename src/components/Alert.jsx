import Swal from 'sweetalert2'

export default function AlertOut(callback) {
    Swal.fire({
        title: "Apakah anda ingin keluar?",
        text: "Anda akan kembali ke halaman Login!",
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

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success ",
        cancelButton: "btn btn-danger",
        
    },
    buttonsStyling: true // Ensure button styling is enabled
});

export function AlertDelete(callback) {
    swalWithBootstrapButtons.fire({
        title: "Apakah Anda yakin?",
        text: "Data yang dihapus tidak dapat dikembalikan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, hapus!",
        cancelButtonText: "Tidak, batalkan!",
        reverseButtons: true // Ensures the confirm button is on the left and cancel on the right
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Dihapus!",
                text: "Data telah berhasil dihapus.",
                icon: "success"
            }).then(() => {
                if (callback) callback(); // If there is a callback, call it after confirmation
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
                title: "Dibatalkan",
                text: "Data Anda tetap aman.",
                icon: "error"
            });
        }
    });
}

export function AlertSimpan() {
    Swal.fire({
        position: "center",  // Centering the alert
        icon: "success",
        title: "Data berhasil disimpan",
        showConfirmButton: false,
        timer: 1500  // The alert will close after 1.5 seconds
    });
}

export function AlertEdit(callback) {
    Swal.fire({
        title: "Apakah Anda Akan Menimpan Perubahan?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Simpan",
        denyButtonText: "Jangan simpan"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Disimpan!", "", "success").then(() => {
                if (callback) callback(); // Execute callback after confirmation if provided
            });
        } else if (result.isDenied) {
            Swal.fire("Perubahan Tidak Disimpan", "", "info");
        }
    });
}