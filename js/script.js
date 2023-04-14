/*declaring variables */
const navBar = document.querySelector('.fa-bars');

/*coding the navbar */
navBar.addEventListener('click', () =>{
    let itmList = document.querySelector('.function-itm')
    if(itmList.style.right == 0 + 'px'){
        itmList.style.right = -150 + 'px'
        navBar.style.color = 'black'
    }else{
        itmList.style.right = 0 + 'px'
        navBar.style.color = '#ff00ff'
    }
})

