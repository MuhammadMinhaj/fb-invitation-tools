/**
 * DATE:26/01/2021
 * AUTHOR: Muhammad Minhaj
 * GITHUB_USERNAME: @dev-mdminhaj
 * TITLE: Application Interface
 * DESCRIPTION: This is main application page
 * * */
import { useState } from 'react';
import pages from './pages';

const { Login, Dashboard } = pages;

function App() {
    const [auth, setAuth] = useState(false);

    const reqForGroups = (info, fb) => {
        fb.api(
            `https://graph.facebook.com/${info.authResponse.userID}/groups`,
            'get',
            { admin_only: true, access_token: info.authResponse.accessToken },
            (res, d) => {
                console.log('API RESPONSED', res, d);
            }
        );
    };
    const handleAuth = (res, fb) => {
        console.log('Called Auth Handler', res);
        reqForGroups(res, fb);
        if (res.status === 'connected') {
            return setAuth(true);
        }
        return setAuth(false);
    };

    if (auth) {
        return <Dashboard />;
    }

    return <Login handleAuth={handleAuth} />;
}

export default App;
