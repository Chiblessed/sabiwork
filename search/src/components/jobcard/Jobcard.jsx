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
                    'x-rapidapi-key': '3778a616fdmsh3c51fa3bf7c68d2p102554jsn03e70fe6d47c',
                    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setSearchJobs(data.data); 
                console.log(data.data);
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
