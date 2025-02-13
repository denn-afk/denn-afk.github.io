document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  const projectList = document.getElementById('projectList');
  const projects = Array.from(projectList.children);

  // Function to filter projects based on search input
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    projects.forEach(project => {
      const name = project.dataset.name.toLowerCase();
      project.style.display = name.includes(query) ? 'flex' : 'none';
    });
  });

  // Function to sort projects
  sortSelect.addEventListener('change', () => {
    const sortBy = sortSelect.value;
    const sortedProjects = [...projects].sort((a, b) => {
      if (sortBy === 'name') {
        return a.dataset.name.localeCompare(b.dataset.name);
      } else if (sortBy === 'date') {
        return new Date(a.dataset.date) - new Date(b.dataset.date);
      }
    });

    projectList.innerHTML = '';
    sortedProjects.forEach(project => projectList.appendChild(project));
  });
});
