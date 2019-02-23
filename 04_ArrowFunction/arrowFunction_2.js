// ES5 - this passed off
let teamA = {
  teamName: "A team",
  teamMembers: ["Jane", "Bill"],
  teamSummary: function() {
    return this.teamMembers.map(function(member) {
      return `${member} is on ${this.teamName}`;
    });
  }
};
console.log(teamA.teamSummary());
// [ 'Jane is on undefined', 'Bill is on undefined' ]

// ES5 - bind(this)
const teamB = {
  teamName: "B team",
  teamMembers: ["Jane", "Bill"],
  teamSummary: function() {
    return this.teamMembers.map(
      function(member) {
        return `${member} is on ${this.teamName}`;
      }.bind(this)
      // use bind(this)
    );
  }
};
console.log(teamB.teamSummary());
// [ 'Jane is on B team', 'Bill is on B team' ]

// ES5 - assign this to a variable
const teamC = {
  teamName: "C team",
  teamMembers: ["Jane", "Bill"],
  teamSummary: function() {
    // assign this to a variable
    const self = this;
    return this.teamMembers.map(function(member) {
      return `${member} is on ${self.teamName}`;
    });
  }
};
console.log(teamC.teamSummary());
// ["Jane is on C team", "Bill is on C team"];

// ES6 - arrow this
// read more: https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/arrow_function.html
const teamD = {
  teamName: "D team",
  teamMembers: ["Jane", "Bill"],
  teamSummary: function() {
    return this.teamMembers.map(member => `${member} is on ${this.teamName}`);
  }
};
console.log(teamD.teamSummary());
// [ 'Jane is on D team', 'Bill is on D team' ]

// ES6 - arrow this (exception)
// read more : https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/arrow_function.html#%E4%B8%8D%E5%8F%AF%E4%BD%BF%E7%94%A8%E7%AE%AD%E9%A0%AD%E5%87%BD%E5%BC%8F%E7%9A%84%E6%83%85%E6%B3%81
const profile = {
  name: "Alex",
  getName: () => this.name
};
console.log(profile.getName());

const profile2 = {
  name: "Alex",
  getName: function() {
    return this.name;
  }
};
console.log(profile2.getName());
