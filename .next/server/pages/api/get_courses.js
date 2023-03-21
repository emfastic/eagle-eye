"use strict";
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
exports.id = "pages/api/get_courses";
exports.ids = ["pages/api/get_courses"];
exports.modules = {

/***/ "@pinecone-database/pinecone":
/*!**********************************************!*\
  !*** external "@pinecone-database/pinecone" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@pinecone-database/pinecone");

/***/ }),

/***/ "langchain/embeddings":
/*!***************************************!*\
  !*** external "langchain/embeddings" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("langchain/embeddings");;

/***/ }),

/***/ "(api)/./src/pages/api/get_courses.ts":
/*!**************************************!*\
  !*** ./src/pages/api/get_courses.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/embeddings */ \"langchain/embeddings\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__]);\nlangchain_embeddings__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n// const fetch = require('node-fetch');\n// import { OpenAI } from \"langchain\"\n\n// import { PineconeStore } from \"langchain/vectorstores\"\nasync function handler(req, res) {\n    const pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__.PineconeClient();\n    await pinecone.init({\n        environment: \"us-west1-gcp\",\n        apiKey: process.env.PINECONE_API_KEY\n    });\n    const index = pinecone.Index(\"classes-store\");\n    const embeddings = new langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__.OpenAIEmbeddings({\n        openAIApiKey: process.env.OPENAI_API_KEY\n    });\n    const embeddingRes = await embeddings.embedQuery(req.body[\"query\"]);\n    // const embeddingRes = Array(1536).fill(0);\n    const queryRequest = {\n        vector: embeddingRes,\n        topK: req.body[\"searchResults\"],\n        includeMetadata: true\n    };\n    try {\n        const queryResponse = await index.query({\n            queryRequest\n        });\n        return res.status(200).json(queryResponse);\n    } catch (error) {\n        console.log(error.message);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldF9jb3Vyc2VzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFFaEI7QUFDN0QsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNrQjtBQUN2RCx5REFBeUQ7QUFFMUMsZUFBZUUsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUF5QixFQUN6QjtJQUVBLE1BQU1DLFdBQVcsSUFBSUwsdUVBQWNBO0lBQ25DLE1BQU1LLFNBQVNDLElBQUksQ0FBQztRQUNwQkMsYUFBYTtRQUNiQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtJQUN0QztJQUVFLE1BQU1DLFFBQVFQLFNBQVNRLEtBQUssQ0FBQztJQUU3QixNQUFNQyxhQUFhLElBQUliLGtFQUFnQkEsQ0FBQztRQUFFYyxjQUFjTixRQUFRQyxHQUFHLENBQUNNLGNBQWM7SUFBQztJQUNuRixNQUFNQyxlQUFlLE1BQU1ILFdBQVdJLFVBQVUsQ0FBQ2YsSUFBSWdCLElBQUksQ0FBQyxRQUFRO0lBRWxFLDRDQUE0QztJQUU1QyxNQUFNQyxlQUFlO1FBQ25CQyxRQUFRSjtRQUNSSyxNQUFNbkIsSUFBSWdCLElBQUksQ0FBQyxnQkFBZ0I7UUFDL0JJLGlCQUFpQixJQUFJO0lBQ3ZCO0lBRUYsSUFBSTtRQUNGLE1BQU1DLGdCQUFnQixNQUFNWixNQUFNYSxLQUFLLENBQUM7WUFBRUw7UUFBYTtRQUN2RCxPQUFPaEIsSUFBSXNCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO0lBQzlCLEVBQ0UsT0FBT0ksT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLE9BQU87SUFDM0I7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWFnbGUtZXllLy4vc3JjL3BhZ2VzL2FwaS9nZXRfY291cnNlcy50cz8wODQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgUGluZWNvbmVDbGllbnQgfSBmcm9tIFwiQHBpbmVjb25lLWRhdGFiYXNlL3BpbmVjb25lXCI7XG4vLyBjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcbi8vIGltcG9ydCB7IE9wZW5BSSB9IGZyb20gXCJsYW5nY2hhaW5cIlxuaW1wb3J0IHsgT3BlbkFJRW1iZWRkaW5ncyB9IGZyb20gXCJsYW5nY2hhaW4vZW1iZWRkaW5nc1wiXG4vLyBpbXBvcnQgeyBQaW5lY29uZVN0b3JlIH0gZnJvbSBcImxhbmdjaGFpbi92ZWN0b3JzdG9yZXNcIlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxhbnk+XG4pIHtcbiAgXG4gIGNvbnN0IHBpbmVjb25lID0gbmV3IFBpbmVjb25lQ2xpZW50KCk7XG4gIGF3YWl0IHBpbmVjb25lLmluaXQoe1xuICBlbnZpcm9ubWVudDogXCJ1cy13ZXN0MS1nY3BcIixcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5QSU5FQ09ORV9BUElfS0VZLFxufSk7XG4gIFxuICBjb25zdCBpbmRleCA9IHBpbmVjb25lLkluZGV4KFwiY2xhc3Nlcy1zdG9yZVwiKVxuXG4gIGNvbnN0IGVtYmVkZGluZ3MgPSBuZXcgT3BlbkFJRW1iZWRkaW5ncyh7IG9wZW5BSUFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVkgfSlcbiAgY29uc3QgZW1iZWRkaW5nUmVzID0gYXdhaXQgZW1iZWRkaW5ncy5lbWJlZFF1ZXJ5KHJlcS5ib2R5WydxdWVyeSddKVxuXG4gIC8vIGNvbnN0IGVtYmVkZGluZ1JlcyA9IEFycmF5KDE1MzYpLmZpbGwoMCk7XG4gIFxuICBjb25zdCBxdWVyeVJlcXVlc3QgPSB7XG4gICAgdmVjdG9yOiBlbWJlZGRpbmdSZXMsXG4gICAgdG9wSzogcmVxLmJvZHlbJ3NlYXJjaFJlc3VsdHMnXSxcbiAgICBpbmNsdWRlTWV0YWRhdGE6IHRydWUsXG4gIH1cblxudHJ5IHtcbiAgY29uc3QgcXVlcnlSZXNwb25zZSA9IGF3YWl0IGluZGV4LnF1ZXJ5KHsgcXVlcnlSZXF1ZXN0IH0pXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihxdWVyeVJlc3BvbnNlKVxufVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxuICB9XG59XG4iXSwibmFtZXMiOlsiUGluZWNvbmVDbGllbnQiLCJPcGVuQUlFbWJlZGRpbmdzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBpbmVjb25lIiwiaW5pdCIsImVudmlyb25tZW50IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlBJTkVDT05FX0FQSV9LRVkiLCJpbmRleCIsIkluZGV4IiwiZW1iZWRkaW5ncyIsIm9wZW5BSUFwaUtleSIsIk9QRU5BSV9BUElfS0VZIiwiZW1iZWRkaW5nUmVzIiwiZW1iZWRRdWVyeSIsImJvZHkiLCJxdWVyeVJlcXVlc3QiLCJ2ZWN0b3IiLCJ0b3BLIiwiaW5jbHVkZU1ldGFkYXRhIiwicXVlcnlSZXNwb25zZSIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/get_courses.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/get_courses.ts"));
module.exports = __webpack_exports__;

})();