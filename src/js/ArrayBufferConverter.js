export default class ArrayBufferConverter {
  constructor(data) {
    this.bufer = undefined;
    this.data = data;
  }

  getBuffer() {
    return ((input) => {
      const buffer = new ArrayBuffer(this.data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i += 1) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(this.data);
  }

  load(buferData) {
    this.data = buferData;
  }

  toString(data) {
    this.data = data;
    const bufferView = new Uint16Array(data);
    let resultStr = '';
    bufferView.forEach((item) => {
      resultStr += String.fromCharCode(item);
    });
    return resultStr;
  }
}

const test = new ArrayBufferConverter();
test.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
const data = test.getBuffer();
console.log(test.toString(data));
