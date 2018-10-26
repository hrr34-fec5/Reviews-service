var obj = () => {
  return {
    a:1,
    b:2,
    c: (Math.random()<.3)? obj(): {}
  }
};

//should not max call stack inf loop
//should have nested instance of itself
//can set rand seed to induce deterministic conditional test