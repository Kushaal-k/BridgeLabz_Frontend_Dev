class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  render() {
    let html = "<form id='dynamicForm'>";
    this.fields.forEach(f => {
      html += `<label>${f.label}</label><br>`;
      html += `<input type="${f.type}" name="${f.label}"><br><br>`;
    });
    html += `<button type="submit">Submit</button></form>`;
    document.getElementById("formContainer").innerHTML = html;

    document.getElementById("dynamicForm").addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(this.getFormData());
    });
  }

  getFormData() {
    let data = {};
    let inputs = document.querySelectorAll("#dynamicForm input");
    inputs.forEach(input => data[input.name] = input.value);
    return data;
  }
}

let fields = [
  {type: "text", label: "Username"},
  {type: "email", label: "Email"},
  {type: "password", label: "Password"}
];

let form = new FormBuilder(fields);
form.render();