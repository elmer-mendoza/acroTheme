import React from 'react'

function Insight() {
    return (
        <div className='insight'>
            <div className="row">
              Insights from our team  
            </div>
            <div className="row">
              More articles  
            </div>
            <div className="row">
                <div className="insightCard">
                    <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/card/public/2021-03/acro-blog-web-design-and-conversion-points.jpg.webp?itok=e_q4qYvJ%22" alt="" />
                    <a  href="">
                        <h2>Must Have Requirements for Your Ecommerce Site</h2>
                        <p>Read article</p>
                    </a>
                </div>
                <div className="insightCard">
                    <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/card/public/2021-03/acro-blog-web-design-and-conversion-points.jpg.webp?itok=e_q4qYvJ%22" alt="" />
                    <h2>Ecommerce Business Life Cycle Technology Requirements</h2>
                    <button>Read article</button>
                </div>
                <div className="insightCard">
                    <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/card/public/2021-03/acro-blog-web-design-and-conversion-points.jpg.webp?itok=e_q4qYvJ%22" alt="" />
                    <h2>How to Create a Product Catalog with Search API, Solr and Facets</h2>
                    <button>Read article</button>
                </div>
                <div className="insightCard">
                    <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/card/public/2021-03/acro-blog-web-design-and-conversion-points.jpg.webp?itok=e_q4qYvJ%22" alt="" />
                    <h2>Drupal Commerce Checkout: An Example of Being Headless Ready</h2>
                    <button>Read article</button>
                </div>
            </div>
            
        </div>
    )
}

export default Insight


