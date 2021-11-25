export default function dataToParams (data) {
    const {ruleType, ruleName, sencetype, senceName, basicDatas, othersData} = data;
    console.log(data)
    debugger
    return {
        ruleType,
        ruleName,
        basicDatas,
        othersData: othersData.map(item => item.three).filter((key, index, array) => !array.includes(key, index+1)).map(key => othersData.filter(item => item.three===key)),
    }
}
Array.prototype.mapFlat = function() {
    const array = Array.prototype.slice.call(this)
    const [item, last] = [array.filter(item => !Array.isArray(item)), array.filter(item => Array.isArray(item))]
    return item.concat(...last.map(line => line.mapFlat()))
}
export function formatData(values) {
    const {ruleType, ruleName, basicDatas, othersData} = values;
    return JSON.stringify({ruleType, ruleName, basicDatas, othersData: othersData.mapFlat()})
}