export const Xrotate = (ElementID, ClassN, ClassN2) => {
  const observer = new IntersectionObserver((Enteries) => {
    Enteries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.getElementById(ElementID).classList.remove(`${ClassN2}`);
        document.getElementById(ElementID).classList.add(`${ClassN}`);
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(document.getElementById(ElementID));
  return observer;
};
export const ShowTextt = (ElementID, Direction) => {
  document.querySelectorAll(`.${ElementID}`).forEach((e, n) => {
    document;
    Direction == "ltr"
    ? e.setAttribute("style", `--direction:0%`)
    : e.setAttribute("style",`--direction:200%`);
    e.setAttribute("style", `--order:${n + 1}`);
  });
 
  const observer = new IntersectionObserver((Enteries) => {
    Enteries.forEach((entry) => {
      if (entry.isIntersecting) {
        //   console.log(entry.target.classList)
        entry.target.classList.remove("HIdeText");
        entry.target.classList.add("ShowText");
        observer.unobserve(entry.target);
      } else {
        //   console.log(entry.target.classList)
        entry.target.classList.remove("ShowText");
        entry.target.classList.add("HIdeText");
      }
    });
  });
  document.querySelectorAll(`.${ElementID}`).forEach((e) => {
    observer.observe(e);
  });
};
export const ScrollToTopPAge = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
  } 