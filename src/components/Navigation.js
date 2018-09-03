import React from 'react';

const Navigation = () => {
    return (
        <nav className="flex justify-between bg-navy bb b--white-10">
            <a className="pa2 v-mid mid-gray link dim ml5" href="https://freecodecamp.org" target="_blank" title="FCC Homepage">
                <img src="https://pbs.twimg.com/profile_images/782132102368223232/yJxwuI1g_400x400.jpg" className="dib w2 h2 br-100" alt="Site Name" />
            </a>
            <div className="flex-grow pa2 flex items-center">
                {/*<a className="f6 link dib white dim mr3 mr4-ns" href="./Charts">User Profiles</a>
                <a className="f6 link dib white dim mr3 mr4-ns" href="./LeaderBoard">LeaderBoard</a> */}
                <a className="f6 mr2 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="./user-profiles">User Profiles</a>
                <a className="f6 mr2 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="./leaderboard">Leaderboard</a>
            </div>
        </nav>
    );
}

export default Navigation;