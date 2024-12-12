const deleteOrderBtn = document.querySelector('.delete-order-btn');
const orderBtn = document.querySelector('.order-button');

deleteOrderBtn.addEventListener('click', () => {
    
    sessionStorage.removeItem('cart');
    Swal.fire({
        icon: 'success', 
        title: 'Thành công!',
        text: 'Đơn hàng đã được xóa.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6', 
    }).then(() => {
        location.reload();
    });
});

orderBtn.addEventListener('click', () =>{
    Swal.fire({
        icon: 'success', 
        title: 'Thành công!',
        text: 'Đặt hàng thành công.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6', 
    }).then(() => {
        location.reload();
    });
});