import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';


const AboutContent = () => {
    useEffect(AOS.init);  
    return (
        <div>
            <div className="textContainer">
                <div className="aboutText">
               <h3
               data-aos='fade-right'
               data-aos-offset="130"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
               >Web Designer and <span>Developer</span></h3>
               <h4
               data-aos='fade-in'
               data-aos-offset="150"
               data-aos-duration="700"
               data-aos-easing="ease-in-out"
               >Hi! My name's Jeff, and I'm a web designer and developer based in Belfast.</h4>

               <p
               data-aos='fade-in'
               data-aos-offset="150"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               >I began my journey as a developer after struggling to find a career that was both creatively and technically challenging. Having worked in a number of different fields over the past few years, I found myself growing frustrated with the lack of diversity in my daily routine. As someone who is passionate about learning, being a self taught guitarist, cook and photographer, I quickly fell in love with web development as it allows me to be learning something new every day, while challenging me both creatively in design and technically in development.</p>
               <p
               data-aos='fade-in'
               data-aos-offset="180"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               >My long term goal is to find a company that I can work for remotely while travelling for a few years before returning to Belfast. At present however, I am focused on refining my skills and learning as much as possible.</p>
               <p
               data-aos='fade-in'
               data-aos-offset="200"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               >I am currently interested in junior developer roles and freelance work.</p>
                <button>Get CV</button>
            </div>
            </div>
        </div>
        )
    }
    
    export default AboutContent