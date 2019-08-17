class Observable {
     constructor() {
    this.observers = [];
    this.state = null;
    
  }
  addObserver(observer) {
      
    this.observers.push(observer);
  }
  deleteObserver(observer) {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }
  notifyObservers() {
    this.observers.forEach(observer => {
      observer.updateObserver();
    });
  }

  publish(state) {
    this.state = state
    this.notifyObservers()
  }
}
module.exports = Observable