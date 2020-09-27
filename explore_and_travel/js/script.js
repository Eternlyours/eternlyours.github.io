"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
$('.select').each(function () {
  // Variables
  var $this = $(this),
      selectOption = $this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      dur = 500;
  $this.hide(); // Wrap all in select box

  $this.wrap('<div class="select"></div>'); // Style box

  $('<div>', {
    "class": 'select__gap',
    text: selectOption.first().text()
  }).insertAfter($this);
  var selectGap = $this.next('.select__gap'),
      caret = selectGap.find('.caret'); // Add ul list

  $('<ul>', {
    "class": 'select__list'
  }).insertAfter(selectGap);
  var selectList = selectGap.next('.select__list'); // Add li - option items

  for (var i = 0; i < selectOptionLength; i++) {
    $('<li>', {
      "class": 'select__item',
      html: $('<span>', {
        text: selectOption.eq(i).text()
      })
    }).attr('data-value', selectOption.eq(i).val()).appendTo(selectList);
  } // Find all items


  var selectItem = selectList.find('li');
  selectList.slideUp(0);
  selectGap.on('click', function () {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      selectList.slideDown(dur);
      $(this).toggleClass('select__gap-active');
      selectItem.on('click', function () {
        var chooseItem = $(this).data('value');
        $('select').val(chooseItem).attr('selected', 'selected');
        selectGap.text($(this).find('span').text());
        selectList.slideUp(dur);
        selectGap.removeClass('on');
        selectGap.removeClass('select__gap-active');
      });
    } else {
      $(this).removeClass('on');
      $(this).removeClass('select__gap-active');
      selectList.slideUp(dur);
    }
  });
});

function loadData() {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 800);
  });
}

loadData().then(function () {
  var preloaderEl = document.getElementById('preloader');
  preloaderEl.classList.add('hidden');
  preloaderEl.classList.remove('visible');
});

function getRandomHeight(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomWidth(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function () {
  var h = $('.wrapper').height();
  var w = $('.wrapper').width();

  for (var i = 0; i < 14; i++) {
    $('body').prepend("<div class='fly__element' style='top:" + getRandomHeight(h) + "px; left: " + getRandomWidth(w) + "px;'> " + "<svg width='23' height='23' style='position: inherit;' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg'>" + "<path style='position: inherit;' d='M13.698 20.5325L13.6228 14.0237C13.6555 13.7748 13.8545 13.5478 14.1149 13.4976L20.6387 13.4266C20.8882 13.4594 21.0872 13.2323 21.1308 12.9004L21.1007 9.26722C21.1335 9.01832 20.9058 8.81959 20.5731 8.77587L14.0493 8.84688C13.7998 8.81408 13.5721 8.61536 13.5217 8.35553L13.4464 1.84671C13.4792 1.59781 13.2515 1.39908 12.9188 1.35536L9.2772 1.38317C9.0277 1.35038 8.82866 1.57742 8.78504 1.9093L8.86028 8.41811C8.82756 8.66701 8.62852 8.89406 8.36811 8.94423L1.84431 9.01526C1.59481 8.98247 1.39577 9.20951 1.35215 9.54138L1.38225 13.1746C1.34953 13.4235 1.57723 13.6222 1.9099 13.666L8.4337 13.5949C8.6832 13.6277 8.9109 13.8265 8.96136 14.0863L9.03654 20.5951C9.00383 20.844 9.23153 21.0427 9.5642 21.0865L13.2058 21.0587C13.4662 21.0085 13.6652 20.7814 13.698 20.5325Z' fill='#FDD08D' />" + "</svg>" + "</div>");
    $('body').prepend("<div class='fly__element' style='top:" + getRandomHeight(h) + "px; left: " + getRandomWidth(w) + "px;'>" + "<svg width='20' height='20' style='position: inherit;' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'> " + "<path style='position: inherit;' d='M0.908711 14.1542C-1.39785 9.15664 0.846368 3.22201 5.83353 0.910617C10.8207 -1.40078 16.743 0.848124 19.0495 5.84573C21.3561 10.8433 19.1119 16.778 14.1247 19.0894C9.13753 21.4008 3.21528 19.1518 0.908711 14.1542ZM3.65165 12.9048C5.27248 16.4032 9.3869 17.9649 12.9403 16.3407C16.4313 14.7165 17.9898 10.5935 16.3689 7.03267C14.7481 3.47188 10.6337 1.9726 7.08033 3.59682C3.58931 5.22104 2.03082 9.40652 3.65165 12.9048Z' fill='url(#paint0_linear)'/>" + "<defs>" + "<linearGradient id='paint0_linear' x1='5.97093' y1='0.866138' x2='14.0704' y2='19.1436' gradientUnits='userSpaceOnUse'>" + "<stop stop-color='#BFF0DD'/>" + "<stop offset='1' stop-color='#57D2A3'/>" + "</linearGradient>" + "</defs>" + "</svg>" + "</div>");
  }

  $('#burgerBtn').click(function () {
    if ($(this).hasClass('burger__hidden')) {
      $(this).removeClass('burger__hidden');
      $('.nav__menu').removeClass('open__menu');
      $('body').css('overflow-y', 'scroll');
    } else {
      $(this).addClass('burger__hidden');
      $('.nav__menu').addClass('open__menu');
      $('body').css('overflow-y', 'hidden');
    }
  });
});

var multiItemSlider = function () {
  return function (selector, config) {
    var _mainElement = document.querySelector(selector),
        // основный элемент блока
    _sliderWrapper = _mainElement.querySelector('.slider__wrapper'),
        // обертка для .slider-item
    _sliderItems = _mainElement.querySelectorAll('.slider__item'),
        // элементы (.slider-item)
    _sliderControls = _mainElement.querySelectorAll('.slider__control'),
        // элементы управления
    _sliderControlLeft = _mainElement.querySelector('.slider__control_left'),
        // кнопка "LEFT"
    _sliderControlRight = _mainElement.querySelector('.slider__control_right'),
        // кнопка "RIGHT"
    _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
        // ширина обёртки
    _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),
        // ширина одного элемента    
    _positionLeftItem = 0,
        // позиция левого активного элемента
    _transform = 0,
        // значение транфсофрмации .slider_wrapper
    _step = _itemWidth / _wrapperWidth * 100,
        // величина шага (для трансформации)
    _items = []; // массив элементов
    // наполнение массива _items


    _sliderItems.forEach(function (item, index) {
      _items.push({
        item: item,
        position: index,
        transform: 0
      });
    });

    var position = {
      getMin: 0,
      getMax: _items.length - 1
    };

    var _transformItem = function _transformItem(direction) {
      if (direction === 'right') {
        if (_positionLeftItem + _wrapperWidth / _itemWidth - 1 >= position.getMax) {
          return;
        }

        if (!_sliderControlLeft.classList.contains('slider__control_show')) {
          _sliderControlLeft.classList.add('slider__control_show');
        }

        if (_sliderControlRight.classList.contains('slider__control_show') && _positionLeftItem + _wrapperWidth / _itemWidth >= position.getMax) {
          _sliderControlRight.classList.remove('slider__control_show');
        }

        _positionLeftItem++;
        _transform -= _step;
      }

      if (direction === 'left') {
        if (_positionLeftItem <= position.getMin) {
          return;
        }

        if (!_sliderControlRight.classList.contains('slider__control_show')) {
          _sliderControlRight.classList.add('slider__control_show');
        }

        if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
          _sliderControlLeft.classList.remove('slider__control_show');
        }

        _positionLeftItem--;
        _transform += _step;
      }

      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
    }; // обработчик события click для кнопок "назад" и "вперед"


    var _controlClick = function _controlClick(e) {
      if (e.target.classList.contains('slider__control')) {
        e.preventDefault();
        var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';

        _transformItem(direction);
      }
    };

    var _setUpListeners = function _setUpListeners() {
      // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
      _sliderControls.forEach(function (item) {
        item.addEventListener('click', _controlClick);
      });
    }; // инициализация


    _setUpListeners();

    return {
      right: function right() {
        // метод right
        _transformItem('right');
      },
      left: function left() {
        // метод left
        _transformItem('left');
      }
    };
  };
}();

var slider = multiItemSlider('.slider');