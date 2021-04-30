import React from 'react';

const JoinParty = ({ bindAccessCode, error, handleSubmit }) => {

    return (
      <div>

        <h5 className="has-text-light">Or Join a Party</h5>

        <form onSubmit={handleSubmit}>
          <label className="has-text-light with-space-on-right">
            Access Code:
          </label> 
          <input type="text" {...bindAccessCode} maxLength={6} minLength={6} />

          <input type="submit" value="Submit" />

          {error && <><br /><br /><h6 className="has-text-light">{error}</h6></>}
        </form>
      </div>
    );
}

export default JoinParty;