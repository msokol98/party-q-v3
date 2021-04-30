import React from 'react';

const JoinParty = ({ bindAccessCode, error, handleSubmit }) => {

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Access Code:
          <input type="text" {...bindAccessCode} maxLength={6} minLength={6} />
        </label> 
        <input type="submit" value="Submit" />

        {error && <h6 className="error">{error}</h6>}
      </form>
    );
}

export default JoinParty;