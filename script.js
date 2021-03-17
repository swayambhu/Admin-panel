$(document).ready(function() {
  //NOTE => Prepending "https://cors-anywhere.herokuapp.com/" to the given API data for github security allowance for http requests.
//   $.get(
//     "https://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",
//     function (data, status) {
//       for (let i = 0; i < data.length; i++) {
//         createDataTable(data[i]);
//       }
//     }
//   );

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
  
  //THE was not loading because of "HTTP" request in API
    let data = [
      {
        id: 897,
        firstName: "LaRoyce",
        lastName: "Knost",
        email: "AMichalowski@aenean.io",
        phone: "(169)969-3372",
        address: {
          streetAddress: "1514 Sagittis St",
          city: "Fe Warren Afb",
          state: "WV",
          zip: "95465",
        },
        description:
          "adipiscing porta suspendisse vestibulum egestas at orci amet tincidunt etiam porttitor malesuada ac sed vestibulum sed in sit dolor magna tortor ac nec mi porttitor elit hendrerit pharetra augue tincidunt sit dolor",
      },
      {
        id: 410,
        firstName: "Vasilis",
        lastName: "Keltner",
        email: "TAtanasov@dolor.gov",
        phone: "(442)369-4818",
        address: {
          streetAddress: "3388 Fringilla St",
          city: "St Augustine",
          state: "NE",
          zip: "62337",
        },
        description:
          "quis tincidunt sed sapien id aenean eros sed sollicitudin pulvinar vitae et morbi aliquam magna tincidunt tincidunt vestibulum rutrum magna mattis vitae non libero sollicitudin odio ipsum amet sapien sed sed tellus",
      },
      {
        id: 779,
        firstName: "Bobby",
        lastName: "Rehrig",
        email: "KFrutos@amet.net",
        phone: "(369)575-7982",
        address: {
          streetAddress: "6291 Vitae Ave",
          city: "The Woodlands",
          state: "TX",
          zip: "95524",
        },
        description:
          "tellus convallis aenean tortor fringilla sed facilisis quis nec tellus elit tempor placerat id porttitor turpis sollicitudin amet sollicitudin quis et eget odio non odio tellus pretium molestie sed lacus dolor et",
      },
      {
        id: 625,
        firstName: "Abigail",
        lastName: "Woods",
        email: "SVyater@eros.ly",
        phone: "(990)850-4220",
        address: {
          streetAddress: "2914 Libero Ln",
          city: "Woodland Hills",
          state: "ID",
          zip: "58165",
        },
        description:
          "in sed at id sit consequat consequat velit lacus aliquam nunc consectetur risus pulvinar lacus nullam rutrum adipiscing lacus et amet molestie ipsum placerat donec nullam adipiscing sollicitudin etiam ac vitae amet",
      },
      {
        id: 11,
        firstName: "Shawn",
        lastName: "Judy",
        email: "ICullen@non.org",
        phone: "(244)708-9306",
        address: {
          streetAddress: "958 Dui St",
          city: "Holland",
          state: "HI",
          zip: "12622",
        },
        description:
          "aliquam et suspendisse ac odio porttitor ac ac sagittis rutrum dolor nec aliquam sit id vitae convallis tincidunt eros adipiscing tincidunt lacus pulvinar convallis vestibulum ac odio vestibulum elit dolor lacus fringilla",
      },
      {
        id: 603,
        firstName: "Russell",
        lastName: "Conk",
        email: "JKephart@morbi.gov",
        phone: "(861)565-7546",
        address: {
          streetAddress: "6294 Magna Ct",
          city: "Snellville",
          state: "MI",
          zip: "91413",
        },
        description:
          "aliquam augue sed odio nec mattis etiam eget ante pretium sed tincidunt consequat neque quis morbi amet mi eget nunc sit tellus vitae in suspendisse ipsum mi elit tellus lorem lacus sed",
      },
      {
        id: 659,
        firstName: "Rajae",
        lastName: "Cobb",
        email: "EOtto@dolor.com",
        phone: "(702)708-6216",
        address: {
          streetAddress: "9348 Nullam Ct",
          city: "Patterson",
          state: "AL",
          zip: "63367",
        },
        description:
          "et in vitae etiam risus aliquam magna lacus nullam sollicitudin risus hendrerit hendrerit pulvinar amet magna nec lorem morbi at mattis mattis sed sed tincidunt neque ac vitae ante facilisis ipsum sit",
      },
      {
        id: 32,
        firstName: "Erik",
        lastName: "Gibson",
        email: "AVrtis@scelerisque.io",
        phone: "(536)179-4455",
        address: {
          streetAddress: "2229 Ante St",
          city: "Greenville",
          state: "OR",
          zip: "85783",
        },
        description:
          "pulvinar elit mattis molestie et molestie magna tincidunt facilisis placerat hendrerit morbi ac tortor sollicitudin facilisis quis in placerat lacus sollicitudin sed ipsum placerat tellus amet scelerisque orci curabitur ac vitae lacus",
      },
      {
        id: 370,
        firstName: "Luping",
        lastName: "Wallace",
        email: "ABechtold@orci.ly",
        phone: "(479)671-6453",
        address: {
          streetAddress: "7315 Lorem Dr",
          city: "Englewood",
          state: "ME",
          zip: "28785",
        },
        description:
          "adipiscing nec at fringilla magna placerat tincidunt mattis suspendisse quis dolor nunc sed donec elit ipsum amet dolor orci nec nunc eros in magna sed placerat sit pulvinar ipsum nec facilisis facilisis",
      },
      {
        id: 858,
        firstName: "Francesca",
        lastName: "Grunert",
        email: "ATuttle@lectus.net",
        phone: "(908)363-8916",
        address: {
          streetAddress: "7174 Scelerisque St",
          city: "Wrentham",
          state: "LA",
          zip: "49918",
        },
        description:
          "vitae odio porta aliquam vestibulum non donec at porta odio augue elit facilisis nec mattis convallis vestibulum ac dolor vel lorem mi sollicitudin amet sollicitudin consequat ipsum risus dolor malesuada egestas lectus",
      },
      {
        id: 361,
        firstName: "Valarie",
        lastName: "Etheridge",
        email: "GAlunde@aliquam.ly",
        phone: "(185)917-0565",
        address: {
          streetAddress: "9258 At St",
          city: "Loves Park",
          state: "RI",
          zip: "26996",
        },
        description:
          "dolor elementum molestie convallis magna consequat aliquam sit in elementum non lacus sollicitudin sit orci tincidunt ipsum dolor at sollicitudin nec magna morbi molestie sollicitudin scelerisque in velit lacus rutrum amet curabitur",
      },
      {
        id: 433,
        firstName: "Bruce",
        lastName: "Haskin",
        email: "VKerkemeyer@at.org",
        phone: "(495)976-4765",
        address: {
          streetAddress: "7250 Ipsum Rd",
          city: "Tulsa",
          state: "LA",
          zip: "31296",
        },
        description:
          "consectetur mi vestibulum pretium mi et vestibulum amet consequat elit porta curabitur pulvinar vitae elementum vestibulum porta hendrerit malesuada lacus ipsum ante sed augue hendrerit aenean aenean velit vestibulum vestibulum sapien tortor",
      },
      {
        id: 361,
        firstName: "Ophelia",
        lastName: "Trim",
        email: "SMueske@vestibulum.com",
        phone: "(652)224-8174",
        address: {
          streetAddress: "766 Magna Ln",
          city: "Centreville",
          state: "HI",
          zip: "84159",
        },
        description:
          "etiam vestibulum ante vestibulum tortor convallis aliquam elementum at eros lacus dolor mattis curabitur ac velit vestibulum ac tempor tortor at sed porta scelerisque et tincidunt magna sed odio vitae nunc sapien",
      },
      {
        id: 503,
        firstName: "Sara",
        lastName: "Lenze",
        email: "DCabrera@nec.gov",
        phone: "(743)809-6822",
        address: {
          streetAddress: "4639 Nec Dr",
          city: "Evergreen",
          state: "AZ",
          zip: "36674",
        },
        description:
          "vestibulum pharetra dolor placerat dolor massa ipsum curabitur vel odio molestie at sed massa lacus sed amet placerat magna ante sit odio vitae consectetur at amet massa pharetra velit tellus sit dolor",
      },
      {
        id: 818,
        firstName: "Kola",
        lastName: "Bullock",
        email: "GCoopr@at.com",
        phone: "(317)751-8606",
        address: {
          streetAddress: "8401 Et Ct",
          city: "Cypress",
          state: "IL",
          zip: "97577",
        },
        description:
          "at consectetur dui sed sit eget neque aliquam tincidunt quis curabitur consequat pharetra vestibulum sit consectetur amet fringilla id tellus consectetur donec adipiscing at pulvinar at nec nunc aenean tincidunt fringilla ipsum",
      },
      {
        id: 715,
        firstName: "Ishna",
        lastName: "Bernstein",
        email: "THippert@aliquam.net",
        phone: "(758)274-3022",
        address: {
          streetAddress: "2326 Id Ct",
          city: "Idaho Falls",
          state: "TN",
          zip: "78190",
        },
        description:
          "massa at lorem pharetra orci neque vitae porta odio lectus pretium sollicitudin sit velit vitae elementum amet adipiscing odio etiam tortor magna mattis ipsum sit sed massa sollicitudin scelerisque sit vel et",
      },
      {
        id: 477,
        firstName: "Emil",
        lastName: "Debord",
        email: "PSchwier@neque.gov",
        phone: "(548)227-3515",
        address: {
          streetAddress: "6161 Suspendisse Ave",
          city: "Des Moines",
          state: "AZ",
          zip: "51320",
        },
        description:
          "pulvinar pulvinar magna lacus sollicitudin porta nunc mattis lacus malesuada morbi nunc pulvinar aenean amet etiam tincidunt lectus sollicitudin magna id pretium vitae ipsum turpis pharetra lorem aenean ipsum amet nec consectetur",
      },
      {
        id: 752,
        firstName: "Amber",
        lastName: "Plourde",
        email: "APick@pharetra.ly",
        phone: "(959)599-2347",
        address: {
          streetAddress: "425 Et Dr",
          city: "Loves Park",
          state: "MT",
          zip: "54300",
        },
        description:
          "eros aenean malesuada etiam pulvinar at tortor nec aliquam lacus convallis placerat tincidunt hendrerit orci consectetur et consectetur pretium magna vestibulum orci lectus sollicitudin non consectetur ipsum porttitor aenean sollicitudin sed tincidunt",
      },
      {
        id: 477,
        firstName: "Chanel",
        lastName: "Shafer",
        email: "LCarey@facilisis.gov",
        phone: "(417)753-1762",
        address: {
          streetAddress: "6847 Elementum St",
          city: "Seattle",
          state: "VT",
          zip: "84497",
        },
        description:
          "vestibulum sed at ipsum rutrum sed et at id magna consequat scelerisque velit lectus ac consectetur sapien fringilla libero augue mattis massa rutrum odio ac mattis lectus etiam curabitur vel in sollicitudin",
      },
      {
        id: 729,
        firstName: "Inho",
        lastName: "Salguero",
        email: "STabor@elit.com",
        phone: "(152)194-8001",
        address: {
          streetAddress: "5592 Risus Ct",
          city: "Springfield",
          state: "AR",
          zip: "45486",
        },
        description:
          "dolor vitae eros odio massa elementum elit pretium turpis nullam et ante tincidunt etiam orci velit sollicitudin lacus libero magna lorem sed consectetur aenean orci adipiscing neque et pretium massa vestibulum eget",
      },
      {
        id: 834,
        firstName: "Guadalupe",
        lastName: "Jarratt",
        email: "CPrimavera@aliquam.net",
        phone: "(677)505-1223",
        address: {
          streetAddress: "5886 Tempor Ct",
          city: "Lakewood",
          state: "NE",
          zip: "28617",
        },
        description:
          "lectus dolor nullam mattis pharetra rutrum orci vel at lacus tincidunt consectetur id consectetur ante tincidunt magna vel aliquam amet suspendisse tincidunt sagittis consectetur sit velit mattis lacus morbi porta tincidunt tortor",
      },
      {
        id: 507,
        firstName: "Mikel",
        lastName: "Turner",
        email: "GWall@aliquam.com",
        phone: "(199)279-9933",
        address: {
          streetAddress: "8317 Pulvinar Ln",
          city: "Atlanta",
          state: "AK",
          zip: "59568",
        },
        description:
          "at pretium in tincidunt ipsum porttitor sed lacus pulvinar vel pulvinar etiam scelerisque egestas ac suspendisse aliquam lorem curabitur et facilisis nunc aenean suspendisse lacus magna et nullam orci et sit in",
      },
      {
        id: 782,
        firstName: "Mosharraf",
        lastName: "Warner",
        email: "YIliatova@egestas.net",
        phone: "(725)331-8620",
        address: {
          streetAddress: "9114 Consequat Ave",
          city: "St. George",
          state: "OR",
          zip: "62964",
        },
        description:
          "at id ipsum dui etiam scelerisque quis ipsum facilisis nec porta aliquam ac aliquam tortor magna dolor lorem neque eros lacus suspendisse morbi dolor lacus aliquam magna nec elementum aenean molestie ac",
      },
      {
        id: 189,
        firstName: "Sharmistha",
        lastName: "Mckee",
        email: "MRovito@nec.ly",
        phone: "(801)655-6029",
        address: {
          streetAddress: "8936 Elementum St",
          city: "Sterling",
          state: "IL",
          zip: "19761",
        },
        description:
          "elementum morbi rutrum morbi turpis vitae vitae placerat placerat morbi sed nec vestibulum molestie morbi sollicitudin tincidunt sed nullam eget donec magna nunc massa consectetur mi porttitor at convallis lacus massa pharetra",
      },
      {
        id: 713,
        firstName: "Cary",
        lastName: "Stubbs",
        email: "SMendiola@lectus.io",
        phone: "(599)158-8055",
        address: {
          streetAddress: "3930 Tincidunt Ave",
          city: "Portland",
          state: "NJ",
          zip: "23391",
        },
        description:
          "odio sagittis odio placerat ac neque id sit curabitur vitae ante lacus porta lacus amet odio risus malesuada mi et et malesuada elit lacus turpis elit fringilla et neque egestas sapien rutrum",
      },
      {
        id: 283,
        firstName: "Russell",
        lastName: "Mahan",
        email: "ACurtis@sed.org",
        phone: "(738)920-6770",
        address: {
          streetAddress: "7713 Consectetur Ct",
          city: "Concord",
          state: "VT",
          zip: "79850",
        },
        description:
          "odio at sed lorem mi vitae rutrum morbi velit ante lectus in consequat turpis tortor consectetur vitae vitae vel etiam dolor augue sed porttitor pulvinar lorem at consequat libero nec aliquam aliquam",
      },
      {
        id: 606,
        firstName: "Joyce",
        lastName: "Kleb",
        email: "BScribner@donec.org",
        phone: "(244)133-1043",
        address: {
          streetAddress: "473 Pharetra Rd",
          city: "New Port Richey",
          state: "NJ",
          zip: "58973",
        },
        description:
          "pulvinar hendrerit curabitur massa sagittis magna mattis aliquam augue eros neque ante aliquam nec tempor at tortor placerat sollicitudin lacus molestie sit vitae nec quis amet egestas vitae risus et amet nullam",
      },
      {
        id: 267,
        firstName: "Karolis",
        lastName: "Nash",
        email: "MGalvez@nec.gov",
        phone: "(393)818-1314",
        address: {
          streetAddress: "7315 Ipsum Rd",
          city: "Fort Wayne",
          state: "NC",
          zip: "14348",
        },
        description:
          "eros tempor vitae nec id ac hendrerit dolor magna vel vitae eget tortor tellus dui sed sit sollicitudin ac curabitur sit vestibulum amet elit porta hendrerit massa massa sed molestie dui etiam",
      },
      {
        id: 590,
        firstName: "Derrick",
        lastName: "Kasprzak",
        email: "WLammers@sed.net",
        phone: "(377)148-6378",
        address: {
          streetAddress: "8442 Nullam Ct",
          city: "Salt Lake City",
          state: "IA",
          zip: "99827",
        },
        description:
          "etiam sit sit nec tortor nullam at placerat ipsum vitae sapien elementum ac ante fringilla et lorem rutrum tincidunt hendrerit pulvinar tortor pulvinar ac tincidunt id tellus nec vitae tincidunt lacus aliquam",
      },
      {
        id: 849,
        firstName: "Lois",
        lastName: "Hughes",
        email: "MSchlottman@porta.net",
        phone: "(885)172-1321",
        address: {
          streetAddress: "7041 Lorem St",
          city: "Wilder",
          state: "NC",
          zip: "23747",
        },
        description:
          "nullam magna quis porttitor mi sed magna donec donec porttitor etiam lorem egestas magna magna id at magna dolor scelerisque in id lorem tincidunt et adipiscing pharetra sed dolor tincidunt dui etiam",
      },
      {
        id: 608,
        firstName: "Teresa",
        lastName: "Tadeu",
        email: "WGreen@magna.gov",
        phone: "(520)280-6166",
        address: {
          streetAddress: "403 Mattis Ln",
          city: "Lees Summit",
          state: "DE",
          zip: "91775",
        },
        description:
          "amet nec porttitor mattis amet aliquam tincidunt mi lorem sagittis risus turpis placerat odio sed pharetra suspendisse vitae tellus orci sed libero scelerisque odio dolor dolor pulvinar vitae sit pulvinar donec magna",
      },
      {
        id: 825,
        firstName: "Sheng",
        lastName: "Morrow",
        email: "PBarrow@consequat.com",
        phone: "(534)913-3204",
        address: {
          streetAddress: "5501 Non Dr",
          city: "Selma",
          state: "NY",
          zip: "47411",
        },
        description:
          "pulvinar ac sapien magna placerat morbi pretium velit non nunc vel in lacus et et tincidunt et vitae sagittis augue porta pharetra nec et hendrerit risus morbi neque odio ac sit mattis",
      },
    ];


    for (let i = 0; i < data.length; i++) {
      createDataTable(data[i]);
    }
  
})

