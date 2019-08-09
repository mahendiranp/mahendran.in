import React, {Component} from 'react'
import './../Style/Service.scss'
class Service extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='site-heading'>
                        <h2>What I Do</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
<div className="col-md-4">
<div className="single-service">
<div className="service-icon"></div>

<h4>Web Development</h4>

<p>Build web sites with: HTML-CSS-JS , and using other libraries based in Javascript. I implement basic to advanced SEO techniques on each site for better search engine rankings.</p>
</div>
</div>

<div className="col-md-4">
<div className="single-service">
<div className="service-icon"><i className="fa fa-laptop desktop-icon"></i></div>

<h4>Responsive Design</h4>

<p>Responsive and mobile-first are my goals while making a website because most traffic comes from mobile devices.</p>
</div>
</div>

<div className="col-md-4">
<div className="single-service">
<div className="service-icon"></div>

<h4>MOBILE APPS</h4>

<p>I can design and build hybrid mobile apps for IOS and Android, based in REACT-NATIVE or ANGULAR.</p>
</div>
</div>
</div>
            </section>
        )
    }

}

export default Service