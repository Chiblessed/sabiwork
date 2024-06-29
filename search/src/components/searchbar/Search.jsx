import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobContainer from '../jobcard/JobContainer';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState('Lagos, Nigeria'); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    

    
const url = `https://jsearch.p.rapidapi.com/search?query=${searchTerm}%20in%20${encodeURIComponent(location)}&page=1&num_pages=1&date_posted=all`
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
      console.log(data.data)
      setJobs(data.data); 
    } catch (error) {
      setError('Failed to fetch jobs. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <div className='flex items-center justify-center mt-10 mb-10 max-[600px]:ml-5  max-[600px]:mr-4'>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter job title or keywords"
          className=" w-64 border border-gray-300 rounded-md px-3 py-2 mr-2 max-[600px]:mb-4  max-[600px]:w-full focus:outline-none focus:border-blue-500"
        />
           <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className=" w-64 border border-gray-300 rounded-md px-3 py-2 mr-2  max-[600px]:mb-4  max-[600px]:w-full focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className=" w-64 bg-blue-500 text-white px-4 py-2 rounded-md font-semi-bold  max-[600px]:px-2 max-[600px]:w-32 max-[600px]:ml-28"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {jobs.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-300 text-center">Search Results:</h2>
          <ul>
            {jobs.map((job) => (
              <JobContainer key={job.job_id} job={job} />
            ))}
          </ul>
        </div>
      )}

      {jobs.length === 0 && !loading && (
        <p className="mt-4 text-lg font-semibold mb-4 text-gray-300 text-center">No jobs found. Try a different search term.</p>
      )}
    </div>
  );
};

export default Search;
