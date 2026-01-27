 const display = document.calc.txt;
  const buttons = document.querySelectorAll(".calculator span");

  function pressButton(key) {
    buttons.forEach(btn => {
      const text = btn.innerText.trim();

      if (
        text === key ||
        (key === "Enter" && text === "=") ||
        (key === "Escape" && text === "C")
      ) {
        btn.classList.add("active-key");
        setTimeout(() => btn.classList.remove("active-key"), 150);
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    const key = e.key;

    // numbers & operators
    if (
      (key >= "0" && key <= "9") ||
      ["+", "-", "*", "/", "."].includes(key)
    ) {
      display.value += key;
      pressButton(key);
    }

    // Enter
    if (key === "Enter") {
      e.preventDefault();
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
      pressButton("=");
    }

    // Backspace
    if (key === "Backspace") {
      display.value = display.value.slice(0, -1);
    }

    // Clear
    if (key === "Escape" || key.toLowerCase() === "c") {
      display.value = "";
      pressButton("C");
    }
  });