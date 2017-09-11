process.stdin.setEncoding('utf-8');

/*
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
    }
});

*/


//   node scripts.js


process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !=== null) {
        var instruction = input.toString().trim();
        switch {
            case (instruction === '/exit'):
                console.log(process.env);
                process.stdout.write('Quitting app!\n'); 
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n'); 
        }
    }
});

