/**
 * const、let等の変数宣言
 */
/**
 * val変数宣言
 */
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

/**
 * let変数宣言
 */
let val2 = "let変数";
console.log(val2);

// letは上書き可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);

/**
 * const変数宣言
 */
const val3 = "const変数";
console.log(val3);

// const変数は上書き不可;
// const val3 = "const変数を上書き";

// const変数は再宣言不可;
// const val3 = "const変数を再宣言";

/**
 * constで定義したオブジェクト
 */
const val4 = {
  name: "me",
  age: 55,
};
console.log(val4);

// プロパティの追加、変更が可能;
val4.age = 45;
console.log(val4);

val4.address = "nagano";
console.log(val4);

/**
 * constで定義した配列
 */
const val5 = ["dog", "cat"];
console.log(val5);

// 配列の追加、変更が可能;
val5[0] = "bird";
console.log(val5);

val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "me";
const age = 55;

//　従来の方法 +で結合
const messeage1 =
  "messeage1 私の名前は" + name + "です。" + "年齢は" + age + "歳です。";
console.log(messeage1);

// テンプレート文字列　``内で変数を${}
const messeage2 = `messeage2 私の名前は${name}です。年齢は${age}歳です。`;
console.log(messeage2);

/**
 * アロー関数
 */
// 従来の書き方
function func1(str) {
  return str;
}
console.log(func1("func1の引数です。"));

// const変数にファンクションを定義
const func2 = function (str) {
  return str;
};
console.log(func2("func2の引数です。"));

// アロー関数
// functionはいらない
// =>が矢印にみえるためアロー関数
// 引数の()無しで記載可（自動で補完される）
const func3 = (str) => {
  return str;
};
console.log(func3("func3の引数です。"));

// 処理内容が単一式の場合、１行で記載できる
const func4 = (str) => str;
console.log(func4("func4の引数です。"));

// 二つの引数
const func5 = (num1, num2) => num1 + num2;
console.log(func5(10, 20));

/**
 * 分割代入
 */
// オブジェクトの場合
const myProfile = {
  myname: "me",
  myage: 55,
};
// 通常の書き方
const message3 = `messege3 私の名前は${myProfile.myname}です。年齢は${myProfile.myage}歳です。`;
console.log(message3);

// オブジェクトの分割代入（オブジェクトからプロパティを抜き出す）
const { myname, myage } = myProfile;
const message4 = `message4 私の名前は${myname}です。年齢は${myage}歳です。`;
console.log(message4);

// 配列の場合
const myProfile1 = ["me", 55];

// 通常の書き方
const message5 = `messege5 私の名前は${myProfile1[0]}です。年齢は${myProfile1[1]}歳です。`;
console.log(message5);

// 配列の分割代入（配列の順番に抜き出す）
const [myname1, myage1] = myProfile1;
const message6 = `messege6 私の名前は${myname1}です。年齢は${myage1}歳です。`;
console.log(message6);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "me") => console.log(`こんにちは。${name}さん。`);
sayHello();
sayHello("you");

/**
 * スプレッド構文
 */

// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
// ...arr1 配列の要素が順番に取得される
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// 配列をまとめて取得
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(...arr3);

// 配列のコピー
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

// 配列の結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);

//配列を代入し、値を変更すると参照先もかわってしまう
const arr8 = arr4;
console.log(arr8);
arr8[0] = 100;
console.log(arr8);
console.log(arr4);

// スプレッド構文だと変わらない（値渡し）
const arr9 = [...arr5];
console.log(arr9);
arr9[0] = 300;
console.log(arr9);
console.log(arr5);

/**
 * mapを使った配列の処理
 */
const nameArr = ["田中", "山田", "佐藤"];

// forを使った書き方
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

// mapを使った書き方
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

// mapを使った書き方
nameArr.map((name) => console.log(name));

/**
 * filterを使った配列の処理
 */
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

// forを使った書き方
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です`);
}

// mapを使った書き方
nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です`));

const newNameArr = nameArr.map((name) => {
  if (name === "佐藤") {
    return name;
  } else {
    return `${name}くん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
// 条件　？　条件がtrueの時　：　条件がfalseの時
const val11 = 1 < 0 ? "trueです" : "falseです";
console.log(val11);

const num = "1,300";
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値ではありません";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内";
};
console.log(checkSum(40, 70));

/**
 * 論理演算しの本当の意味　&& ||
 */
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log(`|| ${flag1}か${flag2}はtrueです`);
}

if (flag1 && flag2) {
  console.log(`&& ${flag1}も${flag2}もtrueです`);
}

// || は左側がfalseなら右側を返す
const num11 = null;
const fee = num11 || "金額未設定です";
console.log(fee);

// && は左側がtrueなら右側を返す
const num22 = 100;
const fee2 = num22 && "何か設定されました";
console.log(fee2);
