// module.exports = {
//     default: `--format-options '{"snippetInterface": "synchronous"}'`
//   }
// // module.exports = {
// //   require: ['./stepDefinitions/*.js'], 
// //   default: `--format-options '{"snippetInterface": "synchronous"}'`
// //  };

const common = `
  --require runner/assertions.js
  --require runner/hooks.js 
  --require features/step_definitions/steps.js
  `;

module.exports = {
  default: `${common} features/**/*.feature`
};