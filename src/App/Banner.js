import React, {Component} from 'react'

import './../Style/Banner.scss'

class Banner extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section className='banner'>
                <div className='banner-area'>
                    <div className='banner-caption container'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12 col-sm-12 content-home'>
                                    <div className='banner-welcome'>
                                    <h3>Hi! I'm <span>Mahendran</span>.</h3>
                                    <div className='caption-inner'>
                                        <div className='ah-headline clip is-full-width'>
                                            <span className='typed-static'>
                                            A Professional 
                                            </span>
                                            <span className='ah-words-wrapper'>
                                            Web Developer.
                                            </span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Banner