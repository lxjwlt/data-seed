'use strict';

const {wrap} = require('../util/hooks');
const random = require('../util/random');
const arr = require('../util/arr');
const wordSeed = require('./word');

const lastName = {
    cn: [
        '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '楮', '卫', '蒋', '沈', 
        '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金',
        '魏', '陶', '姜', '戚', '谢', '邹', '柏', '水', '窦', '章', '云', '苏', '潘',
        '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', 
        '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', 
        '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', 
        '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', 
        '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', 
        '阮', '蓝', '闽', '席', '季', '麻', '强', '贾', '路', '娄', '危', '江', '童', '颜', '郭', '梅', '盛', '林', 
        '刁', '锺', '徐', '丘', '骆', '高', '夏', '蔡', '田', '樊', '胡', '凌', '霍', '虞', '万', '支', '柯', '昝'
    ],
    en: [
        'Baker', 'Hunter', 'Carter', 'Smith', 'Cook', 'Miller', 'Turner',
        'London', 'Hall', 'Kent', 'Mill', 'Brook', 'Churchill', 'Hill', 'Lake',
        'Field', 'Green', 'Wood', 'Well', 'Brown', 'White', 'Longman', 'Short',
        'Sharp', 'Hard', 'Yonng', 'Sterling', 'Back', 'Hand', 'Finger', 'Brain',
        'Bird', 'Bull', 'Fox', 'Hawk', 'Bush', 'Stock', 'Cotton', 'Reed', 'George',
        'Henry', 'David', 'Clinton', 'Macadam', 'Arthur'
    ]
};

const firstName = {
    en: [
        'Abe', 'Abel', 'Abner', 'Abraham', 'Allen', 'Adam', 'Adolf', 'Albin', 'Alden',
        'Baldwin', 'Bertran', 'Bryan', 'Barnaby', 'Barry', 'Bartholomew',
        'Caesar', 'Calvin', 'Carlton', 'Cary', 'Christian', 'Carl', 'Cecil', 'Cedric',
        'Dexter', 'Derby', 'Dale', 'Daniel', 'Dan', 'Danny', 'Darrell', 'Darren',
        'Edwin', 'Eliot', 'Elmer', 'Elroy', 'Emlyn', 'Enoch', 'Eric', 'Ernest',
        'Freddie', 'Felix', 'Ferdinand', 'Fergus', 'Floyd', 'Francis', 'Frank',
        'Gabriel', 'Gareth', 'Gary', 'Gavin', 'Gene', 'Geoffrey', 'Geoff', 'George',
        'Humphry', 'Hal', 'Hank', 'Harold', 'Harry', 'Henry', 'Herbert', 'Horace',
        'Ivan', 'Ivor', 'Ira', 'Irving', 'Irwin', 'Jarvis', 'Jean', 'Job', 'Jack',
        'Jacob', 'Jake', 'James', 'Jamie', 'Jason', 'Jasper', 'Jed', 'Jeff',
        'Kenny', 'Kent', 'Kevin', 'Kit', 'Kev', 'Kirk',
        'Laban', 'Lee', 'Lance', 'Larry', 'Laurence', 'Len', 'Lenny', 'Leo',
        'Malcolm', 'Mark', 'Martin', 'Malachi', 'Marshall', 'Marvin', 'Marty',
        'Na', 'Nat', 'Nathan', 'Nahum', 'Napoleon', 'Nelson', 'Newton', 'Noah',
        'Ollie', 'Oliver', 'Oscar', 'Oswald', 'Owen', 'Oz', 'Ozzie', 'Octavius',
        'Paddy', 'Pat', 'Patrick', 'Paul', 'Percy', 'Pete', 'Peter', 'Phil',
        'Quentin', 'Quincy', 'Rene', 'Reuben', 'Ralph', 'Randolf', 'Randy', 'Raphael',
        'Robby', 'Robert', 'Robin', 'Rod', 'Roderick', 'Rodney', 'Rodge', 'Roger', 'Ronald',
        'Ron', 'Ronnie', 'Rory', 'Roy', 'Rudolph', 'Rufus', 'Rupert', 'Russ', 'Reuel',
        'Sebastian', 'Sid', 'Sidney', 'Simon', 'Stan', 'Stanley', 'Steve', 'Steven',
        'Tom', 'Tommy', 'Tony', 'Theobald', 'Theodoric', 'Terence', 'Trevor', 'Troy',
        'Urban', 'Van', 'Vivian', 'Vic', 'Victor', 'Vince', 'Vincent', 'Viv',
        'Wallace', 'Wally', 'Walter', 'Warren', 'Wayne', 'Wesley', 'Winston',
        'Will', 'Wilbur', 'Wilfred', 'Willy', 'William', 'Willis'
    ]
};

let name = wrap(() => name.en());

name.en = wrap(() => {
    return name.en.firstName() + ' ' + name.en.lastName();
});

name.en.firstName = wrap(() => random.array(firstName.en));

name.en.lastName = wrap(() => random.array(lastName.en));

name.cn = wrap(() => {
    return name.cn.lastName() + name.cn.firstName();
});

name.cn.firstName = wrap(() => {
    return arr(random.int(1, 2), () => wordSeed.cn()).join('');
});

name.cn.lastName = wrap(() => random.array(lastName.cn));

module.exports = name;
