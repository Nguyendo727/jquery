$(".btn_modal1").on("click", () => {
  console.log($(document));

  // Hide the Modal
  $(".btn_modal1").click(function () {
    $("#myModal1").modal("show");
  });
});

let data = [
  {
    name: "Nguyên",
    Age: 22,
    Fullname: "Đỗ Nguyên",
    job: "Coder",
    address: "Hưng Yên",
  },
  {
    name: "Huyền",
    Age: 25,
    Fullname: "Đỗ Huyền",
    job: "Tự do",
    address: "Hưng Yên",
  },
];
let hieuung = `
<div id="hieuung">
   <span class="sk-circle1 sk-child"></span>
   <span class="sk-circle2 sk-child"></span>
   <span class="sk-circle3 sk-child"></span>
   <span class="sk-circle4 sk-child"></span>
   <span class="sk-circle5 sk-child"></span>
   <span class="sk-circle6 sk-child"></span>
   <span class="sk-circle7 sk-child"></span>
   <span class="sk-circle8 sk-child"></span>
   <span class="sk-circle9 sk-child"></span>
   <span class="sk-circle10 sk-child"></span>
   <span class="sk-circle11 sk-child"></span>
   <span class="sk-circle12 sk-child"></span>
</div>`;

let editdata = ` 
<button type="button" class="btn btn-primary btn_editdata_config" data-toggle="modal" data-target="#myModal"">
    Edit Content
</button>
<div class="modal fade" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Edit data</h4>
                <button type="button" class="close" data-dismiss="modal">×</button>
            </div>
            <!-- Modal body -->
            <div class="modal-body">
            <table>
            <tr>
                <td><label for="">Name </label></td>
                <td><input type="text" class="ipn_name1"></td>
            </tr>
            <tr>
                <td><label for="">Age </label></td>
                <td><input type="number" class="ipn_age1"></td>
            </tr>
            <tr>
                <td><label for="">Fullname </label></td>
                <td><input type="text" class="ipn_Fullname1"></td>
            </tr>
            <tr>
                <td><label for="">Job </label></td>
                <td><input type="text" class="ipn_job1"></td>
            </tr>
            <tr>
                <td><label for="">Address</label></td>
                <td><input type="text" class="ipn_Address1"></td>
            </tr>
        </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn_update_edit" data-dismiss="modal">Update</button>
            </div>
        </div>
    </div>
</div>`;
let deletedata = `<button type="button" class="btn btn-primary btn_delete_data">Delete Data</button>`;
function render() {
  data.map((ele, index) => {
    let div =
      `
      <tr>
          <td>` +
      index +
      `</td>
          <td>${ele.name}</td>
          <td>${ele.Age}</td>
          <td>${ele.Fullname}</td>
          <td>${ele.job}</td>
          <td>${ele.address}</td>
          <td>` +
      editdata +
      deletedata +
      `</td>
      </tr>
      `;

    $(".table-data").append(div);
    //delete data
    $($(".btn_delete_data")[index]).on("click", () => {
      data.splice(index, 1);
      $(".table-data").html("");
      render();
    });
    // modifi data
    $($(".btn_editdata_config")[index]).on("click", () => {
      $(".ipn_name1").val(ele.name);
      $(".ipn_age1").val(ele.Age);
      $(".ipn_Fullname1").val(ele.Fullname);
      $(".ipn_job1").val(ele.job);
      $(".ipn_Address1").val(ele.address);
      $(".btn_update_edit").off("click");
      $(".btn_update_edit").on("click", () => {
        let newdata = {
          name: $(".ipn_name1").val(),
          Age: $(".ipn_age1").val(),
          Fullname: $(".ipn_Fullname1").val(),
          job: $(".ipn_job1").val(),
          address: $(".ipn_Address1").val(),
        };
        data.splice(index, 1, newdata);
        setTimeout(() => {
          $(".table-data").html("");
          render();
          $("#myModal").attr("style", "display:none;");
          $("#hieuung").attr("id", "hieuung Hide");
          console.log(161);
        }, 1000);
        $("body").append(hieuung);
      });
    });
  });
}

render();

function add(params) {
  let newdata = {
    name: $(".ipn_name").val(),
    Age: $(".ipn_age").val(),
    Fullname: $(".ipn_Fullname").val(),
    job: $(".ipn_job").val(),
    address: $(".ipn_Address").val(),
  };
  data.push(newdata);
  setTimeout(() => {
    $(".table-data").html("");
    render();
    $("#myModal1").attr("style", "display:none;");
    $("#myModal1").attr("class", "modal fade");
    $("#hieuung").attr("id", "hieuung Hide");
    console.log(161);
  }, 1000);
  $("body").append(hieuung);
}

// function showhieuung(params) {
//   setTimeout(() => {
//     $("#hieuung").attr("id", "hieuung Hide");
//     console.log(168);
//   }, 5000);
//   $("body").append(hieuung);
// }

// showhieuung();
