/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/atropos.js":
/*!***************************!*\
  !*** ./src/js/atropos.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var atropos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! atropos */ "./node_modules/atropos/esm/atropos.esm.js");

var myAtropos = (0,atropos__WEBPACK_IMPORTED_MODULE_0__["default"])({
  el: ".my-atropos",
  activeOffset: 40,
  highlight: false,
  shadow: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myAtropos);

/***/ }),

/***/ "./src/js/img.js":
/*!***********************!*\
  !*** ./src/js/img.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_atropos_test_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../img/atropos-test.jpg */ "./src/img/atropos-test.jpg");


function atroposImage() {
  var img = document.getElementById("atropos-image");
  img.src = _img_atropos_test_jpg__WEBPACK_IMPORTED_MODULE_0__;
  img.alt = "Test de l'effet d'atropos sur une image";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (atroposImage);

/***/ }),

/***/ "./node_modules/atropos/atropos.min.css":
/*!**********************************************!*\
  !*** ./node_modules/atropos/atropos.min.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/img/atropos-test.jpg":
/*!**********************************!*\
  !*** ./src/img/atropos-test.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "atropos-test.jpg";

/***/ }),

/***/ "./node_modules/atropos/esm/atropos.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/atropos/esm/atropos.esm.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Atropos": () => (/* binding */ Atropos)
/* harmony export */ });
/**
 * Atropos 0.9.6
 * Touch-friendly 3D parallax hover effects
 * https://atroposjs.com
 *
 * Copyright 2021-2021 
 *
 * Released under the MIT License
 *
 * Released on: September 28, 2021
 */

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/* eslint-disable no-restricted-globals */
var $ = function $(el, sel) {
  return el.querySelector(sel);
};

var $$ = function $$(el, sel) {
  return el.querySelectorAll(sel);
};

var $setDuration = function $setDuration(el, duration) {
  el.style.transitionDuration = duration;
};

var $setTransform = function $setTransform(el, transform) {
  el.style.transform = transform;
};

var $setOpacity = function $setOpacity(el, opacity) {
  el.style.opacity = opacity;
};

var $on = function $on(el, event, handler, props) {
  return el.addEventListener(event, handler, props);
};

var $off = function $off(el, event, handler, props) {
  return el.removeEventListener(event, handler, props);
};

var removeUndefinedProps = function removeUndefinedProps(obj) {
  if (obj === void 0) {
    obj = {};
  }

  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] !== 'undefined') result[key] = obj[key];
  });
  return result;
};

function Atropos(originalParams) {
  if (originalParams === void 0) {
    originalParams = {};
  }

  var _originalParams = originalParams,
      el = _originalParams.el,
      eventsEl = _originalParams.eventsEl;
  var self = {
    __atropos__: true,
    params: _extends({
      activeOffset: 50,
      shadowOffset: 50,
      shadowScale: 1,
      durationEnter: 300,
      durationLeave: 600,
      rotateLock: true,
      rotate: true,
      rotateTouch: true,
      rotateXMax: 15,
      rotateYMax: 15,
      rotateXInvert: false,
      rotateYInvert: false,
      shadow: true,
      highlight: true,
      onEnter: null,
      onLeave: null,
      onRotate: null
    }, removeUndefinedProps(originalParams || {})),
    destroyed: false,
    isActive: false
  };
  var params = self.params;
  var rotateEl;
  var rotated;
  var scaleEl;
  var innerEl;
  var enterRotateX;
  var enterRotateY;
  var elBoundingClientRect;
  var rotateXLock = true;
  var rotateYLock = true;
  var shadowEl;
  var highlightEl;

  var createShadow = function createShadow() {
    var created;
    shadowEl = $(el, '.atropos-shadow');

    if (!shadowEl) {
      shadowEl = document.createElement('span');
      shadowEl.classList.add('atropos-shadow');
      created = true;
    }

    $setTransform(shadowEl, "translate3d(0,0,-" + params.shadowOffset + "px) scale(" + params.shadowScale + ")");

    if (created) {
      rotateEl.appendChild(shadowEl);
    }
  };

  var createHighlight = function createHighlight() {
    var created;
    highlightEl = $(el, '.atropos-highlight');

    if (!highlightEl) {
      highlightEl = document.createElement('span');
      highlightEl.classList.add('atropos-highlight');
      created = true;
    }

    $setTransform(highlightEl, "translate3d(0,0,0)");

    if (created) {
      innerEl.appendChild(highlightEl);
    }
  };

  var setChildrenOffset = function setChildrenOffset(_ref) {
    var _ref$rotateXPercentag = _ref.rotateXPercentage,
        rotateXPercentage = _ref$rotateXPercentag === void 0 ? 0 : _ref$rotateXPercentag,
        _ref$rotateYPercentag = _ref.rotateYPercentage,
        rotateYPercentage = _ref$rotateYPercentag === void 0 ? 0 : _ref$rotateYPercentag,
        duration = _ref.duration,
        opacityOnly = _ref.opacityOnly;

    var getOpacity = function getOpacity(element) {
      if (element.dataset.atroposOpacity && typeof element.dataset.atroposOpacity === 'string') {
        return element.dataset.atroposOpacity.split(';').map(function (v) {
          return parseFloat(v);
        });
      }

      return undefined;
    };

    $$(el, '[data-atropos-offset], [data-atropos-opacity]').forEach(function (childEl) {
      $setDuration(childEl, duration);
      var elementOpacity = getOpacity(childEl);

      if (rotateXPercentage === 0 && rotateYPercentage === 0) {
        if (!opacityOnly) $setTransform(childEl, "translate3d(0, 0, 0)");
        if (elementOpacity) $setOpacity(childEl, elementOpacity[0]);
      } else {
        var childElOffset = parseFloat(childEl.dataset.atroposOffset) / 100;

        if (!Number.isNaN(childElOffset) && !opacityOnly) {
          $setTransform(childEl, "translate3d(" + -rotateYPercentage * -childElOffset + "%, " + rotateXPercentage * -childElOffset + "%, 0)");
        }

        if (elementOpacity) {
          var min = elementOpacity[0],
              max = elementOpacity[1];
          var rotatePercentage = Math.max(Math.abs(rotateXPercentage), Math.abs(rotateYPercentage));
          $setOpacity(childEl, min + (max - min) * rotatePercentage / 100);
        }
      }
    });
  };

  var onPointerEnter = function onPointerEnter(e) {
    if (e.type === 'pointerdown' && e.pointerType === 'mouse') return;
    if (e.type === 'pointerenter' && e.pointerType !== 'mouse') return;

    if (e.type === 'pointerdown') {
      e.preventDefault();
    }

    el.classList.add('atropos-active');
    $setDuration(rotateEl, '0ms');
    rotated = false;
    enterRotateX = undefined;
    enterRotateY = undefined;
    rotateXLock = true;
    rotateYLock = true;
    $setTransform(scaleEl, "translate3d(0,0, " + params.activeOffset + "px)");
    $setDuration(scaleEl, (params.rotateLock ? params.durationEnter : 0) + "ms");

    if (shadowEl) {
      $setDuration(shadowEl, (params.rotateLock ? params.durationEnter : 0) + "ms");
    }

    self.isActive = true;
    if (typeof params.onEnter === 'function') params.onEnter();
  };

  var onTouchMove = function onTouchMove(e) {
    if (rotated && e.cancelable) {
      e.preventDefault();
    }
  };

  var onPointerMove = function onPointerMove(e) {
    if (!params.rotate || !self.isActive) return;

    if (e.pointerType !== 'mouse') {
      if (!params.rotateTouch) return;
      e.preventDefault();
    }

    var clientX = e.clientX,
        clientY = e.clientY;

    if (!elBoundingClientRect) {
      elBoundingClientRect = el.getBoundingClientRect();
    }

    var _elBoundingClientRect = elBoundingClientRect,
        top = _elBoundingClientRect.top,
        left = _elBoundingClientRect.left,
        width = _elBoundingClientRect.width,
        height = _elBoundingClientRect.height;
    var centerX = width / 2;
    var centerY = height / 2;
    var coordX = clientX - left;
    var coordY = clientY - top;
    var rotateY = params.rotateYMax * (coordX - centerX) / (width / 2) * -1;
    var rotateX = params.rotateXMax * (coordY - centerY) / (height / 2);

    if (params.rotateLock) {
      if (typeof enterRotateY === 'undefined') {
        enterRotateY = rotateY;
        rotateYLock = true;
      }

      if (typeof enterRotateX === 'undefined') {
        enterRotateX = rotateX;
        rotateXLock = true;
      }

      if (rotateYLock) {
        if (enterRotateY < 0) {
          if (rotateY < 0) rotateY = 0;
          if (rotateY > 0) rotateYLock = false;
        }

        if (enterRotateY > 0) {
          if (rotateY > 0) rotateY = 0;
          if (rotateY < 0) rotateYLock = false;
        }
      }

      if (rotateXLock) {
        if (enterRotateX < 0) {
          if (rotateX < 0) rotateX = 0;
          if (rotateX > 0) rotateXLock = false;
        }

        if (enterRotateX > 0) {
          if (rotateX > 0) rotateX = 0;
          if (rotateX < 0) rotateXLock = false;
        }
      }
    }

    rotateX = Math.min(Math.max(-rotateX, -params.rotateXMax), params.rotateXMax);
    if (params.rotateXInvert) rotateX = -rotateX;
    rotateY = Math.min(Math.max(-rotateY, -params.rotateYMax), params.rotateYMax);
    if (params.rotateYInvert) rotateY = -rotateY;

    if (typeof params.rotateTouch === 'string' && (rotateX !== 0 || rotateY !== 0)) {
      if (!rotated) {
        rotated = true;
        el.classList.add('atropos-rotate-touch');
      }

      if (e.cancelable) {
        e.preventDefault();
      }
    }

    $setTransform(rotateEl, "translate3d(0,0,0) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
    var rotateXPercentage = rotateX / params.rotateXMax * 100;
    var rotateYPercentage = rotateY / params.rotateYMax * 100;

    if (highlightEl) {
      $setDuration(highlightEl, '0ms');
      $setTransform(highlightEl, "translate3d(" + -rotateYPercentage * 0.25 + "%, " + rotateXPercentage * 0.25 + "%, 0)");
      highlightEl.style.opacity = Math.max(Math.abs(rotateXPercentage), Math.abs(rotateYPercentage)) / 100;
    }

    setChildrenOffset({
      rotateXPercentage: rotateXPercentage,
      rotateYPercentage: rotateYPercentage,
      duration: '0ms'
    });
    if (typeof params.onRotate === 'function') params.onRotate(rotateX, rotateY);
  };

  var onPointerLeave = function onPointerLeave(e) {
    elBoundingClientRect = undefined;
    if (!self.isActive) return;
    if (e && e.type === 'pointerup' && e.pointerType === 'mouse') return;
    if (e && e.type === 'pointerleave' && e.pointerType !== 'mouse') return;

    if (typeof params.rotateTouch === 'string' && rotated) {
      el.classList.remove('atropos-rotate-touch');
    }

    el.classList.remove('atropos-active');
    $setTransform(scaleEl, "translate3d(0,0, " + 0 + "px)");
    $setDuration(scaleEl, params.durationLeave + "ms");

    if (shadowEl) {
      $setDuration(shadowEl, params.durationLeave + "ms");
    }

    if (highlightEl) {
      $setDuration(highlightEl, params.durationLeave + "ms");
      $setTransform(highlightEl, "translate3d(0, 0, 0)");
      highlightEl.style.opacity = 0;
    }

    $setDuration(rotateEl, params.durationLeave + "ms");
    $setTransform(rotateEl, "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)");
    setChildrenOffset({
      duration: params.durationLeave + "ms"
    });
    self.isActive = false;
    if (typeof params.onRotate === 'function') params.onRotate(0, 0);
    if (typeof params.onLeave === 'function') params.onLeave();
  };

  var onDocumentClick = function onDocumentClick(e) {
    var clickTarget = e.target;

    if (!el.contains(clickTarget) && clickTarget !== el && self.isActive) {
      onPointerLeave();
    }
  };

  var initDOM = function initDOM() {
    if (typeof el === 'string') {
      el = $(document, el);
    }

    if (!el) return; // eslint-disable-next-line

    if (el.__atropos__) return;

    if (typeof eventsEl !== 'undefined') {
      if (typeof eventsEl === 'string') {
        eventsEl = $(document, eventsEl);
      }
    } else {
      eventsEl = el;
    }

    Object.assign(self, {
      el: el
    });
    rotateEl = $(el, '.atropos-rotate');
    scaleEl = $(el, '.atropos-scale');
    innerEl = $(el, '.atropos-inner'); // eslint-disable-next-line

    el.__atropos__ = self;
  };

  var init = function init() {
    initDOM();
    if (!el || !eventsEl) return;

    if (params.shadow) {
      createShadow();
    }

    if (params.highlight) {
      createHighlight();
    }

    if (params.rotateTouch) {
      if (typeof params.rotateTouch === 'string') {
        el.classList.add("atropos-rotate-touch-" + params.rotateTouch);
      } else {
        el.classList.add('atropos-rotate-touch');
      }
    }

    if ($(el, '[data-atropos-opacity]')) {
      setChildrenOffset({
        opacityOnly: true
      });
    }

    $on(document, 'click', onDocumentClick);
    $on(eventsEl, 'pointerdown', onPointerEnter);
    $on(eventsEl, 'pointerenter', onPointerEnter);
    $on(eventsEl, 'pointermove', onPointerMove);
    $on(eventsEl, 'touchmove', onTouchMove);
    $on(eventsEl, 'pointerleave', onPointerLeave);
    $on(eventsEl, 'pointerup', onPointerLeave);
    $on(eventsEl, 'lostpointercapture', onPointerLeave);
  };

  var destroy = function destroy() {
    self.destroyed = true;
    $off(document, 'click', onDocumentClick);
    $off(eventsEl, 'pointerdown', onPointerEnter);
    $off(eventsEl, 'pointerenter', onPointerEnter);
    $off(eventsEl, 'pointermove', onPointerMove);
    $off(eventsEl, 'touchmove', onTouchMove);
    $off(eventsEl, 'pointerleave', onPointerLeave);
    $off(eventsEl, 'pointerup', onPointerLeave);
    $off(eventsEl, 'lostpointercapture', onPointerLeave); // eslint-disable-next-line

    delete el.__atropos__;
  };

  self.destroy = destroy;
  init(); // eslint-disable-next-line

  return self;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Atropos);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var atropos_css_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! atropos/css/min */ "./node_modules/atropos/atropos.min.css");
/* harmony import */ var _img_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img.js */ "./src/js/img.js");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _atropos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atropos.js */ "./src/js/atropos.js");




(0,_img_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUMsU0FBUyxHQUFHRCxtREFBTyxDQUFDO0FBQ3hCRSxFQUFBQSxFQUFFLEVBQUUsYUFEb0I7QUFFeEJDLEVBQUFBLFlBQVksRUFBRSxFQUZVO0FBR3hCQyxFQUFBQSxTQUFTLEVBQUUsS0FIYTtBQUl4QkMsRUFBQUEsTUFBTSxFQUFFO0FBSmdCLENBQUQsQ0FBekI7QUFPQSxpRUFBZUosU0FBZjs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7O0FBRUEsU0FBU00sWUFBVCxHQUF3QjtBQUN0QixNQUFJQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUFWO0FBQ0FGLEVBQUFBLEdBQUcsQ0FBQ0csR0FBSixHQUFVTCxrREFBVjtBQUNBRSxFQUFBQSxHQUFHLENBQUNJLEdBQUosR0FBVSx5Q0FBVjtBQUNEOztBQUVELGlFQUFlTCxZQUFmOzs7Ozs7Ozs7OztBQ1JBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssMkNBQTJDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCOztBQUVyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEOztBQUUxRDtBQUNBOztBQUVBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQztBQUNKOzs7Ozs7O1VDL2JuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsbURBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL2F0cm9wb3MvLi9zcmMvanMvYXRyb3Bvcy5qcyIsIndlYnBhY2s6Ly9hdHJvcG9zLy4vc3JjL2pzL2ltZy5qcyIsIndlYnBhY2s6Ly9hdHJvcG9zLy4vbm9kZV9tb2R1bGVzL2F0cm9wb3MvYXRyb3Bvcy5taW4uY3NzPzFhZmEiLCJ3ZWJwYWNrOi8vYXRyb3Bvcy8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/M2FjNCIsIndlYnBhY2s6Ly9hdHJvcG9zLy4vbm9kZV9tb2R1bGVzL2F0cm9wb3MvZXNtL2F0cm9wb3MuZXNtLmpzIiwid2VicGFjazovL2F0cm9wb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXRyb3Bvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXRyb3Bvcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2F0cm9wb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hdHJvcG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXRyb3Bvcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hdHJvcG9zLy4vc3JjL2pzL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXRyb3BvcyBmcm9tIFwiYXRyb3Bvc1wiO1xyXG5cclxuY29uc3QgbXlBdHJvcG9zID0gQXRyb3Bvcyh7XHJcbiAgZWw6IFwiLm15LWF0cm9wb3NcIixcclxuICBhY3RpdmVPZmZzZXQ6IDQwLFxyXG4gIGhpZ2hsaWdodDogZmFsc2UsXHJcbiAgc2hhZG93OiBmYWxzZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBteUF0cm9wb3M7XHJcbiIsImltcG9ydCBhdHJvcG9zSW1nIGZyb20gXCIuLy4uL2ltZy9hdHJvcG9zLXRlc3QuanBnXCI7XHJcblxyXG5mdW5jdGlvbiBhdHJvcG9zSW1hZ2UoKSB7XHJcbiAgbGV0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXRyb3Bvcy1pbWFnZVwiKTtcclxuICBpbWcuc3JjID0gYXRyb3Bvc0ltZztcclxuICBpbWcuYWx0ID0gXCJUZXN0IGRlIGwnZWZmZXQgZCdhdHJvcG9zIHN1ciB1bmUgaW1hZ2VcIjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXRyb3Bvc0ltYWdlO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKipcbiAqIEF0cm9wb3MgMC45LjZcbiAqIFRvdWNoLWZyaWVuZGx5IDNEIHBhcmFsbGF4IGhvdmVyIGVmZmVjdHNcbiAqIGh0dHBzOi8vYXRyb3Bvc2pzLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDIxLTIwMjEgXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogUmVsZWFzZWQgb246IFNlcHRlbWJlciAyOCwgMjAyMVxuICovXG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xudmFyICQgPSBmdW5jdGlvbiAkKGVsLCBzZWwpIHtcbiAgcmV0dXJuIGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcbn07XG5cbnZhciAkJCA9IGZ1bmN0aW9uICQkKGVsLCBzZWwpIHtcbiAgcmV0dXJuIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcbn07XG5cbnZhciAkc2V0RHVyYXRpb24gPSBmdW5jdGlvbiAkc2V0RHVyYXRpb24oZWwsIGR1cmF0aW9uKSB7XG4gIGVsLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xufTtcblxudmFyICRzZXRUcmFuc2Zvcm0gPSBmdW5jdGlvbiAkc2V0VHJhbnNmb3JtKGVsLCB0cmFuc2Zvcm0pIHtcbiAgZWwuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xufTtcblxudmFyICRzZXRPcGFjaXR5ID0gZnVuY3Rpb24gJHNldE9wYWNpdHkoZWwsIG9wYWNpdHkpIHtcbiAgZWwuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG59O1xuXG52YXIgJG9uID0gZnVuY3Rpb24gJG9uKGVsLCBldmVudCwgaGFuZGxlciwgcHJvcHMpIHtcbiAgcmV0dXJuIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHByb3BzKTtcbn07XG5cbnZhciAkb2ZmID0gZnVuY3Rpb24gJG9mZihlbCwgZXZlbnQsIGhhbmRsZXIsIHByb3BzKSB7XG4gIHJldHVybiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBwcm9wcyk7XG59O1xuXG52YXIgcmVtb3ZlVW5kZWZpbmVkUHJvcHMgPSBmdW5jdGlvbiByZW1vdmVVbmRlZmluZWRQcm9wcyhvYmopIHtcbiAgaWYgKG9iaiA9PT0gdm9pZCAwKSB7XG4gICAgb2JqID0ge307XG4gIH1cblxuICB2YXIgcmVzdWx0ID0ge307XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnVuY3Rpb24gQXRyb3BvcyhvcmlnaW5hbFBhcmFtcykge1xuICBpZiAob3JpZ2luYWxQYXJhbXMgPT09IHZvaWQgMCkge1xuICAgIG9yaWdpbmFsUGFyYW1zID0ge307XG4gIH1cblxuICB2YXIgX29yaWdpbmFsUGFyYW1zID0gb3JpZ2luYWxQYXJhbXMsXG4gICAgICBlbCA9IF9vcmlnaW5hbFBhcmFtcy5lbCxcbiAgICAgIGV2ZW50c0VsID0gX29yaWdpbmFsUGFyYW1zLmV2ZW50c0VsO1xuICB2YXIgc2VsZiA9IHtcbiAgICBfX2F0cm9wb3NfXzogdHJ1ZSxcbiAgICBwYXJhbXM6IF9leHRlbmRzKHtcbiAgICAgIGFjdGl2ZU9mZnNldDogNTAsXG4gICAgICBzaGFkb3dPZmZzZXQ6IDUwLFxuICAgICAgc2hhZG93U2NhbGU6IDEsXG4gICAgICBkdXJhdGlvbkVudGVyOiAzMDAsXG4gICAgICBkdXJhdGlvbkxlYXZlOiA2MDAsXG4gICAgICByb3RhdGVMb2NrOiB0cnVlLFxuICAgICAgcm90YXRlOiB0cnVlLFxuICAgICAgcm90YXRlVG91Y2g6IHRydWUsXG4gICAgICByb3RhdGVYTWF4OiAxNSxcbiAgICAgIHJvdGF0ZVlNYXg6IDE1LFxuICAgICAgcm90YXRlWEludmVydDogZmFsc2UsXG4gICAgICByb3RhdGVZSW52ZXJ0OiBmYWxzZSxcbiAgICAgIHNoYWRvdzogdHJ1ZSxcbiAgICAgIGhpZ2hsaWdodDogdHJ1ZSxcbiAgICAgIG9uRW50ZXI6IG51bGwsXG4gICAgICBvbkxlYXZlOiBudWxsLFxuICAgICAgb25Sb3RhdGU6IG51bGxcbiAgICB9LCByZW1vdmVVbmRlZmluZWRQcm9wcyhvcmlnaW5hbFBhcmFtcyB8fCB7fSkpLFxuICAgIGRlc3Ryb3llZDogZmFsc2UsXG4gICAgaXNBY3RpdmU6IGZhbHNlXG4gIH07XG4gIHZhciBwYXJhbXMgPSBzZWxmLnBhcmFtcztcbiAgdmFyIHJvdGF0ZUVsO1xuICB2YXIgcm90YXRlZDtcbiAgdmFyIHNjYWxlRWw7XG4gIHZhciBpbm5lckVsO1xuICB2YXIgZW50ZXJSb3RhdGVYO1xuICB2YXIgZW50ZXJSb3RhdGVZO1xuICB2YXIgZWxCb3VuZGluZ0NsaWVudFJlY3Q7XG4gIHZhciByb3RhdGVYTG9jayA9IHRydWU7XG4gIHZhciByb3RhdGVZTG9jayA9IHRydWU7XG4gIHZhciBzaGFkb3dFbDtcbiAgdmFyIGhpZ2hsaWdodEVsO1xuXG4gIHZhciBjcmVhdGVTaGFkb3cgPSBmdW5jdGlvbiBjcmVhdGVTaGFkb3coKSB7XG4gICAgdmFyIGNyZWF0ZWQ7XG4gICAgc2hhZG93RWwgPSAkKGVsLCAnLmF0cm9wb3Mtc2hhZG93Jyk7XG5cbiAgICBpZiAoIXNoYWRvd0VsKSB7XG4gICAgICBzaGFkb3dFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHNoYWRvd0VsLmNsYXNzTGlzdC5hZGQoJ2F0cm9wb3Mtc2hhZG93Jyk7XG4gICAgICBjcmVhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAkc2V0VHJhbnNmb3JtKHNoYWRvd0VsLCBcInRyYW5zbGF0ZTNkKDAsMCwtXCIgKyBwYXJhbXMuc2hhZG93T2Zmc2V0ICsgXCJweCkgc2NhbGUoXCIgKyBwYXJhbXMuc2hhZG93U2NhbGUgKyBcIilcIik7XG5cbiAgICBpZiAoY3JlYXRlZCkge1xuICAgICAgcm90YXRlRWwuYXBwZW5kQ2hpbGQoc2hhZG93RWwpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY3JlYXRlSGlnaGxpZ2h0ID0gZnVuY3Rpb24gY3JlYXRlSGlnaGxpZ2h0KCkge1xuICAgIHZhciBjcmVhdGVkO1xuICAgIGhpZ2hsaWdodEVsID0gJChlbCwgJy5hdHJvcG9zLWhpZ2hsaWdodCcpO1xuXG4gICAgaWYgKCFoaWdobGlnaHRFbCkge1xuICAgICAgaGlnaGxpZ2h0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBoaWdobGlnaHRFbC5jbGFzc0xpc3QuYWRkKCdhdHJvcG9zLWhpZ2hsaWdodCcpO1xuICAgICAgY3JlYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgJHNldFRyYW5zZm9ybShoaWdobGlnaHRFbCwgXCJ0cmFuc2xhdGUzZCgwLDAsMClcIik7XG5cbiAgICBpZiAoY3JlYXRlZCkge1xuICAgICAgaW5uZXJFbC5hcHBlbmRDaGlsZChoaWdobGlnaHRFbCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBzZXRDaGlsZHJlbk9mZnNldCA9IGZ1bmN0aW9uIHNldENoaWxkcmVuT2Zmc2V0KF9yZWYpIHtcbiAgICB2YXIgX3JlZiRyb3RhdGVYUGVyY2VudGFnID0gX3JlZi5yb3RhdGVYUGVyY2VudGFnZSxcbiAgICAgICAgcm90YXRlWFBlcmNlbnRhZ2UgPSBfcmVmJHJvdGF0ZVhQZXJjZW50YWcgPT09IHZvaWQgMCA/IDAgOiBfcmVmJHJvdGF0ZVhQZXJjZW50YWcsXG4gICAgICAgIF9yZWYkcm90YXRlWVBlcmNlbnRhZyA9IF9yZWYucm90YXRlWVBlcmNlbnRhZ2UsXG4gICAgICAgIHJvdGF0ZVlQZXJjZW50YWdlID0gX3JlZiRyb3RhdGVZUGVyY2VudGFnID09PSB2b2lkIDAgPyAwIDogX3JlZiRyb3RhdGVZUGVyY2VudGFnLFxuICAgICAgICBkdXJhdGlvbiA9IF9yZWYuZHVyYXRpb24sXG4gICAgICAgIG9wYWNpdHlPbmx5ID0gX3JlZi5vcGFjaXR5T25seTtcblxuICAgIHZhciBnZXRPcGFjaXR5ID0gZnVuY3Rpb24gZ2V0T3BhY2l0eShlbGVtZW50KSB7XG4gICAgICBpZiAoZWxlbWVudC5kYXRhc2V0LmF0cm9wb3NPcGFjaXR5ICYmIHR5cGVvZiBlbGVtZW50LmRhdGFzZXQuYXRyb3Bvc09wYWNpdHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQuYXRyb3Bvc09wYWNpdHkuc3BsaXQoJzsnKS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgICQkKGVsLCAnW2RhdGEtYXRyb3Bvcy1vZmZzZXRdLCBbZGF0YS1hdHJvcG9zLW9wYWNpdHldJykuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRFbCkge1xuICAgICAgJHNldER1cmF0aW9uKGNoaWxkRWwsIGR1cmF0aW9uKTtcbiAgICAgIHZhciBlbGVtZW50T3BhY2l0eSA9IGdldE9wYWNpdHkoY2hpbGRFbCk7XG5cbiAgICAgIGlmIChyb3RhdGVYUGVyY2VudGFnZSA9PT0gMCAmJiByb3RhdGVZUGVyY2VudGFnZSA9PT0gMCkge1xuICAgICAgICBpZiAoIW9wYWNpdHlPbmx5KSAkc2V0VHJhbnNmb3JtKGNoaWxkRWwsIFwidHJhbnNsYXRlM2QoMCwgMCwgMClcIik7XG4gICAgICAgIGlmIChlbGVtZW50T3BhY2l0eSkgJHNldE9wYWNpdHkoY2hpbGRFbCwgZWxlbWVudE9wYWNpdHlbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNoaWxkRWxPZmZzZXQgPSBwYXJzZUZsb2F0KGNoaWxkRWwuZGF0YXNldC5hdHJvcG9zT2Zmc2V0KSAvIDEwMDtcblxuICAgICAgICBpZiAoIU51bWJlci5pc05hTihjaGlsZEVsT2Zmc2V0KSAmJiAhb3BhY2l0eU9ubHkpIHtcbiAgICAgICAgICAkc2V0VHJhbnNmb3JtKGNoaWxkRWwsIFwidHJhbnNsYXRlM2QoXCIgKyAtcm90YXRlWVBlcmNlbnRhZ2UgKiAtY2hpbGRFbE9mZnNldCArIFwiJSwgXCIgKyByb3RhdGVYUGVyY2VudGFnZSAqIC1jaGlsZEVsT2Zmc2V0ICsgXCIlLCAwKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50T3BhY2l0eSkge1xuICAgICAgICAgIHZhciBtaW4gPSBlbGVtZW50T3BhY2l0eVswXSxcbiAgICAgICAgICAgICAgbWF4ID0gZWxlbWVudE9wYWNpdHlbMV07XG4gICAgICAgICAgdmFyIHJvdGF0ZVBlcmNlbnRhZ2UgPSBNYXRoLm1heChNYXRoLmFicyhyb3RhdGVYUGVyY2VudGFnZSksIE1hdGguYWJzKHJvdGF0ZVlQZXJjZW50YWdlKSk7XG4gICAgICAgICAgJHNldE9wYWNpdHkoY2hpbGRFbCwgbWluICsgKG1heCAtIG1pbikgKiByb3RhdGVQZXJjZW50YWdlIC8gMTAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBvblBvaW50ZXJFbnRlciA9IGZ1bmN0aW9uIG9uUG9pbnRlckVudGVyKGUpIHtcbiAgICBpZiAoZS50eXBlID09PSAncG9pbnRlcmRvd24nICYmIGUucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHJldHVybjtcbiAgICBpZiAoZS50eXBlID09PSAncG9pbnRlcmVudGVyJyAmJiBlLnBvaW50ZXJUeXBlICE9PSAnbW91c2UnKSByZXR1cm47XG5cbiAgICBpZiAoZS50eXBlID09PSAncG9pbnRlcmRvd24nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYXRyb3Bvcy1hY3RpdmUnKTtcbiAgICAkc2V0RHVyYXRpb24ocm90YXRlRWwsICcwbXMnKTtcbiAgICByb3RhdGVkID0gZmFsc2U7XG4gICAgZW50ZXJSb3RhdGVYID0gdW5kZWZpbmVkO1xuICAgIGVudGVyUm90YXRlWSA9IHVuZGVmaW5lZDtcbiAgICByb3RhdGVYTG9jayA9IHRydWU7XG4gICAgcm90YXRlWUxvY2sgPSB0cnVlO1xuICAgICRzZXRUcmFuc2Zvcm0oc2NhbGVFbCwgXCJ0cmFuc2xhdGUzZCgwLDAsIFwiICsgcGFyYW1zLmFjdGl2ZU9mZnNldCArIFwicHgpXCIpO1xuICAgICRzZXREdXJhdGlvbihzY2FsZUVsLCAocGFyYW1zLnJvdGF0ZUxvY2sgPyBwYXJhbXMuZHVyYXRpb25FbnRlciA6IDApICsgXCJtc1wiKTtcblxuICAgIGlmIChzaGFkb3dFbCkge1xuICAgICAgJHNldER1cmF0aW9uKHNoYWRvd0VsLCAocGFyYW1zLnJvdGF0ZUxvY2sgPyBwYXJhbXMuZHVyYXRpb25FbnRlciA6IDApICsgXCJtc1wiKTtcbiAgICB9XG5cbiAgICBzZWxmLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5vbkVudGVyID09PSAnZnVuY3Rpb24nKSBwYXJhbXMub25FbnRlcigpO1xuICB9O1xuXG4gIHZhciBvblRvdWNoTW92ZSA9IGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICBpZiAocm90YXRlZCAmJiBlLmNhbmNlbGFibGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9uUG9pbnRlck1vdmUgPSBmdW5jdGlvbiBvblBvaW50ZXJNb3ZlKGUpIHtcbiAgICBpZiAoIXBhcmFtcy5yb3RhdGUgfHwgIXNlbGYuaXNBY3RpdmUpIHJldHVybjtcblxuICAgIGlmIChlLnBvaW50ZXJUeXBlICE9PSAnbW91c2UnKSB7XG4gICAgICBpZiAoIXBhcmFtcy5yb3RhdGVUb3VjaCkgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBjbGllbnRYID0gZS5jbGllbnRYLFxuICAgICAgICBjbGllbnRZID0gZS5jbGllbnRZO1xuXG4gICAgaWYgKCFlbEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgZWxCb3VuZGluZ0NsaWVudFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG5cbiAgICB2YXIgX2VsQm91bmRpbmdDbGllbnRSZWN0ID0gZWxCb3VuZGluZ0NsaWVudFJlY3QsXG4gICAgICAgIHRvcCA9IF9lbEJvdW5kaW5nQ2xpZW50UmVjdC50b3AsXG4gICAgICAgIGxlZnQgPSBfZWxCb3VuZGluZ0NsaWVudFJlY3QubGVmdCxcbiAgICAgICAgd2lkdGggPSBfZWxCb3VuZGluZ0NsaWVudFJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9lbEJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQ7XG4gICAgdmFyIGNlbnRlclggPSB3aWR0aCAvIDI7XG4gICAgdmFyIGNlbnRlclkgPSBoZWlnaHQgLyAyO1xuICAgIHZhciBjb29yZFggPSBjbGllbnRYIC0gbGVmdDtcbiAgICB2YXIgY29vcmRZID0gY2xpZW50WSAtIHRvcDtcbiAgICB2YXIgcm90YXRlWSA9IHBhcmFtcy5yb3RhdGVZTWF4ICogKGNvb3JkWCAtIGNlbnRlclgpIC8gKHdpZHRoIC8gMikgKiAtMTtcbiAgICB2YXIgcm90YXRlWCA9IHBhcmFtcy5yb3RhdGVYTWF4ICogKGNvb3JkWSAtIGNlbnRlclkpIC8gKGhlaWdodCAvIDIpO1xuXG4gICAgaWYgKHBhcmFtcy5yb3RhdGVMb2NrKSB7XG4gICAgICBpZiAodHlwZW9mIGVudGVyUm90YXRlWSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZW50ZXJSb3RhdGVZID0gcm90YXRlWTtcbiAgICAgICAgcm90YXRlWUxvY2sgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGVudGVyUm90YXRlWCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZW50ZXJSb3RhdGVYID0gcm90YXRlWDtcbiAgICAgICAgcm90YXRlWExvY2sgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocm90YXRlWUxvY2spIHtcbiAgICAgICAgaWYgKGVudGVyUm90YXRlWSA8IDApIHtcbiAgICAgICAgICBpZiAocm90YXRlWSA8IDApIHJvdGF0ZVkgPSAwO1xuICAgICAgICAgIGlmIChyb3RhdGVZID4gMCkgcm90YXRlWUxvY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRlclJvdGF0ZVkgPiAwKSB7XG4gICAgICAgICAgaWYgKHJvdGF0ZVkgPiAwKSByb3RhdGVZID0gMDtcbiAgICAgICAgICBpZiAocm90YXRlWSA8IDApIHJvdGF0ZVlMb2NrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJvdGF0ZVhMb2NrKSB7XG4gICAgICAgIGlmIChlbnRlclJvdGF0ZVggPCAwKSB7XG4gICAgICAgICAgaWYgKHJvdGF0ZVggPCAwKSByb3RhdGVYID0gMDtcbiAgICAgICAgICBpZiAocm90YXRlWCA+IDApIHJvdGF0ZVhMb2NrID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50ZXJSb3RhdGVYID4gMCkge1xuICAgICAgICAgIGlmIChyb3RhdGVYID4gMCkgcm90YXRlWCA9IDA7XG4gICAgICAgICAgaWYgKHJvdGF0ZVggPCAwKSByb3RhdGVYTG9jayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcm90YXRlWCA9IE1hdGgubWluKE1hdGgubWF4KC1yb3RhdGVYLCAtcGFyYW1zLnJvdGF0ZVhNYXgpLCBwYXJhbXMucm90YXRlWE1heCk7XG4gICAgaWYgKHBhcmFtcy5yb3RhdGVYSW52ZXJ0KSByb3RhdGVYID0gLXJvdGF0ZVg7XG4gICAgcm90YXRlWSA9IE1hdGgubWluKE1hdGgubWF4KC1yb3RhdGVZLCAtcGFyYW1zLnJvdGF0ZVlNYXgpLCBwYXJhbXMucm90YXRlWU1heCk7XG4gICAgaWYgKHBhcmFtcy5yb3RhdGVZSW52ZXJ0KSByb3RhdGVZID0gLXJvdGF0ZVk7XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcy5yb3RhdGVUb3VjaCA9PT0gJ3N0cmluZycgJiYgKHJvdGF0ZVggIT09IDAgfHwgcm90YXRlWSAhPT0gMCkpIHtcbiAgICAgIGlmICghcm90YXRlZCkge1xuICAgICAgICByb3RhdGVkID0gdHJ1ZTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYXRyb3Bvcy1yb3RhdGUtdG91Y2gnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHNldFRyYW5zZm9ybShyb3RhdGVFbCwgXCJ0cmFuc2xhdGUzZCgwLDAsMCkgcm90YXRlWChcIiArIHJvdGF0ZVggKyBcImRlZykgcm90YXRlWShcIiArIHJvdGF0ZVkgKyBcImRlZylcIik7XG4gICAgdmFyIHJvdGF0ZVhQZXJjZW50YWdlID0gcm90YXRlWCAvIHBhcmFtcy5yb3RhdGVYTWF4ICogMTAwO1xuICAgIHZhciByb3RhdGVZUGVyY2VudGFnZSA9IHJvdGF0ZVkgLyBwYXJhbXMucm90YXRlWU1heCAqIDEwMDtcblxuICAgIGlmIChoaWdobGlnaHRFbCkge1xuICAgICAgJHNldER1cmF0aW9uKGhpZ2hsaWdodEVsLCAnMG1zJyk7XG4gICAgICAkc2V0VHJhbnNmb3JtKGhpZ2hsaWdodEVsLCBcInRyYW5zbGF0ZTNkKFwiICsgLXJvdGF0ZVlQZXJjZW50YWdlICogMC4yNSArIFwiJSwgXCIgKyByb3RhdGVYUGVyY2VudGFnZSAqIDAuMjUgKyBcIiUsIDApXCIpO1xuICAgICAgaGlnaGxpZ2h0RWwuc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KE1hdGguYWJzKHJvdGF0ZVhQZXJjZW50YWdlKSwgTWF0aC5hYnMocm90YXRlWVBlcmNlbnRhZ2UpKSAvIDEwMDtcbiAgICB9XG5cbiAgICBzZXRDaGlsZHJlbk9mZnNldCh7XG4gICAgICByb3RhdGVYUGVyY2VudGFnZTogcm90YXRlWFBlcmNlbnRhZ2UsXG4gICAgICByb3RhdGVZUGVyY2VudGFnZTogcm90YXRlWVBlcmNlbnRhZ2UsXG4gICAgICBkdXJhdGlvbjogJzBtcydcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy5vblJvdGF0ZSA9PT0gJ2Z1bmN0aW9uJykgcGFyYW1zLm9uUm90YXRlKHJvdGF0ZVgsIHJvdGF0ZVkpO1xuICB9O1xuXG4gIHZhciBvblBvaW50ZXJMZWF2ZSA9IGZ1bmN0aW9uIG9uUG9pbnRlckxlYXZlKGUpIHtcbiAgICBlbEJvdW5kaW5nQ2xpZW50UmVjdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAoIXNlbGYuaXNBY3RpdmUpIHJldHVybjtcbiAgICBpZiAoZSAmJiBlLnR5cGUgPT09ICdwb2ludGVydXAnICYmIGUucG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHJldHVybjtcbiAgICBpZiAoZSAmJiBlLnR5cGUgPT09ICdwb2ludGVybGVhdmUnICYmIGUucG9pbnRlclR5cGUgIT09ICdtb3VzZScpIHJldHVybjtcblxuICAgIGlmICh0eXBlb2YgcGFyYW1zLnJvdGF0ZVRvdWNoID09PSAnc3RyaW5nJyAmJiByb3RhdGVkKSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhdHJvcG9zLXJvdGF0ZS10b3VjaCcpO1xuICAgIH1cblxuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2F0cm9wb3MtYWN0aXZlJyk7XG4gICAgJHNldFRyYW5zZm9ybShzY2FsZUVsLCBcInRyYW5zbGF0ZTNkKDAsMCwgXCIgKyAwICsgXCJweClcIik7XG4gICAgJHNldER1cmF0aW9uKHNjYWxlRWwsIHBhcmFtcy5kdXJhdGlvbkxlYXZlICsgXCJtc1wiKTtcblxuICAgIGlmIChzaGFkb3dFbCkge1xuICAgICAgJHNldER1cmF0aW9uKHNoYWRvd0VsLCBwYXJhbXMuZHVyYXRpb25MZWF2ZSArIFwibXNcIik7XG4gICAgfVxuXG4gICAgaWYgKGhpZ2hsaWdodEVsKSB7XG4gICAgICAkc2V0RHVyYXRpb24oaGlnaGxpZ2h0RWwsIHBhcmFtcy5kdXJhdGlvbkxlYXZlICsgXCJtc1wiKTtcbiAgICAgICRzZXRUcmFuc2Zvcm0oaGlnaGxpZ2h0RWwsIFwidHJhbnNsYXRlM2QoMCwgMCwgMClcIik7XG4gICAgICBoaWdobGlnaHRFbC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB9XG5cbiAgICAkc2V0RHVyYXRpb24ocm90YXRlRWwsIHBhcmFtcy5kdXJhdGlvbkxlYXZlICsgXCJtc1wiKTtcbiAgICAkc2V0VHJhbnNmb3JtKHJvdGF0ZUVsLCBcInRyYW5zbGF0ZTNkKDAsMCwwKSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZylcIik7XG4gICAgc2V0Q2hpbGRyZW5PZmZzZXQoe1xuICAgICAgZHVyYXRpb246IHBhcmFtcy5kdXJhdGlvbkxlYXZlICsgXCJtc1wiXG4gICAgfSk7XG4gICAgc2VsZi5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIGlmICh0eXBlb2YgcGFyYW1zLm9uUm90YXRlID09PSAnZnVuY3Rpb24nKSBwYXJhbXMub25Sb3RhdGUoMCwgMCk7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMub25MZWF2ZSA9PT0gJ2Z1bmN0aW9uJykgcGFyYW1zLm9uTGVhdmUoKTtcbiAgfTtcblxuICB2YXIgb25Eb2N1bWVudENsaWNrID0gZnVuY3Rpb24gb25Eb2N1bWVudENsaWNrKGUpIHtcbiAgICB2YXIgY2xpY2tUYXJnZXQgPSBlLnRhcmdldDtcblxuICAgIGlmICghZWwuY29udGFpbnMoY2xpY2tUYXJnZXQpICYmIGNsaWNrVGFyZ2V0ICE9PSBlbCAmJiBzZWxmLmlzQWN0aXZlKSB7XG4gICAgICBvblBvaW50ZXJMZWF2ZSgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaW5pdERPTSA9IGZ1bmN0aW9uIGluaXRET00oKSB7XG4gICAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVsID0gJChkb2N1bWVudCwgZWwpO1xuICAgIH1cblxuICAgIGlmICghZWwpIHJldHVybjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICBpZiAoZWwuX19hdHJvcG9zX18pIHJldHVybjtcblxuICAgIGlmICh0eXBlb2YgZXZlbnRzRWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodHlwZW9mIGV2ZW50c0VsID09PSAnc3RyaW5nJykge1xuICAgICAgICBldmVudHNFbCA9ICQoZG9jdW1lbnQsIGV2ZW50c0VsKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnRzRWwgPSBlbDtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHNlbGYsIHtcbiAgICAgIGVsOiBlbFxuICAgIH0pO1xuICAgIHJvdGF0ZUVsID0gJChlbCwgJy5hdHJvcG9zLXJvdGF0ZScpO1xuICAgIHNjYWxlRWwgPSAkKGVsLCAnLmF0cm9wb3Mtc2NhbGUnKTtcbiAgICBpbm5lckVsID0gJChlbCwgJy5hdHJvcG9zLWlubmVyJyk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgZWwuX19hdHJvcG9zX18gPSBzZWxmO1xuICB9O1xuXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpbml0RE9NKCk7XG4gICAgaWYgKCFlbCB8fCAhZXZlbnRzRWwpIHJldHVybjtcblxuICAgIGlmIChwYXJhbXMuc2hhZG93KSB7XG4gICAgICBjcmVhdGVTaGFkb3coKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmhpZ2hsaWdodCkge1xuICAgICAgY3JlYXRlSGlnaGxpZ2h0KCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5yb3RhdGVUb3VjaCkge1xuICAgICAgaWYgKHR5cGVvZiBwYXJhbXMucm90YXRlVG91Y2ggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJhdHJvcG9zLXJvdGF0ZS10b3VjaC1cIiArIHBhcmFtcy5yb3RhdGVUb3VjaCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdhdHJvcG9zLXJvdGF0ZS10b3VjaCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkKGVsLCAnW2RhdGEtYXRyb3Bvcy1vcGFjaXR5XScpKSB7XG4gICAgICBzZXRDaGlsZHJlbk9mZnNldCh7XG4gICAgICAgIG9wYWNpdHlPbmx5OiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkb24oZG9jdW1lbnQsICdjbGljaycsIG9uRG9jdW1lbnRDbGljayk7XG4gICAgJG9uKGV2ZW50c0VsLCAncG9pbnRlcmRvd24nLCBvblBvaW50ZXJFbnRlcik7XG4gICAgJG9uKGV2ZW50c0VsLCAncG9pbnRlcmVudGVyJywgb25Qb2ludGVyRW50ZXIpO1xuICAgICRvbihldmVudHNFbCwgJ3BvaW50ZXJtb3ZlJywgb25Qb2ludGVyTW92ZSk7XG4gICAgJG9uKGV2ZW50c0VsLCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICRvbihldmVudHNFbCwgJ3BvaW50ZXJsZWF2ZScsIG9uUG9pbnRlckxlYXZlKTtcbiAgICAkb24oZXZlbnRzRWwsICdwb2ludGVydXAnLCBvblBvaW50ZXJMZWF2ZSk7XG4gICAgJG9uKGV2ZW50c0VsLCAnbG9zdHBvaW50ZXJjYXB0dXJlJywgb25Qb2ludGVyTGVhdmUpO1xuICB9O1xuXG4gIHZhciBkZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBzZWxmLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgJG9mZihkb2N1bWVudCwgJ2NsaWNrJywgb25Eb2N1bWVudENsaWNrKTtcbiAgICAkb2ZmKGV2ZW50c0VsLCAncG9pbnRlcmRvd24nLCBvblBvaW50ZXJFbnRlcik7XG4gICAgJG9mZihldmVudHNFbCwgJ3BvaW50ZXJlbnRlcicsIG9uUG9pbnRlckVudGVyKTtcbiAgICAkb2ZmKGV2ZW50c0VsLCAncG9pbnRlcm1vdmUnLCBvblBvaW50ZXJNb3ZlKTtcbiAgICAkb2ZmKGV2ZW50c0VsLCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICRvZmYoZXZlbnRzRWwsICdwb2ludGVybGVhdmUnLCBvblBvaW50ZXJMZWF2ZSk7XG4gICAgJG9mZihldmVudHNFbCwgJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlckxlYXZlKTtcbiAgICAkb2ZmKGV2ZW50c0VsLCAnbG9zdHBvaW50ZXJjYXB0dXJlJywgb25Qb2ludGVyTGVhdmUpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIGRlbGV0ZSBlbC5fX2F0cm9wb3NfXztcbiAgfTtcblxuICBzZWxmLmRlc3Ryb3kgPSBkZXN0cm95O1xuICBpbml0KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdHJvcG9zO1xuZXhwb3J0IHsgQXRyb3BvcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiYXRyb3Bvcy9jc3MvbWluXCI7XHJcbmltcG9ydCBhdHJvcG9zSW1hZ2UgZnJvbSBcIi4vaW1nLmpzXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi8uLi9zYXNzL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IG15QXRyb3BvcyBmcm9tIFwiLi9hdHJvcG9zLmpzXCI7XHJcblxyXG5hdHJvcG9zSW1hZ2UoKTtcclxuIl0sIm5hbWVzIjpbIkF0cm9wb3MiLCJteUF0cm9wb3MiLCJlbCIsImFjdGl2ZU9mZnNldCIsImhpZ2hsaWdodCIsInNoYWRvdyIsImF0cm9wb3NJbWciLCJhdHJvcG9zSW1hZ2UiLCJpbWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwiYWx0Iiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9