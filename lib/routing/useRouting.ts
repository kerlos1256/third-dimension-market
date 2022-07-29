import { Routes } from "./routes";

type TEst = {
  test1: () => any;
  test2: () => any;
  test5: () => any;
};

type Main = {
  foo: string;
  test: string;
} & TEst;

type PartMain = Partial<Main>;

const object1: PartMain = {
  foo: "foo",
  test5: function () {
    this.foo;
  },
};

const object: PartMain = {
  test: "test",

  test1: function () {
    console.log(this.foo);
  },
};

const main: PartMain = {
  ...object,
  ...object1,

  test2: function () {
    if (this.test1) this.test1();
    return this;
  },
};

if (main.test2) main.test2();

export const useRouting = () => {
  function visit(fn: (routes: Routes) => Routes) {
    const test = { ...object };

    const route = fn(new Routes());

    console.log("go to ", route);
  }

  return {
    visit,
  };
};
