//First task
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let firstRowCount = 0,
        secondRowCount = 0;
    for(let i = 0; i < firstRow.length; i++) {
        if(firstRow.charAt(i) == 'а') firstRowCount++;
    }
    for(let i = 0; i < secondRow.length; i++) {
        if(secondRow.charAt(i) == 'а') secondRowCount++;
    }
    return firstRowCount > secondRowCount ? firstRow : secondRow;
}

console.log(getRow(firstRow, secondRow)); // мама мыла раму

//Second task
function formattedPhone(phone) {
    correcrPhone = '';
    for(let i = 0; i < phone.length; i++) {
        switch(i) {
            case 2:
                correcrPhone += ' (' + phone.charAt(i);
                break;
            case 5:
                correcrPhone += ') ' + phone.charAt(i);
                break;
            case 8:
            case 10:
                correcrPhone += '-' + phone.charAt(i);
                break;
            default:
                correcrPhone += phone.charAt(i);
        }
    }
    return correcrPhone;
}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90