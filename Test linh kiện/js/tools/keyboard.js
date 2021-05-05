window.addEventListener("keydown",(event)=>{
    console.log("keydown", event.keyCode);
    let keycode = event.keyCode
    document.querySelector(`key-${keycode}`).setAttribute("style","background-color:red")
})

// // let listTr = document.querySelectorAll("table.overflow-table>tbody>tr>td>table>tbody>tr")
// // let data = []
// // for(tr of listTr){
// //     let tds = Array.from(tr.querySelectorAll("td"))
// //     key = tds[0].innerText;
// //     value = tds[1].innerText;   
// //     code = {
// //         keyName: key,
// //         codeKey: value
// //     }
// //     data.push(code)
// // }
// // console.log(data)

// let data = [
//     {
//         "keyName": "Key",
//         "codeKey": "Code"
//     },
//     {
//         "keyName": "backspace",
//         "codeKey": "8"
//     },
//     {
//         "keyName": "tab",
//         "codeKey": "9"
//     },
//     {
//         "keyName": "enter",
//         "codeKey": "13"
//     },
//     {
//         "keyName": "shift",
//         "codeKey": "16"
//     },
//     {
//         "keyName": "ctrl",
//         "codeKey": "17"
//     },
//     {
//         "keyName": "alt",
//         "codeKey": "18"
//     },
//     {
//         "keyName": "pause/break",
//         "codeKey": "19"
//     },
//     {
//         "keyName": "caps lock",
//         "codeKey": "20"
//     },
//     {
//         "keyName": "escape",
//         "codeKey": "27"
//     },
//     {
//         "keyName": "(space)",
//         "codeKey": "32"
//     },
//     {
//         "keyName": "page up",
//         "codeKey": "33"
//     },
//     {
//         "keyName": "page down",
//         "codeKey": "34"
//     },
//     {
//         "keyName": "end",
//         "codeKey": "35"
//     },
//     {
//         "keyName": "home",
//         "codeKey": "36"
//     },
//     {
//         "keyName": "left arrow",
//         "codeKey": "37"
//     },
//     {
//         "keyName": "up arrow",
//         "codeKey": "38"
//     },
//     {
//         "keyName": "right arrow",
//         "codeKey": "39"
//     },
//     {
//         "keyName": "down arrow",
//         "codeKey": "40"
//     },
//     {
//         "keyName": "insert",
//         "codeKey": "45"
//     },
//     {
//         "keyName": "delete",
//         "codeKey": "46"
//     },
//     {
//         "keyName": "0",
//         "codeKey": "48"
//     },
//     {
//         "keyName": "1",
//         "codeKey": "49"
//     },
//     {
//         "keyName": "2",
//         "codeKey": "50"
//     },
//     {
//         "keyName": "3",
//         "codeKey": "51"
//     },
//     {
//         "keyName": "4",
//         "codeKey": "52"
//     },
//     {
//         "keyName": "5",
//         "codeKey": "53"
//     },
//     {
//         "keyName": "6",
//         "codeKey": "54"
//     },
//     {
//         "keyName": "7",
//         "codeKey": "55"
//     },
//     {
//         "keyName": "8",
//         "codeKey": "56"
//     },
//     {
//         "keyName": "9",
//         "codeKey": "57"
//     },
//     {
//         "keyName": "a",
//         "codeKey": "65"
//     },
//     {
//         "keyName": "b",
//         "codeKey": "66"
//     },
//     {
//         "keyName": "c",
//         "codeKey": "67"
//     },
//     {
//         "keyName": "d",
//         "codeKey": "68"
//     },
//     {
//         "keyName": "Key",
//         "codeKey": "Code"
//     },
//     {
//         "keyName": "e",
//         "codeKey": "69"
//     },
//     {
//         "keyName": "f",
//         "codeKey": "70"
//     },
//     {
//         "keyName": "g",
//         "codeKey": "71"
//     },
//     {
//         "keyName": "h",
//         "codeKey": "72"
//     },
//     {
//         "keyName": "i",
//         "codeKey": "73"
//     },
//     {
//         "keyName": "j",
//         "codeKey": "74"
//     },
//     {
//         "keyName": "k",
//         "codeKey": "75"
//     },
//     {
//         "keyName": "l",
//         "codeKey": "76"
//     },
//     {
//         "keyName": "m",
//         "codeKey": "77"
//     },
//     {
//         "keyName": "n",
//         "codeKey": "78"
//     },
//     {
//         "keyName": "o",
//         "codeKey": "79"
//     },
//     {
//         "keyName": "p",
//         "codeKey": "80"
//     },
//     {
//         "keyName": "q",
//         "codeKey": "81"
//     },
//     {
//         "keyName": "r",
//         "codeKey": "82"
//     },
//     {
//         "keyName": "s",
//         "codeKey": "83"
//     },
//     {
//         "keyName": "t",
//         "codeKey": "84"
//     },
//     {
//         "keyName": "u",
//         "codeKey": "85"
//     },
//     {
//         "keyName": "v",
//         "codeKey": "86"
//     },
//     {
//         "keyName": "w",
//         "codeKey": "87"
//     },
//     {
//         "keyName": "x",
//         "codeKey": "88"
//     },
//     {
//         "keyName": "y",
//         "codeKey": "89"
//     },
//     {
//         "keyName": "z",
//         "codeKey": "90"
//     },
//     {
//         "keyName": "left window key",
//         "codeKey": "91"
//     },
//     {
//         "keyName": "right window key",
//         "codeKey": "92"
//     },
//     {
//         "keyName": "select key",
//         "codeKey": "93"
//     },
//     {
//         "keyName": "numpad 0",
//         "codeKey": "96"
//     },
//     {
//         "keyName": "numpad 1",
//         "codeKey": "97"
//     },
//     {
//         "keyName": "numpad 2",
//         "codeKey": "98"
//     },
//     {
//         "keyName": "numpad 3",
//         "codeKey": "99"
//     },
//     {
//         "keyName": "numpad 4",
//         "codeKey": "100"
//     },
//     {
//         "keyName": "numpad 5",
//         "codeKey": "101"
//     },
//     {
//         "keyName": "numpad 6",
//         "codeKey": "102"
//     },
//     {
//         "keyName": "numpad 7",
//         "codeKey": "103"
//     },
//     {
//         "keyName": "Key",
//         "codeKey": "Code"
//     },
//     {
//         "keyName": "numpad 8",
//         "codeKey": "104"
//     },
//     {
//         "keyName": "numpad 9",
//         "codeKey": "105"
//     },
//     {
//         "keyName": "multiply",
//         "codeKey": "106"
//     },
//     {
//         "keyName": "add",
//         "codeKey": "107"
//     },
//     {
//         "keyName": "subtract",
//         "codeKey": "109"
//     },
//     {
//         "keyName": "decimal point",
//         "codeKey": "110"
//     },
//     {
//         "keyName": "divide",
//         "codeKey": "111"
//     },
//     {
//         "keyName": "f1",
//         "codeKey": "112"
//     },
//     {
//         "keyName": "f2",
//         "codeKey": "113"
//     },
//     {
//         "keyName": "f3",
//         "codeKey": "114"
//     },
//     {
//         "keyName": "f4",
//         "codeKey": "115"
//     },
//     {
//         "keyName": "f5",
//         "codeKey": "116"
//     },
//     {
//         "keyName": "f6",
//         "codeKey": "117"
//     },
//     {
//         "keyName": "f7",
//         "codeKey": "118"
//     },
//     {
//         "keyName": "f8",
//         "codeKey": "119"
//     },
//     {
//         "keyName": "f9",
//         "codeKey": "120"
//     },
//     {
//         "keyName": "f10",
//         "codeKey": "121"
//     },
//     {
//         "keyName": "f11",
//         "codeKey": "122"
//     },
//     {
//         "keyName": "f12",
//         "codeKey": "123"
//     },
//     {
//         "keyName": "num lock",
//         "codeKey": "144"
//     },
//     {
//         "keyName": "scroll lock",
//         "codeKey": "145"
//     },
//     {
//         "keyName": "semi-colon",
//         "codeKey": "186"
//     },
//     {
//         "keyName": "equal sign",
//         "codeKey": "187"
//     },
//     {
//         "keyName": "comma",
//         "codeKey": "188"
//     },
//     {
//         "keyName": "dash",
//         "codeKey": "189"
//     },
//     {
//         "keyName": "period",
//         "codeKey": "190"
//     },
//     {
//         "keyName": "forward slash",
//         "codeKey": "191"
//     },
//     {
//         "keyName": "grave accent",
//         "codeKey": "192"
//     },
//     {
//         "keyName": "open bracket",
//         "codeKey": "219"
//     },
//     {
//         "keyName": "back slash",
//         "codeKey": "220"
//     },
//     {
//         "keyName": "close braket",
//         "codeKey": "221"
//     },
//     {
//         "keyName": "single quote",
//         "codeKey": "222"
//     }
// ]