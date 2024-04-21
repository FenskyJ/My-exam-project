
// RepositoryDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RepositoryDetail() {
  const [repo, setRepo] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/FenskyJ/${name}`);
        const data = await response.json();
        setRepo(data);
      } catch (error) {
        console.error('Error fetching repository details:', error);
      }
    };
    fetchRepo();
  }, [name]);

  if (!repo) return <div>Loading...</div>;

  return (
    <div className='Repo-detail'>
      <h2><a href={repo.html_url}>{repo.name}</a></h2>
      <p>{repo.description}</p>
      <p>This is an assignment I did during my first semester with Altschool Africa</p>
      <p>It was uploaded on GitHub and submitted using a GitHub link </p>
      <p>Click on the assignment to check it out on GitHub </p>
    </div>
  );
}

export default RepositoryDetail;

