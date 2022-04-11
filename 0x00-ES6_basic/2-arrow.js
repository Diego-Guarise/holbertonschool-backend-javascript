export default function getNeighborhoodsList() { 
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeghborhood = add = (newNeighborhood) => { return self.sanFranciscoNeighborhoods.push(newNeighborhood);
  };
}

