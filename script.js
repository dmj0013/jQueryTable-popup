
// $(document).ready(function() {
//   $("#tablemain").DataTable();
//   $("#tablemain tbody tr").click(function() {
//     $(this).addClass('selected').siblings().removeClass('selected');
//     var value = $(this).find('td:first').html();
//     $( "#dialog" ).dialog();;
//   });
// });

$(document).ready(function () {
  var table = $('#tablemain').DataTable();

  $('#tablemain tbody').on('click', 'tr', function () {
      if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
          $(".content").toggle();
      } else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
          $(".content").toggle(true);
      }
      let rowData = table.row(this).data()
      $("p").html(function() {
        return "This row has: " + rowData;
      });
  });

  $('#button').click(function () {
      table.row('.selected').remove().draw(false);
  });
});
function togglePopup() {
    $(".content").toggle();
}
// var table = $('table'); 


// $('#facility_header, #confidence')
//   .wrapInner('<span title="sort this column"/>')
//   .each(function() {

//     var th = $(this),
//       thIndex = th.index(),
//       inverse = false;

//     th.click(function() {

//       table.find('td').filter(function() {

//         return $(this).index() === thIndex;

//       }).sortElements(function(a, b) {

//         return $.text([a]) > $.text([b]) ?
//           inverse ? -1 : 1 :
//           inverse ? 1 : -1;

//       }, function() {

//         // parentNode is the element we want to move
//         return this.parentNode;

//       });

//       inverse = !inverse;

//     });

//   });