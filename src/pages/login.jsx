/**
 * DATE:26/01/2021
 * AUTHOR: Muhammad Minhaj
 * GITHUB_USERNAME: @dev-mdminhaj
 * TITLE: Login Page
 * DESCRIPTION: A simple login with facebook
 * * */
import { Card, CardContent, Container, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import style from '../styles/style.module.css';

function Login({ handleAuth }) {
    useEffect(() => {
        const script = document.createElement('script');

        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.src =
            'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v9.0&appId=3242641772502117&autoLogAppEvents=1';
        script.nonce = 'mpquc2qa';
        document.body.appendChild(script);
        window.fbAsyncInit = () => {
            /* global FB */
            FB.init({
                appId: process.env.REACT_APP_FB_APP_ID,
                cookie: true,
                xfbml: true,
                version: 'v9.0',
            });

            FB.AppEvents.logPageView();
            FB.getLoginStatus((response) => {
                handleAuth(response, FB);
            });
        };

        ((d, s, id) => {
            const fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            const js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    });

    return (
        <Container className={style.login__container}>
            <div>
                <Typography variant="h3" component="h3" align="center" color="textSecondary">
                    FB
                </Typography>
                <Typography variant="h4" component="h4" align="center" color="textPrimary">
                    - INVITATION TOOL -
                </Typography>
                <br />
                <br />
                <Card className={style.card}>
                    <CardContent>
                        <div id="fb-root">
                            <div
                                className="fb-login-button"
                                data-width=""
                                data-size="large"
                                data-button-type="continue_with"
                                data-layout="default"
                                data-auto-logout-link="false"
                                data-use-continue-as="false"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Container>
    );
}

Login.propTypes = {
    handleAuth: PropTypes.func.isRequired,
};
export default Login;
