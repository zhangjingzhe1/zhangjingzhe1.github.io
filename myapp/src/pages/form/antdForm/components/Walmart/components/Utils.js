export default function dataToParams (data) {
    const {ruleType, ruleName, sencetype, senceName, basicData, others} = data;
    const title = {
        ruleType,
        ruleName
    }
    const lmkTypes = basicData.filter(item => item.ruleCode === "lmkTypes")
    const basicDatas = {
        sencetype,
        senceName,
        basicDatas:basicData.filter(item => item.ruleCode !== "lmkTypes")
    }
    const othersData = {
        lmkTypes,
        others
    }
}
export function anlysisBasic() {

}