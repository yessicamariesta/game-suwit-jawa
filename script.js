function getPilihanComputer() {
  let comp = Math.random()

  if (comp < 0.34) return 'gajah'
  if (comp >= 0.34 && comp < 0.66) return 'orang'
  return 'semut'
}

function getHasil(comp, player) {
  if (comp == player) return 'SERI!'
  if (comp == 'gajah') return player == 'semut' ? 'KALAH!' : 'MENANG!'
  if (comp == 'orang') return player == 'semut' ? 'MENANG!' : 'KALAH!'
  if (comp == 'semut') return player == 'orang' ? 'KALAH!' : 'MENANG!'
}

function putar() {
  const imgComputer = document.querySelector('.img-computer')
  const gambar = ['gajah', 'semut', 'orang']
  let i = 0
  const waktuMulai = new Date().getTime()

  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval
      return
    }

    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')

    if (i == gambar.length) i = 0
  }, 100)
}

const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer()
    const pilihanPlayer = pil.className
    const hasil = getHasil(pilihanComputer, pilihanPlayer)

    putar()

    setTimeout(function () {
      const imgComputer = document.querySelector('.img-computer')
      imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

      const info = document.querySelector('.info')
      info.innerHTML = hasil
    }, 1000)
  })
})
