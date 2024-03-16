import React from 'react'
import Card from './Card'
import people from '../assets/heroassets/people.png'
import place from '../assets/heroassets/place.png'
import product from '../assets/heroassets/product.png'
import program from '../assets/heroassets/program.png'

function HeroSection() {
    return (
        <div className='w-full bg-white py-[100px] min-h-[700px]'>
            <div className='grid grid-cols-2 w-[80%] mx-auto gap-10 max-[1000px]:grid-cols-1'>
                <Card img={people} txt={"People"}
                    desc={"Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."}
                    btn={"Connect"} 
                    color={"#8064A2"} t={"color1"}/>

                <Card img={place} txt={"Place"}
                    desc={"Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."}
                    btn={"Meet up"}
                    color={"#77933C"} t={"color2"}/>

                <Card img={product} txt={"Product"}
                    desc={"Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."}
                    btn={"Get it"}
                    color={"#C0504D"} t={"color3"}/>

                <Card img={program} txt={"Program"}
                    desc={"Find events, meetups and workshops related to your hobby.  Register or buy tickets online."}
                    btn={"Attend"}
                    color={"#0096C8"} t={"color4"}/>


            </div>
        </div>
    )
}

export default HeroSection