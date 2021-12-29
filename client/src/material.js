import React from 'react';
import {FaChevronDown,FaChevronUp,FaChevronRight} from "react-icons/fa";

function Material() {
  return (
    <>
      <div className="hero">
        <div className="">
          <header className='header'>
            <img src="./images/logoCompact.svg" alt="" />
            <nav className="nav collapsedHeader">
              <ul>
                <li>
                  <button className="button"><a href="">services</a>
                    <ul>
                      <li>
                        <button className="button"><a href="">consulting</a></button>
                      </li>
                      <li>
                        <button className="button"><a href="">consulting</a></button>
                      </li>
                      <li>
                        <button className="button"><a href="">consulting</a></button>
                      </li>
                      <li>
                        <button className="button"><a href="">development</a></button>
                      </li>
                      <li>
                        <button className="button"><a href="">consulting</a></button>
                      </li>
                      <li>
                        <button className="button"><a href="">consulting</a></button>
                      </li>
                    </ul>
                  </button>
                </li>
                <li>
                  <button className="button"><a href="">services</a></button>
                </li>
                <li>
                  <button className="button"><a href="">services</a></button>
                </li>
                <li>
                  <button className="button"><a href="">services</a></button>
                </li>
                <li>
                  <button className="button"><a href="">services</a></button>
                </li>
                <li>
                  <button className="button"><a href="">services</a></button>
                </li>
              </ul>
              <button className="button"><a href="">contact</a></button>
            </nav>
            
            <div className="hamburger" >
              <div className="hamburger-inner"/>
            </div>
          </header>
        </div>
        <div className="container title">
          <p className="hero_text">acro media</p>
          <h1 className="hero_title">Solving your complex ecommerce needs using design & technology.</h1>
          <div className="hero_linksButton ">
            <ul >
              <li>
                <button className='button'><a href="">consulting</a></button>
              </li>
              <li>
                <button className='button'><a href="">consulting</a></button>
              </li>
              <li>
                <button className='button'><a href="">consulting</a></button>
              </li>
              <li>
                <button className='button'><a href="">consulting</a></button>
              </li>
              <li>
                <button className='button'><a href="">consulting</a></button>
              </li>
              <li>
                <button className='button'><a href="">consulting</a></button>
              </li>
            </ul>
          </div>
        </div>
      </div> 
      
      <div className="expertise">
        <div className="container">
          <h2 className="section_title ">Our proven process & experts solve problems & deliver solutions.</h2>
          <div className="">
            <div className="col">
              <a href="">
                <img src="./images/syncIcon.svg" alt="" />
                <h4>discovery & strategy</h4>
                <p>Uncovering your precise business needs through immersive collaboration.</p>
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src="./images/syncIcon.svg" alt="" />
                <h4>discovery & strategy</h4>
                <p>Uncovering your precise business needs through immersive collaboration.</p>
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src="./images/syncIcon.svg" alt="" />
                <h4>discovery & strategy</h4>
                <p>Uncovering your precise business needs through immersive collaboration.</p>
              </a>
            </div>
            <div className="col">
              <a href="">
                <img src="./images/syncIcon.svg" alt="" />
                <h4>discovery & strategy</h4>
                <p>Uncovering your precise business needs through immersive collaboration.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="expert">
          <div className="col">
            <p>Your partner in digital commerce.</p>
          </div>
          <div className="col">
            <p>We are a digital commerce agency that integrates into your business. A true ally, building on-demand commerce solutions to match your company's needs.</p>
            <button className='button'><a href="">Let's talk<i><FaChevronRight/></i></a></button>
          </div>
      </div>
      <div className="insight">
        <div className="container">
          <h2 className="section_title">Insights from our team</h2>
          <button className='button btnNoBorder btnNoBg'><a href="">More articles<i><FaChevronRight/></i></a></button>
          <div className="">
            <div className="col">
              <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/card/public/2021-03/acro-blog-web-design-and-conversion-points.jpg.webp?itok=e_q4qYvJ%22" alt="" />
              <div className='cardText'>
                <a href="">
                  <h4>Must Have Requirements for Your Ecommerce Site</h4>
                  <button className='button'>Read article<i><FaChevronRight/></i></button>
                </a>
              </div>
             </div>
            <div className="col">
              <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/card/public/2021-03/acro-blog-web-design-and-conversion-points.jpg.webp?itok=e_q4qYvJ%22" alt="" />
              <div className='cardText'>
                <a href="">
                  <h4>Must Have Requirements for Your Ecommerce Site</h4>
                  <button className='button'>Read article<i><FaChevronRight/></i></button>
                </a>
              </div>
             </div>
            <div className="col">
              <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/card/public/2021-03/acro-blog-web-design-and-conversion-points.jpg.webp?itok=e_q4qYvJ%22" alt="" />
              <div className='cardText'>
                <a href="">
                  <h4>Must Have Requirements for Your Ecommerce Site</h4>
                  <button className='button'>Read article<i><FaChevronRight/></i></button>
                </a>
              </div>
             </div>
            <div className="col">
              <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/card/public/2021-03/acro-blog-web-design-and-conversion-points.jpg.webp?itok=e_q4qYvJ%22" alt="" />
              <div className='cardText'>
                <a href="">
                  <h4>Must Have Requirements for Your Ecommerce Site</h4>
                  <button className='button'>Read article<i><FaChevronRight/></i></button>
                </a>
              </div>
             </div>
          </div>
        </div>
      </div>
      <div className="report">
        <div className="container">
          <div className="col">
            <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com//sites/default/files/styles/content_image/public/2021-10/eight-trends-retail-b2c-book.png.webp?itok=Mta0R9ce" alt="" />
          </div>
          <div className="col">
            <h2>Ecommerce trends for retail & B2C.</h2>
            <p>Find out how your online business stacks up against the leaders.</p>
            <button className='button'><a href="">Read the report now<i><FaChevronRight/></i></a></button>
          </div>
        </div>
      </div>
      <div className="partners">
        <div className="container">
          <h2 className="section_title">Our technology partners</h2>
          <button className='button'><a href="">All partners<i><FaChevronRight/></i></a></button>
          <div className="col">
            <a href="">
              <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/medium/public/2021-03/partner-logo-drupal-partner.png.webp?itok=329OcKN8" alt="" />
            </a>
          </div>
          <div className="col">
            <a href="">
              <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/medium/public/2021-03/partner-logo-drupal-partner.png.webp?itok=329OcKN8" alt="" />
            </a>
          </div>
          <div className="col">
            <a href="">
              <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/medium/public/2021-03/partner-logo-drupal-partner.png.webp?itok=329OcKN8" alt="" />
            </a>
          </div>
          <div className="col">
            <a href="">
              <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/medium/public/2021-03/partner-logo-drupal-partner.png.webp?itok=329OcKN8" alt="" />
            </a>
          </div>
          <div className="col">
            <a href="">
              <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/medium/public/2021-03/partner-logo-drupal-partner.png.webp?itok=329OcKN8" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="works">
        <div className="container">
          <h2 className="section_title">Some of our work</h2>
          <div className="">
            <div className="col">
              <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/half_screen/public/2021-03/lp-header-2.jpg.webp?itok=_0Okz2G-" alt="" />
            </div>
            <div className="col workText">
              <p>CASE STUDY: LIVEPERSON</p>
              <h3>Streamline operations to capitalize on growth opportunities and scale effectively.</h3>
              <hr/>
              <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com//sites/default/files/styles/content_image/public/2021-03/liveperson-logo.png.webp?itok=PxPKjRw0" alt="" />
              <p>How an open architecture bridged the gap between legacy and new product solutions to create an unparalleled customer experience and address sales objectives.</p>
              <button className='button'><a href="">View case study<i><FaChevronRight/></i></a></button>
            </div>
          </div>
          <div className="">
            <div className="col workText">
              <p>CASE STUDY: LIVEPERSON</p>
              <h3>Streamline operations to capitalize on growth opportunities and scale effectively.</h3>
              <hr/>
              <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com//sites/default/files/styles/content_image/public/2021-03/liveperson-logo.png.webp?itok=PxPKjRw0" alt="" />
              <p>How an open architecture bridged the gap between legacy and new product solutions to create an unparalleled customer experience and address sales objectives.</p>
              <button className='button'><a href="">View case study<i><FaChevronRight/></i></a></button>
            </div>
            <div className="col">
              <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/half_screen/public/2021-03/lp-header-2.jpg.webp?itok=_0Okz2G-" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerIntro">
          <h2 className='section_title'>Let's talk about your project</h2>
          <p>No matter what stage you are in, we would love to talk to you about your project. No pressure, no obligation, just straight talk and helpful insight.</p>
          <button className='button'><a href="">Get in touch<i><FaChevronRight/></i></a></button>
        </div>
        <div className="footerBody">
          <div className="col footerSocialIcon">
            <div >
              <ul className="row">
                <li>
                  <a href="" className="">
                    <svg viewBox="0 0 384 512" height="30"width="20"><path fill="gray" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path></svg>
                  </a>
                </li>
                <li>
                  <a href="" className="">
                    <svg viewBox="0 0 384 512" height="30"width="20"><path fill="gray" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path></svg>
                  </a>
                </li>
                <li>
                  <a href="" className="">
                    <svg viewBox="0 0 384 512" height="30"width="20"><path fill="gray" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path></svg>
                  </a>
                </li>
                <li>
                  <a href="" className="">
                    <svg viewBox="0 0 384 512" height="30"width="20"><path fill="gray" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col footerMenuIcon">
            <div >
              <ul className="row">
                <li>
                  <a href="" className="">
                    <svg viewBox="0 0 384 512" height="30"width="20"><path fill="gray" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path></svg>
                    <span>acronet</span>
                  </a>
                </li>
                <li>
                  <a href="" className="">
                    <svg viewBox="0 0 384 512" height="30"width="20"><path fill="gray" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path></svg>
                    <span>acronet</span>
                  </a>
                </li>
                <li>
                  <a href="" className="">
                    <svg viewBox="0 0 384 512" height="30"width="20"><path fill="gray" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path></svg>
                    <span>acronet</span>
                  </a>
                </li>
                <li>
                  <a href="" className="">
                    <svg viewBox="0 0 384 512" height="30"width="20"><path fill="gray" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path></svg>
                    <span>acronet</span>
                  </a>
                </li>
                <li>
                  <a href="" className="">
                    <svg viewBox="0 0 384 512" height="30"width="20"><path fill="gray" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path></svg>
                    <span>acronet</span>
                  </a>
                </li>
                <li>
                  <a href="" className="">
                    <svg viewBox="0 0 384 512" height="30"width="20"><path fill="gray" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path></svg>
                    <span>acronet</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col footerBodyIcon">
            <img src="./images/logoDefault.svg" alt="" />
          </div>
        </div>
        <div className="footerEnd">
          <p>2018 all right reserved acro media</p>
          <ul className="row">
            <li><a href="">Contact Us</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
    </>
  )
}

export default Material
