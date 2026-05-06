function makeLorem(length = 100) {
    const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo', 'consequat']

    let result = ''
    while (result.length < length) {
        const randomWord = words[Math.floor(Math.random() * words.length)]
        result += randomWord + ' '
    }

    return result.trim().substring(0, length)
}
