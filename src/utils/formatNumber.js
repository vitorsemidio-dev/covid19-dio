function formatNumber (num, digits = 1) {
  const SI = [
    { value: 1, symbol: '' },
    { value: 1E3, symbol: 'k' },
    { value: 1E6, symbol: 'M' },
    { value: 1E9, symbol: 'G' },
    { value: 1E12, symbol: 'T' },
    { value: 1E15, symbol: 'P' },
    { value: 1E18, symbol: 'E' }
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  let i
  for (i = SI.length - 1; i > 0; i--) {
    if (Math.abs(num) >= SI[i].value) {
      break
    }
  }
  return (num / SI[i].value).toFixed(digits).replace(rx, '$1') + SI[i].symbol
}

export default formatNumber
