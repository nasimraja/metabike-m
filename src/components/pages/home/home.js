import React, { Component } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import $ from "jquery";
import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';
import scan  from '../../images/scan.png';
import play  from '../../images/play.png';
import war3  from '../../images/war3.png';
import war4  from '../../images/war4.png';
import lineimg  from '../../images/lineimg.png';
import bike1  from '../../images/bike1.png';
import bike2  from '../../images/bike2.png';
import bike3  from '../../images/bike3.png';
import man1  from '../../images/man1.png';
import man2  from '../../images/man2.png';
import tookenss  from '../../images/tookenss.png';
import tokens  from '../../images/tokens.png';
import tokensmobile  from '../../images/tokensmobile.png';
import roadmapimg  from '../../images/roadmapimg.png';



class Home extends Component{ 
	constructor(props) {
	  super(props);
	  this.state = {
	  };
  
	}
	
	componentDidMount = () =>{

		AOS.init({
			offset: 200,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 100,
		  });
				
	  }

	render(){
		return(
			<div>
			<div className="main-bg2">
			<Header />
			<section id="banner-sec">
				<div className="container">
					<div className="banner-content" data-aos="fade-up">
						
						<div className="banner-btn-wrp">
							{/* <a href="#"><img src={btn1} /> </a> */}
							{/* <a href="#" className="earn-btn"><img src={btn1} /></a> */}
						</div>
					</div>
				</div>
			</section>
			
			<div className="main-bg">
				<div className="container">
					<section id="war-section">
						<div className="war-head">
							<h3>Features</h3>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<div className="war-box">
									<img src={war3} alt="war" />
								</div>
							</div>
							<div className="col-lg-6">
								<div className="war-box">
									<img src={war4} alt="war" />
								</div>
							</div>
						</div>
					</section>
					
					<section id="collect-section" data-aos="fade-up">
						<div className="collect-head">
							<h3 data-aos="fade-right">Collect Bike Warriors</h3>
						</div>
						<div className="wrp-collect-box">
							<div className="coolect-box">
								<div className="bule-circle animated bounce">
									<img src={bike1} alt="product" />
								</div>
								<div className="collect-c">
									<h4>Loki</h4>
								</div>
							</div>
							<div className="coolect-box">
								<div className="bule-circle animated bounce">
									<img src={bike2} alt="product" />
								</div>
								<div className="collect-c">
									<h4>Raynor</h4>
								</div>
							</div>
							<div className="coolect-box">
								<div className="bule-circle animated bounce">
									<img src={man1} alt="product" />
								</div>
								<div className="collect-c">
									<h4>Skull face</h4>
									
								</div>
							</div>
							<div className="coolect-box">
								<div className="bule-circle animated bounce">
									<img src={man2} alt="product" />
								</div>
								<div className="collect-c">
									<h4>Jerom</h4>
								
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			
			
			
			<section id="start-section">
				<div className="container">
					
					<div className="tokenomics-img">
						<img src={tookenss} />
					</div>
					{/* <div className="row">
						<div className="col-lg-4">
							<div className="start-box">
								<h3>2%</h3>
								<p>Reward pool</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="start-box" data-aos="flip-down">
								<h3>3%</h3>
								<p>Reflections</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="start-box">
								<h3>3%</h3>
								<p>Liquidity</p>
							</div>
						</div>
					</div> */}
					<div className="red-stokes"></div>
					<div className="join-box" data-aos="fade-up">
						<img src={tokens} alt="token" className="token-d" />
						<img src={tokensmobile} alt="token" className="token-m" />
					</div>
				</div>
			</section>
			<section id="roadmap-section">
				<div className="container">
					<div className="roadmap-img">
						<img src={roadmapimg} />
					</div>
				</div>
			</section>
		
			<Footer />	
			</div>
		

			</div>
		);
	}

}
export default Home;