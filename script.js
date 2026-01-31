// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

// Modal content (edit anytime)
const projects = {
  1: {
    title: "Social Media Campaign Concepts",
    desc: "A set of campaign ideas, hooks, and content angles designed to capture attention fast and stay on-brand. Replace this with your real example + what you delivered.",
    img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=70"
  },
  2: {
    title: "Brand Visual Direction",
    desc: "Mood, palette, typography, and visual references that guide a cohesive look. Replace with your brand board / creative direction work.",
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=70"
  },
  3: {
    title: "Short-Form Content Strategy",
    desc: "A simple strategy for what to post, how to structure videos, and how to keep content consistent. Replace with your process, templates, or results.",
    img: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=1600&q=70"
  },
  4: {
    title: "Creative Content + Copywriting",
    desc: "Captions, scripts, and creative concepts that match the brand voice and increase engagement. Replace with your best writing examples.",
    img: "https://images.unsplash.com/photo-1549893074-0b5f7f62b8b1?auto=format&fit=crop&w=1600&q=70"
  }
};

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

function openModal(id){
  const p = projects[id];
  if(!p) return;

  modalContent.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <p style="margin-top:14px; font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:rgba(31,31,31,.55);">
        Tip: replace the grid videos by uploading files named: assets/work1.mp4 ... assets/work4.mp4
      </p>
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => openModal(card.dataset.modal));
});

modal.addEventListener("click", (e) => {
  if(e.target?.dataset?.close === "true") closeModal();
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});
