const revealTargets = document.querySelectorAll('.section, .card, .path-card, .hero-card');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
revealTargets.forEach((el)=>observer.observe(el));
