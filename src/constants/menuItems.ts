import { paths } from "./paths";

export const Industries = [
  { title: "Bulk Material Handling", to: paths?.bulk },
  { title: "Material Handling", to: paths?.material },
];

export const primaryMenuItems = [
  { title: "About", to: paths?.about },
  { title: "Services", to: paths?.services },
  { title: "Industries", hasDropdown: true, menus: Industries },
  { title: "Blog", to: paths?.blog },
  { title: "Contact Us", to: paths?.contact },
];
