import React from 'react';
import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';
import bike1  from '../../images/bike1.png';
import bike2  from '../../images/bike2.png';
import bike3  from '../../images/bike3.png';
import man1  from '../../images/man1.png';
import man2  from '../../images/man2.png';


const Marketplace=()=>
{
return (
        <div>
            <div className="marketplace-bg">
                <Header />
                <div className="container">
                <section id="marketplace-sec" >
						<div className="collect-head">
							<h3>Marketplace</h3>
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
            <Footer />
        </div>
    );
}

 
export default Marketplace;