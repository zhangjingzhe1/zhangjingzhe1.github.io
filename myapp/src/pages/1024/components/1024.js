export default function getbaseAry (n) {
    let baseAry = [];
    for(let i=0;i<n;i++) {
        let line = []
        for(let i=0;i<n;i++) {
            line.push(0)
        }
        baseAry.push(line)
    }
    return addone(baseAry)
}
export function addone(array) {
    const hasnoNum = []
    array.forEach((line, index) => {
        line.forEach((item, index1) => {
            if(!item) {
                hasnoNum.push(`${index},${index1}`) 
            }
        })
    })
    const add = hasnoNum[Math.floor(Math.random()*hasnoNum.length)]
    const [index, index1] = add.split(',')
    array[index][index1] = 2;
    return array
}
export function move (ary) {
    let newary = JSON.parse(JSON.stringify(ary))
    newary.forEach((line,index1) => {
        let a = line.reverse().filter(item => !!item)
        const length = line.length
        for(let i=0;i<a.length;i++) {
            if(a[i] === a[i+1]) {
                a[i+1] = a[i] * 2;
                a[i] = 0
                i++
            }
        }
        const ary = []
        a.forEach(item => {
            if(item){ary.push(item)}
        })
        const hasno = length-ary.length 
        for(let i=0;i<hasno;i++) {
            ary.unshift(0)
        }
        newary[index1] = ary.reverse()
    })
    
    return newary;
}
export function moveRight (array) {
   return move(array.map(line => line.reverse())).map(line => line.reverse())
}
export function moveUp(array) {
    let newary = []
    debugger
    // console.log(array)
    array.forEach((line,index) => {
        line.forEach((item, index1) => {
            if(!newary[index1]) {
                newary[index1] = [];
            }
            newary[index1].push(item);
        })
    })
    newary = move(newary)
    let result = []
    newary.forEach((line,index) => {
        line.forEach((item, index1) => {
            if(!result[index1]) {
                result[index1] = [];
            }
            result[index1].push(item);
        })
    })
    return result
}
export function moveDown(array) {
    let newary = []
    // console.log(array)
    array.forEach((line,index) => {
        line.forEach((item, index1) => {
            if(!newary[index1]) {
                newary[index1] = [];
            }
            newary[index1].push(item);
        })
    })
    newary = moveRight(newary)
    let result = []
    newary.forEach((line,index) => {
        line.forEach((item, index1) => {
            if(!result[index1]) {
                result[index1] = [];
            }
            result[index1].push(item);
        })
    })
    return result
}
