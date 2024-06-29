import React, { useState } from 'react';


const JobContainer = ({job}) => {
    const [open, setOpen] = useState(false);
    
    function handleClick(){
setOpen(!open)
}
const renderQualifications = () => {
  if (job.job_highlights && job.job_highlights.Qualifications && job.job_highlights.Qualifications.length > 0) {
    return (
      <ul>
        {job.job_highlights.Qualifications.map((qualification, index) => (
          <li key={index}>{qualification}</li>
        ))}
      </ul>
    );
  } else {
    return <p>No Qualifications listed.</p>; 
  }
};
const renderRequirements = () => {
  if (job.job_highlights && job.job_highlights.Responsibilities && job.job_highlights.Responsibilities.length > 0) {
    return (
      <ul>
        {job.job_highlights.Responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    );
  } else {
    return <p>No Responsibilities listed.</p>; 
  }
};

const renderBenefits = () => {
  if (job.job_highlights && job.job_highlights.Benefits && job.job_highlights.Benefits.length > 0) {
    return (
      <ul>
        {job.job_highlights.Benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    );
  } else {
    return <p>No Benefit listed.</p>; 
  }
};
const showSkills = () => {
  if(job.job_required_skills && job.job_required_skills.length > 0){
    return( 
    <ul>
      <ul>
            {job.job_required_skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
    </ul> 
    )
  } else {
    return(
      <p>No Skill Listed</p>
    )
  }
}
  return (
    <div className='mx-40 mb-4  bg-zinc-200 rounded-md  max-[600px]:mx-4'>
    <div className='flex justify-between items-center  max-[600px]:flex max-[600px]:flex-col    px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
       
       <div className='flex flex-col items-start gap-3'> 
         <h1 className='text-lg font-semibold'>{job.job_title}-{job.employer_name}</h1>
        <p >{job.job_employment_type} &#x2022;  {job.job_city}-{job.job_country}</p>
        
    </div>
   
   
    
    <div className='flex items-center gap-4'>
<a href={job.job_apply_link}  className='text-white bg-blue-500 border border-blue-500  max-[600px]:mt-4 max-[600px]:px-8 px-10 py-2 rounded-md'>Apply</a>
<button
 className='text-black border border-blue-500 px-10 py-2  max-[600px]:mt-4 max-[600px]:px-8 rounded-md hover:bg-blue-500 hover:text-white' 
 onClick={()=> handleClick()}>
    {open ? 'Hide Details' : 'View Details'}
 </button>
 

    </div>
    
   
</div>
{open && (
        <div className='px-6 py-4 bg-zinc-200 rounded-sm  shadow-lg'>
          <h2 className='text-lg font-semibold mb-2'>Job Details</h2>
          <p>{job.job_description}</p>
          <h2 className='font-semibold mt-3'>Job Qualifications</h2>
          <ul>
         <li>{renderQualifications()}</li>
           </ul>
           <h2 className='font-semibold mt-3'>Skills</h2>
           <ul>
           <li>{showSkills()}</li>
          </ul>
          
           <h2 className='font-semibold mt-3'>Job Responsibilities</h2>
           <ul>
            <li>{renderRequirements()}</li>
           </ul>
           <h2 className='font-semibold mt-3'>Benefit</h2>
           <ul>
            <li>{renderBenefits()}</li>
           </ul>
        </div>
      )}

</div>
  )
}

export default JobContainer