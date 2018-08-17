import React, { Component } from 'react';
import { ajax } from 'jquery';
// import { serialize } from 'jquery';
import './index.css'

class Footer extends Component {
	constructor() {
		super();
		this.submitEmail = this.submitEmail.bind(this);
	}

	submitEmail = (e) => {
		e.preventDefault()
		console.log('submit email')
		var url = 'https://script.google.com/macros/s/AKfycbyhDI2_mCIAs7-sTgqemkLfSVUh1hjV79pQ6oCQ7HD8VgFpanw/exec'
		// var form = document.getElementById("contact")
		var email = document.getElementsByTagName("input")['email'].value
		ajax({
			url: url,
			method: "GET",
			dataType: "json",
			data: { email: email }
		}).then((data) => {
			// do something
			alert('yaya!', data)

		}
		);

	}

	render() {
		return (
			<footer>
				<div className="footer-wrapper">
					{/* <div className="logo">
                        <img src={logo} alt="" />
                    </div> */}
					<div className="social">
						<p><a href="https://www.instagram.com/lipstech_official/" target="_blank">Instagram</a></p>
						<p><a href="https://twitter.com/LipsTechCom" target="_blank">Twitter</a></p>
						<p><a href="https://www.pinterest.ca/lipstech_official/" target="_blank">Pinterest</a></p>
					</div>
					<div className="contact">
		
						<form action="https://tinyletter.com/lipstech_official" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/lipstech_official', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"><p><label htmlFor="tlemail">Sign up to get the lastest news!</label></p><p><input type="text" name="email" id="tlemail" /></p><input type="hidden" value="1" name="embed" /><input type="submit" value="Subscribe" /></form>

					</div>
				</div>
			</footer >
		)
	}
}

export default Footer