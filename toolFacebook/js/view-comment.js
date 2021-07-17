function loadData() {
    let face = new Facebook('https://www.facebook.com/groups/suamaytinhonlinefree');
    face.createDocument()
    face.getQuestion()
    console.log(face)
}
document.addEventListener("DOMContentLoaded", () => {
    loadData()
})