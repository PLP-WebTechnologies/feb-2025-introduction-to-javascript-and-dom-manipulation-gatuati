function changeText() {
    document.getElementById("main-heading").textContent = "JavaScript is Awesome!";
    document.getElementById("description").textContent = "The text has been changed dynamically.";
  }
  
  function changeStyle() {
    const desc = document.getElementById("description");
    desc.style.color = "white";
    desc.style.backgroundColor = "teal";
    desc.style.padding = "10px";
    desc.style.borderRadius = "8px";
  }
  
  function toggleElement() {
    const existing = document.getElementById("extra");
    if (existing) {
      existing.remove();
    } else {
      const newPara = document.createElement("p");
      newPara.id = "extra";
      newPara.textContent = "This is a new element added to the DOM.";
      document.body.appendChild(newPara);
    }
  }
  