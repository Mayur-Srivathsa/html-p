// Get all the roadmap items
const roadmapItems = document.querySelectorAll('.roadmap-item h3');

// Add event listener to each header
roadmapItems.forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        
        // Toggle visibility
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
