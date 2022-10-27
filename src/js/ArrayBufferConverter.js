class ArrayBufferConverter {
  constructor() {
    this.bufer = undefined;
    this.data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
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
    this.bufer = buferData;
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
const data = test.getBuffer();
test.load(data);
console.log(test.toString(data));
