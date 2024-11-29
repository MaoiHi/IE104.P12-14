const products = [
    {
        id: 1,
        name: "Cà Phê Sữa Hạnh Nhân Kem Cheese",
        price: "59.000đ",
        description: "Cà phê espresso sữa hạnh nhân mượt mà sánh đôi cùng kem cheese béo mịn, êm gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1732197236_caphe_400x400.jpg",
        quantity: 1, // Số lượng mặc định
        note: "" // Ghi chú mặc định
    },
    {
        id: 2,
        name: "Trà Xanh Latte Sữa Hạnh Nhân",
        price: "59.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1732197215_traxanh_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 3,
        name: "Trà Xanh Latte Sữa Hạnh Nhân (Nóng)",
        price: "55.000đ",
        description: "Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân béo bùi, ấm áp gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé!",
        image: "https://minio.thecoffeehouse.com/image/admin/1732197222_traxanhnong_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 4,
        name: "Oolong Sữa Hạnh Nhân Trân Châu Hoàng Kim",
        price: "59.000đ",
        description: "Oolong Tứ Quý sữa hạnh nhân đượm hương sánh đôi cùng Trân Châu Hoàng Kim dẻo mềm, hấp dẫn gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé!",
        image: "https://minio.thecoffeehouse.com/image/admin/1732197202_trasua_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 5,
        name: "Oolong Sữa Hạnh Nhân (Nóng)",
        price: "55.000đ",
        description: "Oolong Tứ Quý đượm hương sánh đôi cùng sữa hạnh nhân béo bùi, thơm ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé!",
        image: "https://minio.thecoffeehouse.com/image/admin/1732197208_trasuanong_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 6,
        name: "Choco Sữa Hạnh Nhân Kem Cheese",
        price: "59.000đ",
        description: "Cacao sữa hạnh nhân thơm bùi sánh đôi cùng kem cheese beo béo, ngọt ngào gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé!",
        image: "https://minio.thecoffeehouse.com/image/admin/1732197230_socola_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 7,
        name: "Bơ Sữa Phô Mai",
        price: "55.000đ",
        description: "Bơ sáp Đắk Lắk dẻo quẹo hòa quyện lớp foam phô mai tươi mềm mịn. Thêm chút Trà Sữa Oolong Tứ Quý đượm hương càng dậy vị trái cây tươi mát. Khuấy đều để thưởng trọn vị sảng khoái.",
        image: "https://minio.thecoffeehouse.com/image/admin/1719929441_bo-sua-pmt_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 8,
        name: "Dâu Phô Mai",
        price: "55.000đ",
        description: "TDâu tây Đà Lạt chín mọng hòa quyện lớp foam phô mai tươi mềm mịn. Thêm chút Trà Oolong Tứ Quý đượm hương và thạch kim quất mềm tan càng dậy vị trái cây tươi mát. Khuấy đều để thưởng trọn vị sảng khoái.",
        image: "https://minio.thecoffeehouse.com/image/admin/1717387639_dau-pho-mai_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 9,
        name: "Mận Phô Mai",
        price: "55.000đ",
        description: "Mận hậu đặc sản Mộc Châu đỏ thơm căng mọng, hòa quyện lớp foam phô mai tươi mềm mịn. Thêm chút Trà Oolong Tứ Quý đượm hương và thạch kim quất mềm tan càng dậy vị trái cây tươi mát. Khuấy đều để thưởng trọn vị sảng khoái.",
        image: "https://minio.thecoffeehouse.com/image/admin/1717387385_man-pho-mai_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 10,
        name: "Mãng Cầu Phô Mai",
        price: "55.000đ",
        description: "Mãng cầu Nam Bộ chín tự nhiên đậm vị, hòa quyện lớp foam phô mai tươi mềm mịn. Thêm chút Trà Xanh Tây Bắc êm dịu và thạch kim quất mềm tan càng dậy vị trái cây tươi mát. Khuấy đều để thưởng trọn vị sảng khoái.",
        image: "https://minio.thecoffeehouse.com/image/admin/1717387907_man-cau-pho-mai_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 11,
        name: "Nho Phô Mai",
        price: "55.000đ",
        description: "Nho xanh vào vụ mọng nước ngọt thơm, hòa quyện lớp foam phô mai tươi mềm mịn. Thêm chút Trà Xanh Tây Bắc êm dịu và thạch kim quất mềm tan càng dậy vị trái cây tươi mát. Khuấy đều để thưởng trọn vị sảng khoái.",
        image: "https://minio.thecoffeehouse.com/image/admin/1717387602_nho-pho-mai_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 12,
        name: "Trà Đào Cam Sả - Nóng",
        price: "59.000đ",
        description: "Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.",
        image: "https://minio.thecoffeehouse.com/image/admin/tdcs-nong_288997_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 13,
        name: "Oolong Tứ Qúy Sen (Nóng)",
        price: "45.000đ",
        description: "Nền trà oolong hảo hạng kết hợp cùng hạt sen tươi, bùi bùi thơm ngon. Trà hạt sen là thức uống thanh mát, nhẹ nhàng phù hợp cho cả buổi sáng và chiều tối.",
        image: "https://minio.thecoffeehouse.com/image/admin/tra-sen-nong_025153_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 14,
        name: "Oolong Tứ Qúy Dâu Trân Châu",
        price: "49.000đ",
        description: "Sảng khoái với vị dâu chín mọng chua thanh. Nền trà Oolong Tứ Quý đậm hương, ngọt thanh hậu vị. Thêm tận hưởng với trân châu trắng giòn dai.",
        image: "https://minio.thecoffeehouse.com/image/admin/1731662581_oolongdau_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 15,
        name: "Trà Đào Cam Sả - Đá",
        price: "49.000đ",
        description: "Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.",
        image: "https://minio.thecoffeehouse.com/image/admin/1669736819_tra-dao-cam-sa-da_400x400.png",
        quantity: 1,
        note: ""
    },
    {
        id: 16,
        name: "Hi-Tea Yuzu Trân Châu",
        price: "59.000đ",
        description: "Không chỉ nổi bật với sắc đỏ đặc trưng từ trà hoa Hibiscus, Hi-Tea Yuzu còn gây ấn tượng với topping Yuzu (quýt Nhật) lạ miệng, kết hợp cùng trân châu trắng dai giòn sần sật, nhai vui vui.",
        image: "https://minio.thecoffeehouse.com/image/admin/1669736859_hi-tea-yuzu-tran-chau_400x400.png",
        quantity: 1,
        note: ""
    },
    {
        id: 17,
        name: "Trà Sữa Oolong Nướng (Nóng)",
        price: "55.000đ",
        description: "Đậm đà chuẩn gu và ấm nóng - bởi lớp trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm ấm áp, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.",
        image: "https://minio.thecoffeehouse.com/image/admin/oolong-nuong-nong_948581_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 18,
        name: "Hông Trà Sữa Nóng",
        price: "55.000đ",
        description: "Trà đen nguyên lá âm ấm dịu nhẹ, quyện cùng lớp sữa thơm béo khó lẫn - hương vị ấm áp chuẩn gu trà, cho từng ngụm nhẹ nhàng, ngọt dịu lưu luyến mãi nơi cuống họng.",
        image: "https://minio.thecoffeehouse.com/image/admin/hong-tra-sua-nong_941687_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 19,
        name: "Trà Sữa Oolong Tứ Qúy Bơ",
        price: "45.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1723623433_tra-sua-bo_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 20,
        name: "Trà Sữa Oolong Nướng Trân Châu",
        price: "45.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1669736878_tra-sua-oolong-nuong-tran-chau_400x400.png",
        quantity: 1,
        note: ""
    },
    {
        id: 21,
        name: "Trà Sữa Oolong Tứ Qúy Sương Sáo",
        price: "45.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1719911220_oolongtuquy-suongsao_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 22,
        name: "Trà Xanh Latte (Nóng)",
        price: "49.000đ",
        description: "Trà Xanh Latte (Nóng) là phiên bản rõ vị trà nhất. Nhấp một ngụm, bạn chạm ngay vị trà xanh Tây Bắc chát nhẹ hoà cùng sữa nguyên kem thơm béo, đọng lại hậu vị ngọt ngào, êm dịu. Không chỉ là thức uống tốt cho sức khoẻ, Trà Xanh Latte (Nóng) còn là cái ôm ấm áp của đồng bào Tây Bắc gửi cho người miền xuôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1699287050_tra-xanh-latte-nong_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 23,
        name: "Chocolate Nóng",
        price: "55.000đ",
        description: "Bột chocolate nguyên chất hoà cùng sữa tươi béo ngậy. Vị ngọt tự nhiên, không gắt cổ, để lại một chút đắng nhẹ, cay cay trên đầu lưỡi.",
        image: "https://minio.thecoffeehouse.com/image/admin/chocolatenong_949029_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 24,
        name: "Trà Xanh Đường Đen",
        price: "59.000đ",
        description: "Trà Xanh Đường Đen với hiệu ứng phân tầng đẹp mắt, như phác hoạ núi đồi Tây Bắc bảng lảng trong sương mây, thấp thoáng những nương chè xanh ngát. Từng ngụm là sự hài hoà từ trà xanh đậm đà, đường đen ngọt ngào, sữa tươi thơm béo. Khuấy đều trước khi dùng, để thưởng thức đúng vị",
        image: "https://minio.thecoffeehouse.com/image/admin/1699287058_tra-xanh-duong-den_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 25,
        name: "Trà Xanh Latte Đậm Vị",
        price: "45.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1726647758_tra-xanh-latte-dam-vi_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 26,
        name: "Trà Xanh Latte",
        price: "45.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1726647801_tra-xanh-latte-1_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 27,
        name: "Frosty Trà Xanh",
        price: "59.000đ",
        description: "Đá Xay Frosty Trà Xanh như lời mời mộc mạc, ghé thăm Tây Bắc vào những ngày tiết trời se lạnh, núi đèo mây phủ. Vị chát dịu, ngọt thanh của trà xanh Tây Bắc kết hợp đá xay sánh mịn, whipping cream bồng bềnh và bột trà xanh trên cùng thêm đậm vị. Đây không chỉ là thức uống mát lạnh bật mood, mà còn tốt cho sức khoẻ nhờ giàu vitamin và các chất chống oxy hoá.",
        image: "https://minio.thecoffeehouse.com/image/admin/1699287066_frosty-tra-xanh_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 28,
        name: "Frosty Choco Chip",
        price: "59.000đ",
        description: "Đá Xay Frosty Choco Chip, thử là đã! Lớp whipping cream bồng bềnh, beo béo lại có thêm bột sô cô la và sô cô la chip trên cùng. Gấp đôi vị ngon với sô cô la thật xay với đá sánh mịn, đậm đà đến tận ngụm cuối cùng.",
        image: "https://minio.thecoffeehouse.com/image/admin/1697441952_choco-chip_400x400.png",
        quantity: 1,
        note: ""
    },
    {
        id: 29,
        name: "Frosty Phin-Gato",
        price: "55.000đ",
        description: "Đá Xay Frosty Phin-Gato là lựa chọn không thể bỏ lỡ cho tín đồ cà phê. Cà phê nguyên chất pha phin truyền thống, thơm đậm đà, đắng mượt mà, quyện cùng kem sữa béo ngậy và đá xay mát lạnh. Nhân đôi vị cà phê nhờ có thêm thạch cà phê đậm đà, giòn dai. Thức uống khơi ngay sự tỉnh táo tức thì.",
        image: "https://minio.thecoffeehouse.com/image/admin/1697441914_phin-gato_400x400.png",
        quantity: 1,
        note: ""
    },
    {
        id: 30,
        name: "Frosty Bánh Kem Dâu",
        price: "59.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1697441945_banh-kem-dau_400x400.png",
        quantity: 1,
        note: ""
    },
    {
        id: 31,
        name: "Frosty Caramel Arabica",
        price: "45.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1697441934_caramel-arabica_400x400.png",
        quantity: 1,
        note: ""
    },
    {
        id: 32,
        name: "Frosty Cà Phê Đường Đen",
        price: "45.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1697441939_ca-phe-duong-den_400x400.png",
        quantity: 1,
        note: ""
    },
    {
        id: 33,
        name: "Cà Phê Đen Nóng",
        price: "39.000đ",
        description: "Không ngọt ngào như Bạc sỉu hay Cà phê sữa, Cà phê đen mang trong mình phong vị trầm lắng, thi vị hơn. Người ta thường phải ngồi rất lâu mới cảm nhận được hết hương thơm ngào ngạt, phảng phất mùi cacao và cái đắng mượt mà trôi tuột xuống vòm họng.",
        image: "https://minio.thecoffeehouse.com/image/admin/1639377816_ca-phe-den-nong_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 34,
        name: "Cà Phê Sữa Nóng",
        price: "39.000đ",
        description: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị",
        image: "https://minio.thecoffeehouse.com/image/admin/1639377770_cfsua-nong_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 35,
        name: "Espresso Nóng",
        price: "45.000đ",
        description: "Một tách Espresso nguyên bản được bắt đầu bởi những hạt Arabica chất lượng, phối trộn với tỉ lệ cân đối hạt Robusta, cho ra vị ngọt caramel, vị chua dịu và sánh đặc.",
        image: "https://minio.thecoffeehouse.com/image/admin/espressoNong_612688_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 36,
        name: "Latte Nóng",
        price: "55.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/latte_851143_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 37,
        name: "Cappuccino Nóng",
        price: "55.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/cappuccino_621532_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 38,
        name: "The Coffee Delights Sữa Đá",
        price: "45.000đ",
        description: "Thức uống giúp tỉnh táo tức thì để bắt đầu ngày mới thật hứng khởi. Không đắng khét như cà phê truyền thống, The Coffee House Sữa Đá mang hương vị hài hoà đầy lôi cuốn. Là sự đậm đà của 100% cà phê Arabica Cầu Đất rang vừa tới, biến tấu tinh tế với sữa đặc và kem sữa ngọt ngào cực quyến rũ. Càng hấp dẫn hơn với topping thạch 100% cà phê nguyên chất giúp giữ trọn vị ngon đến ngụm cuối cùng.",
        image: "https://minio.thecoffeehouse.com/image/admin/1675355354_bg-tch-sua-da-no_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 39,
        name: "Bánh Mì Que Bò Nấm Xốt Bơ",
        price: "22.000đ",
        description: "Bò mềm thấm vị, nấm đông cô dai giòn. Rộp rộp vỏ bánh giòn rụm nóng hổi, thêm ngấu nghiến với xốt bơ béo bùi ngon số dzách.",
        image: "https://minio.thecoffeehouse.com/image/admin/1732089423_bmq-bo_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 40,
        name: "Bánh Mì Que Chà Bông Phô Mai Bơ Cay",
        price: "19.000đ",
        description: "Chà bông tơi mịn đẫm phô mai Mozzarella kéo sợi, cay hít hà. Rộp rộp vỏ bánh giòn rụm nóng hổi, thêm ngấu nghiến với xốt bơ đậm đà.",
        image: "https://minio.thecoffeehouse.com/image/admin/1732089442_bmq-chabong_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 41,
        name: "Bánh Mì Que Pate Cột Đèn",
        price: "19.000đ",
        description: "Aiiiii Pate Cột Đèn đậm đà thơm béo hônggg? Rộp rộp vỏ bánh nóng hổi giòn rụm, thêm ngấu nghiến với pate cùng xốt bơ trứng đẫm vị.",
        image: "https://minio.thecoffeehouse.com/image/admin/1732089405_bmq-cotden_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 42,
        name: "Butter Croissant",
        price: "29.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1698736606_butter-croissant_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 43,
        name: "Croissant Trứng Muối",
        price: "39.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/croissant-trung-muoi_880850_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 44,
        name: "Chà Bông Phô Mai",
        price: "39.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1669736993_cha-bong-pho-mai_400x400.png",
        quantity: 1,
        note: ""
    },
    {
        id: 45,
        name: "Caramel Macchiato Nóng",
        price: "55.000đ",
        description: "TCaramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.",
        image: "https://minio.thecoffeehouse.com/image/admin/caramelmacchiatonong_168039_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 46,
        name: "Americano Nóng",
        price: "49.000đ",
        description: "Americano được pha chế bằng cách pha thêm nước với tỷ lệ nhất định vào tách cà phê Espresso, từ đó mang lại hương vị nhẹ nhàng và giữ trọn được mùi hương cà phê đặc trưng.",
        image: "https://minio.thecoffeehouse.com/image/admin/1636647328_arme-nong_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 47,
        name: "Oolong Tứ Qúy Sen (Nóng)",
        price: "59.000đ",
        description: "Nền trà oolong hảo hạng kết hợp cùng hạt sen tươi, bùi bùi thơm ngon. Trà hạt sen là thức uống thanh mát, nhẹ nhàng phù hợp cho cả buổi sáng và chiều tối.",
        image: "https://minio.thecoffeehouse.com/image/admin/tra-sen-nong_025153_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 48,
        name: "Latte Nóng",
        price: "55.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/latte_851143_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 49,
        name: "Trà Đào Cam Sả Nóng",
        price: "49.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/tdcs-nong_288997_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 50,
        name: "Chocolate Nóng",
        price: "55.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/chocolatenong_949029_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 51,
        name: "Mochi Kem Trà Sữa Trân Châu",
        price: "19.000đ",
        description: "Ngoài dẻo thơm, trong mát lạnh với kem vị trà sữa. Một cắn là say đắm, hai cắn là ngất ngây với trân châu giòn dai. *Bánh cần được bảo quản mát và dùng ngon nhất trong vòng 2 giờ sau khi nhận hàng.",
        image: "https://minio.thecoffeehouse.com/image/admin/1732089474_mochi-trasua_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 52,
        name: "Mousse Cà Phê CloudFee Dừa",
        price: "45.000đ",
        description: "Thưởng thức hương vị êm mượt như mây của Cà Phê CloudFee Dừa trứ danh trong phiên bản bánh. Cà phê thanh nhẹ kết hợp cùng kem dừa béo thơm.",
        image: "https://minio.thecoffeehouse.com/image/admin/1711964586_hcm-mousse-ca-phe-cloudfee-dua_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 53,
        name: "Mochi Kem Phúc Bồn Tử",
        price: "19.000đ",
        description: "Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân phúc bồn tử ngọt ngào. Gọi 1 chiếc Mochi cho ngày thật tươi mát.",
        image: "https://minio.thecoffeehouse.com/image/admin/1643102019_mochi-phucbontu_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 54,
        name: "Mochi Kem Việt Quốc",
        price: "19.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1643102034_mochi-vietquat_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 55,
        name: "Mochi Kem Chocolate",
        price: "19.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1655348107_mochi-choco_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 56,
        name: "Mousse Gấu Chocolate",
        price: "19.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1638170067_gau_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 57,
        name: "Mít Sấy",
        price: "20.000đ",
        description: "Mít sấy khô vàng ươm, giòn rụm, giữ nguyên được vị ngọt lịm của mít tươi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1714704891_mit-say-666228-400x400_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 58,
        name: "Mousse Tiramisu",
        price: "35.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1638170137_tiramisu_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 59,
        name: "Trân Châu Hoàng Kim",
        price: "10.000đ",
        description: "Trân châu hoàng kim",
        image: "https://minio.thecoffeehouse.com/image/admin/1732090577_tranchauhoangkim_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 60,
        name: "Foam Phô Mai",
        price: "10.000đ",
        description: "",
        image: "https://minio.thecoffeehouse.com/image/admin/1729492295_kem-pho-mai-macchiato_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 61,
        name: "Thạch Kim Quốc",
        price: "10.000đ",
        description: "",
        image: "https://minio.thecoffeehouse.com/image/admin/1729492274_thach-kim-quat_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 62,
        name: "Thạch Sương Sáo",
        price: "10.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1729492267_thach-suong-sao_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 63,
        name: "Trân Châu Trắng",
        price: "10.000đ",
        description: "",
        image: "https://minio.thecoffeehouse.com/image/admin/1699846678_tran-chau-trang_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 64,
        name: "Hạt Sen",
        price: "10.000đ",
        description: "",
        image: "https://minio.thecoffeehouse.com/image/admin/1699847107_hat-sen_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 65,
        name: "Thạch Cà Phê",
        price: "10.000đ",
        description: "Trà Xanh Latte Sữa Hạnh Nhân Trà Xanh Tây Bắc đậm vị sánh đôi cùng sữa hạnh nhân thơm bùi, ngon gấp bội. Mùa hội, HẠNH phúc NHÂN đôi khi thưởng thức bên người thương bạn nhé! *Khuấy đều để vị ngon nhân đôi.",
        image: "https://minio.thecoffeehouse.com/image/admin/1699846421_thach-ca-phe_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 66,
        name: "Đào Miếng",
        price: "10.000đ",
        description: "",
        image: "https://minio.thecoffeehouse.com/image/admin/1699852028_ao-mieng_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 67,
        name: "Cà Phê Sữa Đá Hòa Tan Túi 25x22G",
        price: "127.000đ",
        description: "",
        image: "https://minio.thecoffeehouse.com/image/admin/1714646385_1639648355-ca-phe-sua-da-hoa-tan-tui-25x22gr-400x400_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 68,
        name: "Cà Phê Rang Xay Original 1 250G",
        price: "82.000đ",
        description: "",
        image: "https://minio.thecoffeehouse.com/image/admin/1714646758_1639648297-ca-phe-rang-xay-original-1-250gr-400x400_400x400.jpg",
        quantity: 1,
        note: ""
    },
    {
        id: 69,
        name: "Cà Phê Sữa Đá Hòa Tan (10 gói x 22g)",
        price: "53.000đ",
        description: "",
        image: "https://minio.thecoffeehouse.com/image/admin/1714646465_cpsd-3in1-971575-400x400-1_400x400.jpg",
        quantity: 1,
        note: ""
    },


];
