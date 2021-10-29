import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { handleGoogleSignIn, user, handleLogOut } = useFirebase();
    console.log(user);
    return (
        <div>
            <button className="btn btn-danger" onClick={handleGoogleSignIn}>Google</button>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default Login;