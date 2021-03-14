import "./styles.css";

const onclickAdd = () => {
  // Textboxの値を初期化し、値を初期化する
  const inputText = document.getElementById("add-text").value;
  // alert(inputText);
  document.getElementById("add-text").value = "";

  // JS上からHTMLのDOMを生成して差し込む;

  // divの生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  // listの生成
  // createElement関数はDOMの生成
  const li = document.createElement("li");
  li.innerText = inputText;
  console.log(li);

  div.appendChild(li);
  console.log(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// divの子要素にliを入れる
document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
