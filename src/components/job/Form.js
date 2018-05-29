import React from 'react';


const JobForm = ({ handleSubmit, job }) => {
  return(
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" className="input" placeholder="Name" value={job.name} />
      </div>
      <div>
        
      </div>

    </form>
  );
};

export default JobForm;
