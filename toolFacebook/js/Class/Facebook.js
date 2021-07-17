class Facebook{
    constructor (url) {
        this.url = url;
        this.lastQuestion = null;
        this.listQ = []
        this.doc = null;
    }
    getQuestion() {            
        let imgQArray = Array.from(document.querySelectorAll('img[src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/glD3OdG7Tak.png"]'))
        let isFirst = true;
        for (let imgQ of imgQArray) {            
            let parent = imgQ;
            for (let i = 0; i < 9; i++){
                parent =  parent.parentElement
            }            
            let divQuest = parent.querySelector('[data-ad-preview="message"]')
            console.log(divQuest.innerText)
            if (divQuest.innerText === this.lastQuestion) {
                break;
            } else if(isFirst){
                isFirst = false;
                this.lastQuestion = divQuest.innerText;
            }            
            let numAnswer = parent.querySelector('div[aria-expanded="true"][role="button"][tabindex="0"]>span[dir="auto"]')
            if (divQuest === null) {
                divQuest = parent.querySelector('.linoseic')
            }
            let question = new Question(divQuest.innerText, numAnswer.innerText)
            this.listQ.push(question)
        }        
    }
    createDocument() {
        let str = Connector.httpGet(this.url)        
        document.getElementById(`data-hidden`).innerHTML = str
    }
}