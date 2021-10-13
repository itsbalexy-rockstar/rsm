const button_menu = document.getElementById("button-menu")
const templateBook = document.getElementById("book-section").content
const book_list = document.getElementById("book-list")
const fragment = document.createDocumentFragment()
let shoppingCart = {}

book_list.addEventListener('click', e => {
    addBookToShoppingCart(e)
})

button_menu.addEventListener('click', e => {
    const menu_section = document.querySelector('#menu-section')
    menu_section.classList.toggle("hidden")
 })

// API OR DATABASE

// CATCH DATA
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('../../data.json')
        const data = await res.json()
        // console.log(data)
        showBook(data)
    } catch (error) {
        console.log(error)
    }
}

const showBook = data => {
    data.forEach(book => {
        templateBook.getElementById("title").textContent = book.title
        templateBook.getElementById("author").textContent = book.author
        templateBook.getElementById("price").textContent = `${"$"}${book.price}`
        templateBook.getElementById("image").setAttribute("src", book.url)
        templateBook.querySelector(".btn-buy").dataset.id = book.id
        const clone = templateBook.cloneNode(true)
        fragment.appendChild(clone)
    });
    book_list.appendChild(fragment)
}

const addBookToShoppingCart = e => {
    if (e.target.classList.contains("btn-buy")){
        setBookToShoppingCart(e.target.parentElement.parentElement)
    }
    e.stopPropagation()
}

const setBookToShoppingCart = obj => {
     const book = {
         id: obj.querySelector(".btn-buy").dataset.id,
         title: obj.querySelector("#title").textContent,
         author: obj.querySelector("#author").textContent,
         price: obj.querySelector("#price").textContent,
         quantity: 1
     }
     shoppingCart[book.id] = {...book}
     if (shoppingCart.hasOwnProperty(book.id)){
        book.quantity = shoppingCart[book.id].quantity + 1
     }
}
