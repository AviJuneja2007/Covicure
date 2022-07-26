import React from 'react'
import DonorHeader from './donorheader.js';
import JoinDonor from './joindonor';
import FindDonor from './finddonor';

const DonorPage = () => {
    return (
        <>
            <div>
                <DonorHeader/>
                <JoinDonor/>
                <FindDonor/>
            </div>
        </>
    );
}

export default DonorPage