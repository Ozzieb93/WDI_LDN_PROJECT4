import React from 'react';

class Home extends React.Component {
  render() {
    // var carousel = bulmaCarousel.attach();
    return (
      <div>
        {/* <div className='carousel carousel-animated carousel-animate-slide' data-autoplay="true">
          <div className='carousel-container'>
            <div className='carousel-item has-background is-active'>
              <img className="is-background" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" width="640" height="310" />
              <div className="title">Merry Christmas</div>
            </div>
            <div className='carousel-item has-background'>
              <img className="is-background" src="https://wikiki.github.io/images/singer.jpg" alt="" width="640" height="310" />
              <div className="title">Original Gift: Offer a song with <a href="https://lasongbox.com" target="_blank">La Song Box</a></div>
            </div>
            <div className='carousel-item has-background'>
              <img className="is-background" src="https://wikiki.github.io/images/sushi.jpg" alt="" width="640" height="310" />
              <div className="title">Sushi time</div>
            </div>
            <div className='carousel-item has-background'>
              <img className="is-background" src="https://wikiki.github.io/images/life.jpg" alt="" width="640" height="310" />
              <div className="title">Life</div>
            </div>
          </div>
          <div className="carousel-navigation is-centered">
            <div className="carousel-nav-left">
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div className="carousel-nav-right">
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
          </div>
        </div> */}

        <div className="home-info">
          <div className="column">
            <img className="home-logo" src="assets/logo.png" />
            <h1 className="title is-1">PropManage </h1>
            <h1 className="subtitle is-5">What is PropManage?</h1>
          </div>
          <div className="column">
            <p className="title is-4">Managing Tenants</p>
            <p className="subtitle is-8">As a landlord, its easy to keep track of each house. Data displaying number of tenants and details about each tenant</p>
          </div>
          <div className="column">
            <p className="title is-4">Reporting Issues</p>
            <p className="subtitle grey is-8">Log a maintance request about an issue in your flat, which is sent directly to your landlord</p>
          </div>
          <div className="column">
            <p className="title is-4">Comunciation bewteen Landlord and Tenant</p>
            <p className="subtitle is-8">We aim at improving communication between landlord and tenant with the easy to use app</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
