// Add confirmed profile URLs here. Blank entries remain clearly unavailable.
const links = { instagram: '', tiktok: '', x: '', exclusive: '' };
const labels = { instagram: 'Instagram', tiktok: 'TikTok', x: 'X' };
for (const [key, label] of Object.entries(labels)) {
 const element = document.createElement(links[key] ? 'a' : 'span');
 element.textContent = links[key] ? label : `${label} · soon`;
 if (links[key]) { element.href = links[key]; element.target = '_blank'; element.rel = 'noopener noreferrer'; }
 document.querySelector('#socials').append(element);
}
if (links.exclusive) {
 const link = document.createElement('a'); link.className = 'button';
 link.textContent = 'Visit exclusive content · 18+'; link.href = links.exclusive;
 link.target = '_blank'; link.rel = 'noopener noreferrer';
 document.querySelector('#exclusive-link').replaceChildren(link);
}
document.querySelector('#year').textContent = new Date().getFullYear();
const dialog = document.querySelector('#lightbox');
document.querySelectorAll('.photo').forEach(button => button.addEventListener('click', () => {
 const image = document.querySelector('#lightbox-image'); image.src = button.dataset.image;
 image.alt = button.querySelector('img').alt; dialog.showModal();
}));
document.querySelector('#close-lightbox').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
