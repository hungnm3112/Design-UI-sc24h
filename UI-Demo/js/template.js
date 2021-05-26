function createTemplate(){
    let strHTML = Connector.httpGet("https://suachualaptop24h.com/ct-chinh-sach-bao-mat.html")
    let dom = Connector.createElementFromHTML(strHTML)
    console.log(dom)
}
