var target = document.getElementsByTagName("canvas")[0];

var click = new MouseEvent("click", {
  view: window,
  bubbles: true,
  cancelable: true,
  clientX: 20,
});

var mousedown = new MouseEvent("mousedown", {
  view: window,
  bubbles: true,
  cancelable: true,
  clientX: 20,
});

var mouseup = new MouseEvent("mouseup", {
  view: window,
  bubbles: true,
  cancelable: true,
  clientX: 20,
});

var dragUp = (target) => {
  var down = new MouseEvent("mousedown", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
    clientY: 400,
  });

  var up = new MouseEvent("mouseup", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
    clientY: 200,
  });

  var move = new MouseEvent("move", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
    clientY: 200,
  });

  target.dispatchEvent(down);
  target.dispatchEvent(move);
  target.dispatchEvent(up);
};

var dragDown = (target) => {
  var down = new MouseEvent("mousedown", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
    clientY: 200,
  });

  var up = new MouseEvent("mouseup", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
    clientY: 400,
  });

  var move = new MouseEvent("move", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
    clientY: 400,
  });

  target.dispatchEvent(down);
  target.dispatchEvent(move);
  target.dispatchEvent(up);
};

var dragRight = (target) => {
  var down = new MouseEvent("mousedown", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
    clientY: 200,
  });

  var up = new MouseEvent("mouseup", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 220,
    clientY: 200,
  });

  var move = new MouseEvent("move", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 220,
    clientY: 200,
  });

  target.dispatchEvent(down);
  target.dispatchEvent(move);
  target.dispatchEvent(up);
};

var cheat = async (a = 840, b = 720, c = 750, d = 770, e = 820, f = 770, g = 0, h = 480) => {
  console.log("start");
  await start(a);

  console.log("lift car");
  await lift(b);

  console.log("remove tyre");
  await changeTyre(c, d);

  console.log("put tyre");
  await changeTyre(e, f);

  console.log("release car");
  await lift(g);

  console.log("go");
  await go(h);
};

var wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

var start = async (time) => {
  target.dispatchEvent(mousedown);
  await wait(time);
  target.dispatchEvent(mouseup);
};

var lift = async (time) => {
  await wait(time);
  for (let i = 0; i < 6; i++) {
    target.dispatchEvent(mousedown);
    target.dispatchEvent(mouseup);
  }
};

var changeTyre = async (time1, time2) => {
  await wait(time1);
  dragUp(target);
  target.dispatchEvent(mousedown);

  await wait(time2);
  target.dispatchEvent(mouseup);
  dragDown(target);
};

var go = async (time) => {
  await wait(time);
  dragRight(target);
};

cheat(840, 720, 750, 770, 820, 770, 0, 480);
