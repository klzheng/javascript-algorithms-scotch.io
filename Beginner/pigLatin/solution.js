function pigLatin(string) {

    let sliceIndex = 0
    let vowels = "aeiou".split("")

    if (vowels.includes(string[0])) return string + "way"
    else {
        for (let i = 0; i < string.length; i++) {
            if (vowels.includes(string[i])) {
                return string.slice(sliceIndex) + string.slice(0, sliceIndex) + "ay"
            }
            sliceIndex++
        }
    }
}

// console.log(pigLatin("explain"), "explainway")
// console.log(pigLatin("pig"), "igpay")
// console.log(pigLatin("glove"), "oveglay")