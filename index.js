/*
 * table-nowrap v1.0.2
 * author: wangMing
 * (c) 2018-2019
 * Released under the ISC License.
 */
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var calcWidthColumns = function calcWidthColumns(columns, data) {
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'font-size:12px;font-family:PingFangSC-Regular, sans-serif;';

  var handleStrLen = function handleStrLen(value, key) {
    return value[key] ? value[key].toString().length : 0;
  };

  var div = document.createElement('div');
  div.style = "".concat(style, "position: absolute;left: -999px;white-space: nowrap;");
  document.body.appendChild(div);
  var newColumns = columns.map(function (t) {
    if (t.width || t.minWidth) return t;
    var text = '';

    if (data.length) {
      var T = data.reduce(function (cur, pre) {
        var cLen = handleStrLen(cur, t.prop);
        var pLen = handleStrLen(pre, t.prop);
        return pLen >= cLen ? pre : cur;
      });
      text = T[t.prop];
    }

    var label = document.createElement('span');
    var span = document.createElement('span');
    label.innerHTML = t.label;
    span.innerHTML = text;
    div.appendChild(label);
    div.appendChild(span);
    var minWidth = span.offsetWidth > label.offsetWidth ? span.offsetWidth : label.offsetWidth;

    {
      minWidth = minWidth + 48;
    }

    return _objectSpread2({}, t, {
      minWidth: minWidth
    });
  });
  document.body.removeChild(div);
  return newColumns;
};

export default calcWidthColumns;
