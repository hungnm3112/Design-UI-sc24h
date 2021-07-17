class Connector {

    constructor() {
    }

    /************************************        DOM function              **********************************/
    // Tạo DOM bằng String Html
    static createElementFromHTML(htmlString) {
        'use strict';
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }

    /************************************        http query               **********************************/
    //httpGet
    static httpGet(theUrl) {
        'use strict';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }    

    //httpGet width Promise
    static httpGetPromise(requestURL) {
        return new Promise(function (resolve, reject) {
            let XMLHttpRequest = window.XMLHttpRequest || ActiveXObject("Microsoft.XMLHTTP");
            let req = new XMLHttpRequest();
            req.open("GET", requestURL, true);
            req.addEventListener('load', function () {
                if (req.status == 200) resolve(req.responseText);
                else if (req.status == 404) console.log(`404 : ${requestURL}`);
            });
            req.addEventListener('error', function (event) {
                reject(event);
            });
            req.send(null);
        });
    }

    /*/httpGet  asynchronous 
    static httpGetAsync(theUrl, callback) {
        'use strict';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.responseType = "text/javascript";
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    }*/

}