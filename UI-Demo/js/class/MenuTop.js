class MenuTop {
  createMenu(ulRoot) {
    //create menu level0
    this.createLI(this.data, ulRoot);
  }

  createLI(menuJson, ulTag) {
    for (let child of menuJson) {
      let li = document.createElement("li");
      li.innerHTML = `
        <a class="dropdown-item" href="${child.href}">${child.text}</a>
      `;
      if(child.child.length>0){
        li.classList.add(`dropdown-submenu`)        
        let div = document.createElement(`div`)
        div.classList.add(`icon-toggle`)
        div.innerHTML = `<i class="fas fa-caret-right fa-sm text-white d-inline-block"></i>`
        li.appendChild(div)                
        li.appendChild(this.createUL(child.child))
      }
      ulTag.appendChild(li)
    }
  }
  createUL(menuJson) {
    let ul = document.createElement(`ul`)
    ul.classList.add(`dropdown-menu`)
    this.createLI(menuJson,ul)
    return ul
  }
  constructor() {
    //json menu top data
    this.data = [
      {
        text: "",
        href: "https://suachualaptop24h.com/",
        child: [],
      },
      {
        text: "GIỚI THIỆU",
        href: "https://suachualaptop24h.com/gioi-thieu/gioi-thieu-n6446.html",
        child: [
          {
            text: "Lời giới thiệu",
            href: "https://suachualaptop24h.com/gioi-thieu/gioi-thieu-n6446.html",
            child: [],
          },
          {
            text: "Sứ mệnh - Tầm nhìn",
            href: "https://suachualaptop24h.com/tin-cong-ty/su-menh-va-tam-nhin-cua-he-thong-sua-chua-laptop-24h-com-n7318.html",
            child: [],
          },
          {
            text: "Đội ngũ chuyên viên kỹ thuật",
            href: "https://suachualaptop24h.com/tin-cong-ty/doi-ngu-ky-thuat-vien-chuyen-nghiep-tai-he-thong-sua-chua-laptop-24h-com-n7319.html",
            child: [],
          },
          {
            text: "Hệ thống chi nhánh",
            href: "https://suachualaptop24h.com/tin-cong-ty/he-thong-chi-nhanh-cua-sua-chua-laptop-24h-com-n7317.html",
            child: [],
          },
          {
            text: "Trải nghiệm khách hàng",
            href: "https://suachualaptop24h.com/trai-nghiem-khach-hang-kn1229.html",
            child: [],
          },
          {
            text: "Về chúng tôi",
            href: "https://suachualaptop24h.com/gioi-thieu/khach-hang-noi-ve-chung-toi-n6450.html",
            child: [
              {
                text: "Việc tử tế",
                href: "https://suachualaptop24h.com/viec-tu-te-kn1224.html",
                child: [],
              },
              {
                text: "Tin công ty",
                href: "https://suachualaptop24h.com/tin-cong-ty-kn836.html",
                child: [],
              },
              {
                text: "Tuyển dụng",
                href: "https://suachualaptop24h.com/tin-tuyen-dung-kn936.html",
                child: [],
              },
              {
                text: "Thư viện",
                href: "https://suachualaptop24h.com/albums.html",
                child: [],
              },
            ],
          },
        ],
      },
      {
        text: "DỊCH VỤ",
        href: "https://suachualaptop24h.com/sua-chua.html",
        child: [
          {
            text: "Sửa laptop",
            href: "https://suachualaptop24h.com/sua-chua.html",
            child: [
              {
                text: "Sửa Laptop Acer",
                href: "https://suachualaptop24h.com/dich-vu-sua-laptop-acer/trung-tam-sua-chua-laptop-acer-va-thay-the-linh-kien-chinh-hang-uy-tin-nhat-ha-noi-copy-n6877.html",
                child: [
                  {
                    text: "Sửa Laptop Acer Aspire",
                    href: "https://suachualaptop24h.com/dich-vu-sua-laptop-acer/trung-tam-sua-chua-laptop-acer-va-thay-the-linh-kien-chinh-hang-uy-tin-nhat-ha-noi-copy-n6877.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Acer TravelMate",
                    href: "https://suachualaptop24h.com/dich-vu-sua-laptop-acer/trung-tam-sua-chua-laptop-acer-va-thay-the-linh-kien-chinh-hang-uy-tin-nhat-ha-noi-copy-n6877.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Acer Predator",
                    href: "https://suachualaptop24h.com//trung-tam-sua-chua-laptop-acer-va-thay-the-linh-kien-chinh-hang-uy-tin-nhat-ha-noi-copy-n6877.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Acer Swift",
                    href: "https://suachualaptop24h.com//trung-tam-sua-chua-laptop-acer-va-thay-the-linh-kien-chinh-hang-uy-tin-nhat-ha-noi-copy-n6877.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Acer Nitro",
                    href: "https://suachualaptop24h.com//trung-tam-sua-chua-laptop-acer-va-thay-the-linh-kien-chinh-hang-uy-tin-nhat-ha-noi-copy-n6877.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Acer Spin",
                    href: "https://suachualaptop24h.com//trung-tam-sua-chua-laptop-acer-va-thay-the-linh-kien-chinh-hang-uy-tin-nhat-ha-noi-copy-n6877.html",
                    child: [],
                  },
                ],
              },
              {
                text: "Sửa Laptop Asus",
                href: "https://suachualaptop24h.com/dich-vu-sua-laptop-asus/dich-vu-sua-laptop-asus-copy-n6880.html",
                child: [
                  {
                    text: "Sửa Laptop Asus ZenBook",
                    href: "https://suachualaptop24h.com/dich-vu-sua-laptop-asus/dich-vu-sua-laptop-asus-copy-n6880.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Asus VivoBook",
                    href: "https://suachualaptop24h.com/dich-vu-sua-laptop-asus/dich-vu-sua-laptop-asus-copy-n6880.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Asus ROG",
                    href: "https://suachualaptop24h.com/dich-vu-sua-laptop-asus/dich-vu-sua-laptop-asus-copy-n6880.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Asus Pro",
                    href: "https://suachualaptop24h.com/dich-vu-sua-laptop-asus/dich-vu-sua-laptop-asus-copy-n6880.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Asus Transformer Book",
                    href: "https://suachualaptop24h.com/dich-vu-sua-laptop-asus/dich-vu-sua-laptop-asus-copy-n6880.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Asus ChromeBook",
                    href: "https://suachualaptop24h.com/dich-vu-sua-laptop-asus/dich-vu-sua-laptop-asus-copy-n6880.html",
                    child: [],
                  },
                ],
              },
              {
                text: "Sửa Laptop Dell",
                href: "https://suachualaptop24h.com//dich-vu-sua-laptop-dell/bao-gia-chi-tiet-dich-vu-sua-chua-laptop-dell-o-ha-noi-copy-1-n6881.html",
                child: [
                  {
                    text: "Sửa Laptop Dell Inspiron",
                    href: "https://suachualaptop24h.com/tim-kiem-tin-tuc/dell-inspiron.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Dell Vostro",
                    href: "https://suachualaptop24h.com/tim-kiem-tin-tuc/dell-vostro.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Dell XPS",
                    href: "https://suachualaptop24h.com/tim-kiem-tin-tuc/dell-xps.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Dell Alienware",
                    href: "https://suachualaptop24h.com/dich-vu-sua-laptop-dell/bao-gia-chi-tiet-dich-vu-sua-chua-laptop-dell-o-ha-noi-copy-1-n6881.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Dell Latitude",
                    href: "https://suachualaptop24h.com/tim-kiem-tin-tuc/Dell-latitude.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop Dell Precision",
                    href: "https://suachualaptop24h.com/dich-vu-sua-laptop-dell/bao-gia-chi-tiet-dich-vu-sua-chua-laptop-dell-o-ha-noi-copy-1-n6881.html",
                    child: [],
                  },
                ],
              },
              {
                text: "Sửa laptop HP",
                href: "https://suachualaptop24h.com/dich-vu-sua-laptop-hp/dich-vu-sua-chua-laptop-hp-copy-n6883.html",
                child: [
                  {
                    text: "Sửa Laptop HP Elitebook",
                    href: "https://suachualaptop24h.com/dich-vu-sua-laptop-hp/dich-vu-sua-chua-laptop-hp-copy-n6883.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop HP Probook",
                    href: "https://suachualaptop24h.com/dich-vu-sua-laptop-hp/dich-vu-sua-chua-laptop-hp-copy-n6883.html",
                    child: [],
                  },
                  {
                    text: "Sửa Laptop HP Compaq Presario CQ",
                    href: "https://suachualaptop24h.com/dich-vu-sua-laptop-hp/dich-vu-sua-chua-laptop-hp-copy-n6883.html",
                    child: [],
                  },
                ],
              },
              {
                text: "Sửa Laptop Lenovo - IBM",
                href: "https://suachualaptop24h.com/dich-vu-sua-laptop-ibm/dich-vu-sua-laptop-ibm-copy-n6884.html",
                child: [],
              },
              {
                text: "Sửa Laptop Sony",
                href: "https://suachualaptop24h.com/dich-vu-sua-laptop-sony/dich-vu-sua-laptop-sony-copy-n6886.html",
                child: [],
              },
              {
                text: "Sửa Macbook",
                href: "https://suachualaptop24h.com//dich-vu-sua-laptop-apple/suachualaptop24hcom-dia-chi-sua-macbook-uy-tin-tai-ha-noi-va-tphcm-n6016.html",
                child: [],
              },
              {
                text: "Sửa Laptop Toshiba",
                href: "https://suachualaptop24h.com/dich-vu-sua-laptop-toshiba/dich-vu-sua-laptop-toshiba-n6932.html",
                child: [],
              },
              {
                text: "Cứu dữ liệu ổ cứng",
                href: "https://suachualaptop24h.com/cuu-du-lieu-o-cung-kn.html",
                child: [],
              },
              {
                text: "Services for foreigner",
                href: "https://suachualaptop24h.com/services-for-foreigners-kn.html",
                child: [],
              },
            ],
          },
          {
            text: "Sửa laptop lấy ngay 1h",
            href: "https://suachualaptop24h.com/ct-sua-laptop-lay-ngay-trong-01-gio.html",
            child: [],
          },
          {
            text: "Sửa laptop tại nhà/văn phòng",
            href: "https://suachualaptop24h.com/ct-sua-laptop-tai-nha-van-phong.html",
            child: [],
          },
          {
            text: "Bảo trì - Bảo dưỡng",
            href: "https://suachualaptop24h.com/ct-ve-sinh-bao-duong-laptop.html",
            child: [],
          },
          {
            text: "Thay thế - Nâng cấp phần cứng",
            href: "https://suachualaptop24h.com/dich-vu-sua-chua-laptop/dich-vu-sua-chua-phan-cung-laptop-uy-tin-chuyen-nghiep-n5092.html",
            child: [],
          },
          {
            text: "Cài đặt phần mềm bản quyền",
            href: "https://suachualaptop24h.com/tin-cong-ty/dich-vu-cai-dat-phan-mem-ban-quyen-n7320.html",
            child: [],
          },
          {
            text: "Cứu dữ liệu ổ cứng",
            href: "https://suachualaptop24h.com/cuu-du-lieu-o-cung/cuu-du-lieu-o-cung-ha-noi-tuyet-doi-bao-mat-nhanh-chong-chi-co-tai-sua-chua-laptop-24hcom-n5902.html",
            child: [],
          },
          {
            text: "Dịch vụ cho macbook",
            href: "https://suachualaptop24h.com/ct-sua-chua-macbook-uy-tin.html",
            child: [],
          },
        ],
      },
      {
        text: "LINH KIỆN",
        href: "https://suachualaptop24h.com/linh-kien-laptop-pc618.html",
        child: [
          {
            text: "Bàn phím laptop - Keyboard",
            href: "https://suachualaptop24h.com/ban-phim-laptop---keyboard-pc737.html",
            child: [
              {
                text: "Bàn phím Acer",
                href: "https://suachualaptop24h.com/ban-phim-laptop---keyboard-pc737/loc-ban-phim-laptop-acer.html",
                child: [],
              },
              {
                text: "Bàn phím Asus",
                href: "https://suachualaptop24h.com/ban-phim-laptop---keyboard-pc737/loc-ban-phim-laptop-asus.html",
                child: [],
              },
              {
                text: "Bàn phím Dell",
                href: "https://suachualaptop24h.com/ban-phim-laptop---keyboard-pc737/loc-ban-phim-laptop-dell.html",
                child: [],
              },
              {
                text: "Bàn phím HP",
                href: "https://suachualaptop24h.com/ban-phim-laptop---keyboard-pc737/loc-ban-phim-laptop-hp.html",
                child: [],
              },
              {
                text: "Bàn phím Lenovo IBM",
                href: "https://suachualaptop24h.com/ban-phim-laptop---keyboard-pc737/loc-ban-phim-laptop-lenovo.html",
                child: [],
              },
              {
                text: "Bàn phím MSI",
                href: "https://suachualaptop24h.com/ban-phim-laptop---keyboard-pc737/loc-ban-phim-laptop-msi.html",
                child: [],
              },
              {
                text: "Bàn phím Samsung",
                href: "https://suachualaptop24h.com/ban-phim-laptop---keyboard-pc737/loc-ban-phim-laptop-samsung.html",
                child: [],
              },
              {
                text: "Bàn phím Sony",
                href: "https://suachualaptop24h.com/ban-phim-laptop---keyboard-pc737/loc-ban-phim-laptop-sony.html",
                child: [],
              },
              {
                text: "Bàn phím Toshiba",
                href: "https://suachualaptop24h.com/ban-phim-laptop---keyboard-pc737/loc-ban-phim-laptop-toshiba.html",
                child: [],
              },
            ],
          },
          {
            text: "Ổ cứng",
            href: "https://suachualaptop24h.com/o-cung-pc736.html",
            child: [
              {
                text: "Ổ cứng HDD",
                href: "https://suachualaptop24h.com/o-cung-pc736/loc-o-cung-hdd.html",
                child: [],
              },
              {
                text: "Ổ cứng SSD SATA III",
                href: "https://suachualaptop24h.com/o-cung-pc736/loc-o-cung-ssd-25-inch.html",
                child: [],
              },
              {
                text: "SSD M2-SATA",
                href: "https://suachualaptop24h.com/o-cung-pc736/loc-o-cung-ssd-m2-sata.html",
                child: [],
              },
              {
                text: "SSD M2-PCle",
                href: "https://suachualaptop24h.com/o-cung-pc736/loc-o-cung-ssd-m2-pcie.html",
                child: [],
              },
              {
                text: "SSD mSATA",
                href: "https://suachualaptop24h.com/o-cung-pc736/loc-o-cung-ssd-msata.html",
                child: [],
              },
              {
                text: "Ổ cứng di động SSD",
                href: "https://suachualaptop24h.com/o-cung-pc736/loc-o-cung-o-cung-di-dong-ssd.html",
                child: [],
              },
              {
                text: "Ổ cứng di động HDD",
                href: "https://suachualaptop24h.com/o-cung-pc736/loc-o-cung-o-cung-di-dong-hdd.html",
                child: [],
              },
              {
                text: "Box HDD - Caddy Bay",
                href: "https://suachualaptop24h.com/o-cung-pc736/loc-o-cung-box-hdd---caddy-bay.html",
                child: [],
              },
            ],
          },
          {
            text: "Sạc Laptop - Adapter",
            href: "https://suachualaptop24h.com/sac-laptop---adapter-pc650.html",
            child: [
              {
                text: "Sạc Acer",
                href: "https://suachualaptop24h.com/sac-laptop---adapter-pc650/loc-sac-laptop-acer.html",
                child: [],
              },
              {
                text: "Sạc Asus",
                href: "https://suachualaptop24h.com/sac-laptop---adapter-pc650/loc-sac-laptop-asus.html",
                child: [],
              },
              {
                text: "Sạc Laptop Dell",
                href: "https://suachualaptop24h.com/sac-laptop---adapter-pc650/loc-sac-laptop-dell.html",
                child: [],
              },
              {
                text: "Sạc Laptop HP",
                href: "https://suachualaptop24h.com/sac-laptop---adapter-pc650/loc-sac-laptop-hp.html",
                child: [],
              },
              {
                text: "Sạc Macbook",
                href: "https://suachualaptop24h.com/sac-laptop---adapter-pc650/loc-sac-laptop-macbook.html",
                child: [],
              },
              {
                text: "Sạc Laptop Lenovo",
                href: "https://suachualaptop24h.com/sac-laptop---adapter-pc650/loc-sac-laptop-lenovo.html",
                child: [],
              },
              {
                text: "Sạc Laptop Sony",
                href: "https://suachualaptop24h.com/sac-laptop---adapter-pc650/loc-sac-laptop-sony.html",
                child: [],
              },
              {
                text: "Sạc Laptop Samsung",
                href: "https://suachualaptop24h.com/sac-laptop---adapter-pc650/loc-sac-laptop-samsung.html",
                child: [],
              },
              {
                text: "Sạc Laptop IBM",
                href: "https://suachualaptop24h.com/sac-laptop---adapter-pc650/loc-sac-laptop-ibm.html",
                child: [],
              },
              {
                text: "Sạc Laptop Toshiba",
                href: "https://suachualaptop24h.com/sac-laptop---adapter-pc650/loc-sac-laptop-toshiba.html",
                child: [],
              },
            ],
          },
          {
            text: "Loa",
            href: "https://suachualaptop24h.com/loa-laptop-pc1006.html",
            child: [],
          },
          {
            text: "Pin Laptop",
            href: "https://suachualaptop24h.com/pin-laptop-pc728.html",
            child: [
              {
                text: "Pin Laptop Acer",
                href: "https://suachualaptop24h.com/pin-laptop-pc728/loc-pin-laptop-acer.html",
                child: [],
              },
              {
                text: "Pin Laptop Asus",
                href: "https://suachualaptop24h.com/pin-laptop-pc728/loc-pin-laptop-asus.html",
                child: [],
              },
              {
                text: "Pin Laptop Dell",
                href: "https://suachualaptop24h.com/pin-laptop-pc728/loc-pin-laptop-dell.html",
                child: [],
              },
              {
                text: "Pin Laptop HP",
                href: "https://suachualaptop24h.com/pin-laptop-pc728/loc-pin-laptop-hp.html",
                child: [],
              },
              {
                text: "Pin Laptop IBM",
                href: "https://suachualaptop24h.com/pin-laptop-pc728/loc-pin-laptop-ibm.html",
                child: [],
              },
              {
                text: "Pin - Battery Macbook",
                href: "https://ap24h.vn/pin-macbook-pc399.html",
                child: [],
              },
              {
                text: "Pin Laptop Samsung",
                href: "https://suachualaptop24h.com/pin-laptop-pc728/loc-pin-laptop-samsung.html",
                child: [],
              },
              {
                text: "Pin Laptop Sony",
                href: "https://suachualaptop24h.com/pin-laptop-pc728/loc-pin-laptop-sony.html",
                child: [],
              },
              {
                text: "Pin Laptop Toshiba",
                href: "https://suachualaptop24h.com/pin-laptop-pc728/loc-pin-laptop-toshiba.html",
                child: [],
              },
              {
                text: "Pin Laptop Lenovo",
                href: "https://suachualaptop24h.com/pin-laptop-pc728/loc-pin-laptop-lenovo.html",
                child: [],
              },
            ],
          },
          {
            text: "RAM Laptop",
            href: "https://suachualaptop24h.com/ram-laptop-pc743.html",
            child: [
              {
                text: "RAM DDR4 Laptop",
                href: "https://suachualaptop24h.com/ram-laptop-pc743/loc-ram-laptop-ddr4.html",
                child: [],
              },
              {
                text: "RAM DDR3L Laptop",
                href: "https://suachualaptop24h.com/ram-laptop-pc743/loc-ram-laptop-ddr3l.html",
                child: [],
              },
              {
                text: "RAM DDR3 Laptop",
                href: "https://suachualaptop24h.com/ram-laptop-pc743/loc-ram-laptop-ddr3.html",
                child: [],
              },
            ],
          },
          {
            text: "Màn hình Laptop - LCD",
            href: "https://suachualaptop24h.com/man-hinh-laptop---lcd-pc738.html",
            child: [
              {
                text: "Màn hình Laptop Acer",
                href: "https://suachualaptop24h.com/man-hinh-laptop---lcd-pc738/loc-man-hinh-acer.html",
                child: [],
              },
              {
                text: "Màn hình Laptop Asus",
                href: "https://suachualaptop24h.com/man-hinh-laptop---lcd-pc738/loc-man-hinh-asus.html",
                child: [],
              },
              {
                text: "Màn hình Laptop Dell",
                href: "https://suachualaptop24h.com/man-hinh-laptop---lcd-pc738/loc-man-hinh-dell.html",
                child: [],
              },
              {
                text: "Màn hình HP- COMPAQ",
                href: "https://suachualaptop24h.com/man-hinh-laptop---lcd-pc738/loc-man-hinh-hp.html",
                child: [],
              },
              {
                text: "Màn hình Laptop IBM- Lenovo",
                href: "https://suachualaptop24h.com/man-hinh-laptop---lcd-pc738/loc-man-hinh-lenovo.html",
                child: [],
              },
              {
                text: "Màn hình Laptop Sony",
                href: "https://suachualaptop24h.com/man-hinh-laptop---lcd-pc738/loc-man-hinh-sony.html",
                child: [],
              },
              {
                text: "Màn hình Laptop Samsung",
                href: "https://suachualaptop24h.com/man-hinh-laptop---lcd-pc738/loc-man-hinh-samsung.html",
                child: [],
              },
              {
                text: "Màn hình Laptop Toshiba",
                href: "https://suachualaptop24h.com/man-hinh-laptop---lcd-pc738/loc-man-hinh-toshiba.html",
                child: [],
              },
              {
                text: "Màn hình - LCD Macbook",
                href: "https://suachualaptop24h.com/man-hinh-laptop---lcd-pc738/loc-man-hinh-apple.html",
                child: [],
              },
            ],
          },
          {
            text: "Card wifi",
            href: "https://suachualaptop24h.com/card-wifi---laptop-pc913.html",
            child: [
              {
                text: "Card wifi - Laptop",
                href: "https://suachualaptop24h.com//card-wifi---laptop-pc913/loc-card-wifi--laptop-laptop.html",
                child: [],
              },
              {
                text: "Card wifi - Macbook",
                href: "https://suachualaptop24h.com/card-wifi---laptop-pc913/loc-card-wifi--laptop-danh-cho-macbook.html",
                child: [],
              },
            ],
          },
          {
            text: "Mainboard",
            href: "https://suachualaptop24h.com/mainboard-pc740.html",
            child: [
              {
                text: "Mainboard Laptop Acer",
                href: "https://suachualaptop24h.com/mainboard-pc740/loc-mainboard-acer.html",
                child: [],
              },
              {
                text: "Mainboard Macbook",
                href: "https://suachualaptop24h.com/mainboard-pc740/loc-mainboard-macbook.html",
                child: [],
              },
              {
                text: "Mainboard Laptop Asus",
                href: "https://suachualaptop24h.com/mainboard-pc740/loc-mainboard-asus.html",
                child: [],
              },
              {
                text: "Mainboard Laptop Dell",
                href: "https://suachualaptop24h.com/mainboard-pc740/loc-mainboard-dell.html",
                child: [],
              },
              {
                text: "Mainboard Laptop HP",
                href: "https://suachualaptop24h.com/mainboard-pc740/loc-mainboard-hp.html",
                child: [],
              },
              {
                text: "Mainboard Laptop Lenovo",
                href: "https://suachualaptop24h.com/mainboard-pc740/loc-mainboard-lenovo.html",
                child: [],
              },
              {
                text: "Mainboard Laptop Samsung",
                href: "https://suachualaptop24h.com/mainboard-pc740/loc-mainboard-samsung.html",
                child: [],
              },
              {
                text: "Mainboard Laptop Esc",
                href: "https://suachualaptop24h.com/mainboard-pc740/loc-mainboard-esc.html",
                child: [],
              },
              {
                text: "Mainboard Laptop Sony",
                href: "https://suachualaptop24h.com/mainboard-pc740/loc-mainboard-sony.html",
                child: [],
              },
              {
                text: "Mainboard Laptop Toshiba",
                href: "https://suachualaptop24h.com/mainboard-pc740/loc-mainboard-toshiba.html",
                child: [],
              },
              {
                text: "Mainboard Laptop IBM",
                href: "https://suachualaptop24h.com/mainboard-pc740/loc-mainboard-ibm.html",
                child: [],
              },
              {
                text: "Mainboard Laptop Fujitsu",
                href: "https://suachualaptop24h.com/mainboard-pc740/loc-mainboard-fujitsu.html",
                child: [],
              },
            ],
          },
          {
            text: "Ổ đĩa quang",
            href: "https://suachualaptop24h.com/o-dia-quang-pc735.html",
            child: [],
          },
          {
            text: "Chip CPU",
            href: "https://suachualaptop24h.com/bo-vi-xu-ly---cpu-pc727.html",
            child: [],
          },
          {
            text: "Quạt tản nhiệt CPU",
            href: "https://suachualaptop24h.com/quat-cpu---fan-pc741.html",
            child: [
              {
                text: "Quạt tản nhiệt CPU Acer",
                href: "https://suachualaptop24h.com/quat-cpu---fan-pc741/loc-quat-cpu-fan-acer.html",
                child: [],
              },
              {
                text: "Quạt tản nhiệt CPU Dell",
                href: "https://suachualaptop24h.com/quat-cpu---fan-pc741/loc-quat-cpu-fan-dell.html",
                child: [],
              },
              {
                text: "Quạt tản nhiệt CPU HP",
                href: "https://suachualaptop24h.com/quat-cpu---fan-pc741/loc-quat-cpu-fan-hp.html",
                child: [],
              },
              {
                text: "Quạt tản nhiệt CPU Lenovo",
                href: "https://suachualaptop24h.com/quat-cpu---fan-pc741/loc-quat-cpu-fan-lenovo.html",
                child: [],
              },
              {
                text: "Quạt tản nhiệt CPU Samsung",
                href: "https://suachualaptop24h.com/quat-cpu---fan-pc741/loc-quat-cpu-fan-samsung.html",
                child: [],
              },
              {
                text: "Quạt tản nhiệt CPU Asus",
                href: "https://suachualaptop24h.com/quat-cpu---fan-pc741/loc-quat-cpu-fan-asus.html",
                child: [],
              },
              {
                text: "Quạt tản nhiệt CPU Sony",
                href: "https://suachualaptop24h.com/quat-cpu---fan-pc741/loc-quat-cpu-fan-sony.html",
                child: [],
              },
              {
                text: "Quạt tản nhiệt CPU Toshiba",
                href: "https://suachualaptop24h.com/quat-cpu---fan-pc741/loc-quat-cpu-fan-toshiba.html",
                child: [],
              },
              {
                text: "Quạt tản nhiệt Macbook",
                href: "https://suachualaptop24h.com/quat-cpu---fan-pc741/loc-quat-cpu-fan-macbook.html",
                child: [],
              },
            ],
          },
          {
            text: "Linh kiện thay thế Macbook",
            href: "https://ap24h.vn/macbookimac-pc382.html",
            child: [],
          },
        ],
      },
      {
        text: "PHỤ KIỆN",
        href: "https://suachualaptop24h.com/phu-kien-laptop-pc724.html",
        child: [
          {
            text: "Phần Mềm Bản Quyền",
            href: "https://suachualaptop24h.com/phan-mem-ban-quyen-pc964.html",
            child: [
              {
                text: "Microsoft Office",
                href: "https://suachualaptop24h.com/phan-mem-ban-quyen-pc964/loc-phan-mem-ban-quyen-phan-mem-van-phong.html",
                child: [],
              },
              {
                text: "Phần Mềm Diệt Virus",
                href: "https://suachualaptop24h.com/phan-mem-ban-quyen-pc964/loc-phan-mem-ban-quyen-phan-mem-anti-virus.html",
                child: [],
              },
            ],
          },
          {
            text: "Kem Tản Nhiệt",
            href: "https://suachualaptop24h.com/kem-tan-nhiet-pc739.html",
            child: [],
          },
          {
            text: "Túi Cặp Laptop",
            href: "https://suachualaptop24h.com/tui-cap-laptop-pc651.html",
            child: [],
          },
          {
            text: "Đế Tản Nhiệt Laptop",
            href: "https://suachualaptop24h.com/de-tan-nhiet-laptop-pc873.html",
            child: [],
          },
          {
            text: "Loa - USB",
            href: "https://suachualaptop24h.com/usb-pc874.html",
            child: [],
          },
          {
            text: "Chuột",
            href: "https://suachualaptop24h.com/chuotmouse-pc734.html",
            child: [],
          },
          {
            text: "Bàn phím/Keyboard",
            href: "https://suachualaptop24h.com/thiet-bi-ngoai-vi-pc1196/loc-thiet-bi-ngoai-vi-ban-phim.html",
            child: [],
          },
        ],
      },
      {
        text: "TIN TỨC",
        href: "https://suachualaptop24h.com/tin-tuc-kn1228.html",
        child: [],
      },
      {
        text: "LAPTOP",
        href: "https://ap24h.vn/laptop-pc326.html",
        child: [],
      },
      {
        text: "BÁO GIÁ",
        href: "https://suachualaptop24h.com/bao-gia-kn.html",
        child: [
          {
            text: "Báo giá thay thế linh kiện Laptop, Macbook",
            href: "https://suachualaptop24h.com/bao-gia/bao-gia-tham-khao-linh-kien-laptop-macbook-n4448.html",
            child: [],
          },
          {
            text: "Báo giá dịch vụ sửa chữa Laptop, Macbook",
            href: "https://suachualaptop24h.com/bao-gia/bao-gia-tham-khao-dich-vu-sua-laptop---macbook-n2225.html",
            child: [],
          },
          {
            text: "Báo giá dịch vụ tại nhà và văn phòng",
            href: "https://suachualaptop24h.com/bao-gia/bao-gia-dich-vu-tai-nha-va-van-phong-n3492.html",
            child: [],
          },
        ],
      },
      {
        text: "ĐẶT LỊCH",
        href: "https://suachualaptop24h.com/dat-lich-sua-chua.html",
        child: [],
      },
      {
        text: "LIÊN HỆ",
        href: "https://suachualaptop24h.com/he-thong-cua-hang.html",
        child: [
          {
            text: "Hà Nội",
            href: "https://suachualaptop24h.com/he-thong-cua-hang.html?city_id=1",
            child: [],
          },
          {
            text: "TP. Hồ Chí Minh",
            href: "https://suachualaptop24h.com/he-thong-cua-hang.html?city_id=2",
            child: [],
          },
          {
            text: "Thái Nguyên",
            href: "https://suachualaptop24h.com/he-thong-cua-hang.html?city_id=3",
            child: [],
          },
          {
            text: "Hải Phòng",
            href: "https://suachualaptop24h.com/he-thong-cua-hang.html?city_id=4",
            child: [],
          },
        ],
      },
    ];
    // query get data menu
    // let parent = document.querySelector(".div_megamenu.cls #cssmenu");
    // console.log(JSON.stringify(getChild(parent)));
    // function getChild(parent) {
    //   let arrayJSONChild = [];
    //   for (let child of parent.querySelector("ul").children) {
    //     let arrayChild = [];
    //     if (child.querySelector("ul.sub-menu")) {
    //       arrayChild = getChild(child);
    //     }
    //     let a = child.querySelector("a");
    //     let json = {
    //       text: a.innerText.trim(),
    //       href: a.getAttribute("href"),
    //       child: arrayChild,
    //     };
    //     arrayJSONChild.push(json);
    //   }
    //   return arrayJSONChild;
    // }
  }
}
