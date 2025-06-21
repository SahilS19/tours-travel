function downloadBrochure(id) {
  const element = document.getElementById(id);
  const opt = {
    margin:       0.5,
    filename:     `${id}-brochure.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
}

document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting us! We'll get back to you soon.");
});
