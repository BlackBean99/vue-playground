const fs = require('fs');


let memberCrud = {};

// id check
memberCrud.idcheck = (id) => {
    let data = fs.readFileSync('./file/member.json', 'utf-8');
    let members = JSON.parse(data);
    let result = members.filter((item) => {
        return item.id === id;
    });
    return result;
}
// account 등록
memberCrud.insert = (member) => {
    let data = fs.readFileSync('./file/member.json', 'utf-8');
    let members = JSON.parse(data);
    members.push(member);
    fs.writeFileSync('./file/member.json', JSON.stringify(members));
    return members;
}
// id & pw check
memberCrud.login = (id, pw) => {
    let data = fs.readFileSync('./file/member.json', 'utf-8');
    let members = JSON.parse(data);
    let result = members.filter((item) => {
        return item.id === id && item.pw === pw;
    });
    return result;
}