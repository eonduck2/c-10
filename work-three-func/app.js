const createEle = (tagName, ...classes) => {
  const element = document.createElement(tagName);

  if (classes.length > 0) {
    classes.forEach((className) => {
      element.classList.add(className);
    });
  }

  return element;
};

const appending = (parent, child) => {
  if (!parent || !child) {
    return;
  }

  parent.appendChild(child);
};

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

const rootStyles = {
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

const spanContainerStyles = {
  width: "var(--100p)",
  height: "80%",
};

const h1Styles = {
  width: "40%",
};

const hrStyles = {
  width: "var(--50p)",
};

const root = document.getElementById(`root`);
const wrapper = createEle("div");
wrapper.id = "wrapper";
const first_contents_container = createEle("div", "contents-container");
const second_contents_container = createEle("div", "contents-container");

const first_title_container = createEle("div", "title-container");
const second_title_container = createEle("div", "title-container");
const firstH1 = createEle("h1");
firstH1.textContent = "INDENTATION";
const secondH1 = createEle("h1");
secondH1.textContent = "EXCLUSIVE";
const firstHr = createEle("hr");
const secondHr = createEle("hr");
const first_span_container = createEle("div", "span-container");
const second_span_container = createEle("div", "span-container");
const firstSpan = createEle("span");
firstSpan.textContent = `Lorem ipsum dolor sit amet consectetur. A eu id mollis
pellentesque tellus bibendum sagittis. Eu nunc eu sed nec nisi.
Leo eget urna id congue fusce in venenatis sagittis id. Pretium
egestas id morbi eget id commodo adipiscing. Orci vitae aliquam
tincidunt vulputate consectetur netus facilisis facilisis nulla.
Pellentesque blandit lacus mattis mauris facilisi blandit at
pharetra. Nulla quis tellus in felis sagittis viverra viverra ac.
Vestibulum quam dui amet cursus amet dictum vitae felis molestie.
Malesuada eget pellentesque quis nec euismod. A nisi vel elit cras
facilisis sed nunc egestas quis. Neque aliquam vitae facilisis
blandit. Donec lacus nunc massa sed pellentesque nam eget gravida
tortor. Dignissim ac nulla mi suspendisse viverra mollis rhoncus.
Sed hendrerit risus nunc gravida pellentesque tellus a vel
molestie. Condimentum massa ut porttitor mi. Elit nunc ut dictum
feugiat mauris risus libero. Faucibus urna tellus scelerisque sit
ac sed dui. Sit dictum facilisis tempor elementum morbi sapien
egestas. In ultricies tincidunt vitae consequat volutpat nascetur
rhoncus a ac. Quis pharetra neque ac vivamus tempor. Integer
aliquet ac egestas nulla massa amet elit nec. Mauris ullamcorper
amet lectus vitae est sagittis ut. Urna lacinia non massa velit et
etiam erat neque sit. Lectus vulputate consequat faucibus mattis
dol or eget. Faucibus enim hendrerit sagittis diam ridiculus.
Nascetur vel eget mi purus ultrices vitae augue vel nunc. Faucibus
sit elementum consequat tristique orci turpis in non sit. Nunc
mattis risus tincidunt amet libero libero. Bibendum nunc tristique
donec sagittis dictumst consequat. Amet urna in quisque consequat
nisi lectus et tempor diam. Ultrices aliquam a volutpat arcu est.
Semper cras ipsum lectus ut arcu ac. Netus eget quam varius
pharetra at pulvinar orci. Lacus et porttitor arcu vitae sociis.
Suspendisse tempus leo leo enim. Proin et nibh amet et
sollicitudin a enim etiam lectus. Tincidunt euismod placerat ut
amet. Pellentesque malesuada nunc suspendisse nulla ornare laoreet
maecenas. Sed ut cilisis augue auctor. Sagittis ac sapien viverra
ultricies non sed mauris interdum. Lorem non nec pellentesque
imperdiet eget quis. Malesuada pulvinar turpis tortor eu mauris
sed. Lectus laoreet augue mauris ut adipiscing ut nulla. Vitae
nibh in neque curabitur. Tempus velit pellentesque cursus
elementum faucibus massa maecenas. Aliquam ac in nulla etiam
facilisi vitae amet. Ut aenean in sed eget blandit id morbi
congue. Enim vitae nec blandit sed. Non facilisi neque eu vel.`;

const secondSpan = createEle("span");
secondSpan.textContent = `Lorem ipsum dolor sit amet consectetur. A eu id mollis
pellentesque tellus bibendum sagittis. Eu nunc eu sed nec nisi.
Leo eget urna id congue fusce in venenatis sagittis id. Pretium
egestas id morbi eget id commodo adipiscing. Orci vitae aliquam
tincidunt vulputate consectetur netus facilisis facilisis nulla.
Pellentesque blandit lacus mattis mauris facilisi blandit at
pharetra. Nulla quis tellus in felis sagittis viverra viverra ac.
Vestibulum quam dui amet cursus amet dictum vitae felis molestie.
Malesuada eget pellentesque quis nec euismod. A nisi vel elit cras
facilisis sed nunc egestas quis. Neque aliquam vitae facilisis
blandit. Donec lacus nunc massa sed pellentesque nam eget gravida
tortor. Dignissim ac nulla mi suspendisse viverra mollis rhoncus.
Sed hendrerit risus nunc gravida pellentesque tellus a vel
molestie. Condimentum massa ut porttitor mi. Elit nunc ut dictum
feugiat mauris risus libero. Faucibus urna tellus scelerisque sit
ac sed dui. Sit dictum facilisis tempor elementum morbi sapien
egestas. In ultricies tincidunt vitae consequat volutpat nascetur
rhoncus a ac. Quis pharetra neque ac vivamus tempor. Integer
aliquet ac egestas nulla massa amet elit nec. Mauris ullamcorper
amet lectus vitae est sagittis ut. Urna lacinia non massa velit et
etiam erat neque sit. Lectus vulputate consequat faucibus mattis
dol or eget. Faucibus enim hendrerit sagittis diam ridiculus.
Nascetur vel eget mi purus ultrices vitae augue vel nunc. Faucibus
sit elementum consequat tristique orci turpis in non sit. Nunc
mattis risus tincidunt amet libero libero. Bibendum nunc tristique
donec sagittis dictumst consequat. Amet urna in quisque consequat
nisi lectus et tempor diam. Ultrices aliquam a volutpat arcu est.
Semper cras ipsum lectus ut arcu ac. Netus eget quam varius
pharetra at pulvinar orci. Lacus et porttitor arcu vitae sociis.
Suspendisse tempus leo leo enim. Proin et nibh amet et
sollicitudin a enim etiam lectus. Tincidunt euismod placerat ut
amet. Pellentesque malesuada nunc suspendisse nulla ornare laoreet
maecenas. Sed ut cilisis augue auctor. Sagittis ac sapien viverra
ultricies non sed mauris interdum. Lorem non nec pellentesque
imperdiet eget quis. Malesuada pulvinar turpis tortor eu mauris
sed. Lectus laoreet augue mauris ut adipiscing ut nulla. Vitae
nibh in neque curabitur. Tempus velit pellentesque cursus
elementum faucibus massa maecenas. Aliquam ac in nulla etiam
facilisi vitae amet. Ut aenean in sed eget blandit id morbi
congue. Enim vitae nec blandit sed. Non facilisi neque eu vel.`;
const arrow_container = createEle("div");
arrow_container.id = "arrow-container";
const arrow = createEle("i", "fa-solid", "fa-chevron-up");
arrow.id = "arrow";

window.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent =
    ".contents-container::-webkit-scrollbar { display: none; }";
  document.head.appendChild(style);

  const html = document.documentElement;

  html.style.setProperty("--100vw", "100vw");
  html.style.setProperty("--100vh", "100vh");
  html.style.setProperty("--100p", "100%");
  html.style.setProperty("--50p", "50%");

  appending(root, wrapper);
  appending(wrapper, first_contents_container);
  appending(wrapper, arrow_container);
  appending(wrapper, second_contents_container);
  appending(first_contents_container, first_title_container);
  appending(first_contents_container, first_span_container);
  appending(first_title_container, firstH1);
  appending(first_title_container, firstHr);
  appending(first_span_container, firstSpan);
  appending(arrow_container, arrow);
  appending(second_contents_container, second_title_container);
  appending(second_contents_container, second_span_container);
  appending(second_title_container, secondH1);
  appending(second_title_container, secondHr);
  appending(second_span_container, secondSpan);

  styleSetter(document.body, bodyStyles);
  styleSetter(root, rootStyles);
  styleSetter(wrapper, wrapperStyles);
  styleSetter(first_contents_container, containerStyles);
  styleSetter(arrow_container, arrowContainerStyles);
  styleSetter(arrow, arrowStyles);
  styleSetter(second_contents_container, containerStyles);
  styleSetter(first_title_container, titleContainerStyles);
  styleSetter(first_span_container, spanContainerStyles);
  styleSetter(firstH1, h1Styles);
  styleSetter(firstHr, hrStyles);
  styleSetter(second_title_container, titleContainerStyles);
  styleSetter(second_span_container, spanContainerStyles);
  styleSetter(secondH1, h1Styles);
  styleSetter(secondHr, hrStyles);
});
