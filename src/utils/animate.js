const animate = (opts) => {
  var start = new Date();
  var id = setInterval(function () {
    var timePassed = new Date() - start;
    var progress = timePassed / opts.duration;
    if (progress > 1) progress = 1;
    var delta = opts.delta(progress);
    opts.step(delta);
    if (progress == 1) clearInterval(id);
  }, opts.delay || 10);
};

export const move = (
  element,
  option = { to: 0, from: -65, style: "bottom" },
  delta = function (p) {
    return p;
  },
  duration = 200
) => {
  var to = option.to;
  animate({
    delay: 50,
    duration: duration || 1000, // 1 sec by default
    delta: delta,
    step: function (delta) {
      // console.log(element.style[option.style]);
      // console.log(Math.abs(option.from * delta));
      // console.log(element.style[option.style]);
      if (option.from > 0) {
        element.style[option.style] = 0 + Math.abs(option.from) * delta + "px";
      } else {
        element.style[option.style] =
          option.from + Math.abs(option.from) * delta + "px";
      }
    },
  });
};

export const moveTo = (
  element,
  option = { to: 0, from: -65, style: "bottom" },
  delta = function (p) {
    return p;
  },
  duration = 200
) => {
  var to = option.to;
  animate({
    delay: 50,
    duration: duration || 1000, // 1 sec by default
    delta: delta,
    step: function (delta) {
      // console.log(element.style[option.style]);
      // console.log(Math.abs(option.from * delta));
      // console.log(element.style[option.style]);
      if (option.from > 0) {
        element.style[option.style] =
          option.from - Math.abs(option.from) * delta + "px";
      } else {
        element.style[option.style] = 0 - Math.abs(option.from) * delta + "px";
      }
    },
  });
};
/**
 * <div onclick="move(this.children[0], function(p) {return p})" class="example_path">
    <div class="example_block"></div>
</div>
 */
