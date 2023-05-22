const path = require('path');
const fs = require('fs');
const dataFilePath = path.resolve(__dirname, 'data.json');

exports.postLogin = (username, password) => {
  const users = JSON.parse(fs.readFileSync(dataFilePath));

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ message: '로그인 성공' });
  } else {
    res.status(401).json({ message: '로그인 실패' });
  }
}

exports.postLogOut = (id) => {
  res.json({ message: "로그아웃 성공" })
}

exports.postRegister = (username, password) => {
  const users = JSON.parse(fs.readFileSync(dataFilePath));

  const existingUser = users.find(u => u.username === username);

  if (existingUser) {
    res.status(400).json({ message: '이미 존재하는 사용자입니다.' });
  } else {
    const newUser = { id: Date.now(), username, password };
    users.push(newUser);
    fs.writeFileSync(dataFilePath, JSON.stringify(users));
    res.json({ message: '회원가입 성공', user: newUser });
  }
}

exports.deleteAccount = (id) => {
  const users = JSON.parse(fs.readFileSync(dataFilePath));

  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex === -1) {
    res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
  } else {
    users.splice(userIndex, 1);
    fs.writeFileSync(dataFilePath, JSON.stringify(users));
    res.json({ message: '회원탈퇴 성공' });
  }

}