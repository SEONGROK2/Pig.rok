const x = 1;

function outerFunc() {
  const x = 10;
  innerFunc(); // 1
}

function innerFunc() {
  console.log(x); // 1
}

outerFunc();