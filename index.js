class Formatter {
  //add static methods here
  static methodName() {
        console.log('My method is static!');
    }
}
static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    const checkArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    let returnString = string.split(" ").map((word, index) => {
      if (index === 0) {
        return this.capitalize(word);
      } else {
        if (!checkArray.includes(word)) {
          return this.capitalize(word);
        } else {
          return word;
        }
      }
    })
    return returnString.join(" ");
  }
} 