const input = document.querySelector('input[type="text"]');
const list = document.querySelector("ul");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addProduct();
  }
});

function addProduct() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const label = document.createElement("label");
  label.textContent = text;

  checkbox.addEventListener("change", () => {
    label.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  li.append(checkbox, label);
  list.appendChild(li);
  input.value = "";
}

window.addProduct = addProduct;
