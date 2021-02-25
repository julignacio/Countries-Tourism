//                     ```....-------....```
//                      `..----..``        ``..---..`
//                  `..-----.`                  ``.---.``
//                `.------.      `-:://///:.        `.---.`
//              .--------`     :sdddddddddddhy+.      `.----.
//            `--------.     .yddddddmmmddddddddy+.      .----`
//          `.--------.     /dmhhhhhhhhdmmmmddddddds-     `.---.`
//         `--------`     `smdhhhhhhhhhhhdmmmddddddddy:    `-----`
//        `--------`    .-hNNNNdhhhdhdhhhddmmdddddddddd:    `-----`
//       `---------     mMMmNMMMNmmNNMMNNmmdmmdddmmddddh`    ------`
//      `----------.    /NNdNmmNdmMmNNNNNMNNNNNddNNmdhdh`    .------`
//      .----------.    `NdddddhddMddmdmNNdhdmNNddmddhh-    .-------.
//     `------------     hhddhhhdddmdddmdhhhhdNMmddddy`    `---------`
//     .-----------.    `hmmNMNMNNNmhdhyhhhhhdMMNmddd-    `----------.
//     .-----------.    /dMNmddddmmNNMdhhhhhmNMMNmddd.    .----------.
//     .-----------.    /NMmmdddddhhdmNmdddmMMMMmmddo    `-----------.
//     .-----------.    .NMmNmmmdddddmNmmmmNMMMNmmd+     .-----------.
//     .------------`    sMNMMMMNmddNNNMMMMMMMMMNm/     .------------.
//     `------------.    `NMMMMMNNMNMMMMMMMMMMmmNo    `.-------------`
//      .------------`    oMMMMMMMMMMMMMMMMMmmdd:     `...----------.
//      `-----------.`     sNMMMMMMMMMMMMMNmdddh.          ``..-----`
//       `-------.``        omNMMMMMMNNNNNmdddddyoo/:`          `..`
//        .--.``       .//ohdmddmNmmddmmmmddddhyoosyyNMNdy+-
//         `       `/sdysoydddhhhddmddddhhhhhhsoosoydMMMMMMMNh+-
//              :odMMMyosoyddhhhhhhhhhhhyhhhyso+sssmMMMMMMMMMMMN-
//            :NMMMMMMsssssyhhhhhhhhhhyhyyssoo+osdMMMMMMMMMMMMs`
//             .yMMMMMmsssoooosyyhhhyyssoooossosNMMMMMMMMMMMy.
//               .sNMMMMmdsoo++oooooo++++oosyhmMMMMMMMMMMNs.
//                  :yNMMMMNmhysssssossyhmNMMMMMMMMMMMNy:
//                     -ohNMMMMMMMMMMNNNNNMMMMMMMMNho-
//                         .:+shmNMMMMMMMMMNmhs+:.

const server = require("./src/app.js");
const { conn, Country } = require("./src/db.js");
const axios = require("axios");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
