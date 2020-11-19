import React from 'react';
import HeaderArea from '../components/HeaderArea'
import MainArea from '../components/MainArea';

const Home = props => {
    console.log('Home -> props', props)
    return(
        <div>
          <HeaderArea/>
          <MainArea/>
        </div>
    )
}

export default Home