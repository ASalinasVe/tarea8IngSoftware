let score1 = 0;
let score2 =0;

export function getScore(p1, p2) {
    if (p1 == 0 && p2 == 0) {
        return "Love All";
    }   
    if (p1 == 1 && p2 == 0) {
        return "Fifteen - Love";
    }
}

// export function getScore(p1,p2) {
//     score1 = 0;
//     score2 = 0;
//     if (score1 == score2 && (score1, score2 != 40)) //para que no entre aqui si estan en deuce
//     {
//         if (p1 == 1 ){
//             if (score1 == 0){
//                 score1 += 15;
//             }else if (score1 == 30){
//                 score1 += 10;
//             }else if(score1 == 40){
//                 score1 += "game";
//             }
//         }else{
//             if (score2 == 0){
//                 score2 += 15;
//             }else if (score2 == 30){
//                 score2 += 10;
//             }else if(score2 == 40){
//                 score2 += "game";
//             }
//         }
//     }else{
//         if (score1 == 15 && score2 == 0){
//             score1 += 15;
//     }
//     return (score1, score2);
// }


export function increaseScore(player) {
    if (player == 1){
        if (score1 == 0 && score1 ){
            score1 += 15;
        }
    }else{
        score2 += 15;
    } 
}
