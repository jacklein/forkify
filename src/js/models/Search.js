import axios from 'axios';
// https://www.food2fork.com/api/search
// first key -- b08a53e58f5e3770c2c099c3673a71e2
// teacher key -- 462b1cc8d4f2730081462fbc65136320

export default class Search{
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'b08a53e58f5e3770c2c099c3673a71e2';
    try {
      const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
      this.results = res.data.recipes;
      //console.log(this.result);
    } catch(err) {
      alert(err);
    }
  }
}
