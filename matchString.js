for (let phrase of business_names) {
  if(phrase.length !== phrase.replaceAll(new RegExp(`(${searchTerm})`,"g"), "").length){
      console.log(phrase);
  }
}