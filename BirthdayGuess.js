<html>
<head>
  <title>Arithmetic operators</title>
</head>
<body>
  <h1>Birthday Guessing Game</h1>
  <p>
  <ul>
    <li>Enter the number 7</li>
    <li>Multiply by the month of your birth</li>
    <li>Subtract 1</li>
    <li>Multiply by 13</li>
    <li>Add the day of your birth</li>
    <li>Add 3</li>
    <li>Multiply by 11</li>
    <li>Subtract the month of your birth</li>
    <li>Subtract the day of your birth</li>
    <li>Divide by 10</li>
    <li>Add 11</li>
    <li>Divide by 100</li>
   </ul>
   </p>
   <script>
     var numberSeven = Number(prompt('Enter the number 7'));
     var birthMonth = Number(prompt('Enter your birth month'));
     var calculation = numberSeven * birthMonth;
     calculation = calculation - 1;
     calculation = calculation * 13;
     var birthDay = Number(prompt('Enter the day of your birth'));
     calculation = calculation + birthDay;
     calculation = calculation + 3;
     calculation = calculation * 11
     calculation = calculation - birthMonth;
     calculation = calculation - birthDay;
     calculation = calculation / 10;
     calculation = calculation + 11;
     calculation = calculation / 100;

     document.write("Your birthday is " + calculation);
     </script>

</body>
</html>
