//  Variables

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
    quote: ` " Be yourself; everyone else is already taken. " ` ,
    person: ` Oscar Wilde `
} , {
    quote: ` " So many books,  so little time. " ` ,
    person: ` Frank Zappa `
} , {
    quote: ` " A room without books is like a body without a soul. " ` ,
    person: ` Marcus Tullius Cicero `
} , {
    quote: ` " Be the change that you wish to see in the world. " ` ,
    person: ` Mahatma Gandhi `
} , {
    quote: ` " If you tell the truth, you don't have to remember anything. " ` ,
    person: ` Mark Twain `
} , {
    quote: ` " Always forgive your enemies; nothing annoys them so much. " ` ,
    person: ` Oscar Wilde `
} , {
    quote: ` " We accept the love we think we deserve. " ` ,
    person: ` Stephen Chbosky `
} , {
    quote: ` " Without music, life would be a mistake. " ` ,
    person: ` Friedrich Nietzsche `
} , {
    quote: ` " I solemnly swear that I am up to no good. " ` ,
    person: `  J.K. Rowling `
} , {
    quote: ` " Love all, trust a few, do wrong to none. " ` ,
    person: ` William Shakespeare`
} ,

]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person

})