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
                    <a href="https://www.nps.gov/mora/index.htm" target='_blank' rel="noopener noreferrer">Nature Lover</a>
                    <a href="https://www.thinkful.com/" target='_blank' rel="noopener noreferrer">Thinkful Grad</a>
                </div>

                <div className='bioContainer'>
                    <h2 className='text1'>Hello, I’m Steven! I’m a full-stack web developer and I absolutely love creating websites</h2>

                    <div className='weddingPhoto1'>
                        <img src={Photo} alt='Piano keys'/>
                    </div>

                    <p className='text2'>I am a recent graduate from the Full-Stack Flex bootcamp at Thinkful. To me coding is like putting together a puzzle. You take the pieces that you have been given and put them together in a unique, fun, and satisfying way. You can create something not only beautiful but extremely useful for the consumer. I specifically love the front-end side of development. Designing a beautiful, user-friendly, and responsive webpage is extremely satisfying</p>

                    <p className='mobile text3'>When I’m not coding you can find me serving at my local church, on the golf course attempting to shave off a few strokes, fishing, playing piano, or on the couch with my wife watching a movie. I love to learn and grow, taking everything I do to the next level including my skill in code. I bring excitement and dedication in anything I put my hands to. My lifelong dream is to raise a family with my wife and see our kids have children of their own.</p>


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