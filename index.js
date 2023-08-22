function createParagraph(){
    var wordOne = document.getElementById('wordOne').value;
    var wordTwo = document.getElementById('wordTwo').value;
    var wordThree = document.getElementById('wordThree').value;
    var wordFour = document.getElementById('wordFour').value;
    var wordFive = document.getElementById('wordFive').value;
    var wordSix = document.getElementById('wordSix').value;
    var wordSeven = document.getElementById('wordSeven').value;
    var wordEight = document.getElementById('wordEight').value;
    var wordNine = document.getElementById('wordNine').value;
    var wordTen = document.getElementById('wordTen').value;
    var wordEleven = document.getElementById('wordEleven').value;
    var wordTwelve = document.getElementById('wordTwelve').value;
    var wordThirteen = document.getElementById('wordThirteen').value;
    var wordFourteen= document.getElementById('wordFourteen').value;
    var wordFifteen = document.getElementById('wordFifteen').value;
    var wordSixteen = document.getElementById('wordSixteen').value;
    var wordSeventeen = document.getElementById('wordSeventeen').value;
    var wordEighteen = document.getElementById('wordEighteen').value;
//     <p> Our dining (blank1) used to be a war (blank)2.
// I thought the battles about correct table (blank3) would
// never end. It was us kids versus Mom, and it seemed
// like a fight that would last to the (blank4) end.
// But tonight Dad finally declared a/an (blank5) truce, and we negotiated
// a/an (blank6) peace (blank7). Mom promised
// to no longer get (blank8) upset and shoot us the dirty
// (blank9) and make (blank10) remarks when
// we do (blank11) things she doesn't like.
// We in turn agreed to:
// <ol> <h2 class="list">
// <li>Use napkins to wipe our (blank12)and not our (blank13).</li>
// <li>Keep our (blank14) off the table.</li>
// <li>Not use our (blank15) to pick up (blank16) from our plates-except for sandwhiches and pieces of (blank17).</li>
// <li>Never talk with food in our (blank).</li>
// </h2>
// </ol>
// </p>
    var paragraph = '<p>' + 'Our dining ' + wordOne + ' used to be a war ' + wordTwo + ' . I thought the battles about correct table ' + wordThree + ' would never end. It was us kids versus Mom, and it seemed like a fight that would last to the ' + wordFour + ' end. But tonight Dad finally declared a/an ' + wordFive + ' truce, and we negotiated a/an ' + wordSix + ' peace ' + wordSeven + ' . Mom promised to no longer get ' + wordEight + ' upset and shoot us the dirty ' + wordNine + ' and make ' + wordTen + ' remarks when we do ' + wordEleven + " things she doesn't like. We in turn agreed to:" + '<li>' + "Use napkins to wipe our " + wordTwelve + ' and not our ' + wordThirteen + '.' + '</li>' + '<li>' + ' Keep our ' + wordFourteen + ' off the table. ' + '</li>' + '<li>' + 'Not use our ' +  wordFifteen + ' to pick up ' + wordSixteen + ' from our plates-except for sandwhiches and pieces of ' + wordSeventeen + '.' + '</li>' + '<li>'  +' Never talk with food in our ' + wordEighteen + '.' + '</li>' + '</p>'
        
    document.getElementById('answer').innerHTML = paragraph
}