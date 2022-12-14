import ArrayBufferConverter from '../js/ArrayBufferConverter.js';
import getBuffer from '../js/arrayBufferFunc.js';

test('testing get Data', () => {
  const converter = new ArrayBufferConverter();
  converter.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  const data = converter.getBuffer();
  const getBufferFunc = getBuffer();
  expect(data).toEqual(getBufferFunc);
});

test('testing toString method', () => {
  const converter = new ArrayBufferConverter();
  converter.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  const data = converter.getBuffer();
  const dataStr = converter.toString(data);
  expect(dataStr).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
