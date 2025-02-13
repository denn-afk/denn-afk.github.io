// 搜索功能
document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const projects = document.querySelectorAll('#projectList li');
    projects.forEach(project => {
      const name = project.dataset.name.toLowerCase();
      project.style.display = name.includes(searchValue) ? '' : 'none';
    });
  });
  
// 排序功能
document.getElementById('sortSelect').addEventListener('change', function () {
const sortBy = this.value;
const projectList = document.getElementById('projectList');
const projects = Array.from(projectList.children);

projects.sort((a, b) => {
    if (sortBy === 'name') {
    return a.dataset.name.localeCompare(b.dataset.name);
    } else if (sortBy === 'date') {
    return new Date(a.dataset.date) - new Date(b.dataset.date);
    }
});

projects.forEach(project => projectList.appendChild(project));
});
  