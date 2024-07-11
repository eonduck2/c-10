const styleSetter = (element, styles) => {
  for (let key in styles) {
    element.style[key] = styles[key];
  }
};

const bodyStyles = {
  width: "var(--100vw)",
  height: "var(--100vh)",
  overflow: `hidden`,
};

const appStyles = {
  width: "var(--100vw)",
  height: "var(--100vh)",
  backgroundImage: "url(https://picsum.photos/id/1002/1440/1024)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "var(--100vw) var(--100vh)",
};

const wrapperStyles = {
  padding: "10%",
  paddingTop: "10%",
  width: "100%",
  height: "81.25rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
};

const containerStyles = {
  width: "var(--50p)",
  height: "30%",
  borderRadius: "30px",
  boxShadow: "2px 7px 15px 8px rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(30px)",
  overflowY: "scroll",
  msOverflowStyle: "none",
  paddingLeft: "6.25rem",
  paddingTop: "100px",
};

const titleContainerStyles = {
  display: "flex",
  alignItems: "center",
  width: "var(--100p)",
  height: "20%",
};

const arrowContainerStyles = {
  width: "62%",
  height: "3%",
  display: "flex",
  justifyContent: "flex-end",
};

const arrowStyles = {
  fontSize: "2.5rem",
  color: "white",
  cursor: "pointer",
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  root.style.setProperty("--100vw", "100vw");
  root.style.setProperty("--100vh", "100vh");
  root.style.setProperty("--100p", "100%");
  root.style.setProperty("--50p", "50%");

  styleSetter(document.body, bodyStyles);

  const app = document.getElementById("app");

  styleSetter(app, appStyles);

  const wrapper = document.getElementById("wrapper");

  styleSetter(wrapper, wrapperStyles);

  const contentsContainers = document.querySelectorAll(".contents-container");

  contentsContainers.forEach((container) => {
    styleSetter(container, containerStyles);
  });

  const style = document.createElement("style");
  style.textContent =
    ".contents-container::-webkit-scrollbar { display: none; }";
  document.head.appendChild(style);

  const titleContainers = document.querySelectorAll(".title-container");

  titleContainers.forEach((container) => {
    styleSetter(container, titleContainerStyles);
  });

  const spanContainers = document.querySelectorAll(".span-container");
  spanContainers.forEach((container) => {
    styleSetter(container, {
      width: "var(--100p)",
      height: "80%",
    });
  });

  const h1s = document.querySelectorAll("h1");
  h1s.forEach((h1) => {
    h1.style.width = "40%";
  });

  const hrs = document.querySelectorAll("hr");
  hrs.forEach((hr) => {
    hr.style.width = "var(--50p)";
  });

  const arrowContainer = document.getElementById("arrow-container");

  styleSetter(arrowContainer, arrowContainerStyles);

  const arrow = document.getElementById("arrow");

  styleSetter(arrow, arrowStyles);
});
