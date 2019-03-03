// Try edit msg

var input = document.getElementById("myFile");
var output = document.getElementById("output");
let in_File;

if (input) {

    input.addEventListener("change", function () {
        if (this.files && this.files[0]) {
            var myFile = this.files[0];
            console.log(myFile);
            var reader = new FileReader();
            console.log(reader);

            reader.addEventListener('load', function (e) {
                output.textContent = e.target.result;
                in_File = output.textContent;
                console.log(in_File);

                for (let i = 0; i < in_File.length; i++) {
                    let n = in_File[0];
                    if (in_File[i] === 'H') {
                        let tags = in_File[i + 2];
                        let number = in_File[i + 2];
                        console.log(tags, number);
                    }
                    if (in_File[i] === 'V') {
                        console.log(in_File[i + 2]);
                    }
                }
            });
            console.log(in_File);
            reader.readAsBinaryString(myFile);
        }
    });
}
