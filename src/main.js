import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const cards = document.querySelectorAll('.card')
console.log(cards)
cards.forEach((card, i) => {
    gsap.fromTo(card,
        {y:100, x:100, scale:0.5, opacity:0},
        {y:0, x:0, scale:1, opacity:1, duration:2, ease:"power4.inOut", scrollTrigger:{trigger:card, start:"top 100%", toggleActions:"play none none reverse"}}
    )
})

const cardsTwo = document.querySelectorAll('.card-two')

cardsTwo.forEach((card) => {
    gsap.fromTo(card,
        { x: -200, opacity: 0 },
        {x: 0, opacity: 1, duration: 1, ease: "bounce.out", scrollTrigger: {trigger: card, tart: "top 80%",toggleActions: "play reverse play reverse"}}
    )
})