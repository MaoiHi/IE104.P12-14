const deleteOrderBtn = document.querySelector('.delete-order-btn');

deleteOrderBtn.addEventListener('click', () => {
    // Xóa dữ liệu giỏ hàng trong sessionStorage
    sessionStorage.removeItem('cart');

    // Hiển thị hộp thoại thông báo
    Swal.fire({
        icon: 'success', // Biểu tượng: 'success', 'error', 'warning', 'info', 'question'
        title: 'Thành công!',
        text: 'Đơn hàng đã được xóa.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6', // Màu nút
    }).then(() => {
        // Tải lại trang sau khi đóng thông báo (nếu cần)
        location.reload();
    });
});
