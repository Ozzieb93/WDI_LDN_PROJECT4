import React from 'react';
// import AutoComplete from '../common/AutoComplete';

const UserForm = ({ handleChange, handleSubmit, user, errors }) => {
  const formInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" className="input" placeholder="Name" onChange={handleChange} value={user.name || ''} />
        {errors.name && <small>{errors.name}</small>}
      </div>
      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" className="textarea" placeholder="Description" onChange={handleChange} value={user.description || ''} />
        {errors.description && <small>{errors.description}</small>}
      </div>
      <div className="field">
        <label htmlFor="image">Image</label>
        <input id="image" name="image" className="input" placeholder="Image" onChange={handleChange} value={user.image || ''} />
        {errors.image && <small>{errors.image}</small>}
      </div>
      <div className="field">
        <label htmlFor="address">Address</label>
        <input id="address" name="address" className="input" placeholder="Address" onChange={handleChange} value={user.address || ''} />
        {errors.address && <small>{errors.address}</small>}
      </div>
      <button disbaled={formInvalid} className="button is-primary">Submit</button>
    </form>
  );
};

export default UserForm;
