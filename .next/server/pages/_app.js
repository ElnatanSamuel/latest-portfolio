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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ParticlesBG)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction ParticlesBG() {\n    const [drops, setDrops] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const count = 60; // global background: subtle and performant\n        const newDrops = Array.from({\n            length: count\n        }).map((_, i)=>{\n            const depth = Math.random(); // 0 (far) -> 1 (near)\n            const size = 2 + depth * 4; // 2-6px\n            // Slightly closer start range so they enter view quicker\n            const startY = -10 - Math.random() * 80; // -10% to -90%\n            // Prefill: ~50% start already near/inside viewport for immediate visibility\n            const prefill = Math.random() < 0.5;\n            const initialTop = prefill ? -5 + Math.random() * 35 : startY; // -5% to 30% or above\n            return {\n                id: i,\n                depth,\n                left: Math.random() * 100,\n                size,\n                startY,\n                initialTop,\n                // Reduce delay so first particles appear sooner, // 0-1.2s\n                duration: 16 + (1 - depth) * 10,\n                opacity: 0.2 + depth * 0.5,\n                drift: (depth - 0.5) * 10\n            };\n        });\n        setDrops(newDrops);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"aria-hidden\": true,\n        className: \"pointer-events-none fixed inset-0 z-0 hidden md:block\",\n        children: drops.map((d)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"absolute rounded-full\",\n                style: {\n                    left: `${d.left}vw`,\n                    width: d.size,\n                    height: d.size,\n                    opacity: d.opacity,\n                    top: `${d.initialTop}%`,\n                    background: \"radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.25) 70%, rgba(255,255,255,0) 100%)\",\n                    boxShadow: \"0 0 8px rgba(255,255,255,0.25)\"\n                },\n                initial: {\n                    top: `${d.initialTop}%`,\n                    left: `${d.left}vw`\n                },\n                animate: {\n                    top: \"110%\",\n                    left: `${d.left + d.drift}vw`\n                },\n                transition: {\n                    duration: d.duration,\n                    delay: d.delay,\n                    repeat: Infinity,\n                    ease: \"linear\"\n                }\n            }, d.id, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\no_bull_portfolio\\\\components\\\\ParticlesBG.jsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\no_bull_portfolio\\\\components\\\\ParticlesBG.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhcnRpY2xlc0JHLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0w7QUFFeEIsU0FBU0c7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sUUFBUSxJQUFJLDJDQUEyQztRQUM3RCxNQUFNQyxXQUFXQyxNQUFNQyxJQUFJLENBQUM7WUFBRUMsUUFBUUo7UUFBTSxHQUFHSyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0M7WUFDckQsTUFBTUMsUUFBUUMsS0FBS0MsTUFBTSxJQUFJLHNCQUFzQjtZQUNuRCxNQUFNQyxPQUFPLElBQUlILFFBQVEsR0FBRyxRQUFRO1lBQ3BDLHlEQUF5RDtZQUN6RCxNQUFNSSxTQUFTLENBQUMsS0FBS0gsS0FBS0MsTUFBTSxLQUFLLElBQUksZUFBZTtZQUN4RCw0RUFBNEU7WUFDNUUsTUFBTUcsVUFBVUosS0FBS0MsTUFBTSxLQUFLO1lBQ2hDLE1BQU1JLGFBQWFELFVBQVUsQ0FBQyxJQUFJSixLQUFLQyxNQUFNLEtBQUssS0FBS0UsUUFBUSxzQkFBc0I7WUFDckYsT0FBTztnQkFDTEcsSUFBSVI7Z0JBQ0pDO2dCQUNBUSxNQUFNUCxLQUFLQyxNQUFNLEtBQUs7Z0JBQ3RCQztnQkFDQUM7Z0JBQ0FFO2dCQUNBLDJEQUEyRDtnQkFDM0RHLFVBQVUsS0FBSyxDQUFDLElBQUlULEtBQUksSUFBSztnQkFDN0JVLFNBQVMsTUFBTVYsUUFBUTtnQkFDdkJXLE9BQU8sQ0FBQ1gsUUFBUSxHQUFFLElBQUs7WUFDekI7UUFDRjtRQUNBVCxTQUFTRTtJQUNYLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDbUI7UUFDQ0MsYUFBVztRQUNYQyxXQUFVO2tCQUVUeEIsTUFBTU8sR0FBRyxDQUFDLENBQUNrQixrQkFDViw4REFBQzNCLGlEQUFNQSxDQUFDd0IsR0FBRztnQkFFVEUsV0FBVTtnQkFDVkUsT0FBTztvQkFDTFIsTUFBTSxDQUFDLEVBQUVPLEVBQUVQLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQ25CUyxPQUFPRixFQUFFWixJQUFJO29CQUNiZSxRQUFRSCxFQUFFWixJQUFJO29CQUNkTyxTQUFTSyxFQUFFTCxPQUFPO29CQUNsQlMsS0FBSyxDQUFDLEVBQUVKLEVBQUVULFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCYyxZQUNFO29CQUNGQyxXQUFXO2dCQUNiO2dCQUNBQyxTQUFTO29CQUFFSCxLQUFLLENBQUMsRUFBRUosRUFBRVQsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFBRUUsTUFBTSxDQUFDLEVBQUVPLEVBQUVQLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQUM7Z0JBQ3hEZSxTQUFTO29CQUFFSixLQUFLO29CQUFRWCxNQUFNLENBQUMsRUFBRU8sRUFBRVAsSUFBSSxHQUFHTyxFQUFFSixLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUFDO2dCQUN0RGEsWUFBWTtvQkFDVmYsVUFBVU0sRUFBRU4sUUFBUTtvQkFDcEJnQixPQUFPVixFQUFFVSxLQUFLO29CQUNkQyxRQUFRQztvQkFDUkMsTUFBTTtnQkFDUjtlQW5CS2IsRUFBRVIsRUFBRTs7Ozs7Ozs7OztBQXdCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uby1idWxsLXBvcnRmb2xpby8uL2NvbXBvbmVudHMvUGFydGljbGVzQkcuanN4P2FlYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFydGljbGVzQkcoKSB7XG4gIGNvbnN0IFtkcm9wcywgc2V0RHJvcHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSA2MDsgLy8gZ2xvYmFsIGJhY2tncm91bmQ6IHN1YnRsZSBhbmQgcGVyZm9ybWFudFxuICAgIGNvbnN0IG5ld0Ryb3BzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogY291bnQgfSkubWFwKChfLCBpKSA9PiB7XG4gICAgICBjb25zdCBkZXB0aCA9IE1hdGgucmFuZG9tKCk7IC8vIDAgKGZhcikgLT4gMSAobmVhcilcbiAgICAgIGNvbnN0IHNpemUgPSAyICsgZGVwdGggKiA0OyAvLyAyLTZweFxuICAgICAgLy8gU2xpZ2h0bHkgY2xvc2VyIHN0YXJ0IHJhbmdlIHNvIHRoZXkgZW50ZXIgdmlldyBxdWlja2VyXG4gICAgICBjb25zdCBzdGFydFkgPSAtMTAgLSBNYXRoLnJhbmRvbSgpICogODA7IC8vIC0xMCUgdG8gLTkwJVxuICAgICAgLy8gUHJlZmlsbDogfjUwJSBzdGFydCBhbHJlYWR5IG5lYXIvaW5zaWRlIHZpZXdwb3J0IGZvciBpbW1lZGlhdGUgdmlzaWJpbGl0eVxuICAgICAgY29uc3QgcHJlZmlsbCA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gICAgICBjb25zdCBpbml0aWFsVG9wID0gcHJlZmlsbCA/IC01ICsgTWF0aC5yYW5kb20oKSAqIDM1IDogc3RhcnRZOyAvLyAtNSUgdG8gMzAlIG9yIGFib3ZlXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogaSxcbiAgICAgICAgZGVwdGgsXG4gICAgICAgIGxlZnQ6IE1hdGgucmFuZG9tKCkgKiAxMDAsIC8vIHZ3IHBlcmNlbnRhZ2VcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgc3RhcnRZLFxuICAgICAgICBpbml0aWFsVG9wLFxuICAgICAgICAvLyBSZWR1Y2UgZGVsYXkgc28gZmlyc3QgcGFydGljbGVzIGFwcGVhciBzb29uZXIsIC8vIDAtMS4yc1xuICAgICAgICBkdXJhdGlvbjogMTYgKyAoMSAtIGRlcHRoKSAqIDEwLCAvLyAxNi0yNnMsIGZhcnRoZXIgPSBzbG93ZXJcbiAgICAgICAgb3BhY2l0eTogMC4yICsgZGVwdGggKiAwLjUsIC8vIC4yLS43XG4gICAgICAgIGRyaWZ0OiAoZGVwdGggLSAwLjUpICogMTAsIC8vIC00dncgLi4gKzR2d1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBzZXREcm9wcyhuZXdEcm9wcyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGFyaWEtaGlkZGVuXG4gICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGZpeGVkIGluc2V0LTAgei0wIGhpZGRlbiBtZDpibG9ja1wiXG4gICAgPlxuICAgICAge2Ryb3BzLm1hcCgoZCkgPT4gKFxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGtleT17ZC5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBsZWZ0OiBgJHtkLmxlZnR9dndgLFxuICAgICAgICAgICAgd2lkdGg6IGQuc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogZC5zaXplLFxuICAgICAgICAgICAgb3BhY2l0eTogZC5vcGFjaXR5LFxuICAgICAgICAgICAgdG9wOiBgJHtkLmluaXRpYWxUb3B9JWAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzUlIDM1JSwgcmdiYSgyNTUsMjU1LDI1NSwwLjk1KSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjcpIDQwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjI1KSA3MCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSlcIixcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDAgOHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yNSlcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIGluaXRpYWw9e3sgdG9wOiBgJHtkLmluaXRpYWxUb3B9JWAsIGxlZnQ6IGAke2QubGVmdH12d2AgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHRvcDogXCIxMTAlXCIsIGxlZnQ6IGAke2QubGVmdCArIGQuZHJpZnR9dndgIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZHVyYXRpb246IGQuZHVyYXRpb24sXG4gICAgICAgICAgICBkZWxheTogZC5kZWxheSxcbiAgICAgICAgICAgIHJlcGVhdDogSW5maW5pdHksXG4gICAgICAgICAgICBlYXNlOiBcImxpbmVhclwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIlBhcnRpY2xlc0JHIiwiZHJvcHMiLCJzZXREcm9wcyIsImNvdW50IiwibmV3RHJvcHMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJfIiwiaSIsImRlcHRoIiwiTWF0aCIsInJhbmRvbSIsInNpemUiLCJzdGFydFkiLCJwcmVmaWxsIiwiaW5pdGlhbFRvcCIsImlkIiwibGVmdCIsImR1cmF0aW9uIiwib3BhY2l0eSIsImRyaWZ0IiwiZGl2IiwiYXJpYS1oaWRkZW4iLCJjbGFzc05hbWUiLCJkIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInJlcGVhdCIsIkluZmluaXR5IiwiZWFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ParticlesBG.jsx\n");

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