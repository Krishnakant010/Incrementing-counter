const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const upDatecounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 300;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(upDatecounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  upDatecounter();
});
