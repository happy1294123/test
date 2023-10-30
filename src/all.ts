// 第 1、2、4、5 題

// 第一題
export function sum(num: number) {
  let temp = 2
  let result = 1
  let operation = '+'
  while (temp <= num) {
    if (operation === '+') {
      result += temp
      operation = '-'
    } else if (operation === '-') {
      result -= temp
      operation = '+'
    }
    temp++
  }

  return result
}

// 第二題
import readline from 'readline'
const myConfirm = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const awardPct = [
  {
    name: "一獎",
    p: 0.001
  },
  {
    name: "二獎",
    p: 0.023
  },
  {
    name: "三獎",
    p: 0.13
  },
  {
    name: "四獎",
    p: 0.18
  },
  {
    name: "五獎",
    p: 0.25
  }
]
const awardNum = {
  "一獎": 1,
  "二獎": 1,
  "三獎": 2,
  "四獎": 5,
  "五獎": 11,
}

const getAward = () => {
  const r = Math.random();
  let count = 0;
  let award = '再接再厲';
  for (let i = 0; i < awardPct.length; i++) {
    const temp = awardPct[i]
    if (r >= count && r <= count + temp.p) {
      award = temp.name;
      break;
    } else {
      count += temp.p;
    }
  }
  return award;
}

export function lottery() {
  const ask = () => {
    myConfirm.question('抽獎嗎？(y/n)', (ans) => {
      if (ans === 'y') {
        let award = getAward()
        if (award in awardNum) {
          const awardName = award as keyof typeof awardNum
          const num = awardNum[awardName]
          if (num === 0) {
            award = '再接再厲'
          } else {
            awardNum[awardName]--
          }
        }
        console.log(award, `剩餘獎品`, awardNum);
        ask()
      } else {
        console.log('結束抽獎');
        myConfirm.pause()
        return
      }
    })
  }
  ask()
}

// 第四題
`
共1個頁面、10個component

頁面
  - header
    - menu
    - 拍照功能
  - 聊天室
    - 對話內容
      - 大頭貼
      - 聊天內容
  - footer
    - 輸入框
    - 上傳圖片
`
