
// const reqBody = {
//   entrepreneur: 'on',
// }

const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單', '很容易', '很快', '很正常']


function trashTalkGenerate(reqBody) {

  //定義亂數index
  let index = Math.floor(Math.random() * 4)
  let trashTalk = ''
  let notice = '請選擇一位角色'
  console.log('reqBody:', reqBody)
  console.log('reqBody:', reqBody)

  if (JSON.stringify(reqBody) === '{}') {
    console.log('請選擇一位角色')
    return '請選擇一位角色'
  } else {
    //如何選到正確的 req.body＝'on'
    //把要的陣列字串起來放入變數sentence
    if (reqBody.engineer === 'on') {
      trashTalk = task.engineer[index].concat(phrase[index])
    }
    if (reqBody.designer === 'on') {
      trashTalk = task.designer[index].concat(phrase[index])
    }
    if (reqBody.entrepreneur === 'on') {
      trashTalk = task.entrepreneur[index].concat(phrase[index])
    }

    return trashTalk
  }

}

module.exports = trashTalkGenerate

//導出函式