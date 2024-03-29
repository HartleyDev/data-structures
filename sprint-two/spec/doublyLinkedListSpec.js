describe('doublyLinkedList', function(){

  beforeEach(function(){
    doublyLinkedList = makeLinkedList();
  });

  it('has add addToTail, removeHead, contains, removeTail, addToHead functions', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property("head");
    expect(doublyLinkedList).to.have.property("tail");
  });

  it('should designate a new tail when new nodes are added', function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    expect(doublyLinkedList.tail.previous.value).to.equal(4);
  });

  describe('removeHead', function(){
      it('should remove the head from the list when removeHead is called', function(){
      doublyLinkedList.addToTail(4);
      doublyLinkedList.addToTail(5);
      expect(doublyLinkedList.head.value).to.equal(4);
      doublyLinkedList.removeHead();
      expect(doublyLinkedList.head.value).to.equal(5);
      expect(doublyLinkedList.head.previous).to.equal(null);
    });

    it("should return the value of the former head when removeHead is called", function(){
      doublyLinkedList.addToTail(4);
      expect(doublyLinkedList.removeHead()).to.equal(4);
    });
  });

  describe('contains', function() {

    it("should contain a value that was added", function(){
      doublyLinkedList.addToTail(4);
      doublyLinkedList.addToTail(5);
      expect(doublyLinkedList.contains(4)).to.equal(true);
      expect(doublyLinkedList.contains(5)).to.equal(true);
      expect(doublyLinkedList.contains(6)).to.equal(false);
    });

    it('should not contain a value that was removed', function(){
      doublyLinkedList.addToTail(4);
      doublyLinkedList.addToTail(5);
      doublyLinkedList.removeHead();
      expect(doublyLinkedList.contains(4)).to.equal(false);
    });

  });

  describe('addToHead', function() {

    it('should add to an empty list', function(){
      doublyLinkedList.addToHead(4);
      expect(doublyLinkedList.head.value).to.equal(4);
    });
    it('should add to an list with one', function(){
      doublyLinkedList.addToTail(4);
      doublyLinkedList.addToHead(5);
      expect(doublyLinkedList.head.value).to.equal(5);
    });
    it('should add to an list with many', function(){
      doublyLinkedList.addToTail(3);
      doublyLinkedList.addToTail(4);
      doublyLinkedList.addToHead(5);
      expect(doublyLinkedList.head.value).to.equal(5);
    });

  });

  describe('removeTail', function(){

    it('removes the tail when called', function(){
      doublyLinkedList.addToHead(3);
      expect(doublyLinkedList.removeTail()).to.equal(3);
    });

    it('returns the value of the previous tail', function(){
      doublyLinkedList.addToHead(3);
      doublyLinkedList.addToHead(4);
      expect(doublyLinkedList.removeTail()).to.equal(3);
    });

    it('new tail points to nothing', function(){
      doublyLinkedList.addToTail(4);
      doublyLinkedList.addToTail(5);
      doublyLinkedList.removeTail();
      expect(doublyLinkedList.tail.next).to.equal(null);
    });

  });

});
