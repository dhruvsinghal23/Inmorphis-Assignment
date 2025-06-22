// 1
//     const today = new Date()
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     console.log('Today is: ' + days[today.getDay()])

//     let hour = today.getHours()
//     const minute = today.getMinutes()
//     let second = today.getSeconds()
//     let prepand = hour >= 12 ? "PM" : "AM"
//     hour = hour % 12 || 12
//     console.log(`Current time is : ${hour} ${prepand} : ${minute} : ${second}`)

// 2
//     window.print()

// 3
    // const today = new Date()
    // const dd = String(today.getDate()).padStart(2, '0')
    // const mm = String(today.getMonth() + 1).padStart(2, '0')
    // const yyyy = today.getFullYear()
    // console.log(`${mm}-${dd}-${yyyy}`);
    // console.log(`${mm}/${dd}/${yyyy}`);
    // console.log(`${dd}-${mm}-${yyyy}`);
    // console.log(`${dd}/${mm}/${yyyy}`);

// 4
//     const a = 5, b = 6, c = 7
//     const s = (a+b+c) / 2
//     const area = Math.sqrt(s* (s-a) * (s-b) * (s-c))
//     console.log("Area of triangle is: " + area)

// 5
//     let str = "w3resource";
//     let rotations = str.length;
//     for (let i = 0; i < rotations; i++) {
//         str = str.slice(-1) + str.slice(0, -1);
//         console.log(str);
//     }

// 6
//     function isLeap(year){
//         return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
//     }
//     console.log(isLeap(400))

// 7 
//     for(let year = 2014; year<=2050; year++){
//         const d = new Date(year, 0, 1)
//         if(d.getDay() === 0){
//             console.log("1st January is Sunday in:" + year)
//         }
//     }


// 8
//     const randNumber = Math.floor(Math.random()*10)
//     const userNumber = prompt('enter a random number from 0 to 10')

//     if(randNumber === userNumber){
//         console.log("Good Work")
//     }else{
//         console.log(`Not matched you enter: ${userNumber} and computer choose: ${randNumber}`)
//     }

// 9
//     const today = new Date()
//     const christmas = new Date(today.getFullYear(), 11, 25)
//     if(today > christmas){
//         christmas.setFullYear(today.getFullYear() + 1)
//     }
//     const diff = Math.ceil((christmas - today) / (1000 * 60 * 60 * 24))
//     console.log(diff + " days left until chirstmas")


// 10
//     const firstNo = document.querySelector('#first-number')
//     const secondNo = document.querySelector('#second-number')
//     function multiply(){
//         console.log(`The Result is: ${firstNo.value * secondNo.value}`)
//     }
//     function divide(){
//         console.log(`The Result is: ${firstNo.value / secondNo.value}`)
//     }

// 11
//     const temp = document.querySelector('#temp')
//     function convertToC(){
//         const tempInC = 5 * ((temp.value-32) / 9)
//         console.log(`${temp.value}F is ${tempInC}C`)
//     }
//     function convertToF(){
//         const tempInF = ((temp.value / 5) * 9) + 32
//         console.log(`${temp.value}C is ${tempInF}F`)
//     }

// 12
//     console.log("Current URL is: " + window.location.href);









