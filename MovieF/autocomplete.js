const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  fetchData,
}) => {
  root.innerHTML = `
    <label><b>Search</b></label>
    <input class ="input"/>
    <div class ="dropdown">
    <div class = "dropdown-menu">
    <div class = "dropdown-content results"></div>
    </div>
    </div>
`;

  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

  const onInput = debounce(async (e) => {
    const items = await fetchData(e.target.value);
    if (!items.length) {
      dropdown.classList.remove("is-active");
      return;
    }

    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");
    for (let item of items) {
      const anchor = document.createElement("a");

      anchor.classList.add("dropdown-item");
      anchor.innerHTML = renderOption(item);

      anchor.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = "";
        onOptionSelect(item);
      });
      resultsWrapper.appendChild(anchor);
    }
  }, 1000);

  input.addEventListener("input", onInput);

  document.addEventListener("click", (e) => {
    if (!root.contains(e.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
