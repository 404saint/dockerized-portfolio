document.addEventListener("DOMContentLoaded", () => {
  const commands = document.querySelectorAll(".cmd");
  const outputs = document.querySelectorAll(".output");

  commands.forEach((cmd, i) => {
    cmd.style.opacity = 0;
    outputs[i].style.opacity = 0;

    setTimeout(() => {
      cmd.style.transition = "opacity 0.5s";
      cmd.style.opacity = 1;

      setTimeout(() => {
        outputs[i].style.transition = "opacity 0.5s";
        outputs[i].style.opacity = 1;
      }, 300);
    }, i * 800);
  });
});
