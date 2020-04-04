(function () {
  const menu = document.querySelector('#menu')
  const pianoAdd = document.querySelector('#pianoAdd')
  const violinAdd = document.querySelector('#violinAdd')
  const fluteAdd = document.querySelector('#fluteAdd')
  const singerAdd = document.querySelector('#singerAdd')
  const cartItem = document.querySelector('#cart-items')
  const pianoAmount = document.querySelector("#piano-amount")
  const violinAmount = document.querySelector("#violin-amount")
  const fluteAmount = document.querySelector("#flute-amount")
  const singerAmount = document.querySelector("#singer-amount")
  const cartAmount = document.querySelector("#cart-amount")
  const submitButton = document.querySelector('#submit-button')
  const clearButton = document.querySelector('#clear-button')
  const pianoPlus = document.querySelector('#pianoPlus')
  const violinPlus = document.querySelector('#violinPlus')
  const flutePlus = document.querySelector('#flutePlus')
  const singerPlus = document.querySelector('#singerPlus')
  const pianoMinus = document.querySelector('#pianoMinus')
  const violinMinus = document.querySelector('#violinMinus')
  const fluteMinus = document.querySelector('#fluteMinus')
  const singerMinus = document.querySelector('#singerMinus')
  let amount = {
    piano: 0,
    violin: 0,
    flute: 0,
    singer: 0
  }

  pianoAdd.addEventListener('click', e => {
    pianoAmount.innerText++
    amount.piano++
  })
  violinAdd.addEventListener('click', e => {
    violinAmount.innerText++
    amount.violin++
  })
  fluteAdd.addEventListener('click', e => {
    fluteAmount.innerText++
    amount.flute++
  })
  singerAdd.addEventListener('click', e => {
    singerAmount.innerText++
    amount.singer++
  })
  submitButton.addEventListener('click', e => {
    alert(
      "此次購買：\n鋼琴課" + amount.piano + "堂\n" + "小提琴課" + amount.violin + "堂\n" + "中國笛課" + amount.flute + "堂\n" + "歌唱課" + amount.singer + "堂\n總共是" + (amount.piano * 3000 + amount.violin * 2000 + amount.flute * 4000 + amount.singer * 5000) + "元\n" + "謝謝惠顧，學音樂是最好的投資")
    pianoAmount.innerText = 0
    violinAmount.innerText = 0
    fluteAmount.innerText = 0
    singerAmount.innerText = 0
    amount.piano = 0
    amount.violin = 0
    amount.flute = 0
    amount.singer = 0
  })
  clearButton.addEventListener('click', e => {
    pianoAmount.innerText = 0
    violinAmount.innerText = 0
    fluteAmount.innerText = 0
    singerAmount.innerText = 0
    amount.piano = 0
    amount.violin = 0
    amount.flute = 0
    amount.singer = 0
  })

  violinPlus.addEventListener('click', e => {
    violinAmount.innerText++
    amount.violin++
  })
  pianoPlus.addEventListener('click', e => {
    pianoAmount.innerText++
    amount.piano++
  })
  flutePlus.addEventListener('click', e => {
    fluteAmount.innerText++
    amount.flute++
  })
  singerPlus.addEventListener('click', e => {
    singerAmount.innerText++
    amount.singer++
  })
  violinMinus.addEventListener('click', e => {
    if (amount.violin > 1) {
      violinAmount.innerText--
      amount.violin--
    } else if (amount.violin = 1) {
      violinAmount.innerText = 0
      amount.violin = 0
    } else {
      violinAmount.innerText = 0
      amount.violin = 0
    }
  })
  pianoMinus.addEventListener('click', e => {
    if (amount.piano > 1) {
      pianoAmount.innerText--
      amount.piano--
    } else if (amount.piano = 1) {
      pianoAmount.innerText = 0
      amount.piano = 0
    } else {
      pianoAmount.innerText = 0
      amount.piano = 0
    }
  })
  fluteMinus.addEventListener('click', e => {
    if (amount.flute > 1) {
      fluteAmount.innerText--
      amount.flute--
    } else if (amount.flute = 1) {
      fluteAmount.innerText = 0
      amount.flute = 0
    } else {
      fluteAmount.innerText = 0
      amount.flute = 0
    }
  })
  singerMinus.addEventListener('click', e => {
    if (amount.singer > 1) {
      singerAmount.innerText--
      amount.singer--
    } else if (amount.singer = 1) {
      singerAmount.innerText = 0
      amount.singer = 0
    } else {
      singerAmount.innerText = 0
      amount.singer = 0
    }
  })


})()