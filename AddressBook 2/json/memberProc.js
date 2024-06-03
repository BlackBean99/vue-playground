const fs = require('fs');

let memberDao = {}; // Data Access Object

// insert
memberDao.insert = function (name, age, phone, address, memo) {
    let str = fs.readFileSync(__dirname + "/member.json", "utf-8");

    let member = [];
    if (str !== undefined && str !== '') {
        member = JSON.parse(str);
    }

    let addmember = { "name": name, "age": age, "phone": phone, "address": address, "memo": memo };
    member.push(addmember);

    fs.writeFileSync(__dirname + "/member.json", JSON.stringify(member, null, 1));

    return "추가완료";
}

// delete
memberDao.delete = function (name) {
    let str = fs.readFileSync(__dirname + "/member.json", "utf-8");

    let member = [];
    if (str !== undefined && str !== '') {
        member = JSON.parse(str);
    }

    // 이름이 있는지?
    let findIndex = -1;
    member.forEach((mem, index) => {
        if(name === mem.name){
            findIndex = index;            
        }
    });

    if(findIndex !== -1) {
        member.splice(findIndex, 1);
        fs.writeFileSync(__dirname + "/member.json", JSON.stringify(member, null, 1));
    }    

    return findIndex;
}

// select
memberDao.select = function (name) {
    let str = fs.readFileSync(__dirname + "/member.json", "utf-8");

    let member = [];
    if (str !== undefined && str !== '') {
        member = JSON.parse(str);
    }

    // 1.
/*  let selectMember = [];
    member.forEach((mem)=>{
        if(name === mem.name){
            selectMember.push(mem);
        }
    })*/

    // 2.
    const selectMember = member.filter((mem)=>{
        return name === mem.name;
    })

    return selectMember;
}

// update
memberDao.update = function (name) {

}

module.exports = memberDao;