module.exports = {
  importOrder: [
    "^providers$",
    "^providers(/(.*))?$",

    "^assets(/(.*))?$",
    "^components(/(.*))?$",
    "^layout(/(.*))?$",
    "^pages(/(.*))?$",
    "^router(/(.*))?$",
    "^routes(/(.*))?$",
    "^theme(/(.*))?$",
    "^utils(/(.*))?$",

    // relative imports (. is technically any character, must escape for dot)

    "^\\.\\./\\.\\./\\.\\.(/(.*))?$", // ../../..*
    "^\\.\\./\\.\\.(/(.*))?$", // ../..*
    "^\\.\\.(/(.*))?$", // ..*
    "^\\.(/(.*))?$", // .*
  ],
  importOrderSeparation: true,
};
