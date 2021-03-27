var AnimeNames = [];
ListedAnime = [];
function ListingAnime(Name) {
    // The inserted Name is made to pushed to namae Array .
    let namae = [];
    namae.push(`${Name}`);
    // variable Arrays made for grouping on basis of Alphabets
    var NoN = []; ALtr = []; BLtr = []; CLtr = []; DLtr = []; ELtr = []; FLtr = []; GLtr = []; HLtr = []; ILtr = []; JLtr = []; KLtr = []; LLtr = []; MLtr = [];
    NLtr = []; OLtr = []; PLtr = []; QLtr = []; RLtr = []; SLtr = []; TLtr = []; ULtr = []; VLtr = []; WLtr = []; XLtr = []; YLtr = []; ZLtr = [];
    // letter taken as first letter of the inserted Name
    // function
    for (let component of namae) {
        let letter = Name.toString()[0];

        if (letter.isNaN) {
            NoN.push(component.toString());
        }
        while (!letter.isNaN) {

            if (letter.startsWith("A")) {
                ALtr.push(component.toString());
            }

            else if (letter.startsWith("B")) {
                BLtr.push(component.toString());
            }

            else if (letter.startsWith("C")) {
                CLtr.push(component.toString());
            }

            else if (letter.startsWith("D")) {
                DLtr.push(component.toString());
            }

            else if (letter.startsWith("E")) {
                ELtr.push(component.toString());
            }

            else if (letter.startsWith("F")) {
                FLtr.push(component.toString());
            }

            else if (letter.startsWith("G")) {
                GLtr.push(component.toString());
            }

            else if (letter.startsWith("H")) {
                HLtr.push(component.toString());
            }

            else if (letter.startsWith("I")) {
                ILtr.push(component.toString());
            }

            else if (letter.startsWith("J")) {
                JLtr.push(component.toString());
            }

            else if (letter.startsWith("K")) {
                KLtr.push(component.toString());
            }

            else if (letter.startsWith("L")) {
                LLtr.push(component.toString());
            }

            else if (letter.startsWith("M")) {
                MLtr.push(component.toString());
            }

            else if (letter.startsWith("N")) {
                NLtr.push(component.toString());
            }

            else if (letter.startsWith("O")) {
                OLtr.push(component.toString());
            }

            else if (letter.startsWith("P")) {
                PLtr.push(component.toString());
            }

            else if (letter.startsWith("Q")) {
                QLtr.push(component.toString());
            }

            else if (letter.startsWith("R")) {
                RLtr.push(component.toString());
            }

            else if (letter.startsWith("S")) {
                SLtr.push(component.toString());
            }

            else if (letter.startsWith("T")) {
                TLtr.push(component.toString());
            }

            else if (letter.startsWith("U")) {
                ULtr.push(component.toString());
            }

            else if (letter.startsWith("V")) {
                VLtr.push(component.toString());
            }

            else if (letter.startsWith("W")) {
                WLtr.push(component.toString());
            }

            else if (letter.startsWith("X")) {
                XLtr.push(component.toString());
            }

            else if (letter.startsWith("Y")) {
                YLtr.push(component.toString());
            }

            else if (letter.startsWith("Z")) {
                ZLtr.push(component.toString());
            }
            else {
                return console.error(`${Name} is not avalid input,/n please use Capital First letter for ${Name}`);
            }
        }
    };
    console.log(component);
};

/* crap */
