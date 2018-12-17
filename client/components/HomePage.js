import React from "react";
import { Col, Container, Row, Footer } from 'mdbreact';
import '../../public/css/styles.css'

const HomePage = () => {
    return <div>
                {/* Start Hero Image */}
				<div className="hero" />


            <section class="text-center my-5">

            {/* <!-- Section heading --> */}
            <h2 class="h1-responsive font-weight-bold my-5">Why is it so great?</h2>
            {/* <!-- Section description --> */}
            <p class="lead grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

            {/* <!-- Grid row --> */}
            <div class="row">

                {/* <!-- Grid column --> */}
                <div class="col-md-4">

                <i class="fa fa-area-chart fa-3x red-text"></i>
                <h5 class="font-weight-bold my-4">Analytics</h5>
                <p class="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                    maiores aperiam minima assumenda deleniti hic.
                </p>

                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-4">

                <i class="fa fa-book fa-3x cyan-text"></i>
                <h5 class="font-weight-bold my-4">Tutorials</h5>
                <p class="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                    maiores aperiam minima assumenda deleniti hic.
                </p>

                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-4">

                <i class="fa fa-comments-o fa-3x orange-text"></i>
                <h5 class="font-weight-bold my-4">Support</h5>
                <p class="grey-text mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                    aperiam minima assumenda deleniti hic.
                </p>

                </div>
                {/* <!-- Grid column --> */}

            </div>
            {/* <!-- Grid row --> */}

            </section>


                {/* Start Footer */}
				<Footer color="elegant-color" className=" font-small pt-4 mt-4">
					<Container fluid className="text-center text-md-left">
						<Row>
							<Col md="6">
								<h5 className="title">Digital Maximalism</h5>
								<p>Here you can use rows and columns here to organize your footer content.</p>
							</Col>
							<Col md="6">
								<h5 className="title">Popular Links</h5>
								<ul>
									<li className="list-unstyled">
										<a href="#!">Bootcamp</a>
									</li>
									<li className="list-unstyled">
										<a href="#!">Blog</a>
									</li>
									<li className="list-unstyled">
										<a href="#!">Contact</a>
									</li>
									<li className="list-unstyled">
										<a href="#!">Instagram</a>
									</li>
								</ul>
							</Col>
						</Row>
					</Container>
					<div className="footer-copyright text-center py-3">
						<Container fluid>
							&copy; {new Date().getFullYear()} Copyright: <a href="https://www.digitalmaximalsm.com">
								{' '}
								digitalmaximalsm.com{' '}
							</a>
						</Container>
					</div>
				</Footer>
			</div>;
}

export default HomePage;