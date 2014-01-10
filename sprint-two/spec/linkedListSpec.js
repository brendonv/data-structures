
var assert = chai.assert;

describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it("should have methods named 'addToHead', and 'removeTail'", function() {
    expect(linkedList.addToHead).to.be.a('function');
    expect(linkedList.removeTail).to.be.a('function');
  });

  it("should add a value to the end of the list", function() {
    linkedList.addToHead(5);
    expect(linkedList.head.value).to.equal(5);
    linkedList.addToHead(6);
    expect(linkedList.head.value).to.equal(6);
  });

  it("should designate the head value to the next value", function() {
    linkedList.addToHead(5);
    expect(linkedList.head.value).to.equal(5);
    linkedList.addToHead(6);
    expect(linkedList.head.next).to.equal(linkedList.head.next);
  });

  it("should designate a new tail when new nodes are added", function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should remove the tail from the list when removeTail is called", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeTail();
    expect(linkedList.tail.next).to.equal(null);
    expect(linkedList.tail.value).to.equal(4);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    assert.isTrue(linkedList.contains(4));
    assert.isTrue(linkedList.contains(5));
    assert.isFalse(linkedList.contains(6));
  });

  it("should not contain a value that was removed", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    assert.isFalse(linkedList.contains(4));
  });

  // add more tests here to test the functionality of linkedList
});
