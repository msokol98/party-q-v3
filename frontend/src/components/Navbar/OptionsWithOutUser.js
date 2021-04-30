import Button from 'components/Button';
import React from 'react';

const OptionsWithNoUser = () => (
    <div>
        <Button onClick={() => window.location = '/register'} className="is-info">
           Sign Up
        </Button>

        <Button onClick={() => window.location = '/login'} className="is-light">
            Log in
        </Button>
    </div>
);

export default OptionsWithNoUser;