import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = "https://course-api.com/react-tabs-project";

function App() {
  
  const[loading, setLoading] = useState(true);
  const[jobs, setJobs] = useState([])
  const[index, setIndex] = useState(1);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <section className='section loading'>
      <h1>Loading....</h1>
    </section>
  }

  const{title, company, dates, duties} = jobs[index];

  return (
    <section className='section'>
      <div className='title'>
        <h2>expierience</h2>
        <div className='underline'></div>
      </div> 

      <div className='jobs-center'>
        
        <div className='btn-container'>
          {
            jobs.map((job, _index) => {
              return (
                <button onClick={()=> setIndex(_index)} className={`job-btn ${_index===index && 'active-btn'}`}>
                  {job.company}
                </button>
              );
            })
          }
        </div>

        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>

          {
            duties.map((duty, index) => {
                return <div key={index} className="job-desc">
                        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                        <p>{duty}</p>
                      </div>
            })
          }
        </article>
      </div> 
    </section>
  );
}

export default App;
