/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ParticlesBG.jsx":
/*!************************************!*\
  !*** ./components/ParticlesBG.jsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ParticlesBG)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction ParticlesBG() {\n    const [drops, setDrops] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const count = 60; // global background: subtle and performant\n        const newDrops = Array.from({\n            length: count\n        }).map((_, i)=>{\n            const depth = Math.random(); // 0 (far) -> 1 (near)\n            const size = 2 + depth * 4; // 2-6px\n            return {\n                id: i,\n                depth,\n                left: Math.random() * 100,\n                size,\n                startY: -20 - Math.random() * 100,\n                delay: Math.random() * 4,\n                duration: 16 + (1 - depth) * 10,\n                opacity: 0.2 + depth * 0.5,\n                drift: (depth - 0.5) * 8\n            };\n        });\n        setDrops(newDrops);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"aria-hidden\": true,\n        className: \"pointer-events-none fixed inset-0 z-0 hidden md:block\",\n        children: drops.map((d)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"absolute rounded-full\",\n                style: {\n                    left: `${d.left}vw`,\n                    width: d.size,\n                    height: d.size,\n                    opacity: d.opacity,\n                    top: `${d.startY}%`,\n                    background: \"radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.25) 70%, rgba(255,255,255,0) 100%)\",\n                    boxShadow: \"0 0 8px rgba(255,255,255,0.25)\"\n                },\n                initial: {\n                    top: `${d.startY}%`,\n                    left: `${d.left}vw`\n                },\n                animate: {\n                    top: \"110%\",\n                    left: `${d.left + d.drift}vw`\n                },\n                transition: {\n                    duration: d.duration,\n                    delay: d.delay,\n                    repeat: Infinity,\n                    ease: \"linear\"\n                }\n            }, d.id, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\no_bull_portfolio\\\\components\\\\ParticlesBG.jsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\no_bull_portfolio\\\\components\\\\ParticlesBG.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhcnRpY2xlc0JHLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0w7QUFFeEIsU0FBU0c7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sUUFBUSxJQUFJLDJDQUEyQztRQUM3RCxNQUFNQyxXQUFXQyxNQUFNQyxJQUFJLENBQUM7WUFBRUMsUUFBUUo7UUFBTSxHQUFHSyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0M7WUFDckQsTUFBTUMsUUFBUUMsS0FBS0MsTUFBTSxJQUFJLHNCQUFzQjtZQUNuRCxNQUFNQyxPQUFPLElBQUlILFFBQVEsR0FBRyxRQUFRO1lBQ3BDLE9BQU87Z0JBQ0xJLElBQUlMO2dCQUNKQztnQkFDQUssTUFBTUosS0FBS0MsTUFBTSxLQUFLO2dCQUN0QkM7Z0JBQ0FHLFFBQVEsQ0FBQyxLQUFLTCxLQUFLQyxNQUFNLEtBQUs7Z0JBQzlCSyxPQUFPTixLQUFLQyxNQUFNLEtBQUs7Z0JBQ3ZCTSxVQUFVLEtBQUssQ0FBQyxJQUFJUixLQUFJLElBQUs7Z0JBQzdCUyxTQUFTLE1BQU1ULFFBQVE7Z0JBQ3ZCVSxPQUFPLENBQUNWLFFBQVEsR0FBRSxJQUFLO1lBQ3pCO1FBQ0Y7UUFDQVQsU0FBU0U7SUFDWCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2tCO1FBQUlDLGFBQVc7UUFBQ0MsV0FBVTtrQkFDeEJ2QixNQUFNTyxHQUFHLENBQUMsQ0FBQ2lCLGtCQUNWLDhEQUFDMUIsaURBQU1BLENBQUN1QixHQUFHO2dCQUVURSxXQUFVO2dCQUNWRSxPQUFPO29CQUNMVixNQUFNLENBQUMsRUFBRVMsRUFBRVQsSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDbkJXLE9BQU9GLEVBQUVYLElBQUk7b0JBQ2JjLFFBQVFILEVBQUVYLElBQUk7b0JBQ2RNLFNBQVNLLEVBQUVMLE9BQU87b0JBQ2xCUyxLQUFLLENBQUMsRUFBRUosRUFBRVIsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDbkJhLFlBQ0U7b0JBQ0ZDLFdBQVc7Z0JBQ2I7Z0JBQ0FDLFNBQVM7b0JBQUVILEtBQUssQ0FBQyxFQUFFSixFQUFFUixNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUFFRCxNQUFNLENBQUMsRUFBRVMsRUFBRVQsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFBQztnQkFDcERpQixTQUFTO29CQUFFSixLQUFLO29CQUFRYixNQUFNLENBQUMsRUFBRVMsRUFBRVQsSUFBSSxHQUFHUyxFQUFFSixLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUFDO2dCQUN0RGEsWUFBWTtvQkFBRWYsVUFBVU0sRUFBRU4sUUFBUTtvQkFBRUQsT0FBT08sRUFBRVAsS0FBSztvQkFBRWlCLFFBQVFDO29CQUFVQyxNQUFNO2dCQUFTO2VBZGhGWixFQUFFVixFQUFFOzs7Ozs7Ozs7O0FBbUJuQiIsInNvdXJjZXMiOlsid2VicGFjazovL25vLWJ1bGwtcG9ydGZvbGlvLy4vY29tcG9uZW50cy9QYXJ0aWNsZXNCRy5qc3g/YWViYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJ0aWNsZXNCRygpIHtcbiAgY29uc3QgW2Ryb3BzLCBzZXREcm9wc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IDYwOyAvLyBnbG9iYWwgYmFja2dyb3VuZDogc3VidGxlIGFuZCBwZXJmb3JtYW50XG4gICAgY29uc3QgbmV3RHJvcHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBjb3VudCB9KS5tYXAoKF8sIGkpID0+IHtcbiAgICAgIGNvbnN0IGRlcHRoID0gTWF0aC5yYW5kb20oKTsgLy8gMCAoZmFyKSAtPiAxIChuZWFyKVxuICAgICAgY29uc3Qgc2l6ZSA9IDIgKyBkZXB0aCAqIDQ7IC8vIDItNnB4XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogaSxcbiAgICAgICAgZGVwdGgsXG4gICAgICAgIGxlZnQ6IE1hdGgucmFuZG9tKCkgKiAxMDAsIC8vIHZ3IHBlcmNlbnRhZ2VcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgc3RhcnRZOiAtMjAgLSBNYXRoLnJhbmRvbSgpICogMTAwLCAvLyBzdGFydCBiZXR3ZWVuIC0yMCUgYW5kIC0xMjAlXG4gICAgICAgIGRlbGF5OiBNYXRoLnJhbmRvbSgpICogNCwgLy8gMC00c1xuICAgICAgICBkdXJhdGlvbjogMTYgKyAoMSAtIGRlcHRoKSAqIDEwLCAvLyAxNi0yNnMsIGZhcnRoZXIgPSBzbG93ZXJcbiAgICAgICAgb3BhY2l0eTogMC4yICsgZGVwdGggKiAwLjUsIC8vIC4yLS43XG4gICAgICAgIGRyaWZ0OiAoZGVwdGggLSAwLjUpICogOCwgLy8gLTR2dyAuLiArNHZ3XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHNldERyb3BzKG5ld0Ryb3BzKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBhcmlhLWhpZGRlbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGZpeGVkIGluc2V0LTAgei0wIGhpZGRlbiBtZDpibG9ja1wiPlxuICAgICAge2Ryb3BzLm1hcCgoZCkgPT4gKFxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGtleT17ZC5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBsZWZ0OiBgJHtkLmxlZnR9dndgLFxuICAgICAgICAgICAgd2lkdGg6IGQuc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogZC5zaXplLFxuICAgICAgICAgICAgb3BhY2l0eTogZC5vcGFjaXR5LFxuICAgICAgICAgICAgdG9wOiBgJHtkLnN0YXJ0WX0lYCxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgIFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzNSUgMzUlLCByZ2JhKDI1NSwyNTUsMjU1LDAuOTUpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuNykgNDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMjUpIDcwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKVwiLFxuICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMCA4cHggcmdiYSgyNTUsMjU1LDI1NSwwLjI1KVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgaW5pdGlhbD17eyB0b3A6IGAke2Quc3RhcnRZfSVgLCBsZWZ0OiBgJHtkLmxlZnR9dndgIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB0b3A6IFwiMTEwJVwiLCBsZWZ0OiBgJHtkLmxlZnQgKyBkLmRyaWZ0fXZ3YCB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IGQuZHVyYXRpb24sIGRlbGF5OiBkLmRlbGF5LCByZXBlYXQ6IEluZmluaXR5LCBlYXNlOiBcImxpbmVhclwiIH19XG4gICAgICAgIC8+KVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIlBhcnRpY2xlc0JHIiwiZHJvcHMiLCJzZXREcm9wcyIsImNvdW50IiwibmV3RHJvcHMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJfIiwiaSIsImRlcHRoIiwiTWF0aCIsInJhbmRvbSIsInNpemUiLCJpZCIsImxlZnQiLCJzdGFydFkiLCJkZWxheSIsImR1cmF0aW9uIiwib3BhY2l0eSIsImRyaWZ0IiwiZGl2IiwiYXJpYS1oaWRkZW4iLCJjbGFzc05hbWUiLCJkIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJyZXBlYXQiLCJJbmZpbml0eSIsImVhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ParticlesBG.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ParticlesBG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ParticlesBG */ \"./components/ParticlesBG.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ParticlesBG__WEBPACK_IMPORTED_MODULE_2__]);\n_components_ParticlesBG__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `relative min-h-screen bg-[#0D0F10] font-serif`,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ParticlesBG__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\no_bull_portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\no_bull_portfolio\\\\pages\\\\_app.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\no_bull_portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\no_bull_portfolio\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDcUI7QUFFckMsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVyxDQUFDLDZDQUE2QyxDQUFDOzswQkFFN0QsOERBQUNMLCtEQUFXQTs7Ozs7MEJBRVosOERBQUNJO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDSDtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vLWJ1bGwtcG9ydGZvbGlvLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgUGFydGljbGVzQkcgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFydGljbGVzQkdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBtaW4taC1zY3JlZW4gYmctWyMwRDBGMTBdIGZvbnQtc2VyaWZgfT5cclxuICAgICAgey8qIEdsb2JhbCBwYXJ0aWNsZSBiYWNrZ3JvdW5kICovfVxyXG4gICAgICA8UGFydGljbGVzQkcgLz5cclxuICAgICAgey8qIFJhaXNlIGFwcCBjb250ZW50IGFib3ZlIGJhY2tncm91bmQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQYXJ0aWNsZXNCRyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();