var languagePreference = prompt("Enter Your Language");
switch (languagePreference) {
  case "English":
    console.log("Hello");
    break;

  case "Spanish":
    console.log("Hola");
    break;

  case "German":
    console.log("Guten Tag");
    break;

  case "French":
   console.log("Bon Jour!");
   break;
  default:

  console.log("I'm so sorry me no speak" + languagePreference + "!");

}
