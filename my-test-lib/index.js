

export default class MyTestLib {
  #something = 'hi';

  constructor() {
    this.#something += ' world';
    console.info(this.#something);
  }
}

const lib = new MyTestLib();
