$(document).ready(function() {
  //NOTE => Prepending "https://cors-anywhere.herokuapp.com/" to the given API data for github security allowance for http requests.
  $.get(
    "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",
    function (data, status) {
      for (let i = 0; i < data.length; i++) {
        createDataTable(data[i]);
      }
    }
  );

  let createDataTable = (data) => {
    // let row = $('<tr class="data-row"></tr>')
    let row = $(
      ` 
      <tr class="data-row">
        <td class="column1">` +
        data.id +
        `</td>
        <td class="column2">` +
        data.firstName +
        `</td>
        <td class="column3">` +
        data.lastName +
        `</td>
        <td class="column4">` +
        data.email +
        `</td>
        <td class="column5">` +
        data.phone +
        `</td>
      </tr>
      `
    );

    $("#table-body").append(row);

    row.click(function () {
      showContent(data);
      $(".data-row").removeClass("active");
      row.addClass("active");
    });
  };

  let showContent = (data) => {
    const { firstName, lastName, address, description } = data;
    const { streetAddress, city, state, zip } = address;
    $("#info-content").html(
      `<div><b>User selected:</b> ${firstName} ${lastName}</div>
          <div>
              <b>Description: </b>
              <textarea cols="50" rows="5" readonly>
                  ${description}
              </textarea>
          </div>
          <div><b>Address:</b> ${streetAddress} </div>
          <div><b>City:</b> ${city} </div>
          <div><b>State:</b> ${state} </div>
          <div><b>Zip:</b> ${zip} </div>
      </div>`
    );
  };

  $("#search-box").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table-body tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
})

