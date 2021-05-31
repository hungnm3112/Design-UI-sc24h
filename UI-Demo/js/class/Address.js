class Address{
    constructor(){}
    static fixAddressFooter(){        
        let listPageUrl = [
            {
                name: "Số 126 Chùa Láng - Đống Đa - Hà Nội",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-sua-laptop-uy-tin-chua-lang-n7048.html"
            },
            {
                name: "Số 5 ngõ 178 Thái Hà, Đống Đa, Hà Nội",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/trung-tam-sua-chua-laptop-24hcom-so-5-ngo-178-thai-ha-uy-tin-chat-luong-hang-dau-n5114.html"
            },
            {
                name: "Số 220 Thái Hà, Đống Đa, HN",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-sua-laptop-uy-tin-chuyen-nghiep-tai-220-thai-ha-n7442.html"
            },
            {
                name: "Số 8 Hồ Tùng Mậu, Cầu Giấy, HN",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-chi-sua-laptop-uy-tin-tai-so-8-ho-tung-mau-n7394.html"
            },
            {
                name: "Số 31 Hồ Tùng Mậu, Cầu Giấy, HN",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-sua-chua-laptop-24h-com-tai-31-ho-tung-mau-n7401.html"
            },
            {
                name: "Số 128 Lê Thanh Nghị, Bách Khoa, HN",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-sua-chua-laptop-24h-com-tai-128-le-thanh-nghi-n7409.html"
            },
            {
                name: "Số 176 Lê Thanh Nghị, Bách Khoa, HN",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-sua-chua-laptop-24h-com-tai-176-le-thanh-nghi-n7412.html"
            },
            {
                name: "Số 32K Lý Nam Đế, Hoàn Kiếm, HN",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-sua-chua-may-tinh-tai-quan-hoan-kiem-uy-tin-chat-luong-tuyet-voi-n5154.html"
            },
            {
                name: "Số 206 Lương Thế Vinh, Thanh Xuân, HN",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-sua-chua-laptop-24h-com-tai-206-luong-the-vinh-n7426.html"
            },
            {
                name: "Số 284 Quang Trung, Hà Đông, HN",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-sua-laptop-uy-tin-tai-284-quang-trung-ha-dong-n7438.html"
            },
            {
                name: "Số 417 Cổ Nhuế, Từ Liêm, HN",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-sua-laptop-uy-tin-tai-417-co-nhue-n4597.html"
            },
            {
                name: "Số 11 Ngã tư Nhổn, Từ Liêm, HN",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-sua-laptop-uy-tin-tai-so-11-pho-nhon-n7434.html"
            },
            {
                name: "Số 297 Lương Ngọc Quyến, TP Thái Nguyên",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-sua-laptop-uy-tin-nhat-tai-thai-nguyen-n6937.html"
            },
            {
                name: "Số 87 Quán Nam, Lê Chân, TP. Hải Phòng",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-sua-laptop-uy-tin-tai-hai-phong-n7435.html"
            },
            {
                name: "Số 283/45 CMT8, Phường 12, Quận 10, TP.HCM",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/sua-chua-laptop-duong-cmt8-uy-tin-tai-tp-hcm-suachualaptop24hcom-n5958.html"
            },
            {
                name: "Số 222 Nguyễn Thái Sơn, P.4, Q. Gò Vấp, TP.HCM",
                url: "https://suachualaptop24h.com/tim-co-so-sua-chua-laptop-24hcom/dia-chi-sua-chua-laptop-24h-com-tai-quan-go-vap-n7439.html"
            },
        ]

        let items = document.querySelectorAll(
            "footer>div.container>div.all_showroom>div.address_content>div.item"
        );
        //console.log(items)
        let arrItems = Array.from(items);
        let i = 0;
        for (let item of arrItems) {
            let aTag = item.querySelector("div.name>a");
            aTag.parentNode.setAttribute("style", "display:none");
            aTag.setAttribute("style","color:black")
            let phone = item.querySelector("div.info>li.phone")
            let svg = phone.querySelector('svg')
            aTag.innerHTML = listPageUrl[ i ].name
            aTag.href = listPageUrl[ i ].url
            phone.innerHTML = ``;
            phone.appendChild(svg)
            phone.appendChild(aTag)
            i++
        }    
    }
}

