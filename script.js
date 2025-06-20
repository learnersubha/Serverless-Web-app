// ✅ Add your API endpoint
var API_ENDPOINT = "https://re2jc276qb.execute-api.eu-west-1.amazonaws.com/prod";

// ✅ POST: Save student data
document.getElementById("savestudent").onclick = function () {
    var inputData = {
        "studentid": $('#studentid').val(),
        "name": $('#name').val(),
        "class": $('#class').val(),
        "age": $('#age').val()
    };

    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("studentSaved").innerHTML = "✅ Student Data Saved!";
        },
        error: function (xhr, status, error) {
            alert("❌ Error saving student data: " + xhr.responseText);
        }
    });
};

// ✅ GET: Retrieve all students
document.getElementById("getstudents").onclick = function () {
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#studentTable tr').slice(1).remove(); // Remove all but the header row
            jQuery.each(response, function (i, data) {
                $("#studentTable").append("<tr> \
                    <td>" + data['studentid'] + "</td> \
                    <td>" + data['name'] + "</td> \
                    <td>" + data['class'] + "</td> \
                    <td>" + data['age'] + "</td> \
                </tr>");
            });
        },
        error: function (xhr, status, error) {
            alert("❌ Error retrieving student data: " + xhr.responseText);
        }
    });
};
