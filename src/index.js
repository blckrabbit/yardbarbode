/**
 * Created by Administrator on 2015/9/11.
 */

 /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Barcode = function Barcode(data, options) {
	_classCallCheck(this, Barcode);

	this.data = data;
	this.text = options.text || data;
	this.options = options;
};

exports.default = Barcode;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _SET_BY_CODE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constants for internal usage
var SET_A = exports.SET_A = 0;
var SET_B = exports.SET_B = 1;
var SET_C = exports.SET_C = 2;

// Special characters
var SHIFT = exports.SHIFT = 98;
var START_A = exports.START_A = 103;
var START_B = exports.START_B = 104;
var START_C = exports.START_C = 105;
var MODULO = exports.MODULO = 103;
var STOP = exports.STOP = 106;
var FNC1 = exports.FNC1 = 207;

// Get set by start code
var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE);

// Get next set by code
var SWAP = exports.SWAP = {
	101: SET_A,
	100: SET_B,
	99: SET_C
};

var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208); // START_A + 105
var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209); // START_B + 105
var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210); // START_C + 105

// 128A (Code Set A)
// ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4
var A_CHARS = exports.A_CHARS = "[\x00-\x5F\xC8-\xCF]";

// 128B (Code Set B)
// ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4
var B_CHARS = exports.B_CHARS = "[\x20-\x7F\xC8-\xCF]";

// 128C (Code Set C)
// 00–99 (encodes two digits with a single code point) and FNC1
var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";

// CODE128 includes 107 symbols:
// 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
// Each symbol consist of three black bars (1) and three white spaces (0).
var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011000, 10010001100, 10001001100, 10011001000, 10011000100, 10001100100, 11001001000, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011000, 11011000110, 11000110110, 10100011000, 10001011000, 10001000110, 10110001000, 10001101000, 10001100010, 11010001000, 11000101000, 11000100010, 10110111000, 10110001110, 10001101110, 10111011000, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101000, 11011100010, 11011101110, 11101011000, 11101000110, 11100010110, 11101101000, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 10100110000, 10100001100, 10010110000, 10010000110, 10000101100, 10000100110, 10110010000, 10110000100, 10011010000, 10011000010, 10000110100, 10000110010, 11000010010, 11001010000, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111000, 10100011110, 10001011110, 10111101000, 10111100010, 11110101000, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 11010010000, 11010011100, 1100011101011];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// Standard start end and middle bits
var SIDE_BIN = exports.SIDE_BIN = '101';
var MIDDLE_BIN = exports.MIDDLE_BIN = '01010';

var BINARIES = exports.BINARIES = {
	'L': [// The L (left) type of encoding
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'G': [// The G type of encoding
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
	'R': [// The R (right) type of encoding
	'1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100'],
	'O': [// The O (odd) encoding for UPC-E
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'E': [// The E (even) encoding for UPC-E
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111']
};

// Define the EAN-2 structure
var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG'];

// Define the EAN-5 structure
var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG'];

// Define the EAN-13 structure
var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(2);

// Encode data string
var encode = function encode(data, structure, separator) {
	var encoded = data.split('').map(function (val, idx) {
		return _constants.BINARIES[structure[idx]];
	}).map(function (val, idx) {
		return val ? val[data[idx]] : '';
	});

	if (separator) {
		var last = data.length - 1;
		encoded = encoded.map(function (val, idx) {
			return idx < last ? val + separator : val;
		});
	}

	return encoded.join('');
};

exports.default = encode;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// https://en.wikipedia.org/wiki/MSI_Barcode#Character_set_and_binary_lookup

var MSI = function (_Barcode) {
	_inherits(MSI, _Barcode);

	function MSI(data, options) {
		_classCallCheck(this, MSI);

		return _possibleConstructorReturn(this, (MSI.__proto__ || Object.getPrototypeOf(MSI)).call(this, data, options));
	}

	_createClass(MSI, [{
		key: "encode",
		value: function encode() {
			// Start bits
			var ret = "110";

			for (var i = 0; i < this.data.length; i++) {
				// Convert the character to binary (always 4 binary digits)
				var digit = parseInt(this.data[i]);
				var bin = digit.toString(2);
				bin = addZeroes(bin, 4 - bin.length);

				// Add 100 for every zero and 110 for every 1
				for (var b = 0; b < bin.length; b++) {
					ret += bin[b] == "0" ? "100" : "110";
				}
			}

			// End bits
			ret += "1001";

			return {
				data: ret,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]+$/) !== -1;
		}
	}]);

	return MSI;
}(_Barcode3.default);

function addZeroes(number, n) {
	for (var i = 0; i < n; i++) {
		number = "0" + number;
	}
	return number;
}

exports.default = MSI;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (old, replaceObj) {
  return _extends({}, old, replaceObj);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is the master class,
// it does require the start code to be included in the string
var CODE128 = function (_Barcode) {
	_inherits(CODE128, _Barcode);

	function CODE128(data, options) {
		_classCallCheck(this, CODE128);

		// Get array of ascii codes from data
		var _this = _possibleConstructorReturn(this, (CODE128.__proto__ || Object.getPrototypeOf(CODE128)).call(this, data.substring(1), options));

		_this.bytes = data.split('').map(function (char) {
			return char.charCodeAt(0);
		});
		return _this;
	}

	_createClass(CODE128, [{
		key: 'valid',
		value: function valid() {
			// ASCII value ranges 0-127, 200-211
			return (/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
			);
		}

		// The public encoding function

	}, {
		key: 'encode',
		value: function encode() {
			var bytes = this.bytes;
			// Remove the start code from the bytes and set its index
			var startIndex = bytes.shift() - 105;
			// Get start set by index
			var startSet = _constants.SET_BY_CODE[startIndex];

			if (startSet === undefined) {
				throw new RangeError('The encoding does not start with a start character.');
			}

			if (this.shouldEncodeAsEan128() === true) {
				bytes.unshift(_constants.FNC1);
			}

			// Start encode with the right type
			var encodingResult = CODE128.next(bytes, 1, startSet);

			return {
				text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
				data:
				// Add the start bits
				CODE128.getBar(startIndex) +
				// Add the encoded bits
				encodingResult.result +
				// Add the checksum
				CODE128.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) +
				// Add the end bits
				CODE128.getBar(_constants.STOP)
			};
		}

		// GS1-128/EAN-128

	}, {
		key: 'shouldEncodeAsEan128',
		value: function shouldEncodeAsEan128() {
			var isEAN128 = this.options.ean128 || false;
			if (typeof isEAN128 === 'string') {
				isEAN128 = isEAN128.toLowerCase() === 'true';
			}
			return isEAN128;
		}

		// Get a bar symbol by index

	}], [{
		key: 'getBar',
		value: function getBar(index) {
			return _constants.BARS[index] ? _constants.BARS[index].toString() : '';
		}

		// Correct an index by a set and shift it from the bytes array

	}, {
		key: 'correctIndex',
		value: function correctIndex(bytes, set) {
			if (set === _constants.SET_A) {
				var charCode = bytes.shift();
				return charCode < 32 ? charCode + 64 : charCode - 32;
			} else if (set === _constants.SET_B) {
				return bytes.shift() - 32;
			} else {
				return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
			}
		}
	}, {
		key: 'next',
		value: function next(bytes, pos, set) {
			if (!bytes.length) {
				return { result: '', checksum: 0 };
			}

			var nextCode = void 0,
			    index = void 0;

			// Special characters
			if (bytes[0] >= 200) {
				index = bytes.shift() - 105;
				var nextSet = _constants.SWAP[index];

				// Swap to other set
				if (nextSet !== undefined) {
					nextCode = CODE128.next(bytes, pos + 1, nextSet);
				}
				// Continue on current set but encode a special character
				else {
						// Shift
						if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
							// Convert the next character so that is encoded correctly
							bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
						}
						nextCode = CODE128.next(bytes, pos + 1, set);
					}
			}
			// Continue encoding
			else {
					index = CODE128.correctIndex(bytes, set);
					nextCode = CODE128.next(bytes, pos + 1, set);
				}

			// Get the correct binary encoding and calculate the weight
			var enc = CODE128.getBar(index);
			var weight = index * pos;

			return {
				result: enc + nextCode.result,
				checksum: weight + nextCode.checksum
			};
		}
	}]);

	return CODE128;
}(_Barcode3.default);

exports.default = CODE128;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mod10 = mod10;
exports.mod11 = mod11;
function mod10(number) {
	var sum = 0;
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[i]);
		if ((i + number.length) % 2 === 0) {
			sum += n;
		} else {
			sum += n * 2 % 10 + Math.floor(n * 2 / 10);
		}
	}
	return (10 - sum % 10) % 10;
}

function mod11(number) {
	var sum = 0;
	var weights = [2, 3, 4, 5, 6, 7];
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[number.length - 1 - i]);
		sum += weights[i % weights.length] * n;
	}
	return (11 - sum % 11) % 11;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidInputException = function (_Error) {
	_inherits(InvalidInputException, _Error);

	function InvalidInputException(symbology, input) {
		_classCallCheck(this, InvalidInputException);

		var _this = _possibleConstructorReturn(this, (InvalidInputException.__proto__ || Object.getPrototypeOf(InvalidInputException)).call(this));

		_this.name = "InvalidInputException";

		_this.symbology = symbology;
		_this.input = input;

		_this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
		return _this;
	}

	return InvalidInputException;
}(Error);

var InvalidElementException = function (_Error2) {
	_inherits(InvalidElementException, _Error2);

	function InvalidElementException() {
		_classCallCheck(this, InvalidElementException);

		var _this2 = _possibleConstructorReturn(this, (InvalidElementException.__proto__ || Object.getPrototypeOf(InvalidElementException)).call(this));

		_this2.name = "InvalidElementException";
		_this2.message = "Not supported type to render on";
		return _this2;
	}

	return InvalidElementException;
}(Error);

var NoElementException = function (_Error3) {
	_inherits(NoElementException, _Error3);

	function NoElementException() {
		_classCallCheck(this, NoElementException);

		var _this3 = _possibleConstructorReturn(this, (NoElementException.__proto__ || Object.getPrototypeOf(NoElementException)).call(this));

		_this3.name = "NoElementException";
		_this3.message = "No element to render on.";
		return _this3;
	}

	return NoElementException;
}(Error);

exports.InvalidInputException = InvalidInputException;
exports.InvalidElementException = InvalidElementException;
exports.NoElementException = NoElementException;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = optionsFromStrings;

// Convert string to integers/booleans where it should be

function optionsFromStrings(options) {
	var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

	for (var intOption in intOptions) {
		if (intOptions.hasOwnProperty(intOption)) {
			intOption = intOptions[intOption];
			if (typeof options[intOption] === "string") {
				options[intOption] = parseInt(options[intOption], 10);
			}
		}
	}

	if (typeof options["displayValue"] === "string") {
		options["displayValue"] = options["displayValue"] != "false";
	}

	return options;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var defaults = {
	width: 2,
	height: 100,
	format: "auto",
	displayValue: true,
	fontOptions: "",
	font: "monospace",
	text: undefined,
	textAlign: "center",
	textPosition: "bottom",
	textMargin: 2,
	fontSize: 20,
	background: "#ffffff",
	lineColor: "#000000",
	margin: 10,
	marginTop: undefined,
	marginBottom: undefined,
	marginLeft: undefined,
	marginRight: undefined,
	valid: function valid() {}
};

exports.default = defaults;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(2);

var _encoder = __webpack_require__(3);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Base class for EAN8 & EAN13
var EAN = function (_Barcode) {
	_inherits(EAN, _Barcode);

	function EAN(data, options) {
		_classCallCheck(this, EAN);

		// Make sure the font is not bigger than the space between the guard bars
		var _this = _possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, data, options));

		_this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize;

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(EAN, [{
		key: 'encode',
		value: function encode() {
			return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
		}
	}, {
		key: 'leftText',
		value: function leftText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var textOptions = { fontSize: this.fontSize };
			var guardOptions = { height: this.guardHeight };

			return [{ data: _constants.SIDE_BIN, options: guardOptions }, { data: this.leftEncode(), text: this.leftText(), options: textOptions }, { data: _constants.MIDDLE_BIN, options: guardOptions }, { data: this.rightEncode(), text: this.rightText(), options: textOptions }, { data: _constants.SIDE_BIN, options: guardOptions }];
		}
	}, {
		key: 'encodeFlat',
		value: function encodeFlat() {
			var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];

			return {
				data: data.join(''),
				text: this.text
			};
		}
	}]);

	return EAN;
}(_Barcode3.default);

exports.default = EAN;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.checksum = checksum;

var _encoder = __webpack_require__(3);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding

var UPC = function (_Barcode) {
	_inherits(UPC, _Barcode);

	function UPC(data, options) {
		_classCallCheck(this, UPC);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{11}$/) !== -1) {
			data += checksum(data);
		}

		var _this = _possibleConstructorReturn(this, (UPC.__proto__ || Object.getPrototypeOf(UPC)).call(this, data, options));

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPC, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
		}
	}, {
		key: "encode",
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: "flatEncoding",
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
			result += "01010";
			result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
			result += "101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "guardedEncoding",
		value: function guardedEncoding() {
			var result = [];

			// Add the first digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(0, 1),
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101" + (0, _encoder2.default)(this.data[0], "L"),
				options: { height: this.guardHeight }
			});

			// Add the left side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
				text: this.text.substr(1, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the middle bits
			result.push({
				data: "01010",
				options: { height: this.guardHeight }
			});

			// Add the right side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
				text: this.text.substr(6, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: (0, _encoder2.default)(this.data[11], "R") + "101",
				options: { height: this.guardHeight }
			});

			// Add the last digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(11, 1),
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}]);

	return UPC;
}(_Barcode3.default);

// Calulate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


function checksum(number) {
	var result = 0;

	var i;
	for (i = 1; i < 11; i += 2) {
		result += parseInt(number[i]);
	}
	for (i = 0; i < 11; i += 2) {
		result += parseInt(number[i]) * 3;
	}

	return (10 - result % 10) % 10;
}

exports.default = UPC;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(36);

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITF = function (_Barcode) {
	_inherits(ITF, _Barcode);

	function ITF() {
		_classCallCheck(this, ITF);

		return _possibleConstructorReturn(this, (ITF.__proto__ || Object.getPrototypeOf(ITF)).apply(this, arguments));
	}

	_createClass(ITF, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^([0-9]{2})+$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var _this2 = this;

			// Calculate all the digit pairs
			var encoded = this.data.match(/.{2}/g).map(function (pair) {
				return _this2.encodePair(pair);
			}).join('');

			return {
				data: _constants.START_BIN + encoded + _constants.END_BIN,
				text: this.text
			};
		}

		// Calculate the data of a number pair

	}, {
		key: 'encodePair',
		value: function encodePair(pair) {
			var second = _constants.BINARIES[pair[1]];

			return _constants.BINARIES[pair[0]].split('').map(function (first, idx) {
				return (first === '1' ? '111' : '1') + (second[idx] === '1' ? '000' : '0');
			}).join('');
		}
	}]);

	return ITF;
}(_Barcode3.default);

exports.default = ITF;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = undefined;

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEncodingHeight(encoding, options) {
	return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
}

function getBarcodePadding(textWidth, barcodeWidth, options) {
	if (options.displayValue && barcodeWidth < textWidth) {
		if (options.textAlign == "center") {
			return Math.floor((textWidth - barcodeWidth) / 2);
		} else if (options.textAlign == "left") {
			return 0;
		} else if (options.textAlign == "right") {
			return Math.floor(textWidth - barcodeWidth);
		}
	}
	return 0;
}

function calculateEncodingAttributes(encodings, barcodeOptions, context) {
	for (var i = 0; i < encodings.length; i++) {
		var encoding = encodings[i];
		var options = (0, _merge2.default)(barcodeOptions, encoding.options);

		// Calculate the width of the encoding
		var textWidth;
		if (options.displayValue) {
			textWidth = messureText(encoding.text, options, context);
		} else {
			textWidth = 0;
		}

		var barcodeWidth = encoding.data.length * options.width;
		encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));

		encoding.height = getEncodingHeight(encoding, options);

		encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
	}
}

function getTotalWidthOfEncodings(encodings) {
	var totalWidth = 0;
	for (var i = 0; i < encodings.length; i++) {
		totalWidth += encodings[i].width;
	}
	return totalWidth;
}

function getMaximumHeightOfEncodings(encodings) {
	var maxHeight = 0;
	for (var i = 0; i < encodings.length; i++) {
		if (encodings[i].height > maxHeight) {
			maxHeight = encodings[i].height;
		}
	}
	return maxHeight;
}

function messureText(string, options, context) {
	var ctx;

	if (context) {
		ctx = context;
	} else if (typeof document !== "undefined") {
		ctx = document.createElement("canvas").getContext("2d");
	} else {
		// If the text cannot be messured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font;

	// Calculate the width of the encoding
	var size = ctx.measureText(string).width;

	return size;
}

exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
exports.getEncodingHeight = getEncodingHeight;
exports.getBarcodePadding = getBarcodePadding;
exports.calculateEncodingAttributes = calculateEncodingAttributes;
exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _CODE = __webpack_require__(27);

var _CODE2 = __webpack_require__(26);

var _EAN_UPC = __webpack_require__(33);

var _ITF = __webpack_require__(37);

var _MSI = __webpack_require__(42);

var _pharmacode = __webpack_require__(44);

var _codabar = __webpack_require__(43);

var _GenericBarcode = __webpack_require__(34);

exports.default = {
	CODE39: _CODE.CODE39,
	CODE128: _CODE2.CODE128, CODE128A: _CODE2.CODE128A, CODE128B: _CODE2.CODE128B, CODE128C: _CODE2.CODE128C,
	EAN13: _EAN_UPC.EAN13, EAN8: _EAN_UPC.EAN8, EAN5: _EAN_UPC.EAN5, EAN2: _EAN_UPC.EAN2, UPC: _EAN_UPC.UPC, UPCE: _EAN_UPC.UPCE,
	ITF14: _ITF.ITF14,
	ITF: _ITF.ITF,
	MSI: _MSI.MSI, MSI10: _MSI.MSI10, MSI11: _MSI.MSI11, MSI1010: _MSI.MSI1010, MSI1110: _MSI.MSI1110,
	pharmacode: _pharmacode.pharmacode,
	codabar: _codabar.codabar,
	GenericBarcode: _GenericBarcode.GenericBarcode
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint no-console: 0 */

var ErrorHandler = function () {
	function ErrorHandler(api) {
		_classCallCheck(this, ErrorHandler);

		this.api = api;
	}

	_createClass(ErrorHandler, [{
		key: "handleCatch",
		value: function handleCatch(e) {
			// If babel supported extending of Error in a correct way instanceof would be used here
			if (e.name === "InvalidInputException") {
				if (this.api._options.valid !== this.api._defaults.valid) {
					this.api._options.valid(false);
				} else {
					throw e.message;
				}
			} else {
				throw e;
			}

			this.api.render = function () {};
		}
	}, {
		key: "wrapBarcodeCall",
		value: function wrapBarcodeCall(func) {
			try {
				var result = func.apply(undefined, arguments);
				this.api._options.valid(true);
				return result;
			} catch (e) {
				this.handleCatch(e);

				return this.api;
			}
		}
	}]);

	return ErrorHandler;
}();

exports.default = ErrorHandler;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = fixOptions;


function fixOptions(options) {
	// Fix the margins
	options.marginTop = options.marginTop || options.margin;
	options.marginBottom = options.marginBottom || options.margin;
	options.marginRight = options.marginRight || options.margin;
	options.marginLeft = options.marginLeft || options.margin;

	return options;
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* global HTMLImageElement */
/* global HTMLCanvasElement */
/* global SVGElement */

var _getOptionsFromElement = __webpack_require__(45);

var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);

var _renderers = __webpack_require__(47);

var _renderers2 = _interopRequireDefault(_renderers);

var _exceptions = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Takes an element and returns an object with information about how
// it should be rendered
// This could also return an array with these objects
// {
//   element: The element that the renderer should draw on
//   renderer: The name of the renderer
//   afterRender (optional): If something has to done after the renderer
//     completed, calls afterRender (function)
//   options (optional): Options that can be defined in the element
// }

function getRenderProperties(element) {
	// If the element is a string, query select call again
	if (typeof element === "string") {
		return querySelectedRenderProperties(element);
	}
	// If element is array. Recursivly call with every object in the array
	else if (Array.isArray(element)) {
			var returnArray = [];
			for (var i = 0; i < element.length; i++) {
				returnArray.push(getRenderProperties(element[i]));
			}
			return returnArray;
		}
		// If element, render on canvas and set the uri as src
		else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLImageElement) {
				return newCanvasRenderProperties(element);
			}
			// If SVG
			else if (element && element.nodeName === 'svg' || typeof SVGElement !== 'undefined' && element instanceof SVGElement) {
					return {
						element: element,
						options: (0, _getOptionsFromElement2.default)(element),
						renderer: _renderers2.default.SVGRenderer
					};
				}
				// If canvas (in browser)
				else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLCanvasElement) {
						return {
							element: element,
							options: (0, _getOptionsFromElement2.default)(element),
							renderer: _renderers2.default.CanvasRenderer
						};
					}
					// If canvas (in node)
					else if (element && element.getContext) {
							return {
								element: element,
								renderer: _renderers2.default.CanvasRenderer
							};
						} else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !element.nodeName) {
							return {
								element: element,
								renderer: _renderers2.default.ObjectRenderer
							};
						} else {
							throw new _exceptions.InvalidElementException();
						}
}

function querySelectedRenderProperties(string) {
	var selector = document.querySelectorAll(string);
	if (selector.length === 0) {
		return undefined;
	} else {
		var returnArray = [];
		for (var i = 0; i < selector.length; i++) {
			returnArray.push(getRenderProperties(selector[i]));
		}
		return returnArray;
	}
}

function newCanvasRenderProperties(imgElement) {
	var canvas = document.createElement('canvas');
	return {
		element: canvas,
		options: (0, _getOptionsFromElement2.default)(imgElement),
		renderer: _renderers2.default.CanvasRenderer,
		afterRender: function afterRender() {
			imgElement.setAttribute("src", canvas.toDataURL());
		}
	};
}

exports.default = getRenderProperties;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = linearizeEncodings;

// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
// Convert to [1-1, 1-2, 2, 3-1, 3-2]

function linearizeEncodings(encodings) {
	var linearEncodings = [];
	function nextLevel(encoded) {
		if (Array.isArray(encoded)) {
			for (var i = 0; i < encoded.length; i++) {
				nextLevel(encoded[i]);
			}
		} else {
			encoded.text = encoded.text || "";
			encoded.data = encoded.data || "";
			linearEncodings.push(encoded);
		}
	}
	nextLevel(encodings);

	return linearEncodings;
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _barcodes = __webpack_require__(15);

var _barcodes2 = _interopRequireDefault(_barcodes);

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _linearizeEncodings = __webpack_require__(19);

var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);

var _fixOptions = __webpack_require__(17);

var _fixOptions2 = _interopRequireDefault(_fixOptions);

var _getRenderProperties = __webpack_require__(18);

var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);

var _optionsFromStrings = __webpack_require__(9);

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _ErrorHandler = __webpack_require__(16);

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

var _exceptions = __webpack_require__(8);

var _defaults = __webpack_require__(10);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The protype of the object returned from the JsBarcode() call


// Help functions
var API = function API() {};

// The first call of the library API
// Will return an object with all barcodes calls and the data that is used
// by the renderers


// Default values


// Exceptions
// Import all the barcodes
var JsBarcode = function JsBarcode(element, text, options) {
	var api = new API();

	if (typeof element === "undefined") {
		throw Error("No element to render on was provided.");
	}

	// Variables that will be pased through the API calls
	api._renderProperties = (0, _getRenderProperties2.default)(element);
	api._encodings = [];
	api._options = _defaults2.default;
	api._errorHandler = new _ErrorHandler2.default(api);

	// If text is set, use the simple syntax (render the barcode directly)
	if (typeof text !== "undefined") {
		options = options || {};

		if (!options.format) {
			options.format = autoSelectBarcode();
		}

		api.options(options)[options.format](text, options).render();
	}

	return api;
};

// To make tests work TODO: remove
JsBarcode.getModule = function (name) {
	return _barcodes2.default[name];
};

// Register all barcodes
for (var name in _barcodes2.default) {
	if (_barcodes2.default.hasOwnProperty(name)) {
		// Security check if the propery is a prototype property
		registerBarcode(_barcodes2.default, name);
	}
}
function registerBarcode(barcodes, name) {
	API.prototype[name] = API.prototype[name.toUpperCase()] = API.prototype[name.toLowerCase()] = function (text, options) {
		var api = this;
		return api._errorHandler.wrapBarcodeCall(function () {
			// Ensure text is options.text
			options.text = typeof options.text === 'undefined' ? undefined : '' + options.text;

			var newOptions = (0, _merge2.default)(api._options, options);
			newOptions = (0, _optionsFromStrings2.default)(newOptions);
			var Encoder = barcodes[name];
			var encoded = encode(text, Encoder, newOptions);
			api._encodings.push(encoded);

			return api;
		});
	};
}

// encode() handles the Encoder call and builds the binary string to be rendered
function encode(text, Encoder, options) {
	// Ensure that text is a string
	text = "" + text;

	var encoder = new Encoder(text, options);

	// If the input is not valid for the encoder, throw error.
	// If the valid callback option is set, call it instead of throwing error
	if (!encoder.valid()) {
		throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
	}

	// Make a request for the binary data (and other infromation) that should be rendered
	var encoded = encoder.encode();

	// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
	// Convert to [1-1, 1-2, 2, 3-1, 3-2]
	encoded = (0, _linearizeEncodings2.default)(encoded);

	// Merge
	for (var i = 0; i < encoded.length; i++) {
		encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
	}

	return encoded;
}

function autoSelectBarcode() {
	// If CODE128 exists. Use it
	if (_barcodes2.default["CODE128"]) {
		return "CODE128";
	}

	// Else, take the first (probably only) barcode
	return Object.keys(_barcodes2.default)[0];
}

// Sets global encoder options
// Added to the api by the JsBarcode function
API.prototype.options = function (options) {
	this._options = (0, _merge2.default)(this._options, options);
	return this;
};

// Will create a blank space (usually in between barcodes)
API.prototype.blank = function (size) {
	var zeroes = new Array(size + 1).join("0");
	this._encodings.push({ data: zeroes });
	return this;
};

// Initialize JsBarcode on all HTML elements defined.
API.prototype.init = function () {
	// Should do nothing if no elements where found
	if (!this._renderProperties) {
		return;
	}

	// Make sure renderProperies is an array
	if (!Array.isArray(this._renderProperties)) {
		this._renderProperties = [this._renderProperties];
	}

	var renderProperty;
	for (var i in this._renderProperties) {
		renderProperty = this._renderProperties[i];
		var options = (0, _merge2.default)(this._options, renderProperty.options);

		if (options.format == "auto") {
			options.format = autoSelectBarcode();
		}

		this._errorHandler.wrapBarcodeCall(function () {
			var text = options.value;
			var Encoder = _barcodes2.default[options.format.toUpperCase()];
			var encoded = encode(text, Encoder, options);

			render(renderProperty, encoded, options);
		});
	}
};

// The render API call. Calls the real render function.
API.prototype.render = function () {
	if (!this._renderProperties) {
		throw new _exceptions.NoElementException();
	}

	if (Array.isArray(this._renderProperties)) {
		for (var i = 0; i < this._renderProperties.length; i++) {
			render(this._renderProperties[i], this._encodings, this._options);
		}
	} else {
		render(this._renderProperties, this._encodings, this._options);
	}

	return this;
};

API.prototype._defaults = _defaults2.default;

// Prepares the encodings and calls the renderer
function render(renderProperties, encodings, options) {
	encodings = (0, _linearizeEncodings2.default)(encodings);

	for (var i = 0; i < encodings.length; i++) {
		encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
		(0, _fixOptions2.default)(encodings[i].options);
	}

	(0, _fixOptions2.default)(options);

	var Renderer = renderProperties.renderer;
	var renderer = new Renderer(renderProperties.element, encodings, options);
	renderer.render();

	if (renderProperties.afterRender) {
		renderProperties.afterRender();
	}
}

// Export to browser
if (typeof window !== "undefined") {
	window.JsBarcode = JsBarcode;
}

// Export to jQuery
/*global jQuery */
if (typeof jQuery !== 'undefined') {
	jQuery.fn.JsBarcode = function (content, options) {
		var elementArray = [];
		jQuery(this).each(function () {
			elementArray.push(this);
		});
		return JsBarcode(elementArray, content, options);
	};
}

// Export to commonJS
module.exports = JsBarcode;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(6);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128A = function (_CODE) {
	_inherits(CODE128A, _CODE);

	function CODE128A(string, options) {
		_classCallCheck(this, CODE128A);

		return _possibleConstructorReturn(this, (CODE128A.__proto__ || Object.getPrototypeOf(CODE128A)).call(this, _constants.A_START_CHAR + string, options));
	}

	_createClass(CODE128A, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.A_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128A;
}(_CODE3.default);

exports.default = CODE128A;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(6);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128B = function (_CODE) {
	_inherits(CODE128B, _CODE);

	function CODE128B(string, options) {
		_classCallCheck(this, CODE128B);

		return _possibleConstructorReturn(this, (CODE128B.__proto__ || Object.getPrototypeOf(CODE128B)).call(this, _constants.B_START_CHAR + string, options));
	}

	_createClass(CODE128B, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.B_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128B;
}(_CODE3.default);

exports.default = CODE128B;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(6);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128C = function (_CODE) {
	_inherits(CODE128C, _CODE);

	function CODE128C(string, options) {
		_classCallCheck(this, CODE128C);

		return _possibleConstructorReturn(this, (CODE128C.__proto__ || Object.getPrototypeOf(CODE128C)).call(this, _constants.C_START_CHAR + string, options));
	}

	_createClass(CODE128C, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.C_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128C;
}(_CODE3.default);

exports.default = CODE128C;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _CODE2 = __webpack_require__(6);

var _CODE3 = _interopRequireDefault(_CODE2);

var _auto = __webpack_require__(25);

var _auto2 = _interopRequireDefault(_auto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128AUTO = function (_CODE) {
	_inherits(CODE128AUTO, _CODE);

	function CODE128AUTO(data, options) {
		_classCallCheck(this, CODE128AUTO);

		// ASCII value ranges 0-127, 200-211
		if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, (0, _auto2.default)(data), options));
		} else {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, data, options));
		}
		return _possibleConstructorReturn(_this);
	}

	return CODE128AUTO;
}(_CODE3.default);

exports.default = CODE128AUTO;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(1);

// Match Set functions
var matchSetALength = function matchSetALength(string) {
	return string.match(new RegExp('^' + _constants.A_CHARS + '*'))[0].length;
};
var matchSetBLength = function matchSetBLength(string) {
	return string.match(new RegExp('^' + _constants.B_CHARS + '*'))[0].length;
};
var matchSetC = function matchSetC(string) {
	return string.match(new RegExp('^' + _constants.C_CHARS + '*'))[0];
};

// CODE128A or CODE128B
function autoSelectFromAB(string, isA) {
	var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
	var untilC = string.match(new RegExp('^(' + ranges + '+?)(([0-9]{2}){2,})([^0-9]|$)'));

	if (untilC) {
		return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
	}

	var chars = string.match(new RegExp('^' + ranges + '+'))[0];

	if (chars.length === string.length) {
		return string;
	}

	return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
}

// CODE128C
function autoSelectFromC(string) {
	var cMatch = matchSetC(string);
	var length = cMatch.length;

	if (length === string.length) {
		return string;
	}

	string = string.substring(length);

	// Select A/B depending on the longest match
	var isA = matchSetALength(string) >= matchSetBLength(string);
	return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
}

// Detect Code Set (A, B or C) and format the string

exports.default = function (string) {
	var newString = void 0;
	var cLength = matchSetC(string).length;

	// Select 128C if the string start with enough digits
	if (cLength >= 2) {
		newString = _constants.C_START_CHAR + autoSelectFromC(string);
	} else {
		// Select A/B depending on the longest match
		var isA = matchSetALength(string) > matchSetBLength(string);
		newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
	}

	return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, // Any sequence between 205 and 206 characters
	function (match, char) {
		return String.fromCharCode(203) + char;
	});
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = undefined;

var _CODE128_AUTO = __webpack_require__(24);

var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);

var _CODE128A = __webpack_require__(21);

var _CODE128A2 = _interopRequireDefault(_CODE128A);

var _CODE128B = __webpack_require__(22);

var _CODE128B2 = _interopRequireDefault(_CODE128B);

var _CODE128C = __webpack_require__(23);

var _CODE128C2 = _interopRequireDefault(_CODE128C);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CODE128 = _CODE128_AUTO2.default;
exports.CODE128A = _CODE128A2.default;
exports.CODE128B = _CODE128B2.default;
exports.CODE128C = _CODE128C2.default;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CODE39 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_39#Encoding

var CODE39 = function (_Barcode) {
	_inherits(CODE39, _Barcode);

	function CODE39(data, options) {
		_classCallCheck(this, CODE39);

		data = data.toUpperCase();

		// Calculate mod43 checksum if enabled
		if (options.mod43) {
			data += getCharacter(mod43checksum(data));
		}

		return _possibleConstructorReturn(this, (CODE39.__proto__ || Object.getPrototypeOf(CODE39)).call(this, data, options));
	}

	_createClass(CODE39, [{
		key: "encode",
		value: function encode() {
			// First character is always a *
			var result = getEncoding("*");

			// Take every character and add the binary representation to the result
			for (var i = 0; i < this.data.length; i++) {
				result += getEncoding(this.data[i]) + "0";
			}

			// Last character is always a *
			result += getEncoding("*");

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
		}
	}]);

	return CODE39;
}(_Barcode3.default);

// All characters. The position in the array is the (checksum) value


var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"];

// The decimal representation of the characters, is converted to the
// corresponding binary with the getEncoding function
var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];

// Get the binary representation of a character by converting the encodings
// from decimal to binary
function getEncoding(character) {
	return getBinary(characterValue(character));
}

function getBinary(characterValue) {
	return encodings[characterValue].toString(2);
}

function getCharacter(characterValue) {
	return characters[characterValue];
}

function characterValue(character) {
	return characters.indexOf(character);
}

function mod43checksum(data) {
	var checksum = 0;
	for (var i = 0; i < data.length; i++) {
		checksum += characterValue(data[i]);
	}

	checksum = checksum % 43;
	return checksum;
}

exports.CODE39 = CODE39;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _constants = __webpack_require__(2);

var _EAN2 = __webpack_require__(11);

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Binary_encoding_of_data_digits_into_EAN-13_barcode

// Calculate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit
var checksum = function checksum(number) {
	var res = number.substr(0, 12).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 3 : sum + a;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN13 = function (_EAN) {
	_inherits(EAN13, _EAN);

	function EAN13(data, options) {
		_classCallCheck(this, EAN13);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{12}$/) !== -1) {
			data += checksum(data);
		}

		// Adds a last character to the end of the barcode
		var _this = _possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, data, options));

		_this.lastChar = options.lastChar;
		return _this;
	}

	_createClass(EAN13, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftText', this).call(this, 1, 6);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(1, 6);
			var structure = _constants.EAN13_STRUCTURE[this.data[0]];
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftEncode', this).call(this, data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightText', this).call(this, 7, 6);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(7, 6);
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightEncode', this).call(this, data, 'RRRRRR');
		}

		// The "standard" way of printing EAN13 barcodes with guard bars

	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var data = _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'encodeGuarded', this).call(this);

			// Extend data with left digit & last character
			if (this.options.displayValue) {
				data.unshift({
					data: '000000000000',
					text: this.text.substr(0, 1),
					options: { textAlign: 'left', fontSize: this.fontSize }
				});

				if (this.options.lastChar) {
					data.push({
						data: '00'
					});
					data.push({
						data: '00000',
						text: this.options.lastChar,
						options: { fontSize: this.fontSize }
					});
				}
			}

			return data;
		}
	}]);

	return EAN13;
}(_EAN3.default);

exports.default = EAN13;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(2);

var _encoder = __webpack_require__(3);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_2#Encoding

var EAN2 = function (_Barcode) {
	_inherits(EAN2, _Barcode);

	function EAN2(data, options) {
		_classCallCheck(this, EAN2);

		return _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
	}

	_createClass(EAN2, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{2}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			// Choose the structure based on the number mod 4
			var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];
			return {
				// Start bits + Encode the two digits with 01 in between
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN2;
}(_Barcode3.default);

exports.default = EAN2;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(2);

var _encoder = __webpack_require__(3);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_5#Encoding

var checksum = function checksum(data) {
	var result = data.split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 9 : sum + a * 3;
	}, 0);
	return result % 10;
};

var EAN5 = function (_Barcode) {
	_inherits(EAN5, _Barcode);

	function EAN5(data, options) {
		_classCallCheck(this, EAN5);

		return _possibleConstructorReturn(this, (EAN5.__proto__ || Object.getPrototypeOf(EAN5)).call(this, data, options));
	}

	_createClass(EAN5, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{5}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];
			return {
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN5;
}(_Barcode3.default);

exports.default = EAN5;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EAN2 = __webpack_require__(11);

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// http://www.barcodeisland.com/ean8.phtml

// Calculate the checksum digit
var checksum = function checksum(number) {
	var res = number.substr(0, 7).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a : sum + a * 3;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN8 = function (_EAN) {
	_inherits(EAN8, _EAN);

	function EAN8(data, options) {
		_classCallCheck(this, EAN8);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{7}$/) !== -1) {
			data += checksum(data);
		}

		return _possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, data, options));
	}

	_createClass(EAN8, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftText', this).call(this, 0, 4);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(0, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftEncode', this).call(this, data, 'LLLL');
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightText', this).call(this, 4, 4);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(4, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightEncode', this).call(this, data, 'RRRR');
		}
	}]);

	return EAN8;
}(_EAN3.default);

exports.default = EAN8;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encoder = __webpack_require__(3);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _UPC = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding
//
// UPC-E documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#UPC-E

var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];

var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];

var UPCE = function (_Barcode) {
	_inherits(UPCE, _Barcode);

	function UPCE(data, options) {
		_classCallCheck(this, UPCE);

		var _this = _possibleConstructorReturn(this, (UPCE.__proto__ || Object.getPrototypeOf(UPCE)).call(this, data, options));
		// Code may be 6 or 8 digits;
		// A 7 digit code is ambiguous as to whether the extra digit
		// is a UPC-A check or number system digit.


		_this.isValid = false;
		if (data.search(/^[0-9]{6}$/) !== -1) {
			_this.middleDigits = data;
			_this.upcA = expandToUPCA(data, "0");
			_this.text = options.text || '' + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
			_this.isValid = true;
		} else if (data.search(/^[01][0-9]{7}$/) !== -1) {
			_this.middleDigits = data.substring(1, data.length - 1);
			_this.upcA = expandToUPCA(_this.middleDigits, data[0]);

			if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
				_this.isValid = true;
			} else {
				// checksum mismatch
				return _possibleConstructorReturn(_this);
			}
		} else {
			return _possibleConstructorReturn(_this);
		}

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPCE, [{
		key: 'valid',
		value: function valid() {
			return this.isValid;
		}
	}, {
		key: 'encode',
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: 'flatEncoding',
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += this.encodeMiddleDigits();
			result += "010101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: 'guardedEncoding',
		value: function guardedEncoding() {
			var result = [];

			// Add the UPC-A number system digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[0],
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101",
				options: { height: this.guardHeight }
			});

			// Add the 6 UPC-E digits
			result.push({
				data: this.encodeMiddleDigits(),
				text: this.text.substring(1, 7),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: "010101",
				options: { height: this.guardHeight }
			});

			// Add the UPC-A check digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[7],
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}, {
		key: 'encodeMiddleDigits',
		value: function encodeMiddleDigits() {
			var numberSystem = this.upcA[0];
			var checkDigit = this.upcA[this.upcA.length - 1];
			var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
			return (0, _encoder2.default)(this.middleDigits, parity);
		}
	}]);

	return UPCE;
}(_Barcode3.default);

function expandToUPCA(middleDigits, numberSystem) {
	var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
	var expansion = EXPANSIONS[lastUpcE];

	var result = "";
	var digitIndex = 0;
	for (var i = 0; i < expansion.length; i++) {
		var c = expansion[i];
		if (c === 'X') {
			result += middleDigits[digitIndex++];
		} else {
			result += c;
		}
	}

	result = '' + numberSystem + result;
	return '' + result + (0, _UPC.checksum)(result);
}

exports.default = UPCE;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = undefined;

var _EAN = __webpack_require__(28);

var _EAN2 = _interopRequireDefault(_EAN);

var _EAN3 = __webpack_require__(31);

var _EAN4 = _interopRequireDefault(_EAN3);

var _EAN5 = __webpack_require__(30);

var _EAN6 = _interopRequireDefault(_EAN5);

var _EAN7 = __webpack_require__(29);

var _EAN8 = _interopRequireDefault(_EAN7);

var _UPC = __webpack_require__(12);

var _UPC2 = _interopRequireDefault(_UPC);

var _UPCE = __webpack_require__(32);

var _UPCE2 = _interopRequireDefault(_UPCE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EAN13 = _EAN2.default;
exports.EAN8 = _EAN4.default;
exports.EAN5 = _EAN6.default;
exports.EAN2 = _EAN8.default;
exports.UPC = _UPC2.default;
exports.UPCE = _UPCE2.default;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GenericBarcode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericBarcode = function (_Barcode) {
	_inherits(GenericBarcode, _Barcode);

	function GenericBarcode(data, options) {
		_classCallCheck(this, GenericBarcode);

		return _possibleConstructorReturn(this, (GenericBarcode.__proto__ || Object.getPrototypeOf(GenericBarcode)).call(this, data, options)); // Sets this.data and this.text
	}

	// Return the corresponding binary numbers for the data provided


	_createClass(GenericBarcode, [{
		key: "encode",
		value: function encode() {
			return {
				data: "10101010101010101010101010101010101010101",
				text: this.text
			};
		}

		// Resturn true/false if the string provided is valid for this encoder

	}, {
		key: "valid",
		value: function valid() {
			return true;
		}
	}]);

	return GenericBarcode;
}(_Barcode3.default);

exports.GenericBarcode = GenericBarcode;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ITF2 = __webpack_require__(13);

var _ITF3 = _interopRequireDefault(_ITF2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Calculate the checksum digit
var checksum = function checksum(data) {
	var res = data.substr(0, 13).split('').map(function (num) {
		return parseInt(num, 10);
	}).reduce(function (sum, n, idx) {
		return sum + n * (3 - idx % 2 * 2);
	}, 0);

	return Math.ceil(res / 10) * 10 - res;
};

var ITF14 = function (_ITF) {
	_inherits(ITF14, _ITF);

	function ITF14(data, options) {
		_classCallCheck(this, ITF14);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{13}$/) !== -1) {
			data += checksum(data);
		}
		return _possibleConstructorReturn(this, (ITF14.__proto__ || Object.getPrototypeOf(ITF14)).call(this, data, options));
	}

	_createClass(ITF14, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
		}
	}]);

	return ITF14;
}(_ITF3.default);

exports.default = ITF14;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var START_BIN = exports.START_BIN = '1010';
var END_BIN = exports.END_BIN = '11101';

var BINARIES = exports.BINARIES = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ITF14 = exports.ITF = undefined;

var _ITF = __webpack_require__(13);

var _ITF2 = _interopRequireDefault(_ITF);

var _ITF3 = __webpack_require__(35);

var _ITF4 = _interopRequireDefault(_ITF3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ITF = _ITF2.default;
exports.ITF14 = _ITF4.default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(4);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI10 = function (_MSI) {
	_inherits(MSI10, _MSI);

	function MSI10(data, options) {
		_classCallCheck(this, MSI10);

		return _possibleConstructorReturn(this, (MSI10.__proto__ || Object.getPrototypeOf(MSI10)).call(this, data + (0, _checksums.mod10)(data), options));
	}

	return MSI10;
}(_MSI3.default);

exports.default = MSI10;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(4);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1010 = function (_MSI) {
	_inherits(MSI1010, _MSI);

	function MSI1010(data, options) {
		_classCallCheck(this, MSI1010);

		data += (0, _checksums.mod10)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1010.__proto__ || Object.getPrototypeOf(MSI1010)).call(this, data, options));
	}

	return MSI1010;
}(_MSI3.default);

exports.default = MSI1010;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(4);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI11 = function (_MSI) {
	_inherits(MSI11, _MSI);

	function MSI11(data, options) {
		_classCallCheck(this, MSI11);

		return _possibleConstructorReturn(this, (MSI11.__proto__ || Object.getPrototypeOf(MSI11)).call(this, data + (0, _checksums.mod11)(data), options));
	}

	return MSI11;
}(_MSI3.default);

exports.default = MSI11;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MSI2 = __webpack_require__(4);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1110 = function (_MSI) {
	_inherits(MSI1110, _MSI);

	function MSI1110(data, options) {
		_classCallCheck(this, MSI1110);

		data += (0, _checksums.mod11)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1110.__proto__ || Object.getPrototypeOf(MSI1110)).call(this, data, options));
	}

	return MSI1110;
}(_MSI3.default);

exports.default = MSI1110;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = undefined;

var _MSI = __webpack_require__(4);

var _MSI2 = _interopRequireDefault(_MSI);

var _MSI3 = __webpack_require__(38);

var _MSI4 = _interopRequireDefault(_MSI3);

var _MSI5 = __webpack_require__(40);

var _MSI6 = _interopRequireDefault(_MSI5);

var _MSI7 = __webpack_require__(39);

var _MSI8 = _interopRequireDefault(_MSI7);

var _MSI9 = __webpack_require__(41);

var _MSI10 = _interopRequireDefault(_MSI9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MSI = _MSI2.default;
exports.MSI10 = _MSI4.default;
exports.MSI11 = _MSI6.default;
exports.MSI1010 = _MSI8.default;
exports.MSI1110 = _MSI10.default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.codabar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding specification:
// http://www.barcodeisland.com/codabar.phtml

var codabar = function (_Barcode) {
	_inherits(codabar, _Barcode);

	function codabar(data, options) {
		_classCallCheck(this, codabar);

		if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
			data = "A" + data + "A";
		}

		var _this = _possibleConstructorReturn(this, (codabar.__proto__ || Object.getPrototypeOf(codabar)).call(this, data.toUpperCase(), options));

		_this.text = _this.options.text || _this.text.replace(/[A-D]/g, '');
		return _this;
	}

	_createClass(codabar, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
		}
	}, {
		key: "encode",
		value: function encode() {
			var result = [];
			var encodings = this.getEncodings();
			for (var i = 0; i < this.data.length; i++) {
				result.push(encodings[this.data.charAt(i)]);
				// for all characters except the last, append a narrow-space ("0")
				if (i !== this.data.length - 1) {
					result.push("0");
				}
			}
			return {
				text: this.text,
				data: result.join('')
			};
		}
	}, {
		key: "getEncodings",
		value: function getEncodings() {
			return {
				"0": "101010011",
				"1": "101011001",
				"2": "101001011",
				"3": "110010101",
				"4": "101101001",
				"5": "110101001",
				"6": "100101011",
				"7": "100101101",
				"8": "100110101",
				"9": "110100101",
				"-": "101001101",
				"$": "101100101",
				":": "1101011011",
				"/": "1101101011",
				".": "1101101101",
				"+": "101100110011",
				"A": "1011001001",
				"B": "1001001011",
				"C": "1010010011",
				"D": "1010011001"
			};
		}
	}]);

	return codabar;
}(_Barcode3.default);

exports.codabar = codabar;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.pharmacode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(0);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf

var pharmacode = function (_Barcode) {
	_inherits(pharmacode, _Barcode);

	function pharmacode(data, options) {
		_classCallCheck(this, pharmacode);

		var _this = _possibleConstructorReturn(this, (pharmacode.__proto__ || Object.getPrototypeOf(pharmacode)).call(this, data, options));

		_this.number = parseInt(data, 10);
		return _this;
	}

	_createClass(pharmacode, [{
		key: "encode",
		value: function encode() {
			var z = this.number;
			var result = "";

			// http://i.imgur.com/RMm4UDJ.png
			// (source: http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf, page: 34)
			while (!isNaN(z) && z != 0) {
				if (z % 2 === 0) {
					// Even
					result = "11100" + result;
					z = (z - 2) / 2;
				} else {
					// Odd
					result = "100" + result;
					z = (z - 1) / 2;
				}
			}

			// Remove the two last zeroes
			result = result.slice(0, -2);

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.number >= 3 && this.number <= 131070;
		}
	}]);

	return pharmacode;
}(_Barcode3.default);

exports.pharmacode = pharmacode;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _optionsFromStrings = __webpack_require__(9);

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _defaults = __webpack_require__(10);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOptionsFromElement(element) {
	var options = {};
	for (var property in _defaults2.default) {
		if (_defaults2.default.hasOwnProperty(property)) {
			// jsbarcode-*
			if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
				options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
			}

			// data-*
			if (element.hasAttribute("data-" + property.toLowerCase())) {
				options[property] = element.getAttribute("data-" + property.toLowerCase());
			}
		}
	}

	options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value");

	// Since all atributes are string they need to be converted to integers
	options = (0, _optionsFromStrings2.default)(options);

	return options;
}

exports.default = getOptionsFromElement;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasRenderer = function () {
	function CanvasRenderer(canvas, encodings, options) {
		_classCallCheck(this, CanvasRenderer);

		this.canvas = canvas;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(CanvasRenderer, [{
		key: "render",
		value: function render() {
			// Abort if the browser does not support HTML5 canvas
			if (!this.canvas.getContext) {
				throw new Error('The browser does not support canvas.');
			}

			this.prepareCanvas();
			for (var i = 0; i < this.encodings.length; i++) {
				var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);

				this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
				this.drawCanvasText(encodingOptions, this.encodings[i]);

				this.moveCanvasDrawing(this.encodings[i]);
			}

			this.restoreCanvas();
		}
	}, {
		key: "prepareCanvas",
		value: function prepareCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.save();

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;

			this.canvas.height = maxHeight;

			// Paint the canvas
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			if (this.options.background) {
				ctx.fillStyle = this.options.background;
				ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			}

			ctx.translate(this.options.marginLeft, 0);
		}
	}, {
		key: "drawCanvasBarcode",
		value: function drawCanvasBarcode(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.marginTop + options.fontSize + options.textMargin;
			} else {
				yFrom = options.marginTop;
			}

			ctx.fillStyle = options.lineColor;

			for (var b = 0; b < binary.length; b++) {
				var x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					ctx.fillRect(x, yFrom, options.width, options.height);
				} else if (binary[b]) {
					ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
				}
			}
		}
	}, {
		key: "drawCanvasText",
		value: function drawCanvasText(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var font = options.fontOptions + " " + options.fontSize + "px " + options.font;

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				if (options.textPosition == "top") {
					y = options.marginTop + options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.marginTop + options.fontSize;
				}

				ctx.font = font;

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					ctx.textAlign = 'left';
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					ctx.textAlign = 'right';
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						ctx.textAlign = 'center';
					}

				ctx.fillText(encoding.text, x, y);
			}
		}
	}, {
		key: "moveCanvasDrawing",
		value: function moveCanvasDrawing(encoding) {
			var ctx = this.canvas.getContext("2d");

			ctx.translate(encoding.width, 0);
		}
	}, {
		key: "restoreCanvas",
		value: function restoreCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.restore();
		}
	}]);

	return CanvasRenderer;
}();

exports.default = CanvasRenderer;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canvas = __webpack_require__(46);

var _canvas2 = _interopRequireDefault(_canvas);

var _svg = __webpack_require__(49);

var _svg2 = _interopRequireDefault(_svg);

var _object = __webpack_require__(48);

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { CanvasRenderer: _canvas2.default, SVGRenderer: _svg2.default, ObjectRenderer: _object2.default };

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectRenderer = function () {
	function ObjectRenderer(object, encodings, options) {
		_classCallCheck(this, ObjectRenderer);

		this.object = object;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(ObjectRenderer, [{
		key: "render",
		value: function render() {
			this.object.encodings = this.encodings;
		}
	}]);

	return ObjectRenderer;
}();

exports.default = ObjectRenderer;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(5);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var svgns = "http://www.w3.org/2000/svg";

var SVGRenderer = function () {
	function SVGRenderer(svg, encodings, options) {
		_classCallCheck(this, SVGRenderer);

		this.svg = svg;
		this.encodings = encodings;
		this.options = options;
		this.document = options.xmlDocument || document;
	}

	_createClass(SVGRenderer, [{
		key: "render",
		value: function render() {
			var currentX = this.options.marginLeft;

			this.prepareSVG();
			for (var i = 0; i < this.encodings.length; i++) {
				var encoding = this.encodings[i];
				var encodingOptions = (0, _merge2.default)(this.options, encoding.options);

				var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);

				this.setGroupOptions(group, encodingOptions);

				this.drawSvgBarcode(group, encodingOptions, encoding);
				this.drawSVGText(group, encodingOptions, encoding);

				currentX += encoding.width;
			}
		}
	}, {
		key: "prepareSVG",
		value: function prepareSVG() {
			// Clear the SVG
			while (this.svg.firstChild) {
				this.svg.removeChild(this.svg.firstChild);
			}

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			var width = totalWidth + this.options.marginLeft + this.options.marginRight;
			this.setSvgAttributes(width, maxHeight);

			if (this.options.background) {
				this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
			}
		}
	}, {
		key: "drawSvgBarcode",
		value: function drawSvgBarcode(parent, options, encoding) {
			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.fontSize + options.textMargin;
			} else {
				yFrom = 0;
			}

			var barWidth = 0;
			var x = 0;
			for (var b = 0; b < binary.length; b++) {
				x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					barWidth++;
				} else if (barWidth > 0) {
					this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
					barWidth = 0;
				}
			}

			// Last draw is needed since the barcode ends with 1
			if (barWidth > 0) {
				this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
			}
		}
	}, {
		key: "drawSVGText",
		value: function drawSVGText(parent, options, encoding) {
			var textElem = this.document.createElementNS(svgns, 'text');

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);

				if (options.textPosition == "top") {
					y = options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.fontSize;
				}

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					textElem.setAttribute("text-anchor", "start");
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					textElem.setAttribute("text-anchor", "end");
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						textElem.setAttribute("text-anchor", "middle");
					}

				textElem.setAttribute("x", x);
				textElem.setAttribute("y", y);

				textElem.appendChild(this.document.createTextNode(encoding.text));

				parent.appendChild(textElem);
			}
		}
	}, {
		key: "setSvgAttributes",
		value: function setSvgAttributes(width, height) {
			var svg = this.svg;
			svg.setAttribute("width", width + "px");
			svg.setAttribute("height", height + "px");
			svg.setAttribute("x", "0px");
			svg.setAttribute("y", "0px");
			svg.setAttribute("viewBox", "0 0 " + width + " " + height);

			svg.setAttribute("xmlns", svgns);
			svg.setAttribute("version", "1.1");

			svg.setAttribute("style", "transform: translate(0,0)");
		}
	}, {
		key: "createGroup",
		value: function createGroup(x, y, parent) {
			var group = this.document.createElementNS(svgns, 'g');
			group.setAttribute("transform", "translate(" + x + ", " + y + ")");

			parent.appendChild(group);

			return group;
		}
	}, {
		key: "setGroupOptions",
		value: function setGroupOptions(group, options) {
			group.setAttribute("style", "fill:" + options.lineColor + ";");
		}
	}, {
		key: "drawRect",
		value: function drawRect(x, y, width, height, parent) {
			var rect = this.document.createElementNS(svgns, 'rect');

			rect.setAttribute("x", x);
			rect.setAttribute("y", y);
			rect.setAttribute("width", width);
			rect.setAttribute("height", height);

			parent.appendChild(rect);

			return rect;
		}
	}]);

	return SVGRenderer;
}();

exports.default = SVGRenderer;

/***/ })
/******/ ]);


/*
 * QRious v4.0.2
 * Copyright (C) 2017 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.QRious = factory());
  }(this, (function () { 'use strict';
  
    /*
     * Copyright (C) 2017 Alasdair Mercer, !ninja
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */
  
    /**
     * A bare-bones constructor for surrogate prototype swapping.
     *
     * @private
     * @constructor
     */
    var Constructor = /* istanbul ignore next */ function() {};
    /**
     * A reference to <code>Object.prototype.hasOwnProperty</code>.
     *
     * @private
     * @type {Function}
     */
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    /**
     * A reference to <code>Array.prototype.slice</code>.
     *
     * @private
     * @type {Function}
     */
    var slice = Array.prototype.slice;
  
    /**
     * Creates an object which inherits the given <code>prototype</code>.
     *
     * Optionally, the created object can be extended further with the specified <code>properties</code>.
     *
     * @param {Object} prototype - the prototype to be inherited by the created object
     * @param {Object} [properties] - the optional properties to be extended by the created object
     * @return {Object} The newly created object.
     * @private
     */
    function createObject(prototype, properties) {
      var result;
      /* istanbul ignore next */
      if (typeof Object.create === 'function') {
        result = Object.create(prototype);
      } else {
        Constructor.prototype = prototype;
        result = new Constructor();
        Constructor.prototype = null;
      }
  
      if (properties) {
        extendObject(true, result, properties);
      }
  
      return result;
    }
  
    /**
     * Extends the constructor to which this method is associated with the <code>prototype</code> and/or
     * <code>statics</code> provided.
     *
     * If <code>name</code> is provided, it will be used as the class name and can be accessed via a special
     * <code>class_</code> property on the child constructor, otherwise the class name of the super constructor will be used
     * instead. The class name may also be used string representation for instances of the child constructor (via
     * <code>toString</code>), but this is not applicable to the <i>lite</i> version of Nevis.
     *
     * If <code>constructor</code> is provided, it will be used as the constructor for the child, otherwise a simple
     * constructor which only calls the super constructor will be used instead.
     *
     * The super constructor can be accessed via a special <code>super_</code> property on the child constructor.
     *
     * @param {string} [name=this.class_] - the class name to be used for the child constructor
     * @param {Function} [constructor] - the constructor for the child
     * @param {Object} [prototype] - the prototype properties to be defined for the child
     * @param {Object} [statics] - the static properties to be defined for the child
     * @return {Function} The child <code>constructor</code> provided or the one created if none was given.
     * @public
     */
    function extend(name, constructor, prototype, statics) {
      var superConstructor = this;
  
      if (typeof name !== 'string') {
        statics = prototype;
        prototype = constructor;
        constructor = name;
        name = null;
      }
  
      if (typeof constructor !== 'function') {
        statics = prototype;
        prototype = constructor;
        constructor = function() {
          return superConstructor.apply(this, arguments);
        };
      }
  
      extendObject(false, constructor, superConstructor, statics);
  
      constructor.prototype = createObject(superConstructor.prototype, prototype);
      constructor.prototype.constructor = constructor;
  
      constructor.class_ = name || superConstructor.class_;
      constructor.super_ = superConstructor;
  
      return constructor;
    }
  
    /**
     * Extends the specified <code>target</code> object with the properties in each of the <code>sources</code> provided.
     *
     * if any source is <code>null</code> it will be ignored.
     *
     * @param {boolean} own - <code>true</code> to only copy <b>own</b> properties from <code>sources</code> onto
     * <code>target</code>; otherwise <code>false</code>
     * @param {Object} target - the target object which should be extended
     * @param {...Object} [sources] - the source objects whose properties are to be copied onto <code>target</code>
     * @return {void}
     * @private
     */
    function extendObject(own, target, sources) {
      sources = slice.call(arguments, 2);
  
      var property;
      var source;
  
      for (var i = 0, length = sources.length; i < length; i++) {
        source = sources[i];
  
        for (property in source) {
          if (!own || hasOwnProperty.call(source, property)) {
            target[property] = source[property];
          }
        }
      }
    }
  
    var extend_1 = extend;
  
    /**
     * The base class from which all others should extend.
     *
     * @public
     * @constructor
     */
    function Nevis() {}
    Nevis.class_ = 'Nevis';
    Nevis.super_ = Object;
  
    /**
     * Extends the constructor to which this method is associated with the <code>prototype</code> and/or
     * <code>statics</code> provided.
     *
     * If <code>name</code> is provided, it will be used as the class name and can be accessed via a special
     * <code>class_</code> property on the child constructor, otherwise the class name of the super constructor will be used
     * instead. The class name may also be used string representation for instances of the child constructor (via
     * <code>toString</code>), but this is not applicable to the <i>lite</i> version of Nevis.
     *
     * If <code>constructor</code> is provided, it will be used as the constructor for the child, otherwise a simple
     * constructor which only calls the super constructor will be used instead.
     *
     * The super constructor can be accessed via a special <code>super_</code> property on the child constructor.
     *
     * @param {string} [name=this.class_] - the class name to be used for the child constructor
     * @param {Function} [constructor] - the constructor for the child
     * @param {Object} [prototype] - the prototype properties to be defined for the child
     * @param {Object} [statics] - the static properties to be defined for the child
     * @return {Function} The child <code>constructor</code> provided or the one created if none was given.
     * @public
     * @static
     * @memberof Nevis
     */
    Nevis.extend = extend_1;
  
    var nevis = Nevis;
  
    var lite = nevis;
  
    /**
     * Responsible for rendering a QR code {@link Frame} on a specific type of element.
     *
     * A renderer may be dependant on the rendering of another element, so the ordering of their execution is important.
     *
     * The rendering of a element can be deferred by disabling the renderer initially, however, any attempt get the element
     * from the renderer will result in it being immediately enabled and the element being rendered.
     *
     * @param {QRious} qrious - the {@link QRious} instance to be used
     * @param {*} element - the element onto which the QR code is to be rendered
     * @param {boolean} [enabled] - <code>true</code> this {@link Renderer} is enabled; otherwise <code>false</code>.
     * @public
     * @class
     * @extends Nevis
     */
    var Renderer = lite.extend(function(qrious, element, enabled) {
      /**
       * The {@link QRious} instance.
       *
       * @protected
       * @type {QRious}
       * @memberof Renderer#
       */
      this.qrious = qrious;
  
      /**
       * The element onto which this {@link Renderer} is rendering the QR code.
       *
       * @protected
       * @type {*}
       * @memberof Renderer#
       */
      this.element = element;
      this.element.qrious = qrious;
  
      /**
       * Whether this {@link Renderer} is enabled.
       *
       * @protected
       * @type {boolean}
       * @memberof Renderer#
       */
      this.enabled = Boolean(enabled);
    }, {
  
      /**
       * Draws the specified QR code <code>frame</code> on the underlying element.
       *
       * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
       *
       * @param {Frame} frame - the {@link Frame} to be drawn
       * @return {void}
       * @protected
       * @abstract
       * @memberof Renderer#
       */
      draw: function(frame) {},
  
      /**
       * Returns the element onto which this {@link Renderer} is rendering the QR code.
       *
       * If this method is called while this {@link Renderer} is disabled, it will be immediately enabled and rendered
       * before the element is returned.
       *
       * @return {*} The element.
       * @public
       * @memberof Renderer#
       */
      getElement: function() {
        if (!this.enabled) {
          this.enabled = true;
          this.render();
        }
  
        return this.element;
      },
  
      /**
       * Calculates the size (in pixel units) to represent an individual module within the QR code based on the
       * <code>frame</code> provided.
       *
       * Any configured padding will be excluded from the returned size.
       *
       * The returned value will be at least one, even in cases where the size of the QR code does not fit its contents.
       * This is done so that the inevitable clipping is handled more gracefully since this way at least something is
       * displayed instead of just a blank space filled by the background color.
       *
       * @param {Frame} frame - the {@link Frame} from which the module size is to be derived
       * @return {number} The pixel size for each module in the QR code which will be no less than one.
       * @protected
       * @memberof Renderer#
       */
      getModuleSize: function(frame) {
        var qrious = this.qrious;
        var padding = qrious.padding || 0;
        var pixels = Math.floor((qrious.size - (padding * 2)) / frame.width);
  
        return Math.max(1, pixels);
      },
  
      /**
       * Calculates the offset/padding (in pixel units) to be inserted before the QR code based on the <code>frame</code>
       * provided.
       *
       * The returned value will be zero if there is no available offset or if the size of the QR code does not fit its
       * contents. It will never be a negative value. This is done so that the inevitable clipping appears more naturally
       * and it is not clipped from all directions.
       *
       * @param {Frame} frame - the {@link Frame} from which the offset is to be derived
       * @return {number} The pixel offset for the QR code which will be no less than zero.
       * @protected
       * @memberof Renderer#
       */
      getOffset: function(frame) {
        var qrious = this.qrious;
        var padding = qrious.padding;
  
        if (padding != null) {
          return padding;
        }
  
        var moduleSize = this.getModuleSize(frame);
        var offset = Math.floor((qrious.size - (moduleSize * frame.width)) / 2);
  
        return Math.max(0, offset);
      },
  
      /**
       * Renders a QR code on the underlying element based on the <code>frame</code> provided.
       *
       * @param {Frame} frame - the {@link Frame} to be rendered
       * @return {void}
       * @public
       * @memberof Renderer#
       */
      render: function(frame) {
        if (this.enabled) {
          this.resize();
          this.reset();
          this.draw(frame);
        }
      },
  
      /**
       * Resets the underlying element, effectively clearing any previously rendered QR code.
       *
       * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
       *
       * @return {void}
       * @protected
       * @abstract
       * @memberof Renderer#
       */
      reset: function() {},
  
      /**
       * Ensures that the size of the underlying element matches that defined on the associated {@link QRious} instance.
       *
       * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
       *
       * @return {void}
       * @protected
       * @abstract
       * @memberof Renderer#
       */
      resize: function() {}
  
    });
  
    var Renderer_1 = Renderer;
  
    /**
     * An implementation of {@link Renderer} for working with <code>canvas</code> elements.
     *
     * @public
     * @class
     * @extends Renderer
     */
    var CanvasRenderer = Renderer_1.extend({
  
      /**
       * @override
       */
      draw: function(frame) {
        var i, j;
        var qrious = this.qrious;
        var moduleSize = this.getModuleSize(frame);
        var offset = this.getOffset(frame);
        var context = this.element.getContext('2d');
  
        context.fillStyle = qrious.foreground;
        context.globalAlpha = qrious.foregroundAlpha;
  
        for (i = 0; i < frame.width; i++) {
          for (j = 0; j < frame.width; j++) {
            if (frame.buffer[(j * frame.width) + i]) {
              context.fillRect((moduleSize * i) + offset, (moduleSize * j) + offset, moduleSize, moduleSize);
            }
          }
        }
      },
  
      /**
       * @override
       */
      reset: function() {
        var qrious = this.qrious;
        var context = this.element.getContext('2d');
        var size = qrious.size;
  
        context.lineWidth = 1;
        context.clearRect(0, 0, size, size);
        context.fillStyle = qrious.background;
        context.globalAlpha = qrious.backgroundAlpha;
        context.fillRect(0, 0, size, size);
      },
  
      /**
       * @override
       */
      resize: function() {
        var element = this.element;
  
        element.width = element.height = this.qrious.size;
      }
  
    });
  
    var CanvasRenderer_1 = CanvasRenderer;
  
    /* eslint no-multi-spaces: "off" */
  
  
  
    /**
     * Contains alignment pattern information.
     *
     * @public
     * @class
     * @extends Nevis
     */
    var Alignment = lite.extend(null, {
  
      /**
       * The alignment pattern block.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Alignment
       */
      BLOCK: [
        0,  11, 15, 19, 23, 27, 31,
        16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24,
        26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28
      ]
  
    });
  
    var Alignment_1 = Alignment;
  
    /* eslint no-multi-spaces: "off" */
  
  
  
    /**
     * Contains error correction information.
     *
     * @public
     * @class
     * @extends Nevis
     */
    var ErrorCorrection = lite.extend(null, {
  
      /**
       * The error correction blocks.
       *
       * There are four elements per version. The first two indicate the number of blocks, then the data width, and finally
       * the ECC width.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof ErrorCorrection
       */
      BLOCKS: [
        1,  0,  19,  7,     1,  0,  16,  10,    1,  0,  13,  13,    1,  0,  9,   17,
        1,  0,  34,  10,    1,  0,  28,  16,    1,  0,  22,  22,    1,  0,  16,  28,
        1,  0,  55,  15,    1,  0,  44,  26,    2,  0,  17,  18,    2,  0,  13,  22,
        1,  0,  80,  20,    2,  0,  32,  18,    2,  0,  24,  26,    4,  0,  9,   16,
        1,  0,  108, 26,    2,  0,  43,  24,    2,  2,  15,  18,    2,  2,  11,  22,
        2,  0,  68,  18,    4,  0,  27,  16,    4,  0,  19,  24,    4,  0,  15,  28,
        2,  0,  78,  20,    4,  0,  31,  18,    2,  4,  14,  18,    4,  1,  13,  26,
        2,  0,  97,  24,    2,  2,  38,  22,    4,  2,  18,  22,    4,  2,  14,  26,
        2,  0,  116, 30,    3,  2,  36,  22,    4,  4,  16,  20,    4,  4,  12,  24,
        2,  2,  68,  18,    4,  1,  43,  26,    6,  2,  19,  24,    6,  2,  15,  28,
        4,  0,  81,  20,    1,  4,  50,  30,    4,  4,  22,  28,    3,  8,  12,  24,
        2,  2,  92,  24,    6,  2,  36,  22,    4,  6,  20,  26,    7,  4,  14,  28,
        4,  0,  107, 26,    8,  1,  37,  22,    8,  4,  20,  24,    12, 4,  11,  22,
        3,  1,  115, 30,    4,  5,  40,  24,    11, 5,  16,  20,    11, 5,  12,  24,
        5,  1,  87,  22,    5,  5,  41,  24,    5,  7,  24,  30,    11, 7,  12,  24,
        5,  1,  98,  24,    7,  3,  45,  28,    15, 2,  19,  24,    3,  13, 15,  30,
        1,  5,  107, 28,    10, 1,  46,  28,    1,  15, 22,  28,    2,  17, 14,  28,
        5,  1,  120, 30,    9,  4,  43,  26,    17, 1,  22,  28,    2,  19, 14,  28,
        3,  4,  113, 28,    3,  11, 44,  26,    17, 4,  21,  26,    9,  16, 13,  26,
        3,  5,  107, 28,    3,  13, 41,  26,    15, 5,  24,  30,    15, 10, 15,  28,
        4,  4,  116, 28,    17, 0,  42,  26,    17, 6,  22,  28,    19, 6,  16,  30,
        2,  7,  111, 28,    17, 0,  46,  28,    7,  16, 24,  30,    34, 0,  13,  24,
        4,  5,  121, 30,    4,  14, 47,  28,    11, 14, 24,  30,    16, 14, 15,  30,
        6,  4,  117, 30,    6,  14, 45,  28,    11, 16, 24,  30,    30, 2,  16,  30,
        8,  4,  106, 26,    8,  13, 47,  28,    7,  22, 24,  30,    22, 13, 15,  30,
        10, 2,  114, 28,    19, 4,  46,  28,    28, 6,  22,  28,    33, 4,  16,  30,
        8,  4,  122, 30,    22, 3,  45,  28,    8,  26, 23,  30,    12, 28, 15,  30,
        3,  10, 117, 30,    3,  23, 45,  28,    4,  31, 24,  30,    11, 31, 15,  30,
        7,  7,  116, 30,    21, 7,  45,  28,    1,  37, 23,  30,    19, 26, 15,  30,
        5,  10, 115, 30,    19, 10, 47,  28,    15, 25, 24,  30,    23, 25, 15,  30,
        13, 3,  115, 30,    2,  29, 46,  28,    42, 1,  24,  30,    23, 28, 15,  30,
        17, 0,  115, 30,    10, 23, 46,  28,    10, 35, 24,  30,    19, 35, 15,  30,
        17, 1,  115, 30,    14, 21, 46,  28,    29, 19, 24,  30,    11, 46, 15,  30,
        13, 6,  115, 30,    14, 23, 46,  28,    44, 7,  24,  30,    59, 1,  16,  30,
        12, 7,  121, 30,    12, 26, 47,  28,    39, 14, 24,  30,    22, 41, 15,  30,
        6,  14, 121, 30,    6,  34, 47,  28,    46, 10, 24,  30,    2,  64, 15,  30,
        17, 4,  122, 30,    29, 14, 46,  28,    49, 10, 24,  30,    24, 46, 15,  30,
        4,  18, 122, 30,    13, 32, 46,  28,    48, 14, 24,  30,    42, 32, 15,  30,
        20, 4,  117, 30,    40, 7,  47,  28,    43, 22, 24,  30,    10, 67, 15,  30,
        19, 6,  118, 30,    18, 31, 47,  28,    34, 34, 24,  30,    20, 61, 15,  30
      ],
  
      /**
       * The final format bits with mask (level << 3 | mask).
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof ErrorCorrection
       */
      FINAL_FORMAT: [
        // L
        0x77c4, 0x72f3, 0x7daa, 0x789d, 0x662f, 0x6318, 0x6c41, 0x6976,
        // M
        0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0,
        // Q
        0x355f, 0x3068, 0x3f31, 0x3a06, 0x24b4, 0x2183, 0x2eda, 0x2bed,
        // H
        0x1689, 0x13be, 0x1ce7, 0x19d0, 0x0762, 0x0255, 0x0d0c, 0x083b
      ],
  
      /**
       * A map of human-readable ECC levels.
       *
       * @public
       * @static
       * @type {Object.<string, number>}
       * @memberof ErrorCorrection
       */
      LEVELS: {
        L: 1,
        M: 2,
        Q: 3,
        H: 4
      }
  
    });
  
    var ErrorCorrection_1 = ErrorCorrection;
  
    /**
     * Contains Galois field information.
     *
     * @public
     * @class
     * @extends Nevis
     */
    var Galois = lite.extend(null, {
  
      /**
       * The Galois field exponent table.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Galois
       */
      EXPONENT: [
        0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1d, 0x3a, 0x74, 0xe8, 0xcd, 0x87, 0x13, 0x26,
        0x4c, 0x98, 0x2d, 0x5a, 0xb4, 0x75, 0xea, 0xc9, 0x8f, 0x03, 0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0,
        0x9d, 0x27, 0x4e, 0x9c, 0x25, 0x4a, 0x94, 0x35, 0x6a, 0xd4, 0xb5, 0x77, 0xee, 0xc1, 0x9f, 0x23,
        0x46, 0x8c, 0x05, 0x0a, 0x14, 0x28, 0x50, 0xa0, 0x5d, 0xba, 0x69, 0xd2, 0xb9, 0x6f, 0xde, 0xa1,
        0x5f, 0xbe, 0x61, 0xc2, 0x99, 0x2f, 0x5e, 0xbc, 0x65, 0xca, 0x89, 0x0f, 0x1e, 0x3c, 0x78, 0xf0,
        0xfd, 0xe7, 0xd3, 0xbb, 0x6b, 0xd6, 0xb1, 0x7f, 0xfe, 0xe1, 0xdf, 0xa3, 0x5b, 0xb6, 0x71, 0xe2,
        0xd9, 0xaf, 0x43, 0x86, 0x11, 0x22, 0x44, 0x88, 0x0d, 0x1a, 0x34, 0x68, 0xd0, 0xbd, 0x67, 0xce,
        0x81, 0x1f, 0x3e, 0x7c, 0xf8, 0xed, 0xc7, 0x93, 0x3b, 0x76, 0xec, 0xc5, 0x97, 0x33, 0x66, 0xcc,
        0x85, 0x17, 0x2e, 0x5c, 0xb8, 0x6d, 0xda, 0xa9, 0x4f, 0x9e, 0x21, 0x42, 0x84, 0x15, 0x2a, 0x54,
        0xa8, 0x4d, 0x9a, 0x29, 0x52, 0xa4, 0x55, 0xaa, 0x49, 0x92, 0x39, 0x72, 0xe4, 0xd5, 0xb7, 0x73,
        0xe6, 0xd1, 0xbf, 0x63, 0xc6, 0x91, 0x3f, 0x7e, 0xfc, 0xe5, 0xd7, 0xb3, 0x7b, 0xf6, 0xf1, 0xff,
        0xe3, 0xdb, 0xab, 0x4b, 0x96, 0x31, 0x62, 0xc4, 0x95, 0x37, 0x6e, 0xdc, 0xa5, 0x57, 0xae, 0x41,
        0x82, 0x19, 0x32, 0x64, 0xc8, 0x8d, 0x07, 0x0e, 0x1c, 0x38, 0x70, 0xe0, 0xdd, 0xa7, 0x53, 0xa6,
        0x51, 0xa2, 0x59, 0xb2, 0x79, 0xf2, 0xf9, 0xef, 0xc3, 0x9b, 0x2b, 0x56, 0xac, 0x45, 0x8a, 0x09,
        0x12, 0x24, 0x48, 0x90, 0x3d, 0x7a, 0xf4, 0xf5, 0xf7, 0xf3, 0xfb, 0xeb, 0xcb, 0x8b, 0x0b, 0x16,
        0x2c, 0x58, 0xb0, 0x7d, 0xfa, 0xe9, 0xcf, 0x83, 0x1b, 0x36, 0x6c, 0xd8, 0xad, 0x47, 0x8e, 0x00
      ],
  
      /**
       * The Galois field log table.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Galois
       */
      LOG: [
        0xff, 0x00, 0x01, 0x19, 0x02, 0x32, 0x1a, 0xc6, 0x03, 0xdf, 0x33, 0xee, 0x1b, 0x68, 0xc7, 0x4b,
        0x04, 0x64, 0xe0, 0x0e, 0x34, 0x8d, 0xef, 0x81, 0x1c, 0xc1, 0x69, 0xf8, 0xc8, 0x08, 0x4c, 0x71,
        0x05, 0x8a, 0x65, 0x2f, 0xe1, 0x24, 0x0f, 0x21, 0x35, 0x93, 0x8e, 0xda, 0xf0, 0x12, 0x82, 0x45,
        0x1d, 0xb5, 0xc2, 0x7d, 0x6a, 0x27, 0xf9, 0xb9, 0xc9, 0x9a, 0x09, 0x78, 0x4d, 0xe4, 0x72, 0xa6,
        0x06, 0xbf, 0x8b, 0x62, 0x66, 0xdd, 0x30, 0xfd, 0xe2, 0x98, 0x25, 0xb3, 0x10, 0x91, 0x22, 0x88,
        0x36, 0xd0, 0x94, 0xce, 0x8f, 0x96, 0xdb, 0xbd, 0xf1, 0xd2, 0x13, 0x5c, 0x83, 0x38, 0x46, 0x40,
        0x1e, 0x42, 0xb6, 0xa3, 0xc3, 0x48, 0x7e, 0x6e, 0x6b, 0x3a, 0x28, 0x54, 0xfa, 0x85, 0xba, 0x3d,
        0xca, 0x5e, 0x9b, 0x9f, 0x0a, 0x15, 0x79, 0x2b, 0x4e, 0xd4, 0xe5, 0xac, 0x73, 0xf3, 0xa7, 0x57,
        0x07, 0x70, 0xc0, 0xf7, 0x8c, 0x80, 0x63, 0x0d, 0x67, 0x4a, 0xde, 0xed, 0x31, 0xc5, 0xfe, 0x18,
        0xe3, 0xa5, 0x99, 0x77, 0x26, 0xb8, 0xb4, 0x7c, 0x11, 0x44, 0x92, 0xd9, 0x23, 0x20, 0x89, 0x2e,
        0x37, 0x3f, 0xd1, 0x5b, 0x95, 0xbc, 0xcf, 0xcd, 0x90, 0x87, 0x97, 0xb2, 0xdc, 0xfc, 0xbe, 0x61,
        0xf2, 0x56, 0xd3, 0xab, 0x14, 0x2a, 0x5d, 0x9e, 0x84, 0x3c, 0x39, 0x53, 0x47, 0x6d, 0x41, 0xa2,
        0x1f, 0x2d, 0x43, 0xd8, 0xb7, 0x7b, 0xa4, 0x76, 0xc4, 0x17, 0x49, 0xec, 0x7f, 0x0c, 0x6f, 0xf6,
        0x6c, 0xa1, 0x3b, 0x52, 0x29, 0x9d, 0x55, 0xaa, 0xfb, 0x60, 0x86, 0xb1, 0xbb, 0xcc, 0x3e, 0x5a,
        0xcb, 0x59, 0x5f, 0xb0, 0x9c, 0xa9, 0xa0, 0x51, 0x0b, 0xf5, 0x16, 0xeb, 0x7a, 0x75, 0x2c, 0xd7,
        0x4f, 0xae, 0xd5, 0xe9, 0xe6, 0xe7, 0xad, 0xe8, 0x74, 0xd6, 0xf4, 0xea, 0xa8, 0x50, 0x58, 0xaf
      ]
  
    });
  
    var Galois_1 = Galois;
  
    /**
     * Contains version pattern information.
     *
     * @public
     * @class
     * @extends Nevis
     */
    var Version = lite.extend(null, {
  
      /**
       * The version pattern block.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Version
       */
      BLOCK: [
        0xc94, 0x5bc, 0xa99, 0x4d3, 0xbf6, 0x762, 0x847, 0x60d, 0x928, 0xb78, 0x45d, 0xa17, 0x532,
        0x9a6, 0x683, 0x8c9, 0x7ec, 0xec4, 0x1e1, 0xfab, 0x08e, 0xc1a, 0x33f, 0xd75, 0x250, 0x9d5,
        0x6f0, 0x8ba, 0x79f, 0xb0b, 0x42e, 0xa64, 0x541, 0xc69
      ]
  
    });
  
    var Version_1 = Version;
  
    /**
     * Generates information for a QR code frame based on a specific value to be encoded.
     *
     * @param {Frame~Options} options - the options to be used
     * @public
     * @class
     * @extends Nevis
     */
    var Frame = lite.extend(function(options) {
      var dataBlock, eccBlock, index, neccBlock1, neccBlock2;
      var valueLength = options.value.length;
  
      this._badness = [];
      this._level = ErrorCorrection_1.LEVELS[options.level];
      this._polynomial = [];
      this._value = options.value;
      this._version = 0;
      this._stringBuffer = [];
  
      while (this._version < 40) {
        this._version++;
  
        index = ((this._level - 1) * 4) + ((this._version - 1) * 16);
  
        neccBlock1 = ErrorCorrection_1.BLOCKS[index++];
        neccBlock2 = ErrorCorrection_1.BLOCKS[index++];
        dataBlock = ErrorCorrection_1.BLOCKS[index++];
        eccBlock = ErrorCorrection_1.BLOCKS[index];
  
        index = (dataBlock * (neccBlock1 + neccBlock2)) + neccBlock2 - 3 + (this._version <= 9);
  
        if (valueLength <= index) {
          break;
        }
      }
  
      this._dataBlock = dataBlock;
      this._eccBlock = eccBlock;
      this._neccBlock1 = neccBlock1;
      this._neccBlock2 = neccBlock2;
  
      /**
       * The data width is based on version.
       *
       * @public
       * @type {number}
       * @memberof Frame#
       */
      // FIXME: Ensure that it fits instead of being truncated.
      var width = this.width = 17 + (4 * this._version);
  
      /**
       * The image buffer.
       *
       * @public
       * @type {number[]}
       * @memberof Frame#
       */
      this.buffer = Frame._createArray(width * width);
  
      this._ecc = Frame._createArray(dataBlock + ((dataBlock + eccBlock) * (neccBlock1 + neccBlock2)) + neccBlock2);
      this._mask = Frame._createArray(((width * (width + 1)) + 1) / 2);
  
      this._insertFinders();
      this._insertAlignments();
  
      // Insert single foreground cell.
      this.buffer[8 + (width * (width - 8))] = 1;
  
      this._insertTimingGap();
      this._reverseMask();
      this._insertTimingRowAndColumn();
      this._insertVersion();
      this._syncMask();
      this._convertBitStream(valueLength);
      this._calculatePolynomial();
      this._appendEccToData();
      this._interleaveBlocks();
      this._pack();
      this._finish();
    }, {
  
      _addAlignment: function(x, y) {
        var i;
        var buffer = this.buffer;
        var width = this.width;
  
        buffer[x + (width * y)] = 1;
  
        for (i = -2; i < 2; i++) {
          buffer[x + i + (width * (y - 2))] = 1;
          buffer[x - 2 + (width * (y + i + 1))] = 1;
          buffer[x + 2 + (width * (y + i))] = 1;
          buffer[x + i + 1 + (width * (y + 2))] = 1;
        }
  
        for (i = 0; i < 2; i++) {
          this._setMask(x - 1, y + i);
          this._setMask(x + 1, y - i);
          this._setMask(x - i, y - 1);
          this._setMask(x + i, y + 1);
        }
      },
  
      _appendData: function(data, dataLength, ecc, eccLength) {
        var bit, i, j;
        var polynomial = this._polynomial;
        var stringBuffer = this._stringBuffer;
  
        for (i = 0; i < eccLength; i++) {
          stringBuffer[ecc + i] = 0;
        }
  
        for (i = 0; i < dataLength; i++) {
          bit = Galois_1.LOG[stringBuffer[data + i] ^ stringBuffer[ecc]];
  
          if (bit !== 255) {
            for (j = 1; j < eccLength; j++) {
              stringBuffer[ecc + j - 1] = stringBuffer[ecc + j] ^
                Galois_1.EXPONENT[Frame._modN(bit + polynomial[eccLength - j])];
            }
          } else {
            for (j = ecc; j < ecc + eccLength; j++) {
              stringBuffer[j] = stringBuffer[j + 1];
            }
          }
  
          stringBuffer[ecc + eccLength - 1] = bit === 255 ? 0 : Galois_1.EXPONENT[Frame._modN(bit + polynomial[0])];
        }
      },
  
      _appendEccToData: function() {
        var i;
        var data = 0;
        var dataBlock = this._dataBlock;
        var ecc = this._calculateMaxLength();
        var eccBlock = this._eccBlock;
  
        for (i = 0; i < this._neccBlock1; i++) {
          this._appendData(data, dataBlock, ecc, eccBlock);
  
          data += dataBlock;
          ecc += eccBlock;
        }
  
        for (i = 0; i < this._neccBlock2; i++) {
          this._appendData(data, dataBlock + 1, ecc, eccBlock);
  
          data += dataBlock + 1;
          ecc += eccBlock;
        }
      },
  
      _applyMask: function(mask) {
        var r3x, r3y, x, y;
        var buffer = this.buffer;
        var width = this.width;
  
        switch (mask) {
        case 0:
          for (y = 0; y < width; y++) {
            for (x = 0; x < width; x++) {
              if (!((x + y) & 1) && !this._isMasked(x, y)) {
                buffer[x + (y * width)] ^= 1;
              }
            }
          }
  
          break;
        case 1:
          for (y = 0; y < width; y++) {
            for (x = 0; x < width; x++) {
              if (!(y & 1) && !this._isMasked(x, y)) {
                buffer[x + (y * width)] ^= 1;
              }
            }
          }
  
          break;
        case 2:
          for (y = 0; y < width; y++) {
            for (r3x = 0, x = 0; x < width; x++, r3x++) {
              if (r3x === 3) {
                r3x = 0;
              }
  
              if (!r3x && !this._isMasked(x, y)) {
                buffer[x + (y * width)] ^= 1;
              }
            }
          }
  
          break;
        case 3:
          for (r3y = 0, y = 0; y < width; y++, r3y++) {
            if (r3y === 3) {
              r3y = 0;
            }
  
            for (r3x = r3y, x = 0; x < width; x++, r3x++) {
              if (r3x === 3) {
                r3x = 0;
              }
  
              if (!r3x && !this._isMasked(x, y)) {
                buffer[x + (y * width)] ^= 1;
              }
            }
          }
  
          break;
        case 4:
          for (y = 0; y < width; y++) {
            for (r3x = 0, r3y = (y >> 1) & 1, x = 0; x < width; x++, r3x++) {
              if (r3x === 3) {
                r3x = 0;
                r3y = !r3y;
              }
  
              if (!r3y && !this._isMasked(x, y)) {
                buffer[x + (y * width)] ^= 1;
              }
            }
          }
  
          break;
        case 5:
          for (r3y = 0, y = 0; y < width; y++, r3y++) {
            if (r3y === 3) {
              r3y = 0;
            }
  
            for (r3x = 0, x = 0; x < width; x++, r3x++) {
              if (r3x === 3) {
                r3x = 0;
              }
  
              if (!((x & y & 1) + !(!r3x | !r3y)) && !this._isMasked(x, y)) {
                buffer[x + (y * width)] ^= 1;
              }
            }
          }
  
          break;
        case 6:
          for (r3y = 0, y = 0; y < width; y++, r3y++) {
            if (r3y === 3) {
              r3y = 0;
            }
  
            for (r3x = 0, x = 0; x < width; x++, r3x++) {
              if (r3x === 3) {
                r3x = 0;
              }
  
              if (!((x & y & 1) + (r3x && r3x === r3y) & 1) && !this._isMasked(x, y)) {
                buffer[x + (y * width)] ^= 1;
              }
            }
          }
  
          break;
        case 7:
          for (r3y = 0, y = 0; y < width; y++, r3y++) {
            if (r3y === 3) {
              r3y = 0;
            }
  
            for (r3x = 0, x = 0; x < width; x++, r3x++) {
              if (r3x === 3) {
                r3x = 0;
              }
  
              if (!((r3x && r3x === r3y) + (x + y & 1) & 1) && !this._isMasked(x, y)) {
                buffer[x + (y * width)] ^= 1;
              }
            }
          }
  
          break;
        }
      },
  
      _calculateMaxLength: function() {
        return (this._dataBlock * (this._neccBlock1 + this._neccBlock2)) + this._neccBlock2;
      },
  
      _calculatePolynomial: function() {
        var i, j;
        var eccBlock = this._eccBlock;
        var polynomial = this._polynomial;
  
        polynomial[0] = 1;
  
        for (i = 0; i < eccBlock; i++) {
          polynomial[i + 1] = 1;
  
          for (j = i; j > 0; j--) {
            polynomial[j] = polynomial[j] ? polynomial[j - 1] ^
              Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[j]] + i)] : polynomial[j - 1];
          }
  
          polynomial[0] = Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[0]] + i)];
        }
  
        // Use logs for generator polynomial to save calculation step.
        for (i = 0; i <= eccBlock; i++) {
          polynomial[i] = Galois_1.LOG[polynomial[i]];
        }
      },
  
      _checkBadness: function() {
        var b, b1, h, x, y;
        var bad = 0;
        var badness = this._badness;
        var buffer = this.buffer;
        var width = this.width;
  
        // Blocks of same colour.
        for (y = 0; y < width - 1; y++) {
          for (x = 0; x < width - 1; x++) {
            // All foreground colour.
            if ((buffer[x + (width * y)] &&
              buffer[x + 1 + (width * y)] &&
              buffer[x + (width * (y + 1))] &&
              buffer[x + 1 + (width * (y + 1))]) ||
              // All background colour.
              !(buffer[x + (width * y)] ||
              buffer[x + 1 + (width * y)] ||
              buffer[x + (width * (y + 1))] ||
              buffer[x + 1 + (width * (y + 1))])) {
              bad += Frame.N2;
            }
          }
        }
  
        var bw = 0;
  
        // X runs.
        for (y = 0; y < width; y++) {
          h = 0;
  
          badness[0] = 0;
  
          for (b = 0, x = 0; x < width; x++) {
            b1 = buffer[x + (width * y)];
  
            if (b === b1) {
              badness[h]++;
            } else {
              badness[++h] = 1;
            }
  
            b = b1;
            bw += b ? 1 : -1;
          }
  
          bad += this._getBadness(h);
        }
  
        if (bw < 0) {
          bw = -bw;
        }
  
        var count = 0;
        var big = bw;
        big += big << 2;
        big <<= 1;
  
        while (big > width * width) {
          big -= width * width;
          count++;
        }
  
        bad += count * Frame.N4;
  
        // Y runs.
        for (x = 0; x < width; x++) {
          h = 0;
  
          badness[0] = 0;
  
          for (b = 0, y = 0; y < width; y++) {
            b1 = buffer[x + (width * y)];
  
            if (b === b1) {
              badness[h]++;
            } else {
              badness[++h] = 1;
            }
  
            b = b1;
          }
  
          bad += this._getBadness(h);
        }
  
        return bad;
      },
  
      _convertBitStream: function(length) {
        var bit, i;
        var ecc = this._ecc;
        var version = this._version;
  
        // Convert string to bit stream. 8-bit data to QR-coded 8-bit data (numeric, alphanumeric, or kanji not supported).
        for (i = 0; i < length; i++) {
          ecc[i] = this._value.charCodeAt(i);
        }
  
        var stringBuffer = this._stringBuffer = ecc.slice();
        var maxLength = this._calculateMaxLength();
  
        if (length >= maxLength - 2) {
          length = maxLength - 2;
  
          if (version > 9) {
            length--;
          }
        }
  
        // Shift and re-pack to insert length prefix.
        var index = length;
  
        if (version > 9) {
          stringBuffer[index + 2] = 0;
          stringBuffer[index + 3] = 0;
  
          while (index--) {
            bit = stringBuffer[index];
  
            stringBuffer[index + 3] |= 255 & (bit << 4);
            stringBuffer[index + 2] = bit >> 4;
          }
  
          stringBuffer[2] |= 255 & (length << 4);
          stringBuffer[1] = length >> 4;
          stringBuffer[0] = 0x40 | (length >> 12);
        } else {
          stringBuffer[index + 1] = 0;
          stringBuffer[index + 2] = 0;
  
          while (index--) {
            bit = stringBuffer[index];
  
            stringBuffer[index + 2] |= 255 & (bit << 4);
            stringBuffer[index + 1] = bit >> 4;
          }
  
          stringBuffer[1] |= 255 & (length << 4);
          stringBuffer[0] = 0x40 | (length >> 4);
        }
  
        // Fill to end with pad pattern.
        index = length + 3 - (version < 10);
  
        while (index < maxLength) {
          stringBuffer[index++] = 0xec;
          stringBuffer[index++] = 0x11;
        }
      },
  
      _getBadness: function(length) {
        var i;
        var badRuns = 0;
        var badness = this._badness;
  
        for (i = 0; i <= length; i++) {
          if (badness[i] >= 5) {
            badRuns += Frame.N1 + badness[i] - 5;
          }
        }
  
        // FBFFFBF as in finder.
        for (i = 3; i < length - 1; i += 2) {
          if (badness[i - 2] === badness[i + 2] &&
            badness[i + 2] === badness[i - 1] &&
            badness[i - 1] === badness[i + 1] &&
            badness[i - 1] * 3 === badness[i] &&
            // Background around the foreground pattern? Not part of the specs.
            (badness[i - 3] === 0 || i + 3 > length ||
            badness[i - 3] * 3 >= badness[i] * 4 ||
            badness[i + 3] * 3 >= badness[i] * 4)) {
            badRuns += Frame.N3;
          }
        }
  
        return badRuns;
      },
  
      _finish: function() {
        // Save pre-mask copy of frame.
        this._stringBuffer = this.buffer.slice();
  
        var currentMask, i;
        var bit = 0;
        var mask = 30000;
  
        /*
         * Using for instead of while since in original Arduino code if an early mask was "good enough" it wouldn't try for
         * a better one since they get more complex and take longer.
         */
        for (i = 0; i < 8; i++) {
          // Returns foreground-background imbalance.
          this._applyMask(i);
  
          currentMask = this._checkBadness();
  
          // Is current mask better than previous best?
          if (currentMask < mask) {
            mask = currentMask;
            bit = i;
          }
  
          // Don't increment "i" to a void redoing mask.
          if (bit === 7) {
            break;
          }
  
          // Reset for next pass.
          this.buffer = this._stringBuffer.slice();
        }
  
        // Redo best mask as none were "good enough" (i.e. last wasn't bit).
        if (bit !== i) {
          this._applyMask(bit);
        }
  
        // Add in final mask/ECC level bytes.
        mask = ErrorCorrection_1.FINAL_FORMAT[bit + (this._level - 1 << 3)];
  
        var buffer = this.buffer;
        var width = this.width;
  
        // Low byte.
        for (i = 0; i < 8; i++, mask >>= 1) {
          if (mask & 1) {
            buffer[width - 1 - i + (width * 8)] = 1;
  
            if (i < 6) {
              buffer[8 + (width * i)] = 1;
            } else {
              buffer[8 + (width * (i + 1))] = 1;
            }
          }
        }
  
        // High byte.
        for (i = 0; i < 7; i++, mask >>= 1) {
          if (mask & 1) {
            buffer[8 + (width * (width - 7 + i))] = 1;
  
            if (i) {
              buffer[6 - i + (width * 8)] = 1;
            } else {
              buffer[7 + (width * 8)] = 1;
            }
          }
        }
      },
  
      _interleaveBlocks: function() {
        var i, j;
        var dataBlock = this._dataBlock;
        var ecc = this._ecc;
        var eccBlock = this._eccBlock;
        var k = 0;
        var maxLength = this._calculateMaxLength();
        var neccBlock1 = this._neccBlock1;
        var neccBlock2 = this._neccBlock2;
        var stringBuffer = this._stringBuffer;
  
        for (i = 0; i < dataBlock; i++) {
          for (j = 0; j < neccBlock1; j++) {
            ecc[k++] = stringBuffer[i + (j * dataBlock)];
          }
  
          for (j = 0; j < neccBlock2; j++) {
            ecc[k++] = stringBuffer[(neccBlock1 * dataBlock) + i + (j * (dataBlock + 1))];
          }
        }
  
        for (j = 0; j < neccBlock2; j++) {
          ecc[k++] = stringBuffer[(neccBlock1 * dataBlock) + i + (j * (dataBlock + 1))];
        }
  
        for (i = 0; i < eccBlock; i++) {
          for (j = 0; j < neccBlock1 + neccBlock2; j++) {
            ecc[k++] = stringBuffer[maxLength + i + (j * eccBlock)];
          }
        }
  
        this._stringBuffer = ecc;
      },
  
      _insertAlignments: function() {
        var i, x, y;
        var version = this._version;
        var width = this.width;
  
        if (version > 1) {
          i = Alignment_1.BLOCK[version];
          y = width - 7;
  
          for (;;) {
            x = width - 7;
  
            while (x > i - 3) {
              this._addAlignment(x, y);
  
              if (x < i) {
                break;
              }
  
              x -= i;
            }
  
            if (y <= i + 9) {
              break;
            }
  
            y -= i;
  
            this._addAlignment(6, y);
            this._addAlignment(y, 6);
          }
        }
      },
  
      _insertFinders: function() {
        var i, j, x, y;
        var buffer = this.buffer;
        var width = this.width;
  
        for (i = 0; i < 3; i++) {
          j = 0;
          y = 0;
  
          if (i === 1) {
            j = width - 7;
          }
          if (i === 2) {
            y = width - 7;
          }
  
          buffer[y + 3 + (width * (j + 3))] = 1;
  
          for (x = 0; x < 6; x++) {
            buffer[y + x + (width * j)] = 1;
            buffer[y + (width * (j + x + 1))] = 1;
            buffer[y + 6 + (width * (j + x))] = 1;
            buffer[y + x + 1 + (width * (j + 6))] = 1;
          }
  
          for (x = 1; x < 5; x++) {
            this._setMask(y + x, j + 1);
            this._setMask(y + 1, j + x + 1);
            this._setMask(y + 5, j + x);
            this._setMask(y + x + 1, j + 5);
          }
  
          for (x = 2; x < 4; x++) {
            buffer[y + x + (width * (j + 2))] = 1;
            buffer[y + 2 + (width * (j + x + 1))] = 1;
            buffer[y + 4 + (width * (j + x))] = 1;
            buffer[y + x + 1 + (width * (j + 4))] = 1;
          }
        }
      },
  
      _insertTimingGap: function() {
        var x, y;
        var width = this.width;
  
        for (y = 0; y < 7; y++) {
          this._setMask(7, y);
          this._setMask(width - 8, y);
          this._setMask(7, y + width - 7);
        }
  
        for (x = 0; x < 8; x++) {
          this._setMask(x, 7);
          this._setMask(x + width - 8, 7);
          this._setMask(x, width - 8);
        }
      },
  
      _insertTimingRowAndColumn: function() {
        var x;
        var buffer = this.buffer;
        var width = this.width;
  
        for (x = 0; x < width - 14; x++) {
          if (x & 1) {
            this._setMask(8 + x, 6);
            this._setMask(6, 8 + x);
          } else {
            buffer[8 + x + (width * 6)] = 1;
            buffer[6 + (width * (8 + x))] = 1;
          }
        }
      },
  
      _insertVersion: function() {
        var i, j, x, y;
        var buffer = this.buffer;
        var version = this._version;
        var width = this.width;
  
        if (version > 6) {
          i = Version_1.BLOCK[version - 7];
          j = 17;
  
          for (x = 0; x < 6; x++) {
            for (y = 0; y < 3; y++, j--) {
              if (1 & (j > 11 ? version >> j - 12 : i >> j)) {
                buffer[5 - x + (width * (2 - y + width - 11))] = 1;
                buffer[2 - y + width - 11 + (width * (5 - x))] = 1;
              } else {
                this._setMask(5 - x, 2 - y + width - 11);
                this._setMask(2 - y + width - 11, 5 - x);
              }
            }
          }
        }
      },
  
      _isMasked: function(x, y) {
        var bit = Frame._getMaskBit(x, y);
  
        return this._mask[bit] === 1;
      },
  
      _pack: function() {
        var bit, i, j;
        var k = 1;
        var v = 1;
        var width = this.width;
        var x = width - 1;
        var y = width - 1;
  
        // Interleaved data and ECC codes.
        var length = ((this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2)) + this._neccBlock2;
  
        for (i = 0; i < length; i++) {
          bit = this._stringBuffer[i];
  
          for (j = 0; j < 8; j++, bit <<= 1) {
            if (0x80 & bit) {
              this.buffer[x + (width * y)] = 1;
            }
  
            // Find next fill position.
            do {
              if (v) {
                x--;
              } else {
                x++;
  
                if (k) {
                  if (y !== 0) {
                    y--;
                  } else {
                    x -= 2;
                    k = !k;
  
                    if (x === 6) {
                      x--;
                      y = 9;
                    }
                  }
                } else if (y !== width - 1) {
                  y++;
                } else {
                  x -= 2;
                  k = !k;
  
                  if (x === 6) {
                    x--;
                    y -= 8;
                  }
                }
              }
  
              v = !v;
            } while (this._isMasked(x, y));
          }
        }
      },
  
      _reverseMask: function() {
        var x, y;
        var width = this.width;
  
        for (x = 0; x < 9; x++) {
          this._setMask(x, 8);
        }
  
        for (x = 0; x < 8; x++) {
          this._setMask(x + width - 8, 8);
          this._setMask(8, x);
        }
  
        for (y = 0; y < 7; y++) {
          this._setMask(8, y + width - 7);
        }
      },
  
      _setMask: function(x, y) {
        var bit = Frame._getMaskBit(x, y);
  
        this._mask[bit] = 1;
      },
  
      _syncMask: function() {
        var x, y;
        var width = this.width;
  
        for (y = 0; y < width; y++) {
          for (x = 0; x <= y; x++) {
            if (this.buffer[x + (width * y)]) {
              this._setMask(x, y);
            }
          }
        }
      }
  
    }, {
  
      _createArray: function(length) {
        var i;
        var array = [];
  
        for (i = 0; i < length; i++) {
          array[i] = 0;
        }
  
        return array;
      },
  
      _getMaskBit: function(x, y) {
        var bit;
  
        if (x > y) {
          bit = x;
          x = y;
          y = bit;
        }
  
        bit = y;
        bit += y * y;
        bit >>= 1;
        bit += x;
  
        return bit;
      },
  
      _modN: function(x) {
        while (x >= 255) {
          x -= 255;
          x = (x >> 8) + (x & 255);
        }
  
        return x;
      },
  
      // *Badness* coefficients.
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
  
    });
  
    var Frame_1 = Frame;
  
    /**
     * The options used by {@link Frame}.
     *
     * @typedef {Object} Frame~Options
     * @property {string} level - The ECC level to be used.
     * @property {string} value - The value to be encoded.
     */
  
    /**
     * An implementation of {@link Renderer} for working with <code>img</code> elements.
     *
     * This depends on {@link CanvasRenderer} being executed first as this implementation simply applies the data URL from
     * the rendered <code>canvas</code> element as the <code>src</code> for the <code>img</code> element being rendered.
     *
     * @public
     * @class
     * @extends Renderer
     */
    var ImageRenderer = Renderer_1.extend({
  
      /**
       * @override
       */
      draw: function() {
        this.element.src = this.qrious.toDataURL();
      },
  
      /**
       * @override
       */
      reset: function() {
        this.element.src = '';
      },
  
      /**
       * @override
       */
      resize: function() {
        var element = this.element;
  
        element.width = element.height = this.qrious.size;
      }
  
    });
  
    var ImageRenderer_1 = ImageRenderer;
  
    /**
     * Defines an available option while also configuring how values are applied to the target object.
     *
     * Optionally, a default value can be specified as well a value transformer for greater control over how the option
     * value is applied.
     *
     * If no value transformer is specified, then any specified option will be applied directly. All values are maintained
     * on the target object itself as a field using the option name prefixed with a single underscore.
     *
     * When an option is specified as modifiable, the {@link OptionManager} will be required to include a setter for the
     * property that is defined on the target object that uses the option name.
     *
     * @param {string} name - the name to be used
     * @param {boolean} [modifiable] - <code>true</code> if the property defined on target objects should include a setter;
     * otherwise <code>false</code>
     * @param {*} [defaultValue] - the default value to be used
     * @param {Option~ValueTransformer} [valueTransformer] - the value transformer to be used
     * @public
     * @class
     * @extends Nevis
     */
    var Option = lite.extend(function(name, modifiable, defaultValue, valueTransformer) {
      /**
       * The name for this {@link Option}.
       *
       * @public
       * @type {string}
       * @memberof Option#
       */
      this.name = name;
  
      /**
       * Whether a setter should be included on the property defined on target objects for this {@link Option}.
       *
       * @public
       * @type {boolean}
       * @memberof Option#
       */
      this.modifiable = Boolean(modifiable);
  
      /**
       * The default value for this {@link Option}.
       *
       * @public
       * @type {*}
       * @memberof Option#
       */
      this.defaultValue = defaultValue;
  
      this._valueTransformer = valueTransformer;
    }, {
  
      /**
       * Transforms the specified <code>value</code> so that it can be applied for this {@link Option}.
       *
       * If a value transformer has been specified for this {@link Option}, it will be called upon to transform
       * <code>value</code>. Otherwise, <code>value</code> will be returned directly.
       *
       * @param {*} value - the value to be transformed
       * @return {*} The transformed value or <code>value</code> if no value transformer is specified.
       * @public
       * @memberof Option#
       */
      transform: function(value) {
        var transformer = this._valueTransformer;
        if (typeof transformer === 'function') {
          return transformer(value, this);
        }
  
        return value;
      }
  
    });
  
    var Option_1 = Option;
  
    /**
     * Returns a transformed value for the specified <code>value</code> to be applied for the <code>option</code> provided.
     *
     * @callback Option~ValueTransformer
     * @param {*} value - the value to be transformed
     * @param {Option} option - the {@link Option} for which <code>value</code> is being transformed
     * @return {*} The transform value.
     */
  
    /**
     * Contains utility methods that are useful throughout the library.
     *
     * @public
     * @class
     * @extends Nevis
     */
    var Utilities = lite.extend(null, {
  
      /**
       * Returns the absolute value of a given number.
       *
       * This method is simply a convenient shorthand for <code>Math.abs</code> while ensuring that nulls are returned as
       * <code>null</code> instead of zero.
       *
       * @param {number} value - the number whose absolute value is to be returned
       * @return {number} The absolute value of <code>value</code> or <code>null</code> if <code>value</code> is
       * <code>null</code>.
       * @public
       * @static
       * @memberof Utilities
       */
      abs: function(value) {
        return value != null ? Math.abs(value) : null;
      },
  
      /**
       * Returns whether the specified <code>object</code> has a property with the specified <code>name</code> as an own
       * (not inherited) property.
       *
       * @param {Object} object - the object on which the property is to be checked
       * @param {string} name - the name of the property to be checked
       * @return {boolean} <code>true</code> if <code>object</code> has an own property with <code>name</code>.
       * @public
       * @static
       * @memberof Utilities
       */
      hasOwn: function(object, name) {
        return Object.prototype.hasOwnProperty.call(object, name);
      },
  
      /**
       * A non-operation method that does absolutely nothing.
       *
       * @return {void}
       * @public
       * @static
       * @memberof Utilities
       */
      noop: function() {},
  
      /**
       * Transforms the specified <code>string</code> to upper case while remaining null-safe.
       *
       * @param {string} string - the string to be transformed to upper case
       * @return {string} <code>string</code> transformed to upper case if <code>string</code> is not <code>null</code>.
       * @public
       * @static
       * @memberof Utilities
       */
      toUpperCase: function(string) {
        return string != null ? string.toUpperCase() : null;
      }
  
    });
  
    var Utilities_1 = Utilities;
  
    /**
     * Manages multiple {@link Option} instances that are intended to be used by multiple implementations.
     *
     * Although the option definitions are shared between targets, the values are maintained on the targets themselves.
     *
     * @param {Option[]} options - the options to be used
     * @public
     * @class
     * @extends Nevis
     */
    var OptionManager = lite.extend(function(options) {
      /**
       * The available options for this {@link OptionManager}.
       *
       * @public
       * @type {Object.<string, Option>}
       * @memberof OptionManager#
       */
      this.options = {};
  
      options.forEach(function(option) {
        this.options[option.name] = option;
      }, this);
    }, {
  
      /**
       * Returns whether an option with the specified <code>name</code> is available.
       *
       * @param {string} name - the name of the {@link Option} whose existence is to be checked
       * @return {boolean} <code>true</code> if an {@link Option} exists with <code>name</code>; otherwise
       * <code>false</code>.
       * @public
       * @memberof OptionManager#
       */
      exists: function(name) {
        return this.options[name] != null;
      },
  
      /**
       * Returns the value of the option with the specified <code>name</code> on the <code>target</code> object provided.
       *
       * @param {string} name - the name of the {@link Option} whose value on <code>target</code> is to be returned
       * @param {Object} target - the object from which the value of the named {@link Option} is to be returned
       * @return {*} The value of the {@link Option} with <code>name</code> on <code>target</code>.
       * @public
       * @memberof OptionManager#
       */
      get: function(name, target) {
        return OptionManager._get(this.options[name], target);
      },
  
      /**
       * Returns a copy of all of the available options on the <code>target</code> object provided.
       *
       * @param {Object} target - the object from which the option name/value pairs are to be returned
       * @return {Object.<string, *>} A hash containing the name/value pairs of all options on <code>target</code>.
       * @public
       * @memberof OptionManager#
       */
      getAll: function(target) {
        var name;
        var options = this.options;
        var result = {};
  
        for (name in options) {
          if (Utilities_1.hasOwn(options, name)) {
            result[name] = OptionManager._get(options[name], target);
          }
        }
  
        return result;
      },
  
      /**
       * Initializes the available options for the <code>target</code> object provided and then applies the initial values
       * within the speciifed <code>options</code>.
       *
       * This method will throw an error if any of the names within <code>options</code> does not match an available option.
       *
       * This involves setting the default values and defining properties for all of the available options on
       * <code>target</code> before finally calling {@link OptionMananger#setAll} with <code>options</code> and
       * <code>target</code>. Any options that are configured to be modifiable will have a setter included in their defined
       * property that will allow its corresponding value to be modified.
       *
       * If a change handler is specified, it will be called whenever the value changes on <code>target</code> for a
       * modifiable option, but only when done so via the defined property's setter.
       *
       * @param {Object.<string, *>} options - the name/value pairs of the initial options to be set
       * @param {Object} target - the object on which the options are to be initialized
       * @param {Function} [changeHandler] - the function to be called whenever the value of an modifiable option changes on
       * <code>target</code>
       * @return {void}
       * @throws {Error} If <code>options</code> contains an invalid option name.
       * @public
       * @memberof OptionManager#
       */
      init: function(options, target, changeHandler) {
        if (typeof changeHandler !== 'function') {
          changeHandler = Utilities_1.noop;
        }
  
        var name, option;
  
        for (name in this.options) {
          if (Utilities_1.hasOwn(this.options, name)) {
            option = this.options[name];
  
            OptionManager._set(option, option.defaultValue, target);
            OptionManager._createAccessor(option, target, changeHandler);
          }
        }
  
        this._setAll(options, target, true);
      },
  
      /**
       * Sets the value of the option with the specified <code>name</code> on the <code>target</code> object provided to
       * <code>value</code>.
       *
       * This method will throw an error if <code>name</code> does not match an available option or matches an option that
       * cannot be modified.
       *
       * If <code>value</code> is <code>null</code> and the {@link Option} has a default value configured, then that default
       * value will be used instead. If the {@link Option} also has a value transformer configured, it will be used to
       * transform whichever value was determined to be used.
       *
       * This method returns whether the value of the underlying field on <code>target</code> was changed as a result.
       *
       * @param {string} name - the name of the {@link Option} whose value is to be set
       * @param {*} value - the value to be set for the named {@link Option} on <code>target</code>
       * @param {Object} target - the object on which <code>value</code> is to be set for the named {@link Option}
       * @return {boolean} <code>true</code> if the underlying field on <code>target</code> was changed; otherwise
       * <code>false</code>.
       * @throws {Error} If <code>name</code> is invalid or is for an option that cannot be modified.
       * @public
       * @memberof OptionManager#
       */
      set: function(name, value, target) {
        return this._set(name, value, target);
      },
  
      /**
       * Sets all of the specified <code>options</code> on the <code>target</code> object provided to their corresponding
       * values.
       *
       * This method will throw an error if any of the names within <code>options</code> does not match an available option
       * or matches an option that cannot be modified.
       *
       * If any value within <code>options</code> is <code>null</code> and the corresponding {@link Option} has a default
       * value configured, then that default value will be used instead. If an {@link Option} also has a value transformer
       * configured, it will be used to transform whichever value was determined to be used.
       *
       * This method returns whether the value for any of the underlying fields on <code>target</code> were changed as a
       * result.
       *
       * @param {Object.<string, *>} options - the name/value pairs of options to be set
       * @param {Object} target - the object on which the options are to be set
       * @return {boolean} <code>true</code> if any of the underlying fields on <code>target</code> were changed; otherwise
       * <code>false</code>.
       * @throws {Error} If <code>options</code> contains an invalid option name or an option that cannot be modiifed.
       * @public
       * @memberof OptionManager#
       */
      setAll: function(options, target) {
        return this._setAll(options, target);
      },
  
      _set: function(name, value, target, allowUnmodifiable) {
        var option = this.options[name];
        if (!option) {
          throw new Error('Invalid option: ' + name);
        }
        if (!option.modifiable && !allowUnmodifiable) {
          throw new Error('Option cannot be modified: ' + name);
        }
  
        return OptionManager._set(option, value, target);
      },
  
      _setAll: function(options, target, allowUnmodifiable) {
        if (!options) {
          return false;
        }
  
        var name;
        var changed = false;
  
        for (name in options) {
          if (Utilities_1.hasOwn(options, name) && this._set(name, options[name], target, allowUnmodifiable)) {
            changed = true;
          }
        }
  
        return changed;
      }
  
    }, {
  
      _createAccessor: function(option, target, changeHandler) {
        var descriptor = {
          get: function() {
            return OptionManager._get(option, target);
          }
        };
  
        if (option.modifiable) {
          descriptor.set = function(value) {
            if (OptionManager._set(option, value, target)) {
              changeHandler(value, option);
            }
          };
        }
  
        Object.defineProperty(target, option.name, descriptor);
      },
  
      _get: function(option, target) {
        return target['_' + option.name];
      },
  
      _set: function(option, value, target) {
        var fieldName = '_' + option.name;
        var oldValue = target[fieldName];
        var newValue = option.transform(value != null ? value : option.defaultValue);
  
        target[fieldName] = newValue;
  
        return newValue !== oldValue;
      }
  
    });
  
    var OptionManager_1 = OptionManager;
  
    /**
     * Called whenever the value of a modifiable {@link Option} is changed on a target object via the defined property's
     * setter.
     *
     * @callback OptionManager~ChangeHandler
     * @param {*} value - the new value for <code>option</code> on the target object
     * @param {Option} option - the modifable {@link Option} whose value has changed on the target object.
     * @return {void}
     */
  
    /**
     * A basic manager for {@link Service} implementations that are mapped to simple names.
     *
     * @public
     * @class
     * @extends Nevis
     */
    var ServiceManager = lite.extend(function() {
      this._services = {};
    }, {
  
      /**
       * Returns the {@link Service} being managed with the specified <code>name</code>.
       *
       * @param {string} name - the name of the {@link Service} to be returned
       * @return {Service} The {@link Service} is being managed with <code>name</code>.
       * @throws {Error} If no {@link Service} is being managed with <code>name</code>.
       * @public
       * @memberof ServiceManager#
       */
      getService: function(name) {
        var service = this._services[name];
        if (!service) {
          throw new Error('Service is not being managed with name: ' + name);
        }
  
        return service;
      },
  
      /**
       * Sets the {@link Service} implementation to be managed for the specified <code>name</code> to the
       * <code>service</code> provided.
       *
       * @param {string} name - the name of the {@link Service} to be managed with <code>name</code>
       * @param {Service} service - the {@link Service} implementation to be managed
       * @return {void}
       * @throws {Error} If a {@link Service} is already being managed with the same <code>name</code>.
       * @public
       * @memberof ServiceManager#
       */
      setService: function(name, service) {
        if (this._services[name]) {
          throw new Error('Service is already managed with name: ' + name);
        }
  
        if (service) {
          this._services[name] = service;
        }
      }
  
    });
  
    var ServiceManager_1 = ServiceManager;
  
    var optionManager = new OptionManager_1([
      new Option_1('background', true, 'white'),
      new Option_1('backgroundAlpha', true, 1, Utilities_1.abs),
      new Option_1('element'),
      new Option_1('foreground', true, 'black'),
      new Option_1('foregroundAlpha', true, 1, Utilities_1.abs),
      new Option_1('level', true, 'L', Utilities_1.toUpperCase),
      new Option_1('mime', true, 'image/png'),
      new Option_1('padding', true, null, Utilities_1.abs),
      new Option_1('size', true, 100, Utilities_1.abs),
      new Option_1('value', true, '')
    ]);
    var serviceManager = new ServiceManager_1();
  
    /**
     * Enables configuration of a QR code generator which uses HTML5 <code>canvas</code> for rendering.
     *
     * @param {QRious~Options} [options] - the options to be used
     * @throws {Error} If any <code>options</code> are invalid.
     * @public
     * @class
     * @extends Nevis
     */
    var QRious = lite.extend(function(options) {
      optionManager.init(options, this, this.update.bind(this));
  
      var element = optionManager.get('element', this);
      var elementService = serviceManager.getService('element');
      var canvas = element && elementService.isCanvas(element) ? element : elementService.createCanvas();
      var image = element && elementService.isImage(element) ? element : elementService.createImage();
  
      this._canvasRenderer = new CanvasRenderer_1(this, canvas, true);
      this._imageRenderer = new ImageRenderer_1(this, image, image === element);
  
      this.update();
    }, {
  
      /**
       * Returns all of the options configured for this {@link QRious}.
       *
       * Any changes made to the returned object will not be reflected in the options themselves or their corresponding
       * underlying fields.
       *
       * @return {Object.<string, *>} A copy of the applied options.
       * @public
       * @memberof QRious#
       */
      get: function() {
        return optionManager.getAll(this);
      },
  
      /**
       * Sets all of the specified <code>options</code> and automatically updates this {@link QRious} if any of the
       * underlying fields are changed as a result.
       *
       * This is the preferred method for updating multiple options at one time to avoid unnecessary updates between
       * changes.
       *
       * @param {QRious~Options} options - the options to be set
       * @return {void}
       * @throws {Error} If any <code>options</code> are invalid or cannot be modified.
       * @public
       * @memberof QRious#
       */
      set: function(options) {
        if (optionManager.setAll(options, this)) {
          this.update();
        }
      },
  
      /**
       * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
       *
       * @param {string} [mime] - the MIME type for the image
       * @return {string} The image data URI for the QR code.
       * @public
       * @memberof QRious#
       */
      toDataURL: function(mime) {
        return this.canvas.toDataURL(mime || this.mime);
      },
  
      /**
       * Updates this {@link QRious} by generating a new {@link Frame} and re-rendering the QR code.
       *
       * @return {void}
       * @protected
       * @memberof QRious#
       */
      update: function() {
        var frame = new Frame_1({
          level: this.level,
          value: this.value
        });
  
        this._canvasRenderer.render(frame);
        this._imageRenderer.render(frame);
      }
  
    }, {
  
      /**
       * Configures the <code>service</code> provided to be used by all {@link QRious} instances.
       *
       * @param {Service} service - the {@link Service} to be configured
       * @return {void}
       * @throws {Error} If a {@link Service} has already been configured with the same name.
       * @public
       * @static
       * @memberof QRious
       */
      use: function(service) {
        serviceManager.setService(service.getName(), service);
      }
  
    });
  
    Object.defineProperties(QRious.prototype, {
  
      canvas: {
        /**
         * Returns the <code>canvas</code> element being used to render the QR code for this {@link QRious}.
         *
         * @return {*} The <code>canvas</code> element.
         * @public
         * @memberof QRious#
         * @alias canvas
         */
        get: function() {
          return this._canvasRenderer.getElement();
        }
      },
  
      image: {
        /**
         * Returns the <code>img</code> element being used to render the QR code for this {@link QRious}.
         *
         * @return {*} The <code>img</code> element.
         * @public
         * @memberof QRious#
         * @alias image
         */
        get: function() {
          return this._imageRenderer.getElement();
        }
      }
  
    });
  
    var QRious_1$2 = QRious;
  
    /**
     * The options used by {@link QRious}.
     *
     * @typedef {Object} QRious~Options
     * @property {string} [background="white"] - The background color to be applied to the QR code.
     * @property {number} [backgroundAlpha=1] - The background alpha to be applied to the QR code.
     * @property {*} [element] - The element to be used to render the QR code which may either be an <code>canvas</code> or
     * <code>img</code>. The element(s) will be created if needed.
     * @property {string} [foreground="black"] - The foreground color to be applied to the QR code.
     * @property {number} [foregroundAlpha=1] - The foreground alpha to be applied to the QR code.
     * @property {string} [level="L"] - The error correction level to be applied to the QR code.
     * @property {string} [mime="image/png"] - The MIME type to be used to render the image for the QR code.
     * @property {number} [padding] - The padding for the QR code in pixels.
     * @property {number} [size=100] - The size of the QR code in pixels.
     * @property {string} [value=""] - The value to be encoded within the QR code.
     */
  
    var index = QRious_1$2;
  
    /**
     * Defines a service contract that must be met by all implementations.
     *
     * @public
     * @class
     * @extends Nevis
     */
    var Service = lite.extend({
  
      /**
       * Returns the name of this {@link Service}.
       *
       * @return {string} The service name.
       * @public
       * @abstract
       * @memberof Service#
       */
      getName: function() {}
  
    });
  
    var Service_1 = Service;
  
    /**
     * A service for working with elements.
     *
     * @public
     * @class
     * @extends Service
     */
    var ElementService = Service_1.extend({
  
      /**
       * Creates an instance of a canvas element.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @return {*} The newly created canvas element.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      createCanvas: function() {},
  
      /**
       * Creates an instance of a image element.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @return {*} The newly created image element.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      createImage: function() {},
  
      /**
       * @override
       */
      getName: function() {
        return 'element';
      },
  
      /**
       * Returns whether the specified <code>element</code> is a canvas.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @param {*} element - the element to be checked
       * @return {boolean} <code>true</code> if <code>element</code> is a canvas; otherwise <code>false</code>.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      isCanvas: function(element) {},
  
      /**
       * Returns whether the specified <code>element</code> is an image.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @param {*} element - the element to be checked
       * @return {boolean} <code>true</code> if <code>element</code> is an image; otherwise <code>false</code>.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      isImage: function(element) {}
  
    });
  
    var ElementService_1 = ElementService;
  
    /**
     * An implementation of {@link ElementService} intended for use within a browser environment.
     *
     * @public
     * @class
     * @extends ElementService
     */
    var BrowserElementService = ElementService_1.extend({
  
      /**
       * @override
       */
      createCanvas: function() {
        return document.createElement('canvas');
      },
  
      /**
       * @override
       */
      createImage: function() {
        return document.createElement('img');
      },
  
      /**
       * @override
       */
      isCanvas: function(element) {
        return element instanceof HTMLCanvasElement;
      },
  
      /**
       * @override
       */
      isImage: function(element) {
        return element instanceof HTMLImageElement;
      }
  
    });
  
    var BrowserElementService_1 = BrowserElementService;
  
    index.use(new BrowserElementService_1());
  
    var QRious_1 = index;
  
    return QRious_1;
  
  })));
  
  //# sourceMappingURL=qrious.js.map


(function (global) {

  'use strict';

    // Default impl options
    var defaultOptions = {
      // Default is to fail on error, no placeholder
      imagePlaceholder: undefined,
      // Default cache bust is false, it will use the cache
      cacheBust: false
  };


  var yardCode = {
      barcode: barCode
  };

  if(typeof module !=='undefined'){
    module.exports=yardCode;
  }else{
    global.yardCode = yardCode;
  }
    
  function barCode(type,val,options){
      if(type===1002){
          return jsBarcodes(val,options);
      }else{
          return qRiouss(val,options);
      }
  }

    function jsBarcodes(val,options){
        var canvas = document.createElement("canvas");
        try{
            JsBarcode(canvas, val,options); //"CODE39"
            return canvas.toDataURL("image/jpeg");
        }catch(err){
            JsBarcode(canvas, val); //"CODE39"
            return canvas.toDataURL("image/jpeg");
        }
    }

    function qRiouss(val,options){
        var obj = Object.assign({value: val},options ? options:{
            level: 'H',
            size: 200,
        });
       return new QRious(obj).toDataURL('image/jpeg');
    }

})(this);