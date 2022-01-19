import {
  Links,
  LiveReload,
  Meta,
  React,
  Scripts,
  ScrollRestoration,
  import_react_router_dom,
  init_react
} from "/build/_shared/chunk-TBBRTZYK.js";

// browser-route-module:C:\Users\Carl\Desktop\my-remix-app\app\root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/app.css
var app_default = "/build/_assets/app-RRVSI6TV.css";

// app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => {
  return { title: "REMIX APP 2022" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-JXCEBY7E.js.map
