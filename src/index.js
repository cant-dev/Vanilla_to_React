import "./styles.css";

const onclickAdd = () => {
  // Textboxの値を初期化し、値を初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // divの生成
  const div = document.createElement("div");
  div.className = "list-row";
  // listの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了ボタンの親要素を取得
    const addTarget = completeButton.parentNode;

    // 取得した親要素の子要素のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグの生成
    document.createElement("li");
    li.innerText = text;

    // 戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // divの子要素に各要素を追加
    div.appendChild(li);
    div.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンの親要素divを未完了要素から削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

// 未完了リストから指定の要素を削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// divの子要素にliを入れる
document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());

// 解釈
// JS上からHTMLのDOMを生成して差し込む;
// イベント毎に動作を定義していく
// DOMに対するイベントを定義して、その中の関数は別途定義する。
// 関数定義の中で、DOMの生成を追加しておき、さらにイベントを用意しておく。
// 個別のエレメントを生成し、最終的にリストのclassにネスト(追加)することで要素を生成するフローを作る。
// JS上からHTMLのDOMを生成して差し込む;
