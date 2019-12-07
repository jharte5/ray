const Ray = () => {
  return {
    length: 0,
    push: function (value){
      this[this.length] = value
      this.length ++
    },
    pop: function () {
      const removed = this[this.length-1]
      delete this[this.length-1]
      this.length --
      return removed
    },
    unshift: function (value) {
      for (let i = this.length; i>=0; i--){
        this[i] = this[i-1]
      };
      this[0] = value
      this.length++
    },
    shift: function () {
      const removed = this[0]
      for (let i = 0; i<this.length; i++) {
        this[i] = this[i+1]
      };
      delete this[this.length-1]
      this.length--
      return removed
    },
  } 
}

module.exports = {
  Ray,
}