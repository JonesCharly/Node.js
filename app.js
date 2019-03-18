process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('What\'s your age ?')
process.stdin.on('data', (text) => {
    if ((text)>99){
        console.log('Try Again Bitch')
    } else if ((text)<1){
        console.log('Try Again Bitch')
    } else { 
        console.log( 2019-(text))
    }
  process.exit()
})

