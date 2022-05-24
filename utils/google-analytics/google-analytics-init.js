import ReactGA from 'react-ga';

const googleAnalyticsActions = async(key)=> {
    ReactGA.intialize(key);
    ReactGA.pageview(window.location.parthname + window.location.search);

};

export {googleAnalyticsActions};
