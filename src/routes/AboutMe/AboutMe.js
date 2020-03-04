import React, { Component } from 'react';
import Photo from '../../Images/Steven_and_Kaleen_2.jpg';
import './AboutMe.css'

class AboutMe extends Component {


    render() {
        return (
            <section className='bio'>

                <div className='bioContainer'>
                    <h2 className='text3'>Things I love: craft <b>COFFEE</b> and craft <b>BEER</b></h2>

                    <p className='text2'>When I’m not coding you can find me serving at my local church, on the golf course attempting to shave off a few strokes, fishing, playing piano, or on the couch with my wife watching a movie. I love to learn and grow, taking everything I do to the next level including my skill in code. I bring excitement and dedication in anything I put my hands to. My lifelong dream is to raise a family with my wife and see our kids have children of their own.</p>
                </div>

                <div className='weddingPhoto2'>
                    <img src={Photo} alt='Thornton wedding'/>
                </div>
            </section>
        )
    }
}

export default AboutMe;