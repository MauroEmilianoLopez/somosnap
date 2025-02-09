const navbar = (e) => {
    e.preventDefault()
    const btn = e.target.closest('button')
    const navbarMain = document.querySelector("#main_nav")
    navbarMain.classList.toggle('active')
    if (!navbarMain.classList.contains('active')) {
        btn.classList.add('close')
    } else {
        btn.classList.remove('close')
    }
}

export default navbar