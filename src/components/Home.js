import React from 'react';

const Home = () => {
  return (
    <div className="">
      <div className="column">
        <h1 className="title is-1">PropManage</h1>
        <h1 className="subtitle is-5">What is PropManage?</h1>
      </div>
      <div className="column">
        <p className="title is-4">Managing Tenants</p>
        <p className="subtitle is-8">As a landlord, its easy to keep track of each house. Data displaying number of tenants and details about each tenant</p>
      </div>
      <div className="column">
        <p className="title is-4">Comunciation bewteen Landlord and Tenant</p>
        <p className="subtitle is-8">We aim at improving communication between landlord and tenant with the easy to use app</p>
      </div>
      <div className="column">
        <p className="title is-4">Reporting Issues</p>
        <p className="subtitle grey is-8">Log a maintance request about an issue in your flat, which is sent directly to your landlord</p>
      </div>

    </div>
  );
};
export default Home;
