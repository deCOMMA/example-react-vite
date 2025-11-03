export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "selector-class-pattern": null, // отключает проверку имен классов (для CSS Modules)

    "color-named": "never",
  },
};
