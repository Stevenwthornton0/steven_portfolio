import React, { Component } from 'react';
import Photo from '../../Images/Steven.jpg';
import HTML5 from '../../Images/html5-plain.svg';
import CSS3 from '../../Images/css3-plain.svg'
import JavaScript from '../../Images/javascript-plain.svg';
import react from '../../Images/react-1.svg';
import Nodejs from '../../Images/nodejs-icon.svg';
import './Homepage.css';

class Homepage extends Component {

    render() {
        return (
            <section className='bio'>
                <div className='container'>
                    <a href="https://virtualpiano.net/" target='_blank' rel="noopener noreferrer">Piano Player</a>
                    <a href="https://www.nps.gov/mora/index.htm" target='_blank' rel="noopener noreferrer">Nature Admirer</a>
                    <a href="https://www.thinkful.com/" target='_blank' rel="noopener noreferrer">Thinkful Grad</a>
                </div>

                <div className='bioContainer'>
                    <h2 className='text1'>Hello, I’m Steven! I’m a Full-Stack Web Developer and I am passionate about creating web applications both user-friendly and beautiful.</h2>

                    <div className='weddingPhoto1'>
                        <img src={Photo} alt='Piano keys'/>
                    </div>

                    <p className='text2'>I am a certified Full-Stack web developer and graduate from the Full-Stack Flex program at the Thinkful/Bloc online bootcamp. I love to find creative, technical solutions for life's every-day complex problems. During my apprenticeship at Thinkful/Bloc, I built two full-stack applications from the ground up using the Node.js environment. These projects can be found on the Projects page. Before my apprenticeship, I worked in various customer service roles, as well as a year administrating a network of internships around the United States.</p>

                    <p className='mobile text2'>When I’m not coding you can find me serving at my local church, on the golf course attempting to shave off a few strokes, fishing, playing piano, or on the couch with my wife watching a movie. I love to learn and grow, taking everything I do to the next level including my skill in code. I bring excitement and dedication in anything I put my hands to. My lifelong dream is to raise a family with my wife and see our kids have children of their own.</p>


                    <div className='languageIcons'>
                        <p>Skills: </p>
                        <div className='icon-container'>
                            <img src={HTML5} alt="HTML5 Logo" />
                            <img src={CSS3} alt="CSS Logo" />
                            <img src={JavaScript} alt="JavaScript Logo" />
                            <img src={react} alt="React Logo" />
                            <img src={Nodejs} alt="NodeJS Logo" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Homepage;