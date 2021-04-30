import Button from 'components/Button';
import React from 'react';

const OptionsWithUser = ({ logout }) => (
    <div>
        <Button onClick={() => window.location='/dashboard'} className='is-info'>
            Dashboard
        </Button>

        <Button onClick={logout} className='is-light'>
            Logout
        </Button>
        
    </div>
);

export default OptionsWithUser;