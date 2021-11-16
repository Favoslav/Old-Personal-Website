const seq1t1 = 'Working on'
const seq1t2 = 'Working on.'
const seq1t3 = 'Working on..'
const seq1t4 = 'Working on...'

var seq1 = [`${seq1t1}`, `${seq1t2}`, `${seq1t3}`, `${seq1t4}`];

        textSequence(0);
        function textSequence(i) {

            if (seq1.length > i) {
                setTimeout(function() {
                    document.getElementById("seq1").innerHTML = seq1[i];
                    textSequence(++i);
                }, 800);

            } else if (seq1.length == i) 
                textSequence(0);
            }
    