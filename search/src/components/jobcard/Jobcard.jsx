import React, { useEffect, useState } from 'react';
import JobContainer from './JobContainer';

const Jobcard = () => {
    const [searchJobs, setSearchJobs] = useState([]);

   useEffect(() => {
    async function getJobs() {
        const url = 'https://jsearch.p.rapidapi.com/search?query=%20in%20Lagos%2CNigeria&page=1&num_pages=1&date_posted=all';
        const options = {
            method: 'GET',
            headers: {
             'x-rapidapi-key': '9eeeb04221mshc27105283636e04p1609b7jsn13a54bc8b37e',
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            // Ensure data.data is an array before setting state
            if (Array.isArray(data.data)) {
                setSearchJobs(data.data); 
            } else {
                console.log('Data format error:', data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    getJobs();

}, []);


    return (
        <>
            {searchJobs.length > 0 ? (
            searchJobs.map((job, index) => (
                <div key={index}>
                    <JobContainer job={job} />
                </div>
            ))
        ) : (
            <p className='text-lg font-semibold mb-4 text-gray-300 text-center'>No jobs found.</p>
        )}
        </>
    );
};

export default Jobcard;
