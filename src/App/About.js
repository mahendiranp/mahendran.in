import React, {Component} from 'react'
import './../Style/About.scss'


class About extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='site-heading'>
                        <h2>About me</h2>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                    <div className='about-left'>
                    <h2>Hi There! I'm Mahendran</h2>

<p>I'm creative web Developer based in Bangalore, specializing in User Interface Design and Development. I build clean, appealing, and functional interfaces which comply with the latest web standards.</p>

<p><span>2009</span> I got first commercial work as a web designer in San Solutions, Chennai.</p>

<p><span>2012</span> I moved to Bangalore to started working for ANZ Operations and Technology P Ltd. Bangalore</p>

<p>Rest of my experience is successfull cooperation as a freelancer/self employed with IT companies and Professionals from India.</p>

<ul>
	<li><span>Phone </span> : <a href="tel:+919880420757">+91 9880420757</a></li>
	<li><span>Email </span> : <a href="mailto:info@mahendran.net">info@mahendran.net</a></li>
</ul>

<div class="about_btns"><a class="fabon-btn" href="#">Download CV</a></div>
                    </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='skills-prog half about-right'>
                        <p>Here's a few things I'm experienced with:</p>
                        <div className="row">
<div className="col-12 list">
<ul>
	<li>HTML &amp; CSS</li>
	<li>JavaScript</li>
	<li>TypeScript</li>
	<li>Angular</li>
	<li>ReactJS</li>
	<li>React Native</li>
</ul>
</div>
</div>
<p>Experienced with CSS frameworks:</p>

<div className="row">
<div className="col-12 list">
<ul>
	<li>Bootstrap</li>
	<li>Material Desing</li>
    <li>Bourbon neat</li>
    <li>PrimeFace</li>
</ul>

</div>
</div>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }

}

export default About