// Chọn tất cả các tiêu đề trong footer
const footerTitles = document.querySelectorAll('.footer-title');

footerTitles.forEach((title) => {
    title.addEventListener('click', () => {
        // Bật/tắt lớp 'open' trên tiêu đề
        title.classList.toggle('open');

        // Hiển thị hoặc ẩn danh sách tương ứng
        const list = title.nextElementSibling;
        if (list.style.display === 'block') {
            list.style.display = 'none'; // Thu gọn danh sách
        } else {
            list.style.display = 'block'; // Mở danh sách
        }
    });
});
