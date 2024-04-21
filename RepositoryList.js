
// RepositoryList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

function RepositoryList() {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10);

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/FenskyJ/repos`);
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const filteredAndPaginatedRepos = currentRepos.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="repository-list-container">
      <im></im>
      <h1>Festus's GitHub Repositories Portfolio</h1>
      <h3>This page is designed to fetch my Github repositories portfolio using GitHub API</h3>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
      <ul className="repo-list">
        {filteredAndPaginatedRepos.map(repo => (
          <li key={repo.id}>
            <Link to={`/repository/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={repos.length}
        paginate={paginate}
      />
    </div>
  );
}

export default RepositoryList;


