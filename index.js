window.addEventListener('scroll', ()=>{
    document.querySelector('.nav').classList.toggle('nav-scroll', window.scrollY>100 )
})


// faq-toggle

const faqs=document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('active')
    })
})



// nav-toggle

const navList=document.querySelector('.nav__list');
const close=document.querySelector('.close');
const open=document.querySelector('.open');

open.addEventListener('click',()=>{
    navList.style.display='block';
    open.style.display='none';
    close.style.display='inline-block';
});

// close function

const closeMenu=()=>{
    navList.style.display='none';
    open.style.display='inline-block';
    close.style.display='none';
}

close.addEventListener('click', closeMenu )

